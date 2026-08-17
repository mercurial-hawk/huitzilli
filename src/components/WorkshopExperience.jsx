import Reveal from '../hooks/Reveal.jsx'

const TILES = [
  { key: 'gallery__a', note: '[Workshop photo: facilitator guiding a multicultural team through an exercise.]' },
  { key: 'gallery__b', note: '[Photo placeholder: small group in conversation, mid-discussion.]' },
  { key: 'gallery__c', note: '[Image placeholder: hands arranging cultural mapping cards on a table.]' },
  { key: 'gallery__d', note: '[Photo placeholder: a quiet reflection moment — someone writing, thinking.]' },
  { key: 'gallery__e', note: '[Image placeholder: workshop materials laid out — cards, notes, a shared table.]' },
]

export default function WorkshopExperience() {
  return (
    <section className="section" id="workshop" aria-labelledby="ws-title">
      <div className="wrap">
        <Reveal className="challenges__head">
          <p className="eyebrow">Inside a session</p>
          <h2 className="h2 h2--wide" id="ws-title">What a Huitzilli experience actually feels like.</h2>
          <p className="lead">Not a lecture. A room where people practice working differently together.</p>
        </Reveal>

        <div className="gallery">
          {TILES.map((t) => (
            <Reveal as="div" className={`imgph ${t.key}`} key={t.key}>
              <p className="imgph__note">{t.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
