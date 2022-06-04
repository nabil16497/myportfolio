import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlinePlaylistAdd} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import { useState } from 'react'




const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  
  return (
    <nav>

      <a href='#' onClick={() => setActiveNav('#')} className={activeNav == '#' ? 'active' : ''}><div className='nametitle'>Home</div><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav == '#about' ? 'active' : ''}><div className='nametitle'>About</div><AiOutlineUser /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav == '#services' ? 'active' : ''}><div className='nametitle'>Skill</div><MdOutlinePlaylistAdd /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav == '#portfolio' ? 'active' : ''}><div className='nametitle'>Project</div><AiOutlineAppstoreAdd /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav == '#contact' ? 'active' : ''}><div className='nametitle'>Contact</div><AiOutlineMessage /></a>
    </nav>

    
  )
}

export default Nav