import { useEffect } from 'react'
import Reveal from '../hooks/Reveal.jsx'

import photoAlejandra from '../assets/our-ceo/Ale_Huitzilli.jpg'

export default function OurCeoEs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page title */}
      <section className="section" style={{ paddingBottom: '1.5rem' }}>
        <div className="wrap">
          <h1 className="h2">Nuestra CEO</h1>
        </div>
      </section>

      {/* Photo + full bio */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap ceo-hero">
          <Reveal>
            <img className="ceo-hero__photo" src={photoAlejandra} alt="Alejandra Coronel Mengelle, CEO y Fundadora de Huitzilli Cultural Expression." />
          </Reveal>

          <Reveal>
            <h2 className="h2 h2--wide">
              Alejandra Coronel Mengelle es la dinámica CEO y Fundadora de Huitzilli Cultural
              Expression,
            </h2>
            <p className="lead" style={{ marginTop: '1.2rem', maxWidth: 'none' }}>
              una pionera en transformar la conciencia cultural a través de una educación en
              idiomas innovadora y formación intercultural. Con un compromiso inquebrantable por
              fomentar el entendimiento global, Alejandra combina su fluidez en español, inglés y
              portugués, junto con su dominio del francés, árabe y alemán, para conectar culturas
              y personas alrededor del mundo. Su trayectoria comenzó en 2013 con una
              certificación para enseñar inglés como segunda lengua del Anglo Institute, marcando
              el inicio de una misión dedicada a derribar las barreras del idioma y fomentar la
              empatía cultural. El impacto transformador de Alejandra continuó cuando enseñó
              portugués a ejecutivos y expatriados, obteniendo una comprensión profunda de sus
              retos y aspiraciones únicas.
            </p>
            <p style={{ marginTop: '1.4rem' }}>
              En 2017, Alejandra cofundó Idiomízate, dirigiéndola como CEO hasta 2022. Bajo su
              liderazgo, la organización impartió diez idiomas y forjó alianzas influyentes con
              escuelas internacionales en la Ciudad de México, impulsando una pasión por la
              educación en idiomas y cultura. Su amplia experiencia en el sector de Reubicación y
              Movilidad Global en PremierDS perfeccionó aún más su capacidad para diseñar
              soluciones a la medida de necesidades diversas. Los logros académicos de Alejandra
              incluyen una licenciatura en Relaciones Internacionales y una maestría en Estudios
              de Paz y Conflicto, donde su tesis aborda la gentrificación cultural a través de
              enfoques educativos innovadores.
            </p>
            <p style={{ marginTop: '1.4rem' }}>
              Como ferviente defensora de la preservación de las culturas y el patrimonio
              indígena, Alejandra fundó Huitzilli Cultural Expression en 2023 con la visión de
              fusionar la apreciación cultural, el humanismo y la Educación para la Paz en
              experiencias de aprendizaje transformadoras. Su trabajo está impulsado por una
              profunda dedicación no solo a fomentar el entendimiento global y la identidad, sino
              también a salvaguardar las ricas raíces culturales que nos conectan a todos. A
              través de Huitzilli, Alejandra busca inspirar respeto y reconocimiento por los
              diversos legados culturales, asegurando que prosperen en nuestro mundo
              interconectado.
            </p>

            <Reveal className="ceo-social">
              <div className="ceo-social__icon" aria-hidden="true">
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/alejandra-coronel-mengelle/" target="_blank" rel="noreferrer">
                  ¡Conéctate conmigo en LinkedIn!
                </a>
                <p>Descubre cómo Huitzilli Cultural Expression fomenta el entendimiento cultural a través del idioma.</p>
              </div>
            </Reveal>
          </Reveal>
        </div>
      </section>
    </>
  )
}
