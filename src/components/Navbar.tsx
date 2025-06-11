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
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <div className="glass-main p-4">
          <div className="flex items-center justify-between">
            {/* Logo po lewej stronie */}
            <div>
              <a href="#home" className="group">
                <img 
                  src="/logo_white.png" 
                  alt="Obsydian Logo" 
                  className="navbar-logo dark:filter dark:brightness-0 dark:invert"
                />
              </a>
            </div>
            
            {/* Menu po prawej stronie */}
            <div className="flex items-center gap-6">
              {NAV_LINKS.map(link => {
                const id = link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${
                      active === id ? 'active' : 'inactive'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}