import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} PYCX - Diseño y desarrollo minimalista</p>
      </div>
    </footer>
  );
};

export default Footer;