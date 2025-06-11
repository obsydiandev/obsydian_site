export interface Translation {
  // Navigation
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
    web: {
      title: string;
      description: string;
    };
    app: {
      title: string;
      description: string;
    };
    marketing: {
      title: string;
      description: string;
    };
  };
  
  // Portfolio Section
  portfolio: {
    title: string;
    subtitle: string;
    projects: {
      website: {
        title: string;
        description: string;
      };
      mobileApp: {
        title: string;
        description: string;
      };
      photoAlbum: {
        title: string;
        description: string;
      };
    };
  };
  
  // About Section
  about: {
    title: string;
    subtitle: string;
    description: string;
    skills: string;
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    directContact: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  
  // Footer
  footer: {
    copyright: string;
  };
  
  // UI Elements
  ui: {
    themeTooltip: string;
    themeHint: string;
    languageTooltip: string;
    closeModal: string;
  };
}

export const translations: Record<string, Translation> = {
  pl: {
    nav: {
      home: "Strona główna",
      services: "Usługi",
      about: "O mnie",
      contact: "Kontakt"
    },
    hero: {
      title: "Twój partner w cyfrowej magii",
      subtitle: "Łączę technologię z kreatywnością dla firm i osób prywatnych.",
      cta: "Kontakt"
    },
    services: {
      title: "Usługi",
      subtitle: "Kompleksowe rozwiązania cyfrowe dostosowane do Twoich potrzeb",
      web: {
        title: "Strony internetowe",
        description: "Nowoczesne, responsywne strony internetowe z dbałością o każdy detal."
      },
      app: {
        title: "Aplikacje mobilne",
        description: "Intuicyjne aplikacje mobilne dla iOS i Android."
      },
      marketing: {
        title: "Marketing cyfrowy",
        description: "Skuteczne strategie marketingowe i pozycjonowanie w sieci."
      }
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Moje najnowsze realizacje",
      projects: {
        website: {
          title: "Nowoczesna strona korporacyjna",
          description: "Elegancka strona internetowa z zaawansowanymi animacjami i responsywnym designem."
        },
        mobileApp: {
          title: "Aplikacja mobilna fitness",
          description: "Intuicyjna aplikacja do śledzenia aktywności fizycznej z gamifikacją."
        },
        photoAlbum: {
          title: "Portfolio fotograficzne",
          description: "Elegancka galeria zdjęć z efektami hover i płynną nawigacją."
        }
      }
    },
    about: {
      title: "O mnie",
      subtitle: "Pasjonat technologii z wieloletnim doświadczeniem",
      description: "Jestem pełnoprofesjonalnym deweloperem z pasją do tworzenia wyjątkowych doświadczeń cyfrowych. Specjalizuję się w nowoczesnych technologiach webowych i mobilnych.",
      skills: "Umiejętności"
    },
    contact: {
      title: "Kontakt",
      subtitle: "Gotowy na nowy projekt? Napisz do mnie!",
      directContact: 'Lub skontaktuj się bezpośrednio: ',
      form: {
        name: "Imię i nazwisko",
        email: "Adres e-mail",
        message: "Wiadomość",
        send: "Wyślij wiadomość",
        sending: "Wysyłanie...",
        success: "Wiadomość została wysłana pomyślnie!",
        error: "Wystąpił błąd podczas wysyłania wiadomości."
      }
    },
    footer: {
      copyright: "© 2024 Obsydian. Wszystkie prawa zastrzeżone."
    },
    ui: {
      themeTooltip: "Wybierz motyw strony",
      themeHint: "Spróbuj jasnej lub ciemnej wersji!",
      languageTooltip: "Wybierz język",
      closeModal: "Zamknij"
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Your partner in digital magic",
      subtitle: "I combine technology with creativity for businesses and individuals.",
      cta: "Contact"
    },
    services: {
      title: "Services",
      subtitle: "Comprehensive digital solutions tailored to your needs",
      web: {
        title: "Websites",
        description: "Modern, responsive websites with attention to every detail."
      },
      app: {
        title: "Mobile apps",
        description: "Intuitive mobile applications for iOS and Android."
      },
      marketing: {
        title: "Digital marketing",
        description: "Effective marketing strategies and SEO optimization."
      }
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "My latest projects",
      projects: {
        website: {
          title: "Modern corporate website",
          description: "Elegant website with advanced animations and responsive design."
        },
        mobileApp: {
          title: "Fitness mobile app",
          description: "Intuitive app for tracking physical activity with gamification."
        },
        photoAlbum: {
          title: "Photography portfolio",
          description: "Elegant photo gallery with hover effects and smooth navigation."
        }
      }
    },
    about: {
      title: "About me",
      subtitle: "Technology enthusiast with years of experience",
      description: "I'm a full-stack developer with a passion for creating exceptional digital experiences. I specialize in modern web and mobile technologies.",
      skills: "Skills"
    },
    contact: {
      title: "Contact",
      subtitle: "Ready for a new project? Write to me!",
      directContact: 'Or contact directly: ',
      form: {
        name: "Full name",
        email: "Email address",
        message: "Message",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "An error occurred while sending the message."
      }
    },
    footer: {
      copyright: "© 2024 Obsydian. All rights reserved."
    },
    ui: {
      themeTooltip: "Choose site theme",
      themeHint: "Try light or dark version!",
      languageTooltip: "Choose language",
      closeModal: "Close"
    }
  }
};

export type Language = keyof typeof translations;
export const languages: Language[] = ['pl', 'en'];
export const defaultLanguage: Language = 'pl';
