import Reveal from '../hooks/Reveal.jsx'
import heroCollage from '../assets/hero-collage.webp'

export default function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero__grid">

        <Reveal className="hero__copy">
          <p className="eyebrow">Intercultural learning for global organizations</p>

          <h1 className="hero__title" id="hero-title">
             Global teams work better when people feel <em>understood</em>
          </h1>

          <p className="lead hero__lead">
            Huitzilli helps multicultural teams and relocating professionals turn 
            cultural differences into trust, belonging and stronger collaboration.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#book">Start a Conversation <span className="arrow" aria-hidden="true">→</span></a>
            <a className="btn btn--ghost" href="#workshop">Explore a Custom Workshop</a>
          </div>

          <p className="hero__trust">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1.5 14 4v4c0 3.2-2.4 5.9-6 6.6C4.4 13.9 2 11.2 2 8V4l6-2.5Z" stroke="#5B7C7D" strokeWidth="1.2" />
              <path d="m5.6 7.9 1.7 1.7 3.2-3.4" stroke="#9B3A52" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <span>Customized programs delivered online and in person, in English, Spanish and Portuguese.</span>
          </p>
        </Reveal>

        <Reveal className="hero__media">
          {/* Signature: the flight line. One stroke, once, above the fold. */}
          <svg className="hero__flight" viewBox="0 0 260 200" fill="none" aria-hidden="true">
            <path d="M2 198C40 150 30 96 78 60C126 24 190 40 234 4"
                  stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="1 6" />
            <path d="M78 60C110 74 160 70 200 44" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
            <circle cx="234" cy="4" r="2.6" fill="currentColor" />
          </svg>

          <img className="hero__photo" src={heroCollage} alt="Four people in separate portraits greeting each other across cultures — hi, hello, bonjour, salut." width="900" height="818" />
        </Reveal>

      </div>
    </section>
  )
}