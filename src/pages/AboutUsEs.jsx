import { useEffect } from 'react'
import Reveal from '../hooks/Reveal.jsx'
import hummingbird from '../assets/hummingbird.png'

const VALUES = [
  {
    title: 'Nuestra Misión',
    body: `En Huitzilli Cultural Expression, nuestra misión es promover la conciencia y el
      entendimiento cultural en un mundo cada vez más interconectado. Transformamos la educación
      lingüística y la formación intercultural integrando técnicas de Educación para la Paz en
      todos nuestros programas. Ofrecemos una combinación personalizada de cursos de idiomas,
      formación intercultural y talleres diseñados para empresas, organizaciones, expatriados,
      diplomáticos y familias, ayudándolos a navegar y abrazar diferentes paisajes culturales.`,
  },
  {
    title: 'Nuestra Visión',
    body: `Creemos que la inmersión cultural no solo acelera el aprendizaje de idiomas, sino que
      también fomenta la cooperación, el respeto y la paz. Nuestro enfoque, basado en la cultura,
      el humanismo y la creatividad, ofrece una experiencia inmersiva que fortalece la identidad
      y el sentido de pertenencia. Fomentamos el proceso de aculturación creando espacios seguros
      que promuevan el diálogo, la empatía y la colaboración, con el objetivo de generar un
      impacto positivo y abordar las tensiones socioculturales de manera efectiva.`,
  },
  {
    title: 'Nuestros Valores',
    body: `El nombre "Huitzilli", que significa colibrí en náhuatl, refleja profundamente
      nuestra misión y valores. En las culturas indígenas mexicanas, el colibrí es más que un
      ave; es un mensajero sagrado y un símbolo de resiliencia y conexión. Para los aztecas,
      estaba vinculado con Huitzilopochtli, el dios de la guerra, representando la búsqueda del
      destino y el movimiento incansable del corazón humano hacia su propósito. Esta simbología
      refleja nuestra convicción de que entender y conectar con nuestras raíces culturales es
      esencial para el crecimiento personal y colectivo. Asimismo, los mayas consideraban al
      colibrí como un enlace esencial entre mundos, destacando su papel en la comunicación y la
      conexión. En Huitzilli Cultural Expression, nos inspiramos en estos significados para
      enriquecer nuestros programas, creando puentes entre perspectivas diversas y promoviendo
      la conciencia cultural, tal como el colibrí conecta diferentes realidades.`,
  },
]

export default function AboutUsEs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero — 50/50 split, matching the original layout exactly */}
      <section className="section" style={{ paddingBottom: 'clamp(2.5rem,4vw,4rem)' }} aria-labelledby="aboutus-title">
        <div className="wrap aboutus-hero">
          <Reveal className="hero__copy">
            <p className="eyebrow">Quiénes somos</p>
            <h1 className="hero__title" id="aboutus-title" style={{ maxWidth: 'none', fontSize: 'clamp(2rem, 1.1rem + 2.6vw, 3.2rem)', lineHeight: 1.3 }}>
              Inmersión cultural<br />impulsada por la <em>creatividad</em>.
            </h1>
          </Reveal>

          <Reveal className="hero__media">
            <img
              className="hero__photo"
              src={hummingbird}
              alt="Un colibrí pico ancho en pleno vuelo."
              width="640"
              height="426"
              loading="lazy"
              style={{ width: '750px', height: 'auto', maxWidth: 'none' }}
            />
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Values — 30/70 columns, divider line above each */}
      <section className="section">
        <div className="wrap">
          <div className="help__list" style={{ borderTopColor: 'rgba(26,26,26,.16)' }}>
            {VALUES.map((v) => (
              <Reveal
                as="article"
                className="help__row"
                key={v.title}
                style={{ gridTemplateColumns: '.3fr .7fr' }}
              >
                <h2 className="help__name" style={{ fontSize: 'var(--t-h3)' }}>{v.title}</h2>
                <p className="help__v" style={{ maxWidth: '68ch' }}>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
