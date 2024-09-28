import React, { useState, useEffect } from 'react';
import '../Theme/themeToggle.css';

import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

export default function ThemeToggle() {
    const [theme, setTheme] = useState('dark');
  
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
        document.body.className = savedTheme;
      }
    }, [theme]);
  
    const toggleTheme = (newTheme) => {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.body.className = newTheme;
    };
  
    return (
      <div className="theme-toggle">
        <button
          onClick={() => toggleTheme('light')}
          className={`theme-button ${theme === 'light' ? 'active' : ''}`}
          aria-label="Light mode"
        >
          <FiSun size={20} />
        </button>
        <button
          onClick={() => toggleTheme('dark')}
          className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
          aria-label="Dark mode"
        >
          <FiMoon size={20} />
        </button>
        <button
          onClick={() => toggleTheme('colorblind')}
          className={`theme-button ${theme === 'colorblind' ? 'active' : ''}`}
          aria-label="Color blind mode"
        >
          <FiEye size={20} />
        </button>
      </div>
    );
  }