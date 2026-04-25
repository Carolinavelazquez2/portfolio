import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const SERVICE_ID = 'service_7nyra0i'
const TEMPLATE_ID = 'template_ghww67i'
const PUBLIC_KEY = 'wzgUP_Wl9u77jAy7o'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setSent(true)
      setLoading(false)
      setForm({ name: '', email: '', message: '' })
    })
    .catch(() => {
      setError(true)
      setLoading(false)
    })
  }

  return (
    <section className="contact" id="contact">
      <p className="contact-tag">— Hablemos</p>
      <h2>Contacto</h2>
      <div className="contact-wrapper">

        <div className="contact-info">
          <h3>¿Tienes un proyecto en mente?</h3>
          <p>Estoy disponible para trabajos freelance y oportunidades laborales. ¡Escribeme!</p>
          <div className="contact-links">
            <a href="mailto:carolineeevel@gmail.com">📧 carolineeevel@gmail.com</a>
            <a href="https://www.linkedin.com/in/carolina-velazquez-8066065b/" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            <a href="https://github.com/Carolinavelazquez2" target="_blank" rel="noreferrer">🐙 GitHub</a>
            <a href="https://www.instagram.com/carolinevel/" target="_blank" rel="noreferrer">📸 Instagram</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="contact-success">
              <span>🎉</span>
              <p>¡Mensaje enviado! Te respondo pronto.</p>
            </div>
          ) : (
            <>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tu mensaje"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              {error && (
                <p style={{ color: 'red', fontSize: '13px' }}>
                  ⚠️ Hubo un error al enviar. Intentalo de nuevo.
                </p>
              )}
              <button
                type="submit"
                className="btn-primary"
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </>
          )}
        </form>

      </div>
    </section>
  )
}

export default Contact