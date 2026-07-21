import React from 'react';

const Header = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="logo-glow">GK</div>
      <nav className="nav-menu">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
        <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;