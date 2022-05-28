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

      <a href='#' onClick={() => setActiveNav('#')} className={activeNav == '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav == '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav == '#services' ? 'active' : ''}><MdOutlinePlaylistAdd /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav == '#portfolio' ? 'active' : ''}><AiOutlineAppstoreAdd /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav == '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>

    
  )
}

export default Nav