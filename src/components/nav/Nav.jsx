import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { MdPlaylistAdd } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

const Nav = ({ theme, toggleTheme }) => {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    toggleTheme(navId);
  };

  return (
    <nav>
      <a
        href="#"
        onClick={() => handleNavClick('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <div className="nametitle">Home</div>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleNavClick('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <div className="nametitle">About</div>
        <AiOutlineUser />
      </a>
      <a
        href="#services"
        onClick={() => handleNavClick('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <div className="nametitle">Skill</div>
        <MdPlaylistAdd />
      </a>
      <a
        href="#portfolio"
        onClick={() => handleNavClick('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <div className="nametitle">Project</div>
        <AiOutlineAppstoreAdd />
      </a>
      <a
        href="#contact"
        onClick={() => handleNavClick('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <div className="nametitle">Contact</div>
        <AiOutlineMessage />
      </a>
      <button className="theme-toggle" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default Nav;
