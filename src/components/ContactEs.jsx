import { useState } from 'react'
import Reveal from '../hooks/Reveal.jsx'
import { CALENDLY_URL, WEB3FORMS_ACCESS_KEY } from '../site-config.js'

export default function ContactEs() {
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
          <p className="eyebrow">Ponte en contacto</p>
          <h2 className="h2" id="contact-title">Iniciemos una <em>conversación</em>.</h2>
          <p className="lead" style={{ marginTop: '1rem' }}>
            Cuéntanos sobre tu organización, tu gente y los desafíos culturales que estás
            enfrentando. Exploraremos juntos qué tipo de experiencia podría marcar la mayor
            diferencia.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__field">
              <label htmlFor="contact-name-es">Nombre</label>
              <input id="contact-name-es" name="name" type="text" autoComplete="name" required />
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-email-es">Correo electrónico</label>
              <input id="contact-email-es" name="email" type="email" autoComplete="email" required />
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-message-es">Mensaje</label>
              <textarea id="contact-message-es" name="message" rows="5" required />
            </div>

            <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </button>

            <p className="contact-form__status" role="status" aria-live="polite">
              {status === 'sent' && 'Gracias — tu mensaje ha sido enviado. Nos pondremos en contacto pronto.'}
              {status === 'error' && 'Algo salió mal al enviar tu mensaje. Inténtalo de nuevo, o mejor agenda una llamada.'}
            </p>
          </form>
        </Reveal>

        <Reveal className="contact-calendly">
          <h3>¿Prefieres hablarlo directamente?</h3>
          <p>Agenda una conversación de 30 minutos con Alejandra directamente en Calendly. No necesitas prepararte.</p>
          <a className="btn btn--ghost" href={CALENDLY_URL} target="_blank" rel="noreferrer">
            Agenda una Consulta <span className="arrow" aria-hidden="true">→</span>
          </a>
        </Reveal>

      </div>
    </section>
  )
}
