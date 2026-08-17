import Reveal from '../hooks/Reveal.jsx'
import alejandraPhoto from '../assets/alejandra.webp'

const CREDS = [
  'Founder and CEO of Huitzilli Cultural Expression',
  'Background in International Relations',
  "Master's degree in Peace and Conflict Studies",
  'Experience across language education, relocation and Global Mobility',
  'Multilingual practitioner working across Latin America, Europe and North America',
  'Committed to cultural heritage and respectful intercultural understanding',
]

export default function Alejandra() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap about__grid">

        <Reveal className="about__media">
          <div className="imgph">
            <img src={alejandraPhoto} alt="Portrait of Alejandra Coronel Mengelle." loading="lazy" />
          </div>
        </Reveal>

        <Reveal className="about__body">
          <p className="eyebrow">The founder</p>
          <h2 className="h2" id="about-title">Alejandra Coronel <em>Mengelle</em></h2>

          <p className="lead" style={{ marginTop: '1.6rem' }}>
            Alejandra founded Huitzilli out of a conviction that most intercultural friction is not
            a failure of intent, but of interpretation — and that interpretation can be taught.
          </p>

          <ul className="creds">
            {CREDS.map((c) => <li key={c}>{c}</li>)}
          </ul>

          <p style={{ color: 'var(--muted)' }}>
            She works as a facilitator and strategic partner rather than an instructor: the
            conversation begins with your organization's context, not with a catalog.
          </p>

          <p style={{ marginTop: '2rem' }}><a className="link" href="#">Meet Alejandra →</a></p>
        </Reveal>

      </div>
    </section>
  )
}
