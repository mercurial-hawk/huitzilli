import Reveal from '../hooks/Reveal.jsx'
import alejandraPhoto from '../assets/alejandra.webp'

const CREDS = [
  'Fundadora y CEO de Huitzilli Cultural Expression',
  'Formación en Relaciones Internacionales',
  'Maestría en Estudios de Paz y Conflicto',
  'Experiencia en educación de idiomas, reubicación y Movilidad Global',
  'Profesional multilingüe con experiencia en América Latina, Europa y Norteamérica',
  'Comprometida con el patrimonio cultural y el entendimiento intercultural respetuoso',
]

export default function AlejandraEs() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap about__grid">

        <Reveal className="about__media">
          <div className="imgph">
            <img src={alejandraPhoto} alt="Retrato de Alejandra Coronel Mengelle." loading="lazy" />
          </div>
        </Reveal>

        <Reveal className="about__body">
          <p className="eyebrow">La fundadora</p>
          <h2 className="h2" id="about-title">Alejandra Coronel <em>Mengelle</em></h2>

          <p className="lead" style={{ marginTop: '1.6rem' }}>
            Alejandra fundó Huitzilli a partir de la convicción de que la mayoría de las fricciones
            interculturales no son un fallo de intención, sino de interpretación — y que esa
            interpretación se puede enseñar.
          </p>

          <ul className="creds">
            {CREDS.map((c) => <li key={c}>{c}</li>)}
          </ul>

          <p style={{ color: 'var(--muted)' }}>
            Trabaja como facilitadora y socia estratégica, más que como instructora: la
            conversación comienza con el contexto de tu organización, no con un catálogo.
          </p>

          <p style={{ marginTop: '2rem' }}><a className="link" href="#">Conoce a Alejandra →</a></p>
        </Reveal>

      </div>
    </section>
  )
}
