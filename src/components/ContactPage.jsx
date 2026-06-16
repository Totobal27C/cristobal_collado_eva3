import { useState } from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactPage() {
  const [form, setForm] = useState({ username: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const setField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const validateEmail = (email) => emailRegex.test(email)

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}

    if (!form.username.trim()) nextErrors.username = 'El nombre es requerido'
    if (!form.email.trim()) nextErrors.email = 'El correo es requerido'
    else if (!validateEmail(form.email)) nextErrors.email = 'Correo inválido. Usa formato: ejemplo@dominio.com'
    if (!form.message.trim()) nextErrors.message = 'El mensaje es requerido'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('')
      return
    }

    setStatus('Mensaje enviado correctamente')
    localStorage.setItem('username', form.username.trim())
    localStorage.setItem('email', form.email.trim())
  }

  return (
    <div className="container" style={{ maxWidth: '480px', margin: '3rem auto' }}>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h3>Contacto</h3>
          <input type="text" placeholder="Nombre de usuario" value={form.username} onChange={(e) => setField('username', e.target.value)} />
          {errors.username && <div className="error-msg show">{errors.username}</div>}
          <input type="email" placeholder="Correo electrónico" value={form.email} onChange={(e) => setField('email', e.target.value)} />
          {errors.email && <div className="error-msg show">{errors.email}</div>}
          <textarea rows="8" placeholder="Escribe tu mensaje aquí..." value={form.message} onChange={(e) => setField('message', e.target.value)} />
          {errors.message && <div className="error-msg show">{errors.message}</div>}
          <button type="submit">Enviar mensaje</button>
          {status && <p id="status">{status}</p>}
        </form>
      </div>
    </div>
  )
}
