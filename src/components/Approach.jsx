import Reveal from '../hooks/Reveal.jsx'
import approachPhoto from '../assets/pexels-thirdman-7653771.jpg'

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
            <img src={approachPhoto} alt="A facilitator listening closely during a session." />
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
        </Reveal>

      </div>
    </section>
  )
}
