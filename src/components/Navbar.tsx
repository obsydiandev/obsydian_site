'use client';

import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { name: 'Usługi', href: '#uslugi' },
  { name: 'O mnie', href: '#about' },
  { name: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [active, setActive] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sprawdź czy strona jest przescrollowana
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Pobierz pozycje sekcji względem viewportu
      const scrollY = window.scrollY + 100; // +100 dla offsetu navbara
      let current = 'home';
      for (const link of NAV_LINKS) {
        const id = link.href.replace('#', '');
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // od razu przy załadowaniu

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto relative flex items-center px-6 py-10">
        {/* Logo po lewej stronie */}
        <div className="absolute left-6">
          <a href="#home" className="group">
            <img 
              src="/logo_horizontal_no_background.png" 
              alt="Obsydian Logo" 
              className="h-40 w-auto transition-all duration-300 group-hover:opacity-80 filter brightness-0 invert"
            />
          </a>
        </div>
        
        {/* Menu po prawej stronie */}
        <div className="absolute right-6 flex items-center gap-6">
          {NAV_LINKS.map(link => {
            const id = link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-base text-slate-300 hover:text-white transition-colors ${
                  active === id ? 'font-bold text-white' : ''
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}