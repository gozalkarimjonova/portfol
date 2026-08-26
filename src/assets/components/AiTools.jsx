import { useSite } from "../../context/SiteContext";

const AI_TOOLS = [
  { name: "ChatGPT", icon: "◐", descKey: "chatgpt" },
  { name: "Claude", icon: "✦", descKey: "claude" },
  { name: "GitHub Copilot", icon: "🐙", descKey: "copilot" },
  { name: "Midjourney", icon: "✧", descKey: "midjourney" },
  { name: "Cursor", icon: "▲", descKey: "cursor" },
  { name: "v0", icon: "◆", descKey: "v0" },
];

const AiTools = () => {
  const { t } = useSite();

  return (
    <section id="ai-tools" className="content-section fade-in">
      <div className="section-number">04</div>
      <h2 className="section-heading">
        {t.aiTools.title.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="accent-text">
          {t.aiTools.title.split(" ").slice(-1)}
        </span>
      </h2>
      <p className="section-subtitle">{t.aiTools.subtitle}</p>

      <div className="ai-tools-grid">
        {AI_TOOLS.map((tool) => (
          <div className="ai-tool-tile scale-in" key={tool.name}>
            <div className="ai-tool-icon">{tool.icon}</div>
            <span className="ai-tool-name">{tool.name}</span>
            <span className="ai-tool-desc">{t.aiTools[tool.descKey]}</span>
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "14px", marginTop: "48px" }}>
        ✦ Sun'iy intellekt va inson ijodkorligini birlashtirib, tezroq va aqlliroq ishlayman ✦
      </p>
    </section>
  );
};

export default AiTools;
