import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/dp.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <h2></h2>
      <div className="container__glass">
        <div className="container header__container">
          <h5>Hi, I'm</h5>
          <h1 className='header__name'>
            <ul>
              <li>M</li>
              <li>&nbsp;</li>
              <li>M</li>
              <li>&nbsp;</li>
              <li>N</li>
              <li>a</li>
              <li>b</li>
              <li>i</li>
              <li>l</li>
            </ul>
          </h1>
          <h5 className='text-light'></h5>  
          <CTA />
          <HeaderSocials />
          <div className='me'>
            <img src={ME} alt="Me" />
          </div>

          <a href='#footer' className='scroll__down'>
            <ul>
              <li>S</li>
              <li>C</li>
              <li>R</li>
              <li>O</li>
              <li>L</li>
              <li>L</li>
              <li>&nbsp;</li>
              <li>D</li>
              <li>O</li>
              <li>W</li>
              <li>N</li>
            </ul>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;