import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fr from "../public/locales/fr/translation.json";
import en from "../public/locales/en/translation.json";

// Pour ajouter une nouvelle langue :
// 1. Créer public/locales/<code>/translation.json
// 2. L'importer ici
// 3. L'ajouter dans `resources` et `supportedLngs`

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    fallbackLng: "fr",
    supportedLngs: ["fr", "en"],
    interpolation: {
      escapeValue: false, // React gère déjà l'escaping
    },
    detection: {
      // Priorité : préférence stockée → langue du navigateur
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "aurorapp_lang",
    },
  });

export default i18n;

