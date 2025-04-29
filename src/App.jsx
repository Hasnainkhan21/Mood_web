import './index.css'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SignUp from './pages/SIgnUp.jsx'
import Home from './pages/Home.jsx'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
