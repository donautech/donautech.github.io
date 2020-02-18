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
      "Customers choose our company not because of technologies, but because of versatility and commitment": "Customers choose our company not because of technologies, but because of versatility and commitment",
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
      "DonauTech": "DonauTech DE",
      "Sign In": "Sign In DE",
      "Sign Up": "Sign Up DE",

      "Let's bring your ideas to life": "Let's bring your ideas to life DE",
      "Customers choose our company not because of technologies, but because of versatility and commitment": "Customers choose our company not because of technologies, but because of versatility and commitment DE",
      "Bootstrap your product": "Bootstrap your product DE",
      "Discover the experience": "Discover the experience DE",

      "Long-term relationships": "Long-term relationships DE",
      "We\'re aiming for long-term relationships": "We\'re aiming for long-term relationships DE",
      ", there\'s no place for such things as fraud or overcharges.": ", there\'s no place for such things as fraud or overcharges. DE",
      "Best technology stack": "Best technology stack DE",
      "We use technologies that proven themselves over the long run": "We use technologies that proven themselves over the long run DE",
      ", but it doesn\'t mean there\'s no place for something new.": ", but it doesn\'t mean there\'s no place for something new. DE",
      "Real customer centricity": "Real customer centricity DE",
      "We have absolutely fantastic system for managing your product, ": "We have absolutely fantastic system for managing your product, DE",
      "with dashboard, PMS, and even AI forecasts.": "with dashboard, PMS, and even AI forecasts. DE",

      "Product/Software development": "Produkt/Software Entwicklung",
      "We provide enterprise-grade software planning and development": "We provide enterprise-grade software planning and development DE",
      "Mobile + PC": "Mobile + PC DE",
      "Blockchain": "Blockchain DE",

      "Machine Learning": "Machine Learning DE",
      "Machine Learning Algorithms": "Machine Learning Algorithms DE",
      "Computer Vision": "Computer Vision DE",
      "Supervised Machine Learning": "Supervised Machine Learning DE",
      "Unsupervised Machine Learning": "Unsupervised Machine Learning DE",
      "Deep Learning": "Deep Learning DE",
      "Neural Networks": "Neural Networks DE",
      "Reinforcement Learning": "Reinforcement Learning DE",
      "Predictive Learning": "Predictive Learning DE",

      "Upcoming product ;)": "Bevorstehendes Produkt ;)",

      "Medium articles": "Medium Artikel",
      "We write articles at medium ranging from mobile development lifehacks to Kubernetes and Machine Learning, you should definitely check them out": "We write articles at medium ranging from mobile development lifehacks to Kubernetes and Machine Learning, you should definitely check them out DE",
      "Open articles": "Open articles DE",

      "Behaiv": "Behaiv DE",
      "Behaiv is a high-level AI tool that helps users to navigate faster through the app," : "Behaiv is a high-level AI tool that helps users to navigate faster through the app DE,",
      "predict what users want to open and take appropriate actions." : "predict what users want to open and take appropriate actions DE.",
      "It was developed with a focus on simplicity of usage.": "It was developed with a focus on simplicity of usage DE.",
      "Instead of overwhelming developers with burden of implementation,": "Instead of overwhelming developers with burden of implementation DE,",
      "they only need to write few lines of code.": "they only need to write few lines of code DE.",
      "Our company covers Java, Swift, Python and Javascript versions of this library": "Our company covers Java, Swift, Python and Javascript versions of this library DE",
      "Look through our library": "Look through our library DE",

      "YouTube Lessons": "YouTube Lessons DE",
      "We have small youtube channel where we put some lessons and discussions about different AI, ML and Software Engineering topics": "We have small youtube channel where we put some lessons and discussions about different AI, ML and Software Engineering topics DE",
      "Visit YouTube channel": "Visit YouTube channel DE",


      "Lovepons": "Lovepons DE",
      "Your next project?": "Your next project? DE",
      "IOT/Scooter Business services": "IOT / Scooter Business-Dienstleistungen",
      "Our products and services": "Unsere Produkte und Dienstleistungen",

      "Keep in touch": "Keep in touch DE",
      "We\'ll send you our offers, vacancies and articles once a month": "We\'ll send you our offers, vacancies and articles once a month DE",
      "Keep me updated": "Keep me updated DE",

      "Interested in our company? Contact us!": "Interested in our company? Contact us! DE",
      "We are here to help. Get in touch!": "We are here to help. Get in touch! DE",

      "DonauTech OÜ": "DonauTech OÜ DE",
      "Legal": "Legal DE",
      "Terms": "Terms DE",
      "Privacy": "Privacy DE",
      "Language": "Language DE",
      "Icons made by ": "Icons made by DE ",
      "Freepik": "Freepik DE ",
      "from": "from DE ",
      "is licensed by": " is licensed by DE ",

      "Coming soon": "Coming soon :C DE",
      "We're working on our customer panel, let us notify you when it's done.": "We're working on our customer panel, let us notify you when it's done. DE"
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