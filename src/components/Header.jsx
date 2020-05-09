import React, { useState } from 'react';
import '../styles/components/__header.scss';

import { FiMenu } from 'react-icons/fi';

import { IconContext } from 'react-icons';
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
        <menu className={showClass}>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </menu>
        <IconContext.Provider
          className="burger"
          onClick={showMenu}
          onKeyDown={showMenu}
          value={{ color: 'white', size: '2em', className: 'icon' }}
        >
          <FiMenu onClick={showMenu} onKeyDown={showMenu} />
        </IconContext.Provider>
      </nav>
      {/* <button
        type="button"
        className="burger"
        onClick={showMenu}
        onKeyDown={showMenu}
      >
        &#9776;
      </button> */}
    </header>
  );
};

export default Header;
