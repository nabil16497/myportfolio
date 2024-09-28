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
import ThemeToggle from './components/Theme/ThemeToggle';

const App = () => {

  return (
    <>
      <div className="App bg-white dark:bg-gray-900 text-black dark:text-white colorblind:bg-blue-50 colorblind:text-blue-900"></div>
      <Header />
      <ThemeToggle />
      <Nav />
      <About />
      <Portfolio />
      <Services />
      
      <ExtraActivities />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
};

export default App
