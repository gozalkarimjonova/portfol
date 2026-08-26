import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../i18n/translations";

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "uz";
    return localStorage.getItem("portfolio-lang") || "uz";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    // Theme class must live on <html> (not just an inner div) so that
    // CSS variables cascade to <body> and its own background as well.
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(theme === "light" ? "theme-light" : "theme-dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const t = translations[lang];

  return (
    <SiteContext.Provider value={{ theme, toggleTheme, lang, setLang, t }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return ctx;
}
