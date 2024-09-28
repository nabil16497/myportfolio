import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {SiGoogledrive} from 'react-icons/si'
import {FiGithub} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>NABIL</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#otheractivities">Hobbies</a></li>
        <li><a href="#certification">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

     <div className="footer__social">

        <a href="https://facebook.com/nabil164/" target='_blank'><FaFacebookF/></a>
        <a href="https://www.linkedin.com/in/nabil16497/" target='_blank'><FaLinkedinIn/></a>
        <a href='https://github.com/nabil16497' target='_blank'><FiGithub /></a>
        <a href='https://drive.google.com/drive/folders/1zkloX4fy7_hLbIhPy4ZN-Nt85wSE1k14?usp=sharing' target='_blank'><SiGoogledrive /></a>
        
       </div>
       <div className="footer__copyright">
         <small>&copy; Nabil's Portal.</small>
       </div>

    </footer>
  )
}

export default Footer