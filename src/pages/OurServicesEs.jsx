import { useEffect } from 'react'
import Reveal from '../hooks/Reveal.jsx'

import bannerCall from '../assets/our-services/pexels-mikhail-nilov-7574366-1024x683.jpg'
import servicesWheel from '../assets/our-services/Our-Services-Web.png'
import bannerOnlineEdu from '../assets/our-services/Online-Edu-Banner-1024x299.png'
import iconLanguages from '../assets/our-services/6.png'
import iconFormats from '../assets/our-services/7.png'
import iconFocus from '../assets/our-services/8.png'
import iconBenefits from '../assets/our-services/9.png'
import bannerStudents from '../assets/our-services/Two-Students-reading-a-book-1024x299.jpg'
import bannerHuitzilli from '../assets/our-services/Huitzilli-1024x414.png'

const SERVICES = [
  'Educación en Idiomas',
  'Formación Intercultural',
  'Cultural Apapacho – Responsabilidad Social',
  'Talleres – Brújula Cultural',
  'Investigación y Consultoría',
]

const LANGUAGE_ED_ITEMS = [
  {
    icon: iconLanguages,
    title: 'Idiomas que ofrecemos',
    text: 'Español, inglés, portugués, francés, neerlandés e italiano.',
  },
  {
    icon: iconFormats,
    title: 'Formatos',
    text: 'Clases individuales y grupales, en línea y presenciales.',
  },
  {
    icon: iconFocus,
    title: 'Nuestro enfoque',
    text: 'Técnicas de Educación para la Paz, inmersión cultural y un plan de estudios interactivo y personalizado.',
  },
  {
    icon: iconBenefits,
    title: 'Beneficios',
    text: 'Mejora la comunicación, fomenta la confianza y empodera a los participantes en entornos multiculturales.',
  },
]

export default function OurServicesEs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page title */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="wrap">
          <p className="eyebrow">Qué hacemos</p>
          <h1 className="h2">Nuestros Servicios</h1>
        </div>
      </section>

      {/* Banner 1 */}
      <div className="wrap">
        <Reveal as="img" className="banner-img" src={bannerCall} alt="Una persona en una videollamada, conectando a través de culturas." />
      </div>

      {/* Services wheel + intro + checklist */}
      <section className="section">
        <div className="wrap split">
          <Reveal className="split__media">
            <img src={servicesWheel} alt="Diagrama de las cinco áreas de servicio de Huitzilli." style={{ width: '100%', height: 'auto' }} />
          </Reveal>

          <Reveal className="split__body">
            <p className="lead">
              En Huitzilli, nuestro objetivo es cultivar la conciencia cultural, fomentar un
              aprendizaje efectivo e impulsar el éxito global a través de soluciones de
              capacitación dinámicas y personalizadas. Nuestros servicios se construyen sobre el
              poder transformador del entendimiento, la cooperación y la comunicación efectiva.
              Creamos un entorno donde los participantes pueden explorar y adoptar perspectivas
              diversas, dando lugar a una conexión global significativa.
            </p>

            <ul className="creds" style={{ marginTop: '1.8rem' }}>
              {SERVICES.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Banner 2 — Language Education */}
      <div className="wrap">
        <Reveal as="img" className="banner-img" src={bannerOnlineEdu} alt="Sesión de educación de idiomas en línea." />
      </div>

      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="wrap">
          <Reveal>
            <h2 className="h2">Educación en Idiomas</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Educación lingüística impartida en un entorno seguro e inclusivo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Icon grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap icon-grid">
          {LANGUAGE_ED_ITEMS.map((item) => (
            <Reveal as="div" className="icon-grid__item" key={item.title}>
              <img src={item.icon} alt="" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Banner 3 — Cross-Cultural Training */}
      <div className="wrap">
        <Reveal as="img" className="banner-img" src={bannerStudents} alt="Dos estudiantes leyendo juntos." />
      </div>

      <section className="section">
        <div className="wrap">
          <Reveal style={{ maxWidth: '78ch' }}>
            <h2 className="h2">Formación Intercultural</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Descubre los programas de formación intercultural de Huitzilli Cultural Expression,
              donde ofrecemos Capacitación en Aculturación Intercultural y Dominio de la
              Comunicación Empresarial Multicultural.
            </p>
            <p style={{ color: 'var(--muted)', marginTop: '1.2rem' }}>
              Estos programas están meticulosamente diseñados para mejorar la conciencia
              intercultural y unir de forma fluida cultura y comunicación, maximizando su
              impacto. Al fomentar la adaptabilidad y adoptar la diversidad, Huitzilli guía a los
              participantes a través de las complejidades de las interacciones globales,
              cultivando conexiones significativas y enriqueciendo su experiencia mediante
              procesos de aculturación fluidos.
            </p>
            <p style={{ color: 'var(--muted)', marginTop: '1.2rem' }}>
              Utilizando técnicas de Educación para la Paz, creamos un entorno de aprendizaje
              acogedor e inclusivo que permite a los participantes conectar profundamente con el
              patrimonio, las tradiciones y las costumbres locales. Los programas están diseñados
              para dotar a las personas del conocimiento y las habilidades esenciales para
              prosperar en entornos multiculturales.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="wrap"><hr style={{ border: 0, borderTop: '1px solid rgba(26,26,26,.14)', margin: '1rem 0' }} /></div>

      {/* Banner 4 — centered */}
      <div className="wrap">
        <Reveal as="img" className="banner-img" src={bannerHuitzilli} alt="Huitzilli Cultural Expression." style={{ objectFit: 'contain', background: 'var(--sand)' }} />
      </div>

      {/* Highlight box */}
      <section className="section">
        <div className="wrap">
          <Reveal className="highlight-box">
            <h3>Capacitación en Aculturación Intercultural</h3>
            <p>
              La capacitación se adapta al país específico al que se reubican los participantes
              — ya sea México, Brasil, Colombia, Ecuador, República Dominicana, o cualquier otra
              nación de la región. Este programa profundiza en la cultura particular del país de
              destino, cubriendo su historia, festividades, días feriados, costumbres,
              gastronomía y datos locales útiles e interesantes. La capacitación combina sesiones
              en línea con experiencias presenciales inmersivas, permitiendo a los participantes
              interactuar con la comunidad local y conectar de verdad con la cultura —
              facilitando una transición más fluida.
            </p>
          </Reveal>

          <p className="small" style={{ marginTop: '2rem' }}>
            <span className="ph">Pendiente: diagrama de rompecabezas (Perspectivas culturales / Adaptabilidad / Conexión / Comunicación efectiva)</span>
          </p>
        </div>
      </section>
    </>
  )
}
