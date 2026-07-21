import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import girl from "./assets/image/girl.png"

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container" id="home">
      <Header />

      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-text-content">
          <span className="pill-badge">Frontend Developer</span>
          <h1 className="hero-title">
            Gozal <br />
            <span className="gradient-text">Karimjonova</span>
          </h1>
          <p className="hero-description">
            Men React va Tailwind CSS yordamida zamonaviy, responsive va premium web saytlar yarataman.
          </p>

          <div className="hero-actions">
            <button className="btn-glow" onClick={() => scrollToSection('projects')}>
              View Projects
            </button>
            <button className="btn-glass" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>

          <div className="stats-container">
            <div className="stat-box">
              <span className="stat-icon">👤</span>
              <div>
                <span className="stat-label">Age</span>
                <span className="stat-value">16</span>
              </div>
            </div>
            <div className="stat-box">
              <span className="stat-label">Country</span>
              <span className="stat-value">Uzbekistan</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Experience</span>
              <span className="stat-value">1+ Years</span>
            </div>
          </div>
        </div>

        {/* Birinchi rasm (Noutbuk ushlagan qiz) */}
        <div className="hero-image-wrapper">
          <div className="image-glow-effect"></div>
        <div className="hero-image-wrapper">
  <div className="image-glow-effect"></div>

          <img src={girl} alt="" />
</div>



        </div>
      </section>

      {/* Skroll bo'lishi uchun alohida, masofali bo'limlar */}
      <div className="sections-wrapper">
        {/* About Section */}
        <section id="about" className="glow-card section-card">
          <h2 className="section-title">About Me</h2>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-icon">👤</span>
              <div>
                <small>Ism</small>
                <p>Gozal Karimjonova</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🎂</span>
              <div>
                <small>Yosh</small>
                <p>16</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div>
                <small>Davlat</small>
                <p>Uzbekistan</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">💼</span>
              <div>
                <small>Kasb</small>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="glow-card section-card">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid-wrapper">
            <div className="skill-tile html">
              <div className="skill-logo">5</div>
              <span>HTML</span>
            </div>
            <div className="skill-tile css">
              <div className="skill-logo">3</div>
              <span>CSS</span>
            </div>
            <div className="skill-tile js">
              <div className="skill-logo">JS</div>
              <span>JavaScript</span>
            </div>
            <div className="skill-tile react">
              <div className="skill-logo">⚛</div>
              <span>React</span>
            </div>
            <div className="skill-tile tailwind">
              <div className="skill-logo">〰</div>
              <span>Tailwind</span>
            </div>
            <div className="skill-tile github">
              <div className="skill-logo">🐙</div>
              <span>GitHub</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="glow-card section-card">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon">💻</div>
              <h4>Portfolio Website</h4>
              <p>Zamonaviy kosmik stildagi portfolio sayt.</p>
            </div>
            <div className="project-card">
              <div className="project-icon">🚀</div>
              <h4>Landing Page</h4>
              <p>Yuqori tezlikda ishlovchi taqdimot sahifasi.</p>
            </div>
            <div className="project-card">
              <div className="project-icon">📊</div>
              <h4>Dashboard UI</h4>
              <p>Interaktiv analitika va boshqaruv paneli.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="glow-card section-card">
          <h2 className="section-title">Contact</h2>
          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>gozalkarimjonova4@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+998 99 854 55 52</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Uzbekistan</span>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;