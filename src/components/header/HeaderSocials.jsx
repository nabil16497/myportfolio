import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
//import {BsDribbble} from 'react-icons/bs'
import {BsBehance} from 'react-icons/bs'
import {FaGoogleDrive} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socails'>
      <a href='https://github.com/nabil16497' target='_blank'><BsGithub /></a>
      <a href='https://drive.google.com/drive/folders/1zkloX4fy7_hLbIhPy4ZN-Nt85wSE1k14?usp=sharing' target='_blank'><FaGoogleDrive /></a>
      <a href='https://www.linkedin.com/in/nabil16497/' target='_blank'><BsLinkedin /></a>
      <a href='https://www.behance.net/mmnabil' target='_blank'><BsBehance /></a>
      

    </div>
  )
}

export default HeaderSocials