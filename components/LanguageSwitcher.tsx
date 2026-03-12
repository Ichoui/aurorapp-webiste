"use client";

import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  // Pour ajouter une langue : { code: "de", label: "DE" }
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.language?.slice(0, 2) ?? "fr";

  const switchTo = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
      {LANGUAGES.map((lang, idx) => (
        <span key={lang.code} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          <button
            onClick={() => switchTo(lang.code)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "0.75rem",
              fontWeight: current === lang.code ? 700 : 400,
              color: current === lang.code ? "var(--primary, #69bfaf)" : "rgba(241,245,249,0.5)",
              padding: "0.25rem 0.1rem",
              transition: "color 0.2s",
              letterSpacing: "0.05em",
            }}
            aria-label={`Switch language to ${lang.label}`}
          >
            {lang.label}
          </button>
          {idx < LANGUAGES.length - 1 && (
            <span style={{ color: "rgba(241,245,249,0.25)", fontSize: "0.75rem" }}>|</span>
          )}
        </span>
      ))}
    </div>
  );
};

