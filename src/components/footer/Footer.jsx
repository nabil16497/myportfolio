import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiYoutube} from 'react-icons/fi'
import {BsBehance} from 'react-icons/bs'
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
        <a href='https://www.behance.net/mmnabil' target='_blank'><BsBehance /></a>
        <a href="https://www.youtube.com/c/nabilsflute" target='_blank'><FiYoutube/></a>
       </div>
       <div className="footer__copyright">
         <small>&copy; Nabil's Portal.</small>
       </div>

    </footer>
  )
}

export default Footer