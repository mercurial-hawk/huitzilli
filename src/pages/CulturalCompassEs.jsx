import { useEffect } from 'react'
import Reveal from '../hooks/Reveal.jsx'

import banner from '../assets/cultural-compass/banner.jpg'
import iconWhatWeDo from '../assets/cultural-compass/1.png'
import iconWhyItMatters from '../assets/cultural-compass/2.png'
import iconOurApproach from '../assets/cultural-compass/3.png'
import iconSteps from '../assets/cultural-compass/4.png'
import iconLearning from '../assets/cultural-compass/5f.png'

import imgGentrification from '../assets/cultural-compass/Community.png'
import imgSustainable from '../assets/cultural-compass/1 (1).png'
import imgCustomerService from '../assets/cultural-compass/blake-wisz-GFrBMipOd_E-unsplash-scaled.jpg'
import imgHealthcare from '../assets/cultural-compass/pexels-rdne-6519930-scaled.jpg'
import imgUniqueness from '../assets/cultural-compass/vonecia-carswell-0aMMMUjiiEQ-unsplash-scaled.jpg'
import imgHeritage from '../assets/cultural-compass/3.jpg'
import imgLeadership from '../assets/cultural-compass/pexels-hillaryfox-1595385-scaled.jpg'
import imgFeedback from '../assets/cultural-compass/pexels-yankrukov-7691723-scaled.jpg'
import imgConflict from '../assets/cultural-compass/pexels-fauxels-3184306-scaled.jpg'
import imgCommunication from '../assets/cultural-compass/pexels-artempodrez-5716037-scaled.jpg'
import imgNegotiation from '../assets/cultural-compass/2 (1).png'

const IMPACT_ITEMS = [
  {
    icon: iconWhatWeDo,
    title: 'Qué hacemos:',
    text: 'Capacitamos a equipos y líderes para navegar con éxito entornos multiculturales, con un enfoque adaptado a las necesidades sociales y organizacionales.',
  },
  {
    icon: iconWhyItMatters,
    title: 'Por qué importa:',
    list: [
      'Mejora la comunicación y la colaboración',
      'Fortalece equipos inclusivos y de alto rendimiento',
      'Reduce conflictos y mejora la toma de decisiones',
    ],
  },
  {
    icon: iconOurApproach,
    title: 'Nuestro enfoque:',
    list: [
      { strong: 'Educación para la Paz', text: 'Fomenta la unidad y el crecimiento' },
      { strong: 'Aprendizaje Práctico', text: 'Dinámico, experiencial y aplicable' },
      { strong: 'Espacios Seguros', text: 'Fomenta la participación y perspectivas diversas' },
    ],
  },
  {
    icon: iconSteps,
    title: 'Pasos hacia el éxito:',
    list: [
      'Identificar los desafíos culturales.',
      'Comprender su impacto.',
      'Actuar con estrategias efectivas.',
    ],
  },
  {
    icon: iconLearning,
    title: 'Modalidad:',
    list: [
      'En línea, presencial e híbrido.',
      'Disponible en español, inglés y portugués.',
    ],
  },
]

const WORKSHOPS = [
  {
    title: 'Raíces en Transición: Enfrentando la Gentrificación Cultural en la Movilidad Global',
    image: imgGentrification,
    text: 'Este taller analiza las complejidades de la gentrificación cultural en el contexto de la movilidad global y las reubicaciones. Los participantes explorarán cómo los procesos de mudanza impactan a las comunidades locales, transforman identidades culturales y contribuyen al desplazamiento social. A través de discusiones y estrategias prácticas, nos enfocaremos en mitigar estos efectos, promoviendo prácticas inclusivas que respeten y preserven el patrimonio cultural, y a la par faciliten transiciones fluidas para las personas y familias reubicadas.',
  },
  {
    title: 'Perspectivas Culturales en Prácticas Sustentables',
    image: imgSustainable,
    text: 'Este taller explora cómo diferentes culturas abordan la sustentabilidad y los desafíos medioambientales, ayudando a los participantes a desarrollar estrategias culturalmente sensibles para promover prácticas sostenibles. A través de un proceso de desaprender y reaprender, los asistentes cultivarán una comprensión más profunda de las dimensiones culturales de la sustentabilidad.',
  },
  {
    title: 'Navegando las Diferencias Culturales en Servicio al Cliente',
    image: imgCustomerService,
    text: 'Este taller ofrece a los participantes las herramientas necesarias para brindar un servicio al cliente de excelencia a una clientela diversa, comprendiendo las diferencias culturales en sus expectativas. Se abordarán estrategias para resolver problemas interculturales y se enfatizará la comunicación efectiva entre culturas, garantizando que los participantes puedan atender y satisfacer las necesidades de clientes de distintos orígenes culturales.',
  },
  {
    title: 'Sensibilidad Cultural para Profesionales de Salud',
    image: imgHealthcare,
    text: 'Este taller proporciona a los profesionales de salud las habilidades esenciales para brindar una atención culturalmente competente. Al comprender los antecedentes culturales de sus pacientes, los participantes fomentarán la confianza y la empatía. El taller abarca estrategias para una comunicación efectiva en entornos de salud, asegurando que los profesionales puedan responder con sensibilidad y respeto a las diversas necesidades de los pacientes.',
  },
  {
    title: 'Conexiones Auténticas: Diversidad, Equidad e Inclusión desde la Cultura',
    image: imgUniqueness,
    text: 'Este taller está diseñado para fortalecer la comprensión y práctica de la Diversidad, Equidad e Inclusión (DEI) en contextos personales y profesionales, incorporando una perspectiva de entendimiento cultural. Su objetivo es promover un entorno laboral más inclusivo y armonioso, donde se valore la singularidad de cada individuo.',
  },
  {
    title: 'Herencia e Identidad: Recuperando y Preservando la Cultura',
    image: imgHeritage,
    text: 'Este taller profundiza en la importante distinción entre la apropiación cultural y la reivindicación del patrimonio cultural, resaltando la relevancia de preservar las tradiciones culturales. Los participantes aprenderán a reconectar con sus raíces culturales y a comprender el impacto de la globalización en la identidad cultural, fomentando una apreciación respetuosa y la preservación de diversas herencias culturales.',
  },
  {
    title: 'Liderazgo Culturalmente Consciente: Inspirando con Equidad de Género y Refuerzo Positivo',
    image: imgLeadership,
    text: 'Este taller proporciona a los líderes las habilidades necesarias para crear equipos equitativos, integrando la conciencia cultural, perspectiva de género y técnicas de refuerzo positivo. Los participantes aprenderán a observar, analizar y comprender los contextos culturales de sus equipos para fomentar la inclusión y la eficacia. El objetivo es inspirar a los miembros del equipo a construir un entorno de trabajo que sea solidario, empoderador y de alto rendimiento.',
  },
  {
    title: 'El Arte de la Retroalimentación Consciente: Fomentando la Empatía y el Desarrollo',
    image: imgFeedback,
    text: 'Este taller equipa a los participantes con las habilidades necesarias para dar retroalimentación oportuna, específica y accionable, mientras se genera confianza y se promueve la empatía. Enfatiza la importancia de estar abierto a recibir retroalimentación y de fomentar una cultura de crecimiento continuo. Los participantes aprenderán a dar retroalimentación que impulse el análisis y el crecimiento personal, fortaleciendo en última instancia la dinámica y el desempeño del equipo.',
  },
  {
    title: 'Arte y Estrategia: Mediación de Conflictos con Lentes Culturales',
    image: imgConflict,
    text: 'Este taller está diseñado para dotar a los participantes de las habilidades necesarias para navegar y resolver conflictos de manera efectiva. Con énfasis en separar a la persona del conflicto, identificar las causas de raíz y analizar las perspectivas desde un enfoque cultural, los participantes aprenderán a abordar los conflictos con empatía y apertura. El taller promueve soluciones creativas y fuera de lo convencional, fomentando un entorno colaborativo para resolver conflictos de forma constructiva.',
  },
  {
    title: 'Cultura y Claridad: Dominando la Comunicación Asertiva',
    image: imgCommunication,
    text: 'Este taller enseña a los participantes a desarrollar habilidades de comunicación asertiva y a manejarse con seguridad, apertura y respeto en contextos culturales diversos. Se abordará la importancia de las señales no verbales y la interpretación de normas culturales, explorando cómo el individualismo y el colectivismo moldean los estilos de comunicación. Los asistentes practicarán estrategias para expresarse de manera clara y efectiva, fomentando interacciones respetuosas tanto en el ámbito personal como profesional.',
  },
  {
    title: 'Negociación Estratégica en Entornos de Alto Riesgo',
    image: imgNegotiation,
    text: 'Este taller proporciona a los participantes las habilidades necesarias para gestionar negociaciones desafiantes, comprendiendo estilos de comunicación diversos, tácticas y procesos de toma de decisiones. Con un enfoque en la construcción de relaciones, la percepción del tiempo, las dinámicas de poder y los contextos culturales, el taller ofrece estrategias integrales para manejar negociaciones complejas de manera eficaz.',
  },
]

export default function CulturalCompassEs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page title */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="wrap">
          <h1 className="h2">Brújula Cultural</h1>
        </div>
      </section>

      {/* Banner */}
      <div className="wrap">
        <Reveal as="img" className="banner-img" src={banner} alt="Un letrero de Cultural Compass exhibido en una terminal aeroportuaria." />
      </div>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Reveal>
            <p className="lead">
              Una parte fundamental de Huitzilli Cultural Expression, es el punto focal que
              complementa la experiencia de inmersión cultural a través de talleres diseñados
              para responder a las necesidades sociales cambiantes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* High Impact Workshops */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <h2 className="h2 impact-title">Talleres de Alto Impacto: De la conciencia cultural a la acción efectiva</h2>
          </Reveal>

          <div className="impact-grid" style={{ marginTop: 'clamp(2.5rem,4vw,3.5rem)' }}>
            {IMPACT_ITEMS.map((item) => (
              <Reveal as="div" className="impact-grid__item" key={item.title}>
                <img src={item.icon} alt="" aria-hidden="true" />
                <h3>{item.title}</h3>
                {item.text && <p>{item.text}</p>}
                {item.list && (
                  <ul>
                    {item.list.map((entry, i) =>
                      typeof entry === 'string'
                        ? <li key={i}>{entry}</li>
                        : <li key={i}><strong>{entry.strong}</strong>: {entry.text}</li>
                    )}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops list */}
      <section className="section section--sand">
        <div className="wrap">
          <Reveal>
            <h2 className="h2">Talleres</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Descubre nuestra diversa gama de talleres, diseñados cuidadosamente para satisfacer
              una amplia variedad de necesidades.
            </p>
          </Reveal>

          <Reveal style={{ marginTop: '2.4rem' }}>
            <details className="workshops__list">
              <summary>Haz clic aquí para más información</summary>
              <div className="workshops__nested">
                {WORKSHOPS.map((w) => (
                  <details key={w.title}>
                    <summary>{w.title}</summary>
                    <div className="workshop-detail">
                      <img src={w.image} alt="" aria-hidden="true" />
                      <p>{w.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </details>
          </Reveal>
        </div>
      </section>
    </>
  )
}
