import React from 'react'
import Nav from '../components/nav.jsx'
import Hero from '../components/Hero.jsx'
import MoodRecommendations from '../components/MoodRecommendations.jsx'
import Testimonial from '../components/Testimonial.jsx'
import Footer from '../components/Footer.jsx'
function Home() {
  return (
    <>
    <Nav />
    <Hero />
    <MoodRecommendations />
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Home
