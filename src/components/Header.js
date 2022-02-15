import React from 'react';
import './Header.css';
import logo from '../images/logo.png';

function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src={logo} />
      <h1 className='header__title'>my travel journal</h1>
    </div>
  )
}

export default Header