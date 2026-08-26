import React from "react";
import { useSite } from "../../context/SiteContext";
import { languages } from "../../i18n/translations";

const Header = () => {
  const { t, theme, toggleTheme, lang, setLang } = useSite();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="logo-glow">GK</div>

      <nav className="nav-menu">
        <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
          {t.nav.home}
        </a>
        <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
          {t.nav.about}
        </a>
        <a href="#skills" onClick={(e) => scrollToSection(e, "skills")}>
          {t.nav.skills}
        </a>
        <a href="#certificates" onClick={(e) => scrollToSection(e, "certificates")}>
          {t.nav.certificates}
        </a>
        <a href="#ai-tools" onClick={(e) => scrollToSection(e, "ai-tools")}>
          {t.nav.aiTools}
        </a>
        <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
          {t.nav.projects}
        </a>
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
          {t.nav.contact}
        </a>
      </nav>

      <div className="navbar-controls">
        <div className="lang-switcher">
          {languages.map((l) => (
            <button
              key={l.code}
              className={`lang-btn ${lang === l.code ? "active" : ""}`}
              onClick={() => setLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          title={theme === "dark" ? t.theme.light : t.theme.dark}
          aria-label="toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
