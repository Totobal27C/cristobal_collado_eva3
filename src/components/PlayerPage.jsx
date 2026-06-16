import { useParams, Link } from 'react-router-dom'

const players = {
  'diego-morales': {
    name: 'Diego Morales',
    number: '9',
    role: 'Delantero',
    age: '27 años',
    bio: 'Delantero rápido con gran capacidad para finalizar jugadas.',
  },
  'josue-ulloa': {
    name: 'Josue Ulloa',
    number: '11',
    role: 'Delantero',
    age: '20 años',
    bio: 'Extremo que destaca por su velocidad y desborde.',
  },
  'positivo': {
    name: 'Positivo',
    number: '10',
    role: 'Mediocentro',
    age: '25 años',
    bio: 'Mediocentro creativo con gran visión de juego.',
  },
  'cristobal-collado': {
    name: 'Cristobal Collado',
    number: '6',
    role: 'Lateral derecho',
    age: '19 años',
    bio: 'Defensa ofensivo con muy buena proyección.',
  },
  'sebastian': {
    name: 'Sebastian',
    number: '1',
    role: 'Portero',
    age: '30 años',
    bio: 'Portero experimentado con gran presencia en el área.',
  },
  'alex-rojas': {
    name: 'Alex Rojas',
    number: '3',
    role: 'Lateral izquierdo',
    age: '24 años',
    bio: 'Jugador sólido en defensa y aporte por banda.',
  },
  'hugo-perez': {
    name: 'Hugo Pérez',
    number: '4',
    role: 'Defensa central',
    age: '28 años',
    bio: 'Central muy seguro en el juego aéreo.',
  },
  'marco-diaz': {
    name: 'Marco Díaz',
    number: '5',
    role: 'Defensa central',
    age: '26 años',
    bio: 'Jugador fuerte, ordenado y muy disciplinado.',
  },
  'luis-fernandez': {
    name: 'Luis Fernández',
    number: '8',
    role: 'Mediocentro defensivo',
    age: '29 años',
    bio: 'Mediocentro con gran lectura del juego.',
  },
  'carlos-vega': {
    name: 'Carlos Vega',
    number: '7',
    role: 'Extremo izquierdo',
    age: '24 años',
    bio: 'Jugador técnico con gran calidad en el último pase.',
  },
  'raul-martinez': {
    name: 'Raúl Martínez',
    number: '2',
    role: 'Extremo derecho',
    age: '22 años',
    bio: 'Extremo muy rápido y constante en la recuperación.',
  },
}

export default function PlayerPage() {
  const { slug } = useParams()
  const player = players[slug]

  if (!player) {
    return (
      <main className="container" style={{ paddingTop: '2rem' }}>
        <h2>Jugador no encontrado</h2>
        <Link to="/" className="btn">Volver al inicio</Link>
      </main>
    )
  }

  return (
    <main className="container" style={{ paddingTop: '2rem' }}>
      <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <Link to="/" className="btn">← Volver</Link>
        <h2>{player.name}</h2>
        <p><strong>Número:</strong> {player.number}</p>
        <p><strong>Posición:</strong> {player.role}</p>
        <p><strong>Edad:</strong> {player.age}</p>
        <p>{player.bio}</p>
      </div>
    </main>
  )
}
