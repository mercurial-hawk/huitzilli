import Reveal from '../hooks/Reveal.jsx'

const QA = [
  {
    q: 'Can programs be customized for a specific organization or country?',
    a: "Yes — customization is the starting point, not an add-on. Every program begins with understanding the organization's context, the cultures involved and the challenge being addressed, and the curriculum is built from there.",
    open: true,
  },
  {
    q: 'Are programs available online and in person?',
    a: 'Both. Programs are designed for the format that fits the group: in person for immersive workshops and facilitated dialogue, online for distributed teams across time zones, and hybrid where both are needed.',
  },
  {
    q: 'Which languages are available?',
    a: 'English, Spanish and Portuguese. Programs can be delivered in one language or move between them when the group is mixed.',
  },
  {
    q: 'Can Huitzilli support both employees and relocating families?',
    a: 'Yes. Relocation affects a household, not an employee. Coaching and cultural support can be extended to partners and children, before, during and after the move.',
  },
  {
    q: 'What program lengths and formats are available?',
    a: 'Formats range from one- and two-hour conferences, to four-hour workshops, to longer customized programs and ongoing consulting engagements. The format follows the objective rather than the other way around.',
  },
  {
    q: 'How does the consultation process work?',
    a: 'You book a short exploratory conversation with Alejandra. She asks about your people, your context and the challenge you are navigating. If Huitzilli is a good fit, a tailored proposal follows. If it is not, she will say so.',
  },
]

export default function FAQ() {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="wrap faq__grid">

        <Reveal>
          <p className="eyebrow">Questions</p>
          <h2 className="h2" id="faq-title">Before we <em>talk</em>.</h2>
          <p className="small" style={{ marginTop: '1.4rem', maxWidth: '34ch' }}>
            Anything not covered here is a good reason to book a short conversation.
          </p>
        </Reveal>

        <Reveal className="faq__list">
          {QA.map(({ q, a, open }) => (
            <details key={q} open={open}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </Reveal>

      </div>
    </section>
  )
}
