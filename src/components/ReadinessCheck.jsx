import Reveal from '../hooks/Reveal.jsx'

const CATEGORIES = ['Relocation preparation', 'Leadership readiness', 'Communication & feedback', 'Participation', 'Conflict', 'Follow-up support']

export default function ReadinessCheck() {
  return (
    <section className="section" id="readiness" aria-labelledby="readiness-title">
      <div className="wrap split">

        <Reveal>
          <p className="eyebrow">A lower-commitment next step</p>
          <h2 className="h2" id="readiness-title">How ready is your team for <em>global collaboration</em>?</h2>
          <p className="lead" style={{ marginTop: '1.4rem' }}>
            A short self-assessment across six areas — useful on its own, and as context for a
            first conversation with Alejandra.
          </p>
          <ul className="pillars">
            {CATEGORIES.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </Reveal>

        <Reveal className="magnet">
          <div className="readiness__radar" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <polygon points="100,14 174,58 174,142 100,186 26,142 26,58" fill="none" stroke="rgba(26,26,26,.14)" />
              <polygon points="100,45 148,68 148,132 100,155 52,132 52,68" fill="none" stroke="rgba(26,26,26,.1)" />
              <polygon points="100,30 160,64 145,148 90,175 40,120 55,55" fill="var(--gorget)" fillOpacity=".18" stroke="var(--gorget)" strokeWidth="1.5" />
            </svg>
            <p className="readiness__radar-label">[Diagnostic visual placeholder — real interactive readiness map to be built]</p>
          </div>
          <p className="eyebrow" style={{ marginTop: '1.1rem' }}>Takes about 5 minutes</p>
          <p style={{ color: 'var(--muted)' }}>
            Results are not scored publicly or compared across organizations. You'll receive a
            short summary and, if useful, a suggested starting point.
          </p>
          <a className="btn btn--primary" href="#" style={{ width: '100%', justifyContent: 'center', marginTop: '1.2rem' }}>
            Take the Readiness Check <span className="arrow" aria-hidden="true">→</span>
          </a>
          <p className="small" style={{ marginTop: '.9rem' }}><span className="ph">Connect to dedicated landing page &amp; form</span></p>
        </Reveal>

      </div>
    </section>
  )
}
