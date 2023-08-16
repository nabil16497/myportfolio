import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import ExtraActivities from './components/extracurricularactivities/ExtracurricularActivities'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Certification from './components/certification/Certification'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Portfolio />
      <ExtraActivities />
      <Certification />
      <Contact />
      <Footer />
    </>
  )
}

export default App