import { useState } from 'react'
import Reveal from '../hooks/Reveal.jsx'
import { CALENDLY_URL, WEB3FORMS_ACCESS_KEY } from '../site-config.js'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')

    const form = event.target
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_ACCESS_KEY)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await res.json()

      if (result.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section section--sand" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">

        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 className="h2" id="contact-title">Let's start a <em>conversation</em>.</h2>
          <p className="lead" style={{ marginTop: '1rem' }}>
            Tell us about your organization, your people and the cultural challenges you are
            navigating. We will explore together what kind of experience could make the
            greatest difference.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required />
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="5" required />
            </div>

            <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            <p className="contact-form__status" role="status" aria-live="polite">
              {status === 'sent' && 'Thank you — your message has been sent. We will be in touch soon.'}
              {status === 'error' && 'Something went wrong sending your message. Please try again, or book a call instead.'}
            </p>
          </form>
        </Reveal>

        <Reveal className="contact-calendly">
          <h3>Prefer to talk it through?</h3>
          <p>Book a 30-minute conversation with Alejandra directly on Calendly. No preparation needed.</p>
          <a className="btn btn--ghost" href={CALENDLY_URL} target="_blank" rel="noreferrer">
            Book a Consultation <span className="arrow" aria-hidden="true">→</span>
          </a>
        </Reveal>

      </div>
    </section>
  )
}
