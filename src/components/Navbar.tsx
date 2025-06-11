'use client';

import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { name: 'Usługi', href: '#uslugi' },
  { name: 'O mnie', href: '#about' },
  { name: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      // Sprawdź aktywną sekcję na podstawie scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      if (currentSection && currentSection !== active) {
        setActive(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // od razu przy załadowaniu

    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <div className="glass-main p-4">
          <div className="flex items-center justify-between">
            {/* Logo po lewej stronie */}
            <div>
              <a href="#home" className="group">
                  <Image
                    src="/logo_white.png"
                    alt="Obsydian Logo"
                    width={120}
                    height={40}
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