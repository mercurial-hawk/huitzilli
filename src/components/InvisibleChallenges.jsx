import Reveal from '../hooks/Reveal.jsx'

export default function InvisibleChallenges() {
  return (
    <section className="section" aria-labelledby="chal-title">
      <div className="wrap">

        <Reveal className="challenges__head">
          <p className="eyebrow">The invisible layer</p>
          <h2 className="h2 h2--wide" id="chal-title">
            Not every collaboration problem is a <em>communication</em> problem.
          </h2>
          <p className="lead">
            A team can share a language and still disagree about what feedback means, who is
            expected to speak first, how disagreement is voiced, what silence signals, or how
            much hierarchy is present in a room. These differences rarely announce themselves.
          </p>
        </Reveal>

        <Reveal className="iceberg">
          <svg className="iceberg__line" viewBox="0 0 900 24" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 12h900" stroke="currentColor" strokeWidth="1" strokeDasharray="2 7" />
          </svg>

          <p className="iceberg__label">Above the waterline — what gets noticed</p>
          <div className="iceberg__zone">
            <div className="iceberg__card">Meetings happen. Deadlines are mostly met.</div>
            <div className="iceberg__card">People are polite, on time, and follow the agenda.</div>
            <div className="iceberg__card">Everyone speaks the same working language.</div>
          </div>

          <p className="iceberg__label" style={{ marginTop: '2rem' }}>Below the waterline — what actually shapes it</p>
          <div className="iceberg__zone iceberg__zone--below">
            <div className="iceberg__card">Unspoken assumptions about who should speak first, and when silence is respect versus disengagement.</div>
            <div className="iceberg__card">Different comfort levels with disagreement, and different signals for when feedback has landed.</div>
            <div className="iceberg__card">Different expectations of hierarchy — who a decision belongs to, and who is allowed to question it.</div>
          </div>
        </Reveal>

        <Reveal className="bridge">
          <svg className="bridge__line" viewBox="0 0 900 60" fill="none" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 58C150 58 220 4 450 4C680 4 750 58 900 58"
                  stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <p className="bridge__text">
            When these differences stay invisible, they shape trust, belonging and performance anyway.
          </p>
        </Reveal>

      </div>
    </section>
  )
}
