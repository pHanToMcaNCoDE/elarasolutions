// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Privacy Policy",
      content: "This is the privacy policy page in English.",
      // Add other English translations here
    }
  },
  nl: {
    translation: [
        {
            title: '1. An overview of data protection',
            sub: 'General Information'
        }
    ]
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false // React already does escaping
  }
});

export default i18n;
