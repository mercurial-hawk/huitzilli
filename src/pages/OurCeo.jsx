import { useEffect } from 'react'
import Reveal from '../hooks/Reveal.jsx'

import photoAlejandra from '../assets/our-ceo/Ale_Huitzilli.jpg'

export default function OurCeo() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page title */}
      <section className="section" style={{ paddingBottom: '1.5rem' }}>
        <div className="wrap">
          <h1 className="h2">Our CEO</h1>
        </div>
      </section>

      {/* Photo + intro */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '2rem' }}>
        <div className="wrap ceo-hero">
          <Reveal>
            <img className="ceo-hero__photo" src={photoAlejandra} alt="Alejandra Coronel Mengelle, CEO and Founder of Huitzilli Cultural Expression." />
          </Reveal>

          <Reveal>
            <h2 className="h2 h2--wide">
              Alejandra Coronel Mengelle is the dynamic CEO and Founder of Huitzilli Cultural
              Expression,
            </h2>
            <p className="lead" style={{ marginTop: '1.2rem', maxWidth: 'none' }}>
              a pioneer in transforming cultural awareness through groundbreaking language
              education and cross-cultural training. With an unwavering commitment to fostering
              global understanding, Alejandra combines her fluency in Spanish, English, and
              Portuguese, along with her proficiency in French, Arabic, and German, to bridge
              cultures and connect people worldwide. Her journey began in 2013 with an ESL
              teaching certificate from the Anglo Institute, marking the start of a mission
              dedicated to breaking down language barriers and fostering cultural empathy.
              Alejandra's transformative impact continued as she taught Portuguese to executives
              and expatriates, gaining deep insights into their unique challenges and
              aspirations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Extended bio */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal style={{ maxWidth: '86ch' }}>
            <p>
              In 2017, Alejandra co-founded Idiomizate, leading it as CEO until 2022. Under her
              leadership, the organization taught ten languages and forged influential
              partnerships with international schools in Mexico City, igniting a passion for
              language and cultural education. Her extensive experience in the Relocation and
              Global Mobility sector at PremierDS further honed her ability to tailor solutions
              for diverse needs. Alejandra's academic achievements include a degree in
              international Relations and a Master's in Peace and Conflict Studies, where her
              thesis addresses cultural gentrification through innovative educational approaches.
            </p>
            <p style={{ marginTop: '1.4rem' }}>
              As a fervent advocate for the preservation of indigenous cultures and heritage,
              Alejandra founded Huitzilli Cultural Expression in 2023 with a vision to merge
              cultural appreciation, humanism, and Peace Education into transformative learning
              experiences. Her work is driven by a deep dedication to not only fostering global
              understanding and identity but also safeguarding the rich cultural roots that
              connect us all. Through Huitzilli, Alejandra aims to inspire respect and
              recognition for diverse cultural legacies, ensuring they thrive in our
              interconnected world.
            </p>
          </Reveal>

          <Reveal className="ceo-social">
            <div className="ceo-social__icon" aria-hidden="true">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/alejandra-coronel-mengelle/" target="_blank" rel="noreferrer">
                Connect with me on LinkedIn!
              </a>
              <p>Discover how Huitzilli Cultural Expression fosters cultural understanding through language.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
