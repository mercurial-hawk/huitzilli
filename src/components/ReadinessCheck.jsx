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
    title: 'Relocation preparation',
    statements: [
      'Employees relocating internationally receive cultural preparation before departure, not just logistical support.',
      "We have a structured way to support employees and families during their first months in a new country.",
    ],
  },
  {
    title: 'Leadership readiness',
    statements: [
      "Our leaders adapt their management style depending on the cultural context of the team they're leading.",
      'Leaders in our organization can recognize when silence in a meeting reflects hierarchy or culture rather than agreement.',
    ],
  },
  {
    title: 'Communication & feedback',
    statements: [
      "Feedback is understood consistently across our teams, regardless of team members' cultural backgrounds.",
      'We have a shared approach for giving and receiving feedback across different communication styles.',
    ],
  },
  {
    title: 'Participation',
    statements: [
      'All team members, regardless of background, participate actively in meetings and decision-making.',
      'We notice and address when certain voices are consistently underrepresented in discussions.',
    ],
  },
  {
    title: 'Conflict',
    statements: [
      'Disagreements are resolved constructively, even when parties have different cultural approaches to conflict.',
      'We have a process for mediating conflict that accounts for cultural differences in communication style.',
    ],
  },
  {
    title: 'Follow-up support',
    statements: [
      'We check in with relocated employees or newly formed multicultural teams beyond the first few weeks.',
      "There's a clear next step (training, coaching, or consulting) when a team identifies a cultural challenge.",
    ],
  },
]

const SCALE = [
  { value: 1, label: 'Strongly disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly agree' },
]

function categoryBand(score) {
  if (score <= 4) return 'Needs attention'
  if (score <= 7) return 'Developing'
  return 'Strong'
}

function totalBand(score) {
  if (score <= 28) return 'Early stage'
  if (score <= 46) return 'Developing'
  return 'Advanced'
}

// EmailJS REST endpoint — no SDK dependency, same fetch-based pattern as Contact.jsx / Web3Forms.
// Both EMAILJS_TEMPLATE_ID_RESULTS and EMAILJS_TEMPLATE_ID_LEAD receive the same template_params;
// build each template in the EmailJS dashboard using whichever of these merge fields it needs:
//   to_name, to_email, organization,
//   total_score, total_band,
//   category_summary        — plain-text block, one "Title: score/10 (Band)" line per category
//   c1_title, c1_score, c1_band  ...  c6_title, c6_score, c6_band
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
    <div className="quiz-scale" role="radiogroup" aria-label={`Response ${stIndex + 1}`}>
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
        <span>Strongly disagree</span>
        <span>Strongly agree</span>
      </div>
    </div>
  )
}

export default function ReadinessCheck() {
  const [step, setStep] = useState(-1) // -1 intro, 0-5 categories, 6 contact, 7 results
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
    return { title: cat.title, score, band: categoryBand(score) }
  })
  const total = results.reduce((sum, r) => sum + r.score, 0)

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
      total_band: totalBand(total),
      category_summary: results.map((r) => `${r.title}: ${r.score}/10 (${r.band})`).join('\n'),
      ...results.reduce((acc, r, i) => {
        acc[`c${i + 1}_title`] = r.title
        acc[`c${i + 1}_score`] = r.score
        acc[`c${i + 1}_band`] = r.band
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
            <p className="eyebrow">A lower-commitment next step</p>
            <h2 className="h2" id="readiness-title">How ready is your team for <em>global collaboration</em>?</h2>
            <p className="lead" style={{ marginTop: '1.4rem' }}>
              A short self-assessment across six areas — useful on its own, and as context for a
              first conversation with Alejandra.
            </p>
            <ul className="pillars">
              {CATEGORIES.map((c) => <li key={c.title}>{c.title}</li>)}
            </ul>
            <p style={{ color: 'var(--muted)', marginTop: '1.4rem', maxWidth: '52ch' }}>
              Takes about 5 minutes. Results are not scored publicly or compared across
              organizations — you'll see them on screen right away, and a copy is sent to your
              email.
            </p>
            <button
              className="btn btn--primary"
              style={{ marginTop: '1.4rem' }}
              onClick={() => setStep(0)}
            >
              Take the Readiness Check <span className="arrow" aria-hidden="true">→</span>
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
                {step < 6 ? `Step ${step + 1} of 6` : 'Almost done'}
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
                    Back
                  </button>
                  <button
                    className="btn btn--primary"
                    onClick={() => setStep(step + 1)}
                    disabled={!isCategoryComplete(step)}
                  >
                    Next <span className="arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            ) : (
              <form className="quiz-step contact-form" onSubmit={handleFinalSubmit}>
                <h3>Almost there — where should we send your results?</h3>
                <div className="contact-form__field">
                  <label htmlFor="quiz-name">Name</label>
                  <input id="quiz-name" type="text" required value={contact.name} onChange={handleContactChange('name')} autoComplete="name" />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="quiz-email">Email</label>
                  <input id="quiz-email" type="email" required value={contact.email} onChange={handleContactChange('email')} autoComplete="email" />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="quiz-org">Organization</label>
                  <input id="quiz-org" type="text" required value={contact.organization} onChange={handleContactChange('organization')} autoComplete="organization" />
                </div>
                <div className="quiz-nav">
                  <button type="button" className="btn btn--ghost" onClick={() => setStep(5)}>Back</button>
                  <button className="btn btn--primary" type="submit">See my results</button>
                </div>
              </form>
            )}
          </Reveal>
        )}

        {step === 7 && (
          <Reveal className="quiz-results">
            <p className="eyebrow">Your results</p>
            <h2 className="h2">Here's where things stand today.</h2>

            <div className="quiz-results__total">
              <strong>{total}<span>/60</span></strong>
              <span className={`quiz-band quiz-band--${totalBand(total).toLowerCase().replace(' ', '-')}`}>
                {totalBand(total)}
              </span>
            </div>

            <div className="quiz-results__grid">
              {results.map((r) => (
                <div className="quiz-results__row" key={r.title}>
                  <span>{r.title}</span>
                  <span>{r.score}/10</span>
                  <span className={`quiz-band quiz-band--${r.band.toLowerCase().replace(' ', '-')}`}>{r.band}</span>
                </div>
              ))}
            </div>

            <p style={{ color: 'var(--muted)', marginTop: '1.6rem', maxWidth: '60ch' }}>
              This is a starting point for a conversation, not a verdict — and it doesn't predict
              business outcomes. A "Needs attention" area today is simply the clearest place to
              begin.
            </p>

            <p className="small" style={{ marginTop: '.8rem' }}>
              {emailStatus === 'sending' && 'Sending a copy of your results to your email…'}
              {emailStatus === 'sent' && 'A copy of your results has been sent to your email.'}
              {emailStatus === 'error' && "We couldn't email your results automatically — the summary above is still yours to keep."}
            </p>

            <div className="quiz-nav" style={{ justifyContent: 'flex-start', gap: '1rem' }}>
              <a className="btn btn--primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Discuss these results — Book a Consultation
              </a>
              <button className="btn btn--ghost" type="button" onClick={() => window.print()}>
                Download Summary
              </button>
            </div>

            <p className="small" style={{ marginTop: '1.4rem' }}>
              <button className="link" type="button" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={restart}>
                Retake the check
              </button>
            </p>
          </Reveal>
        )}

      </div>
    </section>
  )
}
