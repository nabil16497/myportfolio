import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import ExtraActivities from './components/extracurricularactivities/ExtracurricularActivities';
import Services from './components/services/Services';
import Certification from './components/certification/Certification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <Header />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <About />
      <Services />
      {/*<Portfolio />*/}
      <ExtraActivities />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
