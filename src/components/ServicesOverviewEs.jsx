import { Link } from 'react-router-dom'
import Reveal from '../hooks/Reveal.jsx'

import imgLanguage from '../assets/our-services/pexels-mikhail-nilov-7574366-1024x683.jpg'
import imgCrossCultural from '../assets/our-services/Two-Students-reading-a-book-1024x299.jpg'
import imgCompass from '../assets/cultural-compass/pexels-fauxels-3184306-scaled.jpg'
import imgResearch from '../assets/research-and-consulting.jpg'

const SERVICES = [
  {
    title: 'Educación en Idiomas',
    text: 'Ofrecemos sesiones personalizadas adaptadas a los objetivos de cada estudiante. Ya sea que domines español, portugués, francés, italiano o neerlandés, nuestros programas aseguran fluidez cultural y comunicación segura.',
    image: imgLanguage,
    to: '/es/our-services',
  },
  {
    title: 'Formación Intercultural',
    text: 'Nuestros programas están diseñados para mejorar la conciencia intercultural y facilitar la comunicación, promoviendo interacciones globales y conexiones significativas.',
    image: imgCrossCultural,
    to: '/es/our-services',
  },
  {
    title: 'Brújula Cultural',
    text: 'Un aspecto central de nuestra filosofía. Nuestros talleres mejoran la inmersión cultural abordando el panorama social cambiante. Usamos técnicas de Educación para la Paz para fomentar la unidad y respaldar un crecimiento integral.',
    image: imgCompass,
    to: '/es/cultural-compass',
  },
  {
    title: 'Investigación y Consultoría',
    text: 'Usando métodos científicos rigurosos, analizamos desafíos socioculturales y conflictos laborales, entregando soluciones a la medida que fomentan entornos inclusivos y una colaboración global productiva.',
    image: imgResearch,
    to: '/es/our-services',
  },
]

export default function ServicesOverviewEs() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="wrap">

        <Reveal style={{ maxWidth: '68ch' }}>
          <p className="eyebrow">Qué ofrecemos</p>
          <h2 className="h2 h2--wide" id="services-title">Nuestros Servicios</h2>
          <p className="lead" style={{ marginTop: '1.2rem' }}>
            Conectamos culturas a través de la educación y la empatía. Ofrecemos programas
            únicos que combinan cursos de idiomas y formación intercultural, ayudando a
            individuos y organizaciones a navegar y apreciar la diversidad cultural.
          </p>
        </Reveal>

        <div className="services-grid" style={{ marginTop: 'clamp(2.5rem,4vw,3.5rem)' }}>
          {SERVICES.map((s) => (
            <Reveal as="article" className="service-card" key={s.title}>
              <img src={s.image} alt="" aria-hidden="true" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Link className="link" to={s.to}>Leer más →</Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
