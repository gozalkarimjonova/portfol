import React from "react";
import { useSite } from "../../context/SiteContext";

const GITHUB_URL = "https://github.com/gozalkarimjonova";
const TELEGRAM_URL = "https://t.me/gozalkarimjonova";

const Footer = () => {
  const { t } = useSite();

  return (
    <footer className="footer-glow">
      <div className="footer-content">
        <h3 className="footer-name">Gozal Karimjonova</h3>
        <p className="footer-subtitle">{t.footer.subtitle}</p>
        <div className="social-grid">
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="social-badge">
            ✈️ Telegram
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="social-badge">
            🐙 GitHub
          </a>
        </div>
        <p className="copyright">© 2026 Gozal Karimjonova — {t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
