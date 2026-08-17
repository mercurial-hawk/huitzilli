import Reveal from '../hooks/Reveal.jsx'

export default function CredibilityStrip() {
  return (
    <section className="cred section section--tight" aria-label="Reach and formats">
      <Reveal as="div" className="wrap cred__row">
        <p className="cred__label">Trusted&nbsp;by organizations navigating cultural&nbsp;complexity</p>

        <div className="cred__items">
          <span className="ph">Client logo</span>
          <span className="ph">Client logo</span>
          <span className="ph">Partner institution</span>
          <div className="cred__map">[Map placeholder: countries served]</div>

          <p className="cred__fact"><strong>3 languages</strong>English · Spanish · Portuguese</p>
          <p className="cred__fact"><strong><span className="ph">X countries</span></strong>Programs delivered</p>
          <p className="cred__fact"><strong>2h – 4h – custom</strong>Conferences, workshops, programs</p>
        </div>
      </Reveal>
    </section>
  )
}
