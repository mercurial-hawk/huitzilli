import Reveal from '../hooks/Reveal.jsx'

const TESTIMONIALS = [
  {
    quote: "I had a great experience learning Spanish with Alejandra, who made the lessons interesting and fun. I had moved with my work from the UK to Mexico, so needed to learn the language both from a business and an everyday life perspective. As I had moved into a new and different cultural environment, not only did we work on my expanding vocabulary and grammar, but also we did lessons in Spanish learning about Mexican culture, history and geography which personally I found really valuable and made the lessons more engaging.",
    name: 'Martyn James, UK',
  },
  {
    quote: "Intelligent, patient and dedicated coupled with strong leadership skills and adventurous, Alejandra from Huitzilli is a natural educator and collaborator. Her cultural openness greatly enhances her value as a Spanish instructor who provides virtual lessons in the U.S. In addition to her mainstay as my teacher, she's always willing to provide a tantalizing bird's eye view of Mexico's peoples, history, culture and food. It continues to be my pleasure to learn from her.",
    name: 'Mendy Johnson, USA',
  },
]

export default function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonials-title">
      <div className="wrap">

        <Reveal style={{ textAlign: 'center', maxWidth: '52ch', marginInline: 'auto' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Testimonials</p>
          <h2 className="h2" id="testimonials-title" style={{ maxWidth: 'none' }}>What our clients are saying</h2>
          <p className="lead" style={{ margin: '1.2rem auto 0' }}>
            Their testimonials reflect our commitment and passion for each of our services.
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
