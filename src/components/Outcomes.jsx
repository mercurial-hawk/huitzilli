import Reveal from '../hooks/Reveal.jsx'

const ITEMS = [
  'Stronger trust across multicultural teams',
  'More confident participation from more people',
  'Communication that travels across cultural styles',
  'Smoother adaptation during international relocation',
  'Greater cultural awareness among leaders',
  'More constructive approaches to disagreement and conflict',
]

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7.4 5 11.4 13 2.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default function Outcomes() {
  return (
    <section className="section" aria-labelledby="out-title">
      <div className="wrap outcomes__grid">

        <Reveal>
          <p className="eyebrow">Outcomes</p>
          <h2 className="h2" id="out-title">Human-centered learning with organizational <em>impact</em>.</h2>
          <p className="lead" style={{ marginTop: '1.5rem' }}>
            Cultural learning does not produce a certificate. It produces a team that works
            differently the following Monday.
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
