import './App.css'
import Card from './componentes/card.jsx'
import equipo from './datos/equipo.js'

function App() {
  const ListasMiembros = equipo.map((l, index) => {
    return <Card key={index} nombre={l.nNombre} edad={l.nEdad} puesto={l.nPuesto} correo={l.nCorreo}/>
  })
  return (
    <div className='App'>
      <h1>Equipo de programadores</h1>
      <div className='container'>
        {ListasMiembros}
      </div>
    </div>
  )
}

export default App;
