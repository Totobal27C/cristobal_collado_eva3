const schedule = [
  ['12/04/2026', '15:30', 'Rayo Norte', 'Local', 'Estadio Nacional Julio Martínez Prádanos (Santiago)'],
  ['19/04/2026', '20:00', 'Atlético Costa', 'Visitante', 'Estadio Sausalito (Viña del Mar)'],
  ['26/04/2026', '18:00', 'Real Puerto', 'Local', 'Estadio El Teniente (Rancagua)'],
  ['03/05/2026', '16:00', 'Deportivo Sur', 'Visitante', 'Estadio Ester Roa Rebolledo (Concepción)'],
  ['10/05/2026', '19:30', 'Unión Andina', 'Local', 'Estadio Monumental David Arellano (Santiago)'],
  ['17/05/2026', '15:00', 'Celta Austral', 'Visitante', 'Estadio Regional de Antofagasta (Antofagasta)'],
  ['24/05/2026', '18:30', 'Deportes Cordillera', 'Local', 'Estadio Elías Figueroa Brander (Valparaíso)'],
  ['31/05/2026', '17:00', 'San Miguel FC', 'Visitante', 'Estadio Santa Laura-Universidad SEK (Santiago)'],
  ['07/06/2026', '20:00', 'Rangers City', 'Local', 'Estadio Fiscal de Talca (Talca)'],
  ['14/06/2026', '16:00', 'Ferro Norte', 'Visitante', 'Estadio Carlos Dittborn (Arica)'],
]

export default function SchedulePage() {
  return (
    <main className="container" style={{ paddingTop: '2rem' }}>
      <header>
        <div className="container">
          <a href="/" className="btn">← Volver al club</a>
        </div>
      </header>
      <h2>Programación Campeonato 2026</h2>
      <p className="pos">Listado de jornadas con fecha, hora y estadio (estadios chilenos).</p>
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Rival</th>
              <th>Local/Visitante</th>
              <th>Estadio (Ciudad)</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map(([fecha, hora, rival, lugar, estadio]) => (
              <tr key={`${fecha}-${rival}`}>
                <td>{fecha}</td>
                <td>{hora}</td>
                <td>{rival}</td>
                <td>{lugar}</td>
                <td>{estadio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="pos" style={{ marginTop: '.7rem' }}>Nota: horarios sujetos a confirmación.</p>
    </main>
  )
}
