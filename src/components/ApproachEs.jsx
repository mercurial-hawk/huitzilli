import Reveal from '../hooks/Reveal.jsx'
import approachPhoto from '../assets/pexels-thirdman-7653771.jpg'

const STAGES = [
  { n: '01', title: 'Hacer visibles las expectativas culturales', text: 'Nombrar las suposiciones no dichas que ya están moldeando cómo trabaja el equipo.' },
  { n: '02', title: 'Crear un lenguaje compartido', text: 'Dar al equipo palabras para diferencias que hasta ahora solo habían sentido.' },
  { n: '03', title: 'Practicar escenarios de colaboración', text: 'Ensayar las situaciones reales — retroalimentación, desacuerdo, decisiones — en un espacio seguro.' },
  { n: '04', title: 'Construir acuerdos sostenibles', text: 'Convertir lo practicado en normas de trabajo que el equipo conserva después de que Huitzilli se va.' },
]

const PILLARS = ['Educación para la Paz', 'Diálogo seguro', 'Inmersión cultural', 'Aprendizaje experiencial', 'Planes de estudio personalizados', 'Humanismo y creatividad']

export default function ApproachEs() {
  return (
    <section className="section section--deep" id="approach" aria-labelledby="approach-title">
      <div className="wrap approach__grid">

        <Reveal className="approach__media">
          <div className="imgph">
            <img src={approachPhoto} alt="Una facilitadora escuchando atentamente durante una sesión." />
          </div>
        </Reveal>

        <Reveal>
          <p className="eyebrow">Nuestro método</p>
          <h2 className="h2" id="approach-title">Un aprendizaje que comienza con la <em>escucha</em>.</h2>
          <p className="lead" style={{ marginTop: '1rem' }}>Cuatro etapas, siempre en este orden.</p>

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
