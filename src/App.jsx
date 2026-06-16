import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ContactPage from './components/ContactPage'
import SchedulePage from './components/SchedulePage'
import PlayerPage from './components/PlayerPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/espartano" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/nuevo-usuario" element={<RegisterPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/programacion-campeonato" element={<SchedulePage />} />
        <Route path="/jugadores/:slug" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  )
}
