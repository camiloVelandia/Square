import React from 'react';
import '../styles/components/__header.scss';

import { FiMenu } from 'react-icons/fi';

import { IconContext } from 'react-icons';
import Logo from './logo';
import Menu from './menu';

const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo">
        <Logo />
      </figure>
      <nav className="header__nav">
        <ul>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>

        <IconContext.Provider
          value={{ color: 'white', size: '2em', className: 'icon' }}
        >
          <a>
            <FiMenu />
          </a>
        </IconContext.Provider>
      </nav>
    </header>
  );
};

export default Header;
