import './index.css'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SignUp from './pages/SIgnUp.jsx'
import Home from './pages/Home.jsx'
import Happy from './pages/Happy.jsx'
import Angry from './pages/Angry.jsx'
import Sad from './pages/Sad.jsx'
import Relaxed from './pages/Relaxed.jsx'
import Motivated from './pages/Motivated.jsx'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/happymood' element={<Happy />} />
        <Route path='/angrymood' element={<Angry />} />
        <Route path='/sadmood' element={<Sad />} />
        <Route path='/relaxedmood' element={<Relaxed />} />
        <Route path='/motivatedmood' element={<Motivated />} />
      </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
