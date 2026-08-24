import { useEffect } from 'react'
import Reveal from '../hooks/Reveal.jsx'

import banner from '../assets/cultural-apapacho/Huitzilli-Mom-and-Daughter-Banner-1024x299.png'

const FEATURES = [
  {
    title: 'Empoderando a las comunidades indígenas.',
    text: 'Nuestros esfuerzos en el marco de Cultural Apapacho se centran en proporcionar recursos valiosos, facilitar talleres y promover actividades culturales que empoderan a las comunidades indígenas.',
  },
  {
    title: 'Celebrando la identidad cultural.',
    text: 'Cada clase, taller y servicio de traducción que ofrecemos contribuye a ayudar a estas comunidades a sostener y celebrar sus identidades únicas.',
  },
  {
    title: 'Protegiendo y ayudando en la preservación cultural.',
    text: 'Estamos dedicados a proteger las lenguas y tradiciones indígenas, asegurando su preservación y valoración para las futuras generaciones.',
  },
]

export default function CulturalApapachoEs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page title */}
      <section className="section" style={{ paddingBottom: '1.5rem' }}>
        <div className="wrap">
          <h1 className="h2">Cultural Apapacho</h1>
        </div>
      </section>

      {/* Subheading */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '2rem' }}>
        <div className="wrap">
          <Reveal>
            <h2 className="h2 h2--wide">
              Cultural Apapacho es una iniciativa invaluable dentro de Huitzilli Cultural
              Expression, dedicada a apoyar y preservar el patrimonio indígena.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Banner */}
      <div className="wrap">
        <Reveal as="img" className="banner-img" src={banner} alt="Una madre cargando a su hija, abrazando el patrimonio indígena." />
      </div>

      {/* Intro block */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="wrap">
          <Reveal style={{ maxWidth: '78ch' }}>
            <h3 style={{ fontSize: 'var(--t-h3)' }}>Un abrazo desde el alma.</h3>
            <p className="lead" style={{ marginTop: '1rem', maxWidth: 'none' }}>
              El término "Apapacho", de la lengua náhuatl, se traduce como "abrazar o acariciar
              con el alma", capturando la esencia de nuestro enfoque: apoyar a las comunidades
              indígenas con cuidado genuino, respeto y empatía. Este programa refleja nuestro
              compromiso de asegurar que estas culturas vitales no solo perduren, sino que
              florezcan frente a la globalización.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature row */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap icon-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {FEATURES.map((f) => (
            <Reveal as="div" className="icon-grid__item" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
