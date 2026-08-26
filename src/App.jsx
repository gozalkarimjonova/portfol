import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Certificate from "./assets/components/Certificate";
import AiTools from "./assets/components/AiTools";
import girl from "./assets/image/girl.png";
import { useSite } from "./context/SiteContext";

const PHONE_NUMBER = "+99 854 55 52";
const PHONE_HREF = "tel:+998998545552";
const GITHUB_URL = "https://github.com/gozalkarimjonova";
const EMAIL_URL = "mailto:gozalkarimjonova4@gmail.com";
const TELEGRAM_BOT_URL = "https://t.me/gozalkarimjonova";
const LOCATION_URL = "https://www.google.com/maps/search/Uzbekistan";

function App() {
  const { t } = useSite();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendToTelegram = () => {
    const { name, email, subject, message } = formData;
    if (!name.trim() || !message.trim()) {
      alert("Iltimos, ismingiz va xabarni kiriting!");
      return;
    }
    const text = `📩 *Portfolio dan yangi xabar*\n\n👤 Ism: ${name}\n📧 Email: ${email || "Ko'rsatilmagan"}\n📝 Mavzu: ${subject || "Ko'rsatilmagan"}\n\n💬 Xabar:\n${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`${TELEGRAM_BOT_URL}?text=${encodedText}`, "_blank");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const els = document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right, .scale-in, .stagger-child");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container" id="home">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-left">
            <span className="pill-badge">{t.hero.badge}</span>
            <h1 className="hero-title">
              {t.hero.greeting} <br />
              <span className="gradient-text">{t.hero.name}</span>{" "}
              <span className="hero-surname">{t.hero.surname}</span>
            </h1>
            <div className="typed-wrapper">
              <span className="typed-cursor">&gt; </span>
              <span className="typed-text">{t.hero.typed[0]} |</span>
            </div>
            <p className="hero-description">{t.hero.description}</p>
            <div className="hero-actions">
              <button
                className="btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                {t.hero.btnProjects}
              </button>
              <button
                className="btn-secondary"
                onClick={() => scrollToSection("contact")}
              >
                {t.hero.btnContact}
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="terminal-card">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">
                  gozal@portfolio ~ %
                </span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-cmd">{t.terminal.title}</span>
                </div>
                <div className="terminal-output">
                  {t.terminal.name}
                  <br />
                  {t.terminal.role} • 1+ year
                  <br />
                  {t.terminal.location}
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-cmd">cat {t.terminal.catTitle}</span>
                </div>
                <div className="terminal-output terminal-code">
                  {"{"}
                  <br />
                  &nbsp;&nbsp;"frontend": ["{t.terminal.frontend}"],
                  <br />
                  &nbsp;&nbsp;"design": ["{t.terminal.design}"],
                  <br />
                  &nbsp;&nbsp;"tools": ["{t.terminal.tools}"]
                  <br />
                  {"}"}
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-cmd">{t.terminal.statusTitle}</span>
                </div>
                <div className="terminal-output terminal-status">
                  ✦ {t.terminal.status}
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-cursor-blink">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">16</span>
            <span className="stat-label">{t.hero.age}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">UZ</span>
            <span className="stat-label">{t.hero.country}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">1+</span>
            <span className="stat-label">{t.hero.experience}</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section fade-in">
        <div className="section-number">01</div>
        <h2 className="section-heading">
          {t.about.title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="accent-text">
            {t.about.title.split(" ").slice(-1)}
          </span>
        </h2>
        <p className="section-subtitle">{t.about.subtitle}</p>

        <div className="about-grid">
          <div className="about-left">
            <p className="about-bio">{t.about.bio1}</p>
            <p className="about-bio">{t.about.bio2}</p>
            <p className="about-bio">{t.about.bio3}</p>

            <div className="about-info-grid">
              <a className="info-card info-card-link fade-in-left" href={EMAIL_URL}>
                <span className="info-icon">✉️</span>
                <div>
                  <small>{t.about.email}</small>
                  <p>gozalkarimjonova4@gmail.com</p>
                </div>
              </a>
              <a className="info-card info-card-link fade-in-left" href={PHONE_HREF}>
                <span className="info-icon">📞</span>
                <div>
                  <small>{t.about.phone}</small>
                  <p>{PHONE_NUMBER}</p>
                </div>
              </a>
              <a className="info-card info-card-link fade-in-left" href={TELEGRAM_BOT_URL} target="_blank" rel="noreferrer">
                <span className="info-icon">✈️</span>
                <div>
                  <small>{t.about.telegram}</small>
                  <p>@gozalkarimjonova</p>
                </div>
              </a>
              <a className="info-card info-card-link fade-in-left" href={LOCATION_URL} target="_blank" rel="noreferrer">
                <span className="info-icon">📍</span>
                <div>
                  <small>{t.about.location}</small>
                  <p>Uzbekistan</p>
                </div>
              </a>
            </div>
          </div>

          <div className="about-right">
            <div className="role-card fade-in-right">
              <span className="role-icon">💻</span>
              <div>
                <h4>{t.about.roles.frontend}</h4>
                <p>{t.about.roles.frontendDesc}</p>
              </div>
            </div>
            <div className="role-card fade-in-right">
              <span className="role-icon">🎨</span>
              <div>
                <h4>{t.about.roles.designer}</h4>
                <p>{t.about.roles.designerDesc}</p>
              </div>
            </div>
            <div className="role-card fade-in-right">
              <span className="role-icon">📚</span>
              <div>
                <h4>{t.about.roles.learner}</h4>
                <p>{t.about.roles.learnerDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="content-section fade-in">
        <div className="section-number">02</div>
        <h2 className="section-heading">
          {t.skills.title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="accent-text">
            {t.skills.title.split(" ").slice(-1)}
          </span>
        </h2>
        <p className="section-subtitle">{t.skills.subtitle}</p>            <div className="skill-category fade-in">
          <h3 className="skill-category-title">FRONTEND</h3>
          <div className="skill-tags">
            <span className="skill-tag"><span className="skill-tag-icon">⚛</span> React.js</span>
            <span className="skill-tag"><span className="skill-tag-icon">▲</span> Next.js</span>
            <span className="skill-tag"><span className="skill-tag-icon">TS</span> TypeScript</span>
            <span className="skill-tag"><span className="skill-tag-icon">JS</span> JavaScript (ES6+)</span>
            <span className="skill-tag"><span className="skill-tag-icon">◀</span> HTML5</span>
            <span className="skill-tag"><span className="skill-tag-icon">🎨</span> CSS3 / Sass</span>
            <span className="skill-tag"><span className="skill-tag-icon">〰</span> Tailwind CSS</span>
            <span className="skill-tag"><span className="skill-tag-icon">🌀</span> Redux / Zustand</span>
          </div>
        </div>            <div className="skill-category fade-in">
          <h3 className="skill-category-title">UI / DESIGN</h3>
          <div className="skill-tags">
            <span className="skill-tag"><span className="skill-tag-icon">✦</span> Figma</span>
            <span className="skill-tag"><span className="skill-tag-icon">◆</span> Canva</span>
            <span className="skill-tag"><span className="skill-tag-icon">📱</span> Responsive Design</span>
            <span className="skill-tag"><span className="skill-tag-icon">✨</span> Framer Motion</span>
          </div>
        </div>            <div className="skill-category fade-in">
          <h3 className="skill-category-title">TOOLS & DEPLOY</h3>
          <div className="skill-tags">
            <span className="skill-tag"><span className="skill-tag-icon">🐙</span> Git / GitHub</span>
            <span className="skill-tag"><span className="skill-tag-icon">▲</span> Vercel</span>
            <span className="skill-tag"><span className="skill-tag-icon">📦</span> npm / pnpm / yarn</span>
            <span className="skill-tag"><span className="skill-tag-icon">🟢</span> Node.js</span>
            <span className="skill-tag"><span className="skill-tag-icon">🍃</span> MongoDB</span>
          </div>
        </div>            <div className="skill-category fade-in">
          <h3 className="skill-category-title">AI & EMERGING</h3>
          <div className="skill-tags">
            <span className="skill-tag"><span className="skill-tag-icon">✦</span> ChatGPT / OpenAI</span>
            <span className="skill-tag"><span className="skill-tag-icon">◐</span> Claude</span>
            <span className="skill-tag"><span className="skill-tag-icon">▲</span> Cursor</span>
            <span className="skill-tag"><span className="skill-tag-icon">✧</span> Midjourney</span>
            <span className="skill-tag"><span className="skill-tag-icon">◆</span> v0 by Vercel</span>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <Certificate />

      {/* AI Tools Section */}
      <AiTools />

      {/* Projects Section */}
      <section id="projects" className="content-section fade-in">
        <div className="section-number">05</div>
        <h2 className="section-heading">
          {t.projects.title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="accent-text">
            {t.projects.title.split(" ").slice(-1)}
          </span>
        </h2>
        <p className="section-subtitle">{t.projects.subtitle}</p>

        <div className="projects-grid">
          <a
            href="https://true-project-xuyj.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-card scale-in"
          >
            <div className="project-card-header">
              <span className="project-icon">💻</span>
              <span className="project-badge-live">✦ Live</span>
            </div>
            <h4>True Project</h4>
            <p>React asosida yaratilgan interaktiv veb-ilova.</p>
            <div className="project-tech">
              <span>React</span>
              <span>Vercel</span>
            </div>
          </a>
          <a
            href="https://router-lesson-taupe.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-card scale-in"
          >
            <div className="project-card-header">
              <span className="project-icon">🧭</span>
              <span className="project-badge-live">✦ Live</span>
            </div>
            <h4>Router Lesson</h4>
            <p>React Router navigatsiya darslari va amaliyot.</p>
            <div className="project-tech">
              <span>React</span>
              <span>React Router</span>
            </div>
          </a>
          <a
            href="https://map-fetch.vercel.app/#3182ce"
            target="_blank"
            rel="noreferrer"
            className="project-card scale-in"
          >
            <div className="project-card-header">
              <span className="project-icon">🗺️</span>
              <span className="project-badge-live">✦ Live</span>
            </div>
            <h4>Map Fetch</h4>
            <p>API dan ma'lumot olish va xaritada ko'rsatish.</p>
            <div className="project-tech">
              <span>JavaScript</span>
              <span>Fetch API</span>
              <span>Maps</span>
            </div>
          </a>
          <a
            href="https://use-effect-project-mu.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-card scale-in"
          >
            <div className="project-card-header">
              <span className="project-icon">⚡</span>
              <span className="project-badge-live">✦ Live</span>
            </div>
            <h4>UseEffect Project</h4>
            <p>React useEffect hook amaliyot loyihasi.</p>
            <div className="project-tech">
              <span>React</span>
              <span>Hooks</span>
              <span>State</span>
            </div>
          </a>
          <a
            href="https://euphonious-snickerdoodle-716ff4.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="project-card scale-in"
          >
            <div className="project-card-header">
              <span className="project-icon">🌐</span>
              <span className="project-badge-live">✦ Live</span>
            </div>
            <h4>Netlify App</h4>
            <p>Zamonaviy veb-ilova, Netlify'da deploy qilingan.</p>
            <div className="project-tech">
              <span>React</span>
              <span>Netlify</span>
            </div>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="project-card scale-in"
          >
            <div className="project-card-header">
              <span className="project-icon">🎯</span>
              <span className="project-badge">✦ Portfolio</span>
            </div>
            <h4>Portfolio Website</h4>
            <p>Zamonaviy premium portfolio sayt.</p>
            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>i18n</span>
            </div>
          </a>
        </div>

        <div className="projects-cta">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-github">
            GitHub profilga o'tish →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-section fade-in">
        <div className="section-number">06</div>
        <h2 className="section-heading">
          {t.contact.title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="accent-text">
            {t.contact.title.split(" ").slice(-1)}
          </span>
        </h2>
        <p className="section-subtitle">{t.contact.subtitle}</p>

        <div className="contact-grid">            <div className="contact-form-card fade-in-left">
              <h3>{t.contact.send}</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>{t.contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label>{t.contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>{t.contact.subject}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={t.contact.subjectPlaceholder}
                />
              </div>
              <div className="form-group">
                <label>{t.contact.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.contact.messagePlaceholder}
                ></textarea>
              </div>
              <button className="btn-primary btn-full" onClick={handleSendToTelegram}>
                {t.contact.send}
              </button>
            </div>

          <div className="contact-info-side">
            <div className="contact-ready-card fade-in-right">
              <span className="pill-badge-sm">✦ Open to opportunities</span>
              <h3>{t.contact.ready}</h3>
              <p>{t.contact.readyDesc}</p>
            </div>

            <div className="contact-links fade-in-right">
              <a className="contact-link-item" href={EMAIL_URL}>
                <span className="contact-link-icon">✉️</span>
                <div>
                  <small>{t.about.email}</small>
                  <p>gozalkarimjonova4@gmail.com</p>
                </div>
                <span className="contact-link-arrow">↗</span>
              </a>
              <a className="contact-link-item" href={PHONE_HREF}>
                <span className="contact-link-icon">📞</span>
                <div>
                  <small>{t.about.phone}</small>
                  <p>{PHONE_NUMBER}</p>
                </div>
                <span className="contact-link-arrow">↗</span>
              </a>
              <a className="contact-link-item" href={GITHUB_URL} target="_blank" rel="noreferrer">
                <span className="contact-link-icon">🐙</span>
                <div>
                  <small>GitHub</small>
                  <p>github.com/gozalkarimjonova</p>
                </div>
                <span className="contact-link-arrow">↗</span>
              </a>
              <a className="contact-link-item" href={TELEGRAM_BOT_URL} target="_blank" rel="noreferrer">
                <span className="contact-link-icon">✈️</span>
                <div>
                  <small>Telegram</small>
                  <p>@gozalkarimjonova</p>
                </div>
                <span className="contact-link-arrow">↗</span>
              </a>
              <a className="contact-link-item" href={LOCATION_URL} target="_blank" rel="noreferrer">
                <span className="contact-link-icon">📍</span>
                <div>
                  <small>{t.about.location}</small>
                  <p>Uzbekistan</p>
                </div>
                <span className="contact-link-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
