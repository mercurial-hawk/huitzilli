import { useState } from 'react'
import Reveal from '../hooks/Reveal.jsx'
import {
  CALENDLY_URL,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID_RESULTS,
  EMAILJS_TEMPLATE_ID_LEAD,
  EMAILJS_PUBLIC_KEY,
} from '../site-config.js'

const CATEGORIES = [
  {
    title: 'Preparación para la reubicación',
    statements: [
      'Los empleados que se reubican internacionalmente reciben preparación cultural antes de partir, no solo apoyo logístico.',
      'Contamos con una forma estructurada de apoyar a empleados y familias durante sus primeros meses en un nuevo país.',
    ],
  },
  {
    title: 'Preparación del liderazgo',
    statements: [
      'Nuestros líderes adaptan su estilo de gestión según el contexto cultural del equipo que dirigen.',
      'Los líderes de nuestra organización pueden reconocer cuándo el silencio en una reunión refleja jerarquía o cultura, y no acuerdo.',
    ],
  },
  {
    title: 'Comunicación y retroalimentación',
    statements: [
      "La retroalimentación se entiende de manera consistente en nuestros equipos, sin importar el trasfondo cultural de sus integrantes.",
      'Tenemos un enfoque compartido para dar y recibir retroalimentación entre distintos estilos de comunicación.',
    ],
  },
  {
    title: 'Participación',
    statements: [
      'Todos los integrantes del equipo, sin importar su trasfondo, participan activamente en reuniones y toma de decisiones.',
      'Notamos y abordamos cuando ciertas voces están consistentemente subrepresentadas en las discusiones.',
    ],
  },
  {
    title: 'Conflicto',
    statements: [
      'Los desacuerdos se resuelven de manera constructiva, incluso cuando las partes tienen enfoques culturales distintos frente al conflicto.',
      'Contamos con un proceso de mediación de conflictos que toma en cuenta las diferencias culturales en el estilo de comunicación.',
    ],
  },
  {
    title: 'Seguimiento y apoyo',
    statements: [
      'Damos seguimiento a empleados reubicados o a equipos multiculturales recién formados más allá de las primeras semanas.',
      'Existe un siguiente paso claro (capacitación, coaching o consultoría) cuando un equipo identifica un desafío cultural.',
    ],
  },
]

const SCALE = [
  { value: 1, label: 'Totalmente en desacuerdo' },
  { value: 2, label: 'En desacuerdo' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'De acuerdo' },
  { value: 5, label: 'Totalmente de acuerdo' },
]

// Band keys stay in English — they drive the .quiz-band--* CSS classes shared with the EN quiz.
// BAND_LABELS_ES maps each key to the Spanish text actually shown to the user.
const BAND_LABELS_ES = {
  'needs-attention': 'Necesita atención',
  developing: 'En desarrollo',
  strong: 'Sólido',
  'early-stage': 'Etapa inicial',
  advanced: 'Avanzado',
}

function categoryBandKey(score) {
  if (score <= 4) return 'needs-attention'
  if (score <= 7) return 'developing'
  return 'strong'
}

function totalBandKey(score) {
  if (score <= 28) return 'early-stage'
  if (score <= 46) return 'developing'
  return 'advanced'
}

async function sendEmail(templateId, templateParams) {
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: templateId,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: templateParams,
    }),
  })
  if (!res.ok) throw new Error('EmailJS request failed')
}

function ScaleInput({ catIndex, stIndex, value, onChange }) {
  const name = `c${catIndex}s${stIndex}`
  return (
    <div className="quiz-scale" role="radiogroup" aria-label={`Respuesta ${stIndex + 1}`}>
      <div className="quiz-scale__row">
        {SCALE.map((opt) => (
          <label className="quiz-scale__option" key={opt.value}>
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              aria-label={opt.label}
            />
            <span>{opt.value}</span>
          </label>
        ))}
      </div>
      <div className="quiz-scale__endpoints">
        <span>Totalmente en desacuerdo</span>
        <span>Totalmente de acuerdo</span>
      </div>
    </div>
  )
}

export default function ReadinessCheckEs() {
  const [step, setStep] = useState(-1) // -1 intro, 0-5 categorías, 6 contacto, 7 resultados
  const [answers, setAnswers] = useState({})
  const [contact, setContact] = useState({ name: '', email: '', organization: '' })
  const [emailStatus, setEmailStatus] = useState('idle') // idle | sending | sent | error

  const setAnswer = (catIndex, stIndex, value) => {
    setAnswers((prev) => ({ ...prev, [`${catIndex}.${stIndex}`]: value }))
  }

  const isCategoryComplete = (catIndex) =>
    answers[`${catIndex}.0`] != null && answers[`${catIndex}.1`] != null

  const results = CATEGORIES.map((cat, i) => {
    const score = (answers[`${i}.0`] ?? 0) + (answers[`${i}.1`] ?? 0)
    return { title: cat.title, score, bandKey: categoryBandKey(score) }
  })
  const total = results.reduce((sum, r) => sum + r.score, 0)
  const totalKey = totalBandKey(total)

  const handleContactChange = (field) => (e) =>
    setContact((prev) => ({ ...prev, [field]: e.target.value }))

  const handleFinalSubmit = (e) => {
    e.preventDefault()
    setStep(7)
    setEmailStatus('sending')

    const templateParams = {
      to_name: contact.name,
      to_email: contact.email,
      organization: contact.organization,
      total_score: total,
      total_band: BAND_LABELS_ES[totalKey],
      category_summary: results.map((r) => `${r.title}: ${r.score}/10 (${BAND_LABELS_ES[r.bandKey]})`).join('\n'),
      ...results.reduce((acc, r, i) => {
        acc[`c${i + 1}_title`] = r.title
        acc[`c${i + 1}_score`] = r.score
        acc[`c${i + 1}_band`] = BAND_LABELS_ES[r.bandKey]
        return acc
      }, {}),
    }

    Promise.all([
      sendEmail(EMAILJS_TEMPLATE_ID_RESULTS, templateParams),
      sendEmail(EMAILJS_TEMPLATE_ID_LEAD, templateParams),
    ])
      .then(() => setEmailStatus('sent'))
      .catch(() => setEmailStatus('error'))
  }

  const restart = () => {
    setStep(-1)
    setAnswers({})
    setContact({ name: '', email: '', organization: '' })
    setEmailStatus('idle')
  }

  return (
    <section className="section" id="readiness" aria-labelledby="readiness-title">
      <div className="wrap">

        {step === -1 && (
          <Reveal className="quiz-intro">
            <p className="eyebrow">Un siguiente paso de bajo compromiso</p>
            <h2 className="h2" id="readiness-title">¿Qué tan preparado está tu equipo para la <em>colaboración global</em>?</h2>
            <p className="lead" style={{ marginTop: '1.4rem' }}>
              Una breve autoevaluación en seis áreas — útil por sí sola, y como contexto para una
              primera conversación con Alejandra.
            </p>
            <ul className="pillars">
              {CATEGORIES.map((c) => <li key={c.title}>{c.title}</li>)}
            </ul>
            <p style={{ color: 'var(--muted)', marginTop: '1.4rem', maxWidth: '52ch' }}>
              Toma unos 5 minutos. Los resultados no se califican públicamente ni se comparan
              entre organizaciones — los verás en pantalla de inmediato, y te enviaremos una
              copia a tu correo.
            </p>
            <button
              className="btn btn--primary"
              style={{ marginTop: '1.4rem' }}
              onClick={() => setStep(0)}
            >
              Realizar la Autoevaluación <span className="arrow" aria-hidden="true">→</span>
            </button>
          </Reveal>
        )}

        {step >= 0 && step <= 6 && (
          <Reveal className="quiz-card">
            <div className="quiz-progress">
              <div className="quiz-progress__bar">
                <span style={{ width: `${((step + 1) / 7) * 100}%` }} />
              </div>
              <p className="quiz-progress__label">
                {step < 6 ? `Paso ${step + 1} de 6` : 'Casi terminamos'}
              </p>
            </div>

            {step < 6 ? (
              <div className="quiz-step">
                <h3>{CATEGORIES[step].title}</h3>
                {CATEGORIES[step].statements.map((statement, stIndex) => (
                  <div className="quiz-statement" key={stIndex}>
                    <p>{statement}</p>
                    <ScaleInput
                      catIndex={step}
                      stIndex={stIndex}
                      value={answers[`${step}.${stIndex}`] ?? null}
                      onChange={(value) => setAnswer(step, stIndex, value)}
                    />
                  </div>
                ))}
                <div className="quiz-nav">
                  <button className="btn btn--ghost" onClick={() => setStep(step - 1)} disabled={step === 0}>
                    Atrás
                  </button>
                  <button
                    className="btn btn--primary"
                    onClick={() => setStep(step + 1)}
                    disabled={!isCategoryComplete(step)}
                  >
                    Siguiente <span className="arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            ) : (
              <form className="quiz-step contact-form" onSubmit={handleFinalSubmit}>
                <h3>Ya casi — ¿a dónde enviamos tus resultados?</h3>
                <div className="contact-form__field">
                  <label htmlFor="quiz-name-es">Nombre</label>
                  <input id="quiz-name-es" type="text" required value={contact.name} onChange={handleContactChange('name')} autoComplete="name" />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="quiz-email-es">Correo electrónico</label>
                  <input id="quiz-email-es" type="email" required value={contact.email} onChange={handleContactChange('email')} autoComplete="email" />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="quiz-org-es">Organización</label>
                  <input id="quiz-org-es" type="text" required value={contact.organization} onChange={handleContactChange('organization')} autoComplete="organization" />
                </div>
                <div className="quiz-nav">
                  <button type="button" className="btn btn--ghost" onClick={() => setStep(5)}>Atrás</button>
                  <button className="btn btn--primary" type="submit">Ver mis resultados</button>
                </div>
              </form>
            )}
          </Reveal>
        )}

        {step === 7 && (
          <Reveal className="quiz-results">
            <p className="eyebrow">Tus resultados</p>
            <h2 className="h2">Así está la situación hoy.</h2>

            <div className="quiz-results__total">
              <strong>{total}<span>/60</span></strong>
              <span className={`quiz-band quiz-band--${totalKey}`}>
                {BAND_LABELS_ES[totalKey]}
              </span>
            </div>

            <div className="quiz-results__grid">
              {results.map((r) => (
                <div className="quiz-results__row" key={r.title}>
                  <span>{r.title}</span>
                  <span>{r.score}/10</span>
                  <span className={`quiz-band quiz-band--${r.bandKey}`}>{BAND_LABELS_ES[r.bandKey]}</span>
                </div>
              ))}
            </div>

            <p style={{ color: 'var(--muted)', marginTop: '1.6rem', maxWidth: '60ch' }}>
              Este es un punto de partida para una conversación, no un veredicto — y no predice
              resultados de negocio. Un área "Necesita atención" hoy es simplemente el lugar más
              claro para comenzar.
            </p>

            <p className="small" style={{ marginTop: '.8rem' }}>
              {emailStatus === 'sending' && 'Enviando una copia de tus resultados a tu correo…'}
              {emailStatus === 'sent' && 'Se envió una copia de tus resultados a tu correo.'}
              {emailStatus === 'error' && 'No pudimos enviar tus resultados por correo automáticamente — el resumen de arriba sigue siendo tuyo.'}
            </p>

            <div className="quiz-nav" style={{ justifyContent: 'flex-start', gap: '1rem' }}>
              <a className="btn btn--primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Habla sobre estos resultados — Agenda una Consulta
              </a>
              <button className="btn btn--ghost" type="button" onClick={() => window.print()}>
                Descargar Resumen
              </button>
            </div>

            <p className="small" style={{ marginTop: '1.4rem' }}>
              <button className="link" type="button" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={restart}>
                Repetir la autoevaluación
              </button>
            </p>
          </Reveal>
        )}

      </div>
    </section>
  )
}
