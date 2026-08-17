import Reveal from '../hooks/Reveal.jsx'

export default function InsightsAndMagnet() {
  return (
    <section className="section section--sand" id="insights" aria-labelledby="ins-title">
      <div className="wrap">

        <Reveal className="insights__head">
          <div>
            <p className="eyebrow">Insights</p>
            <h2 className="h2 h2--wide" id="ins-title">Practical insights for more thoughtful global <em>collaboration</em>.</h2>
          </div>
          <a className="link" href="#">All insights →</a>
        </Reveal>

        <div className="insights__grid">

          <Reveal as="a" className="post" href="#">
            <div className="imgph"><p className="imgph__note">Article image</p></div>
            <p className="post__meta">Cultural Intelligence · 6 min</p>
            <h3>What silence means in a global meeting</h3>
            <p>Why the quietest person on the call is often the one with the most context — and how to design meetings that reach them.</p>
          </Reveal>

          <Reveal as="a" className="post" href="#">
            <div className="imgph"><p className="imgph__note">Article image</p></div>
            <p className="post__meta">Global Mobility · 5 min</p>
            <h3>The part of relocation no one budgets for</h3>
            <p>Housing, schooling and visas are planned. Cultural adjustment is assumed. That assumption is expensive.</p>
          </Reveal>

          <Reveal className="magnet">
            <p className="eyebrow">Free resource</p>
            <h3>Cultural Readiness Checklist for Global Teams</h3>
            <p>A practical reflection tool for HR, Global Mobility and team leaders preparing people
               to work or relocate across cultures.</p>
            <a className="btn" href="#">Get the Checklist <span className="arrow" aria-hidden="true">→</span></a>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
