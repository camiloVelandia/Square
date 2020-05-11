import React, { useState } from 'react';
import '../styles/components/__header.scss';

import { IconContext } from 'react-icons';
import { FiMenu } from 'react-icons/fi';

import Logo from './logo';

const Header = () => {
  let handler = false;
  const [showClass, setClass] = useState('hide');

  function showMenu(e) {
    handler = !handler;
    setClass(showClass === 'hide' ? 'show' : 'hide');
    e.preventDefault();
  }

  return (
    <header className="header">
      <figure className="header__logo">
        <Logo />
      </figure>
      <nav className="header__nav">
        <menu className={`${showClass} header__nav-list`}>
          <ul>
            <h2>Menu</h2>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </menu>
        <IconContext.Provider
          className="burger"
          value={{ color: 'white', size: '2em', className: 'icon' }}
        >
          <FiMenu onClick={showMenu} onKeyDown={showMenu} />
        </IconContext.Provider>
      </nav>
    </header>
  );
};

export default Header;
