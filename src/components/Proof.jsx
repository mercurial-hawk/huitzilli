import Reveal from '../hooks/Reveal.jsx'
import proofCase from '../assets/proof-case.webp'

export default function Proof() {
  return (
    <section className="section section--sand" aria-labelledby="story-title">
      <div className="wrap">

        <Reveal className="proof__logos">
          <span className="ph">Client logo</span>
          <span className="ph">Client logo</span>
          <span className="ph">Client logo</span>
          <span className="ph">Partner institution</span>
        </Reveal>

        <div className="story__grid">

          <Reveal className="story__media">
            <div className="imgph">
              <img src={proofCase} alt="Two facilitators reviewing workshop materials in a training room." loading="lazy" />
            </div>
          </Reveal>

          <Reveal>
            <p className="eyebrow">A client story</p>
            <h2 className="h2" id="story-title">What <em>changed</em> for one organization.</h2>

            <div className="story__beats">
              <div className="story__beat">
                <h3>The context</h3>
                <p><span className="ph">Client type</span> <span className="ph">Challenge</span><br />
                   A short description of the cultural or mobility challenge the organization was
                   facing, in their own framing, before Huitzilli was involved.</p>
              </div>
              <div className="story__beat">
                <h3>The experience</h3>
                <p><span className="ph">Customized solution</span><br />
                   How the program was designed for this specific context — the format, the length,
                   who took part, and what made it different from a standard curriculum.</p>
              </div>
              <div className="story__beat">
                <h3>The shift</h3>
                <p><span className="ph">Qualitative or quantitative result</span><br />
                   What participants, leaders or the organization observed afterward. Observed
                   change, not promised change.</p>
              </div>
            </div>

            <blockquote className="story__quote">
              <p>“<span className="ph">Client quote</span>”</p>
              <footer><span className="ph">Name, role, organization</span></footer>
            </blockquote>
          </Reveal>

        </div>

        <Reveal className="proof__grid" style={{ marginTop: 'clamp(2.5rem,4vw,3.5rem)' }}>
          <div className="proof__stats">
            <div className="proof__stat">
              <strong><span className="ph">XX%</span></strong>
              <span>of workshop participants report clearer team communication afterward.</span>
              <p className="ph" style={{ marginTop: '.6rem' }}>Pending real data — do not publish unverified</p>
            </div>
            <div className="proof__stat">
              <strong><span className="ph">XX</span> teams</strong>
              <span>have gone through a customized Huitzilli program.</span>
              <p className="ph" style={{ marginTop: '.6rem' }}>Confirm number before publishing</p>
            </div>
          </div>
          <div className="story__quote" style={{ marginTop: 0 }}>
            <p style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.5 }}>
              [Poll / research insight placeholder — a short, real finding about multicultural
              teams, sourced and cited, not invented. e.g. an HBR or CQ Center statistic relevant
              to this audience.]
            </p>
            <footer><span className="ph">Cite real source before publishing</span></footer>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
