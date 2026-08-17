import Reveal from '../hooks/Reveal.jsx'

export default function FinalCTA() {
  return (
    <section className="section section--deep" id="book" aria-labelledby="book-title">
      <Reveal as="div" className="wrap final">
        <p className="eyebrow">Start the conversation</p>
        <h2 className="h2" id="book-title">Design a cultural learning experience for your <em>global team</em>.</h2>
        <p className="lead">
          Tell us about your organization, your people and the cultural challenges you are
          navigating. We will explore together what kind of experience could make the greatest
          difference.
        </p>
        <div className="final__cta">
          <a className="btn btn--primary" href="#">Start a Conversation <span className="arrow" aria-hidden="true">→</span></a>
          <a className="btn btn--ghost" href="#">Explore a Custom Workshop</a>
        </div>
        <p className="final__note">
          A 30-minute conversation with Alejandra. No preparation needed.{' '}
          <span className="ph">Connect Calendly</span>
        </p>
      </Reveal>
    </section>
  )
}
