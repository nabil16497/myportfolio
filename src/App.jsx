import React, {Suspense, lazy} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

const About = lazy(() => import('./components/about/About'));
const Services = lazy(()=> import('./components/services/Services'));
const Portfolio = lazy(()=> import('./components/portfolio/Portfolio'));
const ExtraActivities = lazy(()=> import('./components/extracurricularactivities/ExtracurricularActivities'));
const Certification = lazy(()=> import('./components/certification/Certification'));
const Contact = lazy(()=> import('./components/contact/Contact'));
const Footer = lazy(()=> import('./components/footer/Footer'));

const App = () => {
  
  return (
    
    <>
      <Header />
      <Nav />
      <Suspense fallback={<div>LOADING</div>}>
      <About />
      <Services />
      <Portfolio />
      <ExtraActivities />
      <Certification />
      <Contact />
      <Footer />
      </Suspense>
    </>
  )
}

export default App