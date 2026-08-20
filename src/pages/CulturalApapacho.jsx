import { useEffect } from 'react'
import Reveal from '../hooks/Reveal.jsx'

import banner from '../assets/cultural-apapacho/Huitzilli-Mom-and-Daughter-Banner-1024x299.png'

const FEATURES = [
  {
    title: 'Empowering indigenous communities.',
    text: 'Our efforts under Cultural Apapacho focus on providing valuable resources, facilitating workshops, and promoting cultural activities that empower indigenous communities.',
  },
  {
    title: 'Celebrating cultural identity.',
    text: 'Each class, workshop, and translation service we offer contributes to helping these communities sustain and celebrate their distinct identities.',
  },
  {
    title: 'Protecting and aiding in cultural preservation.',
    text: 'We are devoted to protecting indigenous languages and traditions, ensuring their preservation and appreciation for future generations.',
  },
]

export default function CulturalApapacho() {
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
              Cultural Apapacho is a meaningful initiative within Huitzilli Cultural Expression
              dedicated to supporting and preserving indigenous heritage.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Banner */}
      <div className="wrap">
        <Reveal as="img" className="banner-img" src={banner} alt="A mother carrying her child, embracing indigenous heritage." />
      </div>

      {/* Intro block */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="wrap">
          <Reveal style={{ maxWidth: '78ch' }}>
            <h3 style={{ fontSize: 'var(--t-h3)' }}>An embrace from the soul.</h3>
            <p className="lead" style={{ marginTop: '1rem', maxWidth: 'none' }}>
              The term "Apapacho," from the Nahuatl language, translates to "to embrace or caress
              with the soul," capturing the essence of our approach: to support indigenous
              communities with genuine care, respect, and empathy. This program reflects our
              commitment to ensuring that these vital cultures not only endure but flourish in
              the face of globalization.
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
