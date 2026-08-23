import { Link } from 'react-router-dom'
import Reveal from '../hooks/Reveal.jsx'

import imgLanguage from '../assets/our-services/pexels-mikhail-nilov-7574366-1024x683.jpg'
import imgCrossCultural from '../assets/our-services/Two-Students-reading-a-book-1024x299.jpg'
import imgCompass from '../assets/cultural-compass/pexels-fauxels-3184306-scaled.jpg'

const SERVICES = [
  {
    title: 'Language Training',
    text: 'We offer customized sessions tailored to each learner’s goals. Whether you’re mastering Spanish, Portuguese, French, Italian or Dutch, our programs ensure cultural fluency and confident communication.',
    image: imgLanguage,
    to: '/our-services',
  },
  {
    title: 'Cross-Cultural Training',
    text: 'Our programs are designed to enhance intercultural awareness and facilitate communication, promoting global interactions and meaningful connections.',
    image: imgCrossCultural,
    to: '/our-services',
  },
  {
    title: 'Cultural Compass',
    text: 'A core aspect of our philosophy. Our workshops enhance cultural immersion by addressing the evolving social landscape. We use Peace Education techniques to foster unity and support holistic growth.',
    image: imgCompass,
    to: '/cultural-compass',
  },
  {
    title: 'Research and Consulting',
    text: 'Using rigorous scientific methods, we analyze sociocultural challenges and workplace conflicts, delivering tailored solutions that foster inclusive environments and productive global collaboration.',
    image: null,
    to: '/our-services',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="wrap">

        <Reveal style={{ maxWidth: '68ch' }}>
          <p className="eyebrow">What we offer</p>
          <h2 className="h2 h2--wide" id="services-title">Our Services</h2>
          <p className="lead" style={{ marginTop: '1.2rem' }}>
            We connect cultures through education and empathy. We offer unique programs that
            combine language courses and intercultural training, helping individuals and
            organizations navigate and appreciate cultural diversity.
          </p>
        </Reveal>

        <div className="services-grid" style={{ marginTop: 'clamp(2.5rem,4vw,3.5rem)' }}>
          {SERVICES.map((s) => (
            <Reveal as="article" className="service-card" key={s.title}>
              {s.image
                ? <img src={s.image} alt="" aria-hidden="true" />
                : <div className="imgph service-card__ph"><p className="imgph__note">[Photo placeholder: research &amp; consulting]</p></div>}
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Link className="link" to={s.to}>Read more →</Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
