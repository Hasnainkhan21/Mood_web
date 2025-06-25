import './index.css'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About.jsx'
import Features from './pages/Features.jsx'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home.jsx'
import Happy from './pages/Happy.jsx'
import Angry from './pages/Angry.jsx'
import Sad from './pages/Sad.jsx'
import Relaxed from './pages/Relaxed.jsx'
import Motivated from './pages/Motivated.jsx'
import Login from './pages/Login.jsx'
import ProtectedRoute from './pages/ProtectedRoute.jsx'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
 <Route path='/happymood' element={<ProtectedRoute> <Happy /></ProtectedRoute>} />
<Route path='/angrymood' element={<ProtectedRoute> <Angry /> </ProtectedRoute>} />
<Route path='/sadmood' element={<ProtectedRoute> <Sad /></ProtectedRoute>} />
<Route path='/relaxedmood' element={<ProtectedRoute> <Relaxed /></ProtectedRoute>} />
<Route path='/motivatedmood' element={<ProtectedRoute> <Motivated /></ProtectedRoute>} />


      </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
