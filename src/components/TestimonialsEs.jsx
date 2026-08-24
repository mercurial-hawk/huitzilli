import Reveal from '../hooks/Reveal.jsx'

const TESTIMONIALS = [
  {
    quote: "Tuve una excelente experiencia aprendiendo español con Alejandra, quien hizo que las lecciones fueran interesantes y divertidas. Me había mudado por trabajo del Reino Unido a México, así que necesitaba aprender el idioma tanto desde una perspectiva de negocios como de la vida cotidiana. Al haberme mudado a un entorno cultural nuevo y diferente, no solo trabajamos en ampliar mi vocabulario y gramática, sino que también tuvimos lecciones en español aprendiendo sobre la cultura, historia y geografía de México, lo cual encontré realmente valioso e hizo las lecciones más interesantes.",
    name: 'Martyn James, Reino Unido',
  },
  {
    quote: "Inteligente, paciente y dedicada, junto con sólidas habilidades de liderazgo y espíritu aventurero, Alejandra de Huitzilli es una educadora y colaboradora nata. Su apertura cultural realza enormemente su valor como instructora de español que ofrece clases virtuales en Estados Unidos. Además de ser mi maestra, siempre está dispuesta a ofrecer una fascinante mirada panorámica de la gente, la historia, la cultura y la comida de México. Sigue siendo un placer aprender de ella.",
    name: 'Mendy Johnson, EE. UU.',
  },
]

export default function TestimonialsEs() {
  return (
    <section className="section" aria-labelledby="testimonials-title">
      <div className="wrap">

        <Reveal style={{ textAlign: 'center', maxWidth: '52ch', marginInline: 'auto' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Testimonios</p>
          <h2 className="h2" id="testimonials-title" style={{ maxWidth: 'none' }}>Lo que dicen nuestros clientes</h2>
          <p className="lead" style={{ margin: '1.2rem auto 0' }}>
            Sus testimonios reflejan nuestro compromiso y pasión por cada uno de nuestros servicios.
          </p>
        </Reveal>

        <div className="testimonial-grid" style={{ marginTop: 'clamp(2.5rem,4vw,3.5rem)' }}>
          {TESTIMONIALS.map((t) => (
            <Reveal as="figure" className="testimonial-card" key={t.name}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>{t.name}</figcaption>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
