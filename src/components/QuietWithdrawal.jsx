import Reveal from '../hooks/Reveal.jsx'
import quietWithdrawal from '../assets/quiet-withdrawal.webp'

export default function QuietWithdrawal() {
  return (
    <section className="section section--sand" aria-labelledby="quiet-title">
      <div className="wrap split">

        <Reveal className="split__media">
          <div className="imgph">
            <img
              src={quietWithdrawal}
              alt="A woman looking out a window, arms crossed, distant from the conversation behind her."
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal className="split__body">
          <p className="eyebrow">A familiar pattern</p>
          <h2 className="h2" id="quiet-title">She is still in the room. She stopped being <em>in the conversation</em> three meetings ago.</h2>
          <p className="lead">
            Nothing dramatic happens. She still attends, still nods, still delivers her part of the
            work on time. What changes is smaller and easier to miss: she stops offering an opinion
            before she is asked for one.
          </p>
          <p style={{ color: 'var(--muted)' }}>
            By the time anyone notices, it can look like disengagement, or a personality trait, or a
            performance issue. It may simply be someone who is still deciding whether this room is
            safe to speak in.
          </p>
        </Reveal>

      </div>
    </section>
  )
}
