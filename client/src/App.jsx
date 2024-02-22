
import Navbar from './components/Navbar/Navbar'
import Home from './components/Main/Home'
import Empresa from './components/Empresas/Empresa'
import Profesiones from './components/Profesiones/Profesiones'
import Aspirantes from './components/Aspirantes/Aspirantes'
import Postularse from './components/Postularse/Postularse'
import Contacto from './components/Contacto/Contacto'
import { Routes, Route } from "react-router-dom"



import './App.css'

function App() {


  return (
    <div className='flex w-full'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/empresas' element={<Empresa />} />
        <Route path='/aspirantes' element={<Aspirantes />} />
        <Route path='/profesiones' element={<Profesiones />} />
        <Route path='/postularse' element={<Postularse />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </div>
  )
}

export default App
