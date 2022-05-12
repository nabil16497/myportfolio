import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socails'>
      <a href='https://www.linkedin.com/in/nabil16497/' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/nabil16497' target='_blank'><BsGithub /></a>
      <a href='https://dribbble.com/nabil16497' target='_blank'><BsDribbble /></a>
      

    </div>
  )
}

export default HeaderSocials