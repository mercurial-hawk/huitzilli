import Reveal from '../hooks/Reveal.jsx'

const STAGES = [
  { n: '01', title: 'Make cultural expectations visible', text: 'Name the unspoken assumptions already shaping how the team works.' },
  { n: '02', title: 'Create a shared language', text: 'Give the team words for differences they have only felt until now.' },
  { n: '03', title: 'Practice collaboration scenarios', text: 'Rehearse the real situations — feedback, disagreement, decisions — in a safe room.' },
  { n: '04', title: 'Build sustainable agreements', text: 'Turn what was practiced into working norms the team keeps after Huitzilli leaves.' },
]

const PILLARS = ['Peace Education', 'Safe dialogue', 'Cultural immersion', 'Experiential learning', 'Customized curricula', 'Humanism & creativity']

export default function Approach() {
  return (
    <section className="section section--deep" id="approach" aria-labelledby="approach-title">
      <div className="wrap approach__grid">

        <Reveal className="approach__media">
          <div className="imgph">
            <p className="imgph__note">[Photo placeholder: a facilitator listening. Close, quiet, attentive. Or a close-up cultural detail — hands, textile, a shared table.]</p>
          </div>
        </Reveal>

        <Reveal>
          <p className="eyebrow">Our method</p>
          <h2 className="h2" id="approach-title">Learning that begins with <em>listening</em>.</h2>
          <p className="lead" style={{ marginTop: '1rem' }}>Four stages, always in this order.</p>

          <ol className="process4">
            {STAGES.map((s) => (
              <li className="process4__item" key={s.n}>
                <span className="process4__dot">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          <ul className="pillars">
            {PILLARS.map((p) => <li key={p}>{p}</li>)}
          </ul>

          <div className="compass">
            <h4>The Cultural Compass</h4>
            <p>Huitzilli's workshop framework, used to orient teams before they begin working
               across their differences.</p>
            <span className="ph">Confirm framework name, definition and stages before publishing</span>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
