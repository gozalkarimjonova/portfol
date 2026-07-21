import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-glow">
      <div className="footer-content">
        <h3 className="footer-name">Gozal Karimjonova</h3>
        <p className="footer-subtitle">Frontend Developer</p>
        <div className="social-grid">
          <a href="https://t.me" target="_blank" rel="noreferrer" className="social-badge">✈️ Telegram</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-badge">🐙 GitHub</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-badge">📸 Instagram</a>
        </div>
        <p className="copyright">© 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;