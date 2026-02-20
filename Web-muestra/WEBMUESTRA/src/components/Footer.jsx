import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} PYCX - Diseño de paginas web y desarrollo para PYMES</p>
      </div>
    </footer>
  );
};

export default Footer;