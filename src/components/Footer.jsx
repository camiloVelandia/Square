import React from 'react';
import '../styles/components/__footer.scss';

import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <figure>
        <p>logo</p>
      </figure>
      <div className="footer__social">
        <h3>FOLLOW US</h3>
        <div className="footer__social-icons">
          <img src={Instagram} alt="instagram" />
          <img src={Facebook} alt="facebook" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
