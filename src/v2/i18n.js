import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import React from "react";

const resources = {
  en: {
    translation: {
      "DonauTech": "DonauTech",
      "Sign In": "Sign In",
      "Sign Up": "Sign Up",

      "Let's bring your ideas to life": "Let's bring your ideas to life",
      "We provide best verified IT qualification to companies": "We provide best verified IT qualification to companies",
      "Bootstrap your product": "Bootstrap your product",
      "Discover the experience": "Discover the experience",

      "Long-term relationships": "Long-term relationships",
      "We\'re aiming for long-term relationships": "We\'re aiming for long-term relationships",
      ", there\'s no place for such things as fraud or overcharges.": ", there\'s no place for such things as fraud or overcharges.",
      "Best technology stack": "Best technology stack",
      "We use technologies that proven themselves over the long run": "We use technologies that proven themselves over the long run",
      ", but it doesn\'t mean there\'s no place for something new.": ", but it doesn\'t mean there\'s no place for something new.",
      "Real customer centricity": "Real customer centricity",
      "We have absolutely fantastic system for managing your product, ": "We have absolutely fantastic system for managing your product, ",
      "with dashboard, PMS, and even AI forecasts.": "with dashboard, PMS, and even AI forecasts.",

      "Product/Software development": "Product/Software development",
      "Machine Learning": "Machine Learning",
      "Upcoming product ;)": "Upcoming product ;)",
      "Medium articles": "Medium articles",
      "Behaiv": "Behaiv",
      "YouTube Lessons": "YouTube Lessons",
      "Lovepons": "Lovepons",
      "Your next project?": "Your next project?",
      "IOT/Scooter Business services": "IOT/Scooter Business services",
      "Our products and services": "Our products and services",

      "Keep in touch": "Keep in touch",
      "We\'ll send you our offers, vacancies and articles once a month": "We\'ll send you our offers, vacancies and articles once a month",
      "Keep me updated": "Keep me updated",

      "Interested in our company? Contact us!": "Interested in our company? Contact us!",
      "We are here to help. Get in touch!": "We are here to help. Get in touch!",
      
      "DonauTech OÜ": "DonauTech OÜ",
      "Legal": "Legal",
      "Terms": "Terms",
      "Privacy": "Privacy",
      "Language": "Language",
      "Icons made by ": "Icons made by ",
      "Freepik": "Freepik ",
      "from": "from ",
      "is licensed by": " is licensed by ",

      "Coming soon": "Coming soon :C",
      "We're working on our customer panel, let us notify you when it's done.": "We're working on our customer panel, let us notify you when it's done."
    }
  },
  de: {
    translation: {
      "DonauTech": "DonauTech",
      "Sign In": "Einloggen",
      "Sign Up": "Anmelden",

      "Let's bring your ideas to life": "Lassen Sie uns Ihre Ideen zum Leben erwecken",
      "We provide best verified IT qualification to companies": "Wir bieten Unternehmen die am besten überprüfte IT-Qualifikation",
      "Bootstrap your product": "Bootstrap Ihr Produkt",
      "Discover the experience": "Entdecken Sie die Erfahrung",

      "Long-term relationships": "Langzeitbeziehungen",
      "We\'re aiming for long-term relationships": "Wir streben langfristige Beziehungen an",
      ", there\'s no place for such things as fraud or overcharges.": ", es gibt keinen Platz für solche Dinge wie Betrug oder Übergebühren.",
      "Best technology stack": "Bester Technologie-Stack",
      "We use technologies that proven themselves over the long run": "Wir setzen Technologien ein, die sich langfristig bewährt haben",
      ", but it doesn\'t mean there\'s no place for something new.": ", das heißt aber nicht, dass es keinen Platz für etwas Neues gibt.",
      "Real customer centricity": "Echte Kundenorientierung",
      "We have absolutely fantastic system for managing your product, ": "Wir haben ein absolut fantastisches System zur Verwaltung Ihres Produkts, ",
      "with dashboard, PMS, and even AI forecasts.": "mit Dashboard-, PMS- und sogar AI-Vorhersagen.",

      "Product/Software development": "Produkt/Software Entwicklung",
      "Machine Learning": "Machine Learning",
      "Upcoming product ;)": "Bevorstehendes Produkt ;)",
      "Medium articles": "Medium Artikel",
      "Behaiv": "Behaiv",
      "YouTube Lessons": "YouTube-Lektionen",
      "Lovepons": "Lovepons",
      "Your next project?": "Dein nächstes Projekt?",
      "IOT/Scooter Business services": "IOT / Scooter Business-Dienstleistungen",
      "Our products and services": "Unsere Produkte und Dienstleistungen",

      "Keep in touch": "Lass uns in Kontakt bleiben",
      "We\'ll send you our offers, vacancies and articles once a month": "Wir senden Ihnen einmal im Monat unsere Angebote, Stellenangebote und Artikel",
      "Keep me updated": "Halte mich auf dem Laufenden",
      "Interested in our company? Contact us!": "Interessiert an unserer Firma? Kontaktiere uns!",
      "We are here to help. Get in touch!": "Wir sind hier um zu helfen.",

      "DonauTech OÜ": "DonauTech OÜ",
      "Legal": "Legal",
      "Terms": "Terms",
      "Privacy": "Privacy",
      "Language": "Sprache",
      "Icons made by ": "Icons made by",
      "Freepik": "Freepik",
      "from": "from",
      "is licensed by": " is licensed by ",

      "Coming soon": "Kommt bald :C",
      "We're working on our customer panel, let us notify you when it's done.": "Wir arbeiten an unserem Kundenpanel. Lassen Sie sich von uns benachrichtigen, wenn dies erledigt ist."
    }
  }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: "en",

      keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
        escapeValue: false // react already safes from xss
      }
    });

export default i18n;