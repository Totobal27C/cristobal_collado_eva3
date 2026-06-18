import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import estadioMunicipal from '../assets/estadio-municipal.jpg'
import imagesGallery from '../assets/images.jpg'
import joseAndrade from '../assets/JOSE-ANDRADE.jpg'
import AccessibilityButton from './AccessibilityButton'

const players = [
  { slug: 'diego-morales', number: '9', name: 'Diego Morales', role: 'Delantero • Nº 9 • 27 años' },
  { slug: 'josue-ulloa', number: '11', name: 'Josue Ulloa', role: 'Delantero • Nº 11 • 20 años' },
  { slug: 'positivo', number: '25', name: 'Positivo', role: 'Mediocentro • Nº 10 • 25 años' },
  { slug: 'cristobal-collado', number: '6', name: 'Cristobal Collado', role: 'Lateral derecho • Nº 6 • 19 años' },
  { slug: 'sebastian', number: '1', name: 'Sebastian', role: 'Portero • Nº 1 • 30 años' },
  { slug: 'alex-rojas', number: '3', name: 'Alex Rojas', role: 'Lateral izquierdo • Nº 3 • 24 años' },
  { slug: 'hugo-perez', number: '4', name: 'Hugo Pérez', role: 'Defensa central • Nº 4 • 28 años' },
  { slug: 'marco-diaz', number: '5', name: 'Marco Díaz', role: 'Defensa central • Nº 5 • 26 años' },
  { slug: 'luis-fernandez', number: '8', name: 'Luis Fernández', role: 'Mediocentro defensivo • Nº 8 • 29 años' },
  { slug: 'carlos-vega', number: '7', name: 'Carlos Vega', role: 'Extremo izquierdo • Nº 7 • 24 años' },
  { slug: 'raul-martinez', number: '2', name: 'Raúl Martínez', role: 'Extremo derecho • Nº 2 • 22 años' },
]

const carouselImages = [
  estadioMunicipal,
  imagesGallery,
  joseAndrade,
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const name = localStorage.getItem('username')
    if (name) setGreeting(`Hola, ${name}`)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 3000)
    return () => window.clearInterval(timer)
  }, [])

  const goToSlide = (index) => setCurrentSlide(index)

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="brand">
            <div className="logo" aria-hidden="true">
              <img className="img-kratos" src={joseAndrade} alt="Logo club" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <h1 style={{ margin: 0, fontSize: '1.4rem', color: '#fff' }}>Club Jose Andrade</h1>
                <span className="badge">Fundado 15-01-1947</span>
              </div>
              <div style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.9)' }}>
                Santiago • Estadio: Puente Alto Armador Donoso • Capacidad: 42,000
              </div>
            </div>
          </div>

          <nav aria-label="Navegación principal">
            <a href="#resumen">Resumen</a>
            <a href="#plantilla">Plantilla</a>
            <a href="#estadisticas">Estadísticas</a>
            <a href="#calendario">Calendario</a>
            <a href="#noticias">Noticias</a>
            <Link to="/programacion-campeonato">Programación del Campeonado</Link>
          </nav>

          <div id="user-panel">
            <span id="greeting">{greeting}</span>
            <div className="panel-buttons" style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <Link to="/login">Login</Link>
              <Link to="/nuevo-usuario">New User</Link>
              <Link to="/contacto">Contact</Link>
              <AccessibilityButton />
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="galeria" className="carousel" aria-label="Galería de imágenes">
          <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {carouselImages.map((src, index) => (
              <div className="carousel-slide" key={index}>
                <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <button className="carousel-button prev" aria-label="Anterior" onClick={() => goToSlide((currentSlide - 1 + carouselImages.length) % carouselImages.length)}>&#8249;</button>
          <button className="carousel-button next" aria-label="Siguiente" onClick={() => goToSlide((currentSlide + 1) % carouselImages.length)}>&#8250;</button>
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <button key={index} type="button" className={index === currentSlide ? 'active' : ''} onClick={() => goToSlide(index)} />
            ))}
          </div>
        </section>

        <section id="resumen" className="hero" aria-labelledby="resumen-titulo">
          <div className="team-info">
            <h2 id="resumen-titulo" className="team-title">
              Jose Andrade FC <span style={{ fontSize: '.85rem', color: 'var(--muted)' }}>— Temporada 2025</span>
            </h2>
            <div className="meta">Entrenador: Alejandro Ferrer • Sistema: 4-3-3 • Posición actual: 3º</div>
            <p className="summary">Club Jose Andrade es un equipo histórico conocido por su juego ofensivo y cantera.</p>
            <div className="actions">
              <a className="btn" href="#calendario">Próximo partido</a>
              <a className="btn" href="#noticias" style={{ background: '#0a9' }}>Últimas noticias</a>
            </div>
          </div>
          <div style={{ minWidth: '220px' }}>
            <div className="card">
              <h3 style={{ margin: '.2rem 0' }}>Resultado reciente</h3>
              <div style={{ fontWeight: 700, fontSize: '1.15rem' }}>Jose Andrade 3 — 1 Las brisas</div>
              <div className="pos" style={{ marginTop: '.35rem' }}>Goles: Morales (18'), P. Costa (45+2'), C. Collado (68')</div>
            </div>
            <div className="card" style={{ marginTop: '.7rem' }}>
              <h4 style={{ margin: '.2rem 0', fontSize: '.95rem' }}>Estadio</h4>
              <div className="pos">Villa Puente Alto — Césped natural</div>
            </div>
          </div>
        </section>

        <section id="plantilla" className="grid" aria-labelledby="plantilla-titulo">
          <h3 id="plantilla-titulo">Plantilla principal</h3>
          <div className="card players" role="list">
            {players.map((player) => (
              <div className="player" role="listitem" key={player.slug}>
                <div className="avatar">{player.number}</div>
                <div className="player-info">
                  <div className="name">{player.name}</div>
                  <div className="pos">{player.role}</div>
                  <div className="player-actions">
                    <Link className="btn small" to={`/jugadores/${player.slug}`}>Ver perfil</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="estadisticas">
          <h3>Estadísticas clave</h3>
          <div className="card stats-grid">
            <div className="stat"><div style={{ fontSize: '1.4rem', fontWeight: 700 }}>2.1</div><div className="pos">Goles por partido</div></div>
            <div className="stat"><div style={{ fontSize: '1.4rem', fontWeight: 700 }}>0.9</div><div className="pos">Goles en contra</div></div>
            <div className="stat"><div style={{ fontSize: '1.4rem', fontWeight: 700 }}>64%</div><div className="pos">Posesión media</div></div>
            <div className="stat"><div style={{ fontSize: '1.4rem', fontWeight: 700 }}>78%</div><div className="pos">Efectividad pases</div></div>
          </div>
        </section>

        <section id="calendario">
          <h3>Calendario y resultados</h3>
          <div className="card">
            <table aria-describedby="calendario">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Rival</th>
                  <th>Local/Visitante</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>12/03/2025</td><td>Rayo Norte</td><td>Local</td><td>3 — 1</td></tr>
                <tr><td>19/03/2025</td><td>Atlético Costa</td><td>Visitante</td><td>—</td></tr>
                <tr><td>26/03/2025</td><td>Real Puerto</td><td>Local</td><td>—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="noticias">
          <h3>Noticias recientes</h3>
          <div className="card">
            <article>
              <h4 style={{ margin: '.2rem 0' }}>Ferrer: "Objetivo, pelear por el título"</h4>
              <p className="pos" style={{ margin: '.3rem 0' }}>Entrenador habla sobre la preparación y refuerzos de invierno.</p>
              <p style={{ margin: '.4rem 0', color: '#333' }}>El cuerpo técnico ha trabajado en la recuperación física...</p>
            </article>
          </div>
        </section>

        <footer className="site-footer" style={{ marginTop: '2rem', padding: '1rem 0', textAlign: 'center', fontSize: '.9rem', color: 'rgba(0,0,0,.75)' }}>
          <div className="container footer-content">
            <div>Cristobal Collado</div>
            <div>Profesor: Victor Armando Vásquez</div>
            <div>Asignatura: Programacion Front End</div>
            <div>Seccion: TI3031/D-IEI-N3-P2-C1(F)/D</div>
          </div>
        </footer>
      </main>
    </>
  )
}
