import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">&copy; {new Date().getFullYear()}</div>
      <div className="footer__right">Kostya Dergachev</div>
    </footer>
  );
};

export default Footer;
