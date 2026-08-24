import Reveal from '../hooks/Reveal.jsx'

const ITEMS = [
  'Mayor confianza entre equipos multiculturales',
  'Participación más segura de más personas',
  'Comunicación que trasciende los distintos estilos culturales',
  'Adaptación más fluida durante una reubicación internacional',
  'Mayor conciencia cultural entre los líderes',
  'Enfoques más constructivos frente al desacuerdo y el conflicto',
]

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7.4 5 11.4 13 2.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default function OutcomesEs() {
  return (
    <section className="section" aria-labelledby="out-title">
      <div className="wrap outcomes__grid">

        <Reveal>
          <p className="eyebrow">Resultados</p>
          <h2 className="h2" id="out-title">Aprendizaje centrado en las personas con impacto <em>organizacional</em>.</h2>
          <p className="lead" style={{ marginTop: '1.5rem' }}>
            El aprendizaje cultural no produce un certificado. Produce un equipo que trabaja
            distinto el lunes siguiente.
          </p>
        </Reveal>

        <Reveal className="outcomes__list-wrap">
          <ul className="outcomes__list">
            {ITEMS.map((item) => (
              <li key={item}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  )
}
