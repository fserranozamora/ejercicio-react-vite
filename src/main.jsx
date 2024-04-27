import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import equipo from './datos/equipo.js'
import EquipoVistas from './vistas/EquipoVistas.jsx'
 
const router = [
  {
    path: "/",
    element: <App />
  },
];

equipo.forEach((eq) => {
  router.push({
    path: eq.nNombre,
    element: <EquipoVistas eq = {eq} />,
  });
});

const routes = createBrowserRouter(router)
  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
