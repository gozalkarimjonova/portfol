import { useState } from "react";
import { useSite } from "../../context/SiteContext";

const CERT_URL =
  "https://lab.marsit.uz/media/cert_media/students/29264/5cc17d3a052142528fded5ed97860aac.png";

const Certificate = () => {
  const { t } = useSite();
  const [open, setOpen] = useState(false);

  return (
    <section id="certificates" className="content-section fade-in">
      <div className="section-number">03</div>
      <h2 className="section-heading">
        {t.certificates.title.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="accent-text">
          {t.certificates.title.split(" ").slice(-1)}
        </span>
      </h2>
      <p className="section-subtitle">{t.certificates.subtitle}</p>

      <div className="certificate-grid">
        <div className="cert-card scale-in" onClick={() => setOpen(true)}>
          <div className="cert-icon">🏆</div>
          <h4>{t.certificates.hackathon}</h4>
          <p>{t.certificates.hackathonDesc}</p>
          <div className="cert-reveal-hint">{t.certificates.clickToReveal}</div>
        </div>
        <div className="cert-card scale-in" onClick={() => setOpen(true)}>
          <div className="cert-icon">📜</div>
          <h4>{t.certificates.frontendCert}</h4>
          <p>{t.certificates.frontendCertDesc}</p>
          <div className="cert-reveal-hint">{t.certificates.clickToReveal}</div>
        </div>
      </div>

      {open && (
        <div className="certificate-modal" onClick={() => setOpen(false)}>
          <img src={CERT_URL} alt={t.certificates.title} className="certificate-modal-image" />
        </div>
      )}
    </section>
  );
};

export default Certificate;
