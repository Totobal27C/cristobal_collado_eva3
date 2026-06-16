import { useState } from 'react'
import { Link } from 'react-router-dom'

const allowedEmailRegex = /^[^\s@]+@(?:gmail\.com|hotmail\.com|(?:[a-z0-9-]+\.)*empresa(?:\.[a-z]{2,})?)$/i
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/

export default function RegisterPage() {
  const [form, setForm] = useState({ fullname: '', age: '', username: '', email: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState({})

  const setField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const validateEmail = (email) => allowedEmailRegex.test(email)

  const validatePassword = (password) => {
    if (!passwordRegex.test(password)) {
      return 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo'
    }
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}

    if (!form.fullname.trim()) nextErrors.fullname = 'El nombre completo es requerido'
    if (!form.age.trim()) nextErrors.age = 'La edad es requerida'
    if (!form.username.trim()) nextErrors.username = 'El nombre de usuario es requerido'
    if (!form.email.trim()) nextErrors.email = 'El correo es requerido'
    else if (!validateEmail(form.email)) nextErrors.email = 'Correo inválido. Usa uno de estos dominios: @gmail.com, @hotmail.com o @empresa'

    if (!form.password.trim()) nextErrors.password = 'La contraseña es requerida'
    else {
      const passwordError = validatePassword(form.password)
      if (passwordError) nextErrors.password = passwordError
    }

    if (!form.confirmPassword.trim()) nextErrors.confirmPassword = 'Debes confirmar la contraseña'
    else if (form.password !== form.confirmPassword) nextErrors.confirmPassword = 'Las contraseñas no coinciden'

    setErrors(nextErrors)
    setSuccess({})

    if (Object.keys(nextErrors).length > 0) return

    localStorage.setItem('username', form.username.trim())
    localStorage.setItem('email', form.email.trim())
    setSuccess({ submit: 'Registro completado correctamente' })
    window.location.href = '/'
  }

  return (
    <div className="container" style={{ maxWidth: '420px', margin: '3rem auto' }}>
      <div className="card">
        <h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Nombre completo</label>
          <input id="fullname" type="text" value={form.fullname} onChange={(e) => setField('fullname', e.target.value)} />
          {errors.fullname && <div className="error-msg show">{errors.fullname}</div>}

          <label htmlFor="age">Edad</label>
          <input id="age" type="text" value={form.age} onChange={(e) => setField('age', e.target.value)} />
          {errors.age && <div className="error-msg show">{errors.age}</div>}

          <label htmlFor="username">Nombre de usuario</label>
          <input id="username" type="text" value={form.username} onChange={(e) => setField('username', e.target.value)} />
          {errors.username && <div className="error-msg show">{errors.username}</div>}

          <label htmlFor="email">Correo Electrónico</label>
          <input id="email" type="email" value={form.email} onChange={(e) => setField('email', e.target.value)} />
          {errors.email && <div className="error-msg show">{errors.email}</div>}

          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" value={form.password} onChange={(e) => setField('password', e.target.value)} />
          {errors.password && <div className="error-msg show">{errors.password}</div>}
          <small style={{ color: '#6e8aa6', marginTop: '-0.4rem' }}>Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 símbolo.</small>

          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input id="confirmPassword" type="password" value={form.confirmPassword} onChange={(e) => setField('confirmPassword', e.target.value)} />
          {errors.confirmPassword && <div className="error-msg show">{errors.confirmPassword}</div>}

          <button type="submit">Entrar</button>
          {success.submit && <p className="success-msg show">{success.submit}</p>}
          <p style={{ textAlign: 'center' }}><Link to="/login">Ya tengo cuenta</Link></p>
        </form>
      </div>
    </div>
  )
}
