import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <a href="/home" className="footer-link">Home</a>
          <a href="/assets" className="footer-link">Assets</a>
          <a href="/licenses" className="footer-link">Licenses</a>
          <a href="/users" className="footer-link">Registered Users</a>
        </nav>
        <p>&copy; 2024 My-App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
