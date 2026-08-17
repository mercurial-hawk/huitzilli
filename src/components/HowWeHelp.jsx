import Reveal from '../hooks/Reveal.jsx'

const SERVICES = [
  {
    name: 'Multicultural Team Integration',
    challenge: 'Colleagues interpret participation, decision-making and disagreement through different cultural logics — and read each other as difficult rather than different.',
    shiftStrong: 'Teams gain a shared language',
    shiftRest: ' for their differences, and the ability to work with them instead of around them.',
  },
  {
    name: 'Global Mobility & Acculturation',
    challenge: 'Relocation is treated as a logistical event. The cultural adjustment of the employee — and of the family that moved with them — begins after the boxes are unpacked.',
    shiftStrong: 'People arrive prepared and stay supported',
    shiftRest: ' before, during and after the move, which protects both wellbeing and the assignment.',
  },
  {
    name: 'Culturally Aware Leadership',
    challenge: 'Leaders manage across regions with a single style, and interpret the resulting silence as agreement.',
    shiftStrong: 'Leaders build environments',
    shiftRest: ' where different perspectives can actually enter the conversation — and be used.',
  },
  {
    name: 'Language & Cultural Fluency',
    challenge: 'Language training produces grammar, not confidence. People can speak, yet still misread the room.',
    shiftStrong: 'Language is learned inside its cultural context',
    shiftRest: ' — professional communication, everyday adaptation, and the meaning behind the words.',
  },
  {
    name: 'Research & Customized Consulting',
    challenge: 'A sociocultural or organizational tension exists that no standard program addresses, and no one has named it precisely.',
    shiftStrong: 'The challenge is studied first',
    shiftRest: ', then answered with a response designed for that organization alone.',
  },
]

export default function HowWeHelp() {
  return (
    <section className="section section--sand" id="how-we-help" aria-labelledby="help-title">
      <div className="wrap">

        <Reveal className="help__head">
          <p className="eyebrow">How we help</p>
          <h2 className="h2 h2--wide" id="help-title">
            Support designed around the people, context and <em>culture</em> of your organization.
          </h2>
        </Reveal>

        <div className="help__list">
          {SERVICES.map((s) => (
            <Reveal as="article" className="help__row" key={s.name}>
              <h3 className="help__name">{s.name}</h3>
              <div className="help__cols">
                <div>
                  <p className="help__k">The challenge</p>
                  <p className="help__v">{s.challenge}</p>
                </div>
                <div>
                  <p className="help__k">The shift</p>
                  <p className="help__v"><strong>{s.shiftStrong}</strong>{s.shiftRest}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
