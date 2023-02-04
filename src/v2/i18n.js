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
      "We provide enterprise-grade software planning and development": "We provide enterprise-grade software planning and development",
      "Mobile + PC": "Mobile + PC",
      "Blockchain": "Blockchain",

      "Machine Learning": "Machine Learning",
      "Machine Learning Algorithms": "Machine Learning Algorithms",
      "Computer Vision": "Computer Vision",
      "Supervised Machine Learning": "Supervised Machine Learning",
      "Unsupervised Machine Learning": "Unsupervised Machine Learning",
      "Deep Learning": "Deep Learning",
      "Neural Networks": "Neural Networks",
      "Reinforcement Learning": "Reinforcement Learning",
      "Predictive Learning": "Predictive Learning",

      "Upcoming product ;)": "Upcoming product ;)",

      "Medium articles": "Medium articles",
      "We write articles at medium ranging from mobile development lifehacks to Kubernetes and Machine Learning, you should definitely check them out": "We write articles at medium ranging from mobile development lifehacks to Kubernetes and Machine Learning, you should definitely check them out",
      "Open articles": "Open articles",

      "Behaiv": "Behaiv",
      "Behaiv is a high-level AI tool that helps users to navigate faster through the app,": "Behaiv is a high-level AI tool that helps users to navigate faster through the app,",
      "predict what users want to open and take appropriate actions.": "predict what users want to open and take appropriate actions.",
      "It was developed with a focus on simplicity of usage.": "It was developed with a focus on simplicity of usage.",
      "Instead of overwhelming developers with burden of implementation,": "Instead of overwhelming developers with burden of implementation,",
      "they only need to write few lines of code.": "they only need to write few lines of code.",
      "Our company covers Java, Swift, Python and Javascript versions of this library": "Our company covers Java, Swift, Python and Javascript versions of this library",
      "Look through our library": "Look through our library",

      "YouTube Lessons": "YouTube Lessons",
      "We have small youtube channel where we put some lessons and discussions about different AI, ML and Software Engineering topics": "We have small youtube channel where we put some lessons and discussions about different AI, ML and Software Engineering topics",
      "Visit YouTube channel": "Visit YouTube channel",

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
      "We provide enterprise-grade software planning and development": "Wir bieten Softwareplanung und -entwicklung für Unternehmen",
      "Mobile + PC": "Mobile + PC",
      "Blockchain": "Blockchain",

      "Machine Learning": "Machine Learning",
      "Machine Learning Algorithms": "Machine Learning Algorithmen",
      "Computer Vision": "Computer Vision",
      "Supervised Machine Learning": "Supervised Machine Learning",
      "Unsupervised Machine Learning": "Unsupervised Machine Learning",
      "Deep Learning": "Deep Learning",
      "Neural Networks": "Neural Networks",
      "Reinforcement Learning": "Reinforcement Learning",
      "Predictive Learning": "Predictive Learning",

      "Upcoming product ;)": "Bevorstehendes Produkt ;)",

      "Medium articles": "Medium Artikel",
      "We write articles at medium ranging from mobile development lifehacks to Kubernetes and Machine Learning, you should definitely check them out": "Wir schreiben Artikel auf Medium, die von Lifehacks für die mobile Entwicklung über Kubernetes bis hin zu maschinellem Lernen reichen",
      "Open articles": "Artikel öffnen",

      "Behaiv": "Behaiv",
      "Behaiv is a high-level AI tool that helps users to navigate faster through the app," : "Behaiv ist ein hochrangiges KI-Tool, mit dem Benutzer schneller durch die App navigieren können,",
      "predict what users want to open and take appropriate actions." : "vorhersagen, welche Benutzer öffnen möchten, und geeignete Maßnahmen ergreifen.",
      "It was developed with a focus on simplicity of usage.": "Es wurde mit dem Schwerpunkt auf Benutzerfreundlichkeit entwickelt.",
      "Instead of overwhelming developers with burden of implementation,": "Anstatt Entwickler mit Implementierungslast zu überfordern,",
      "they only need to write few lines of code.": "müssen sie nur wenige Codezeilen schreiben.",
      "Our company covers Java, Swift, Python and Javascript versions of this library": "Unser Unternehmen umfasst Java-, Swift-, Python- und Javascript-Versionen dieser Bibliothek",
      "Look through our library": "Schauen Sie sich unsere Bibliothek an",

      "YouTube Lessons": "YouTube-Lektionen",
      "We have small youtube channel where we put some lessons and discussions about different AI, ML and Software Engineering topics": "Wir haben einen kleinen Youtube-Kanal, in dem wir einige Lektionen und Diskussionen zu verschiedenen AI-, ML- und Software-Engineering-Themen anbieten",
      "Visit YouTube channel": "Besuchen Sie den YouTube-Kanal",


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