'use client';

import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageProvider';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NAV_LINKS = [
    { name: t.nav.services, href: '#uslugi' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#kontakt' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking on links
  const handleLinkClick = (href: string) => {
    closeMobileMenu();
    
    // Smooth scroll to section
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const navbar = document.querySelector('nav');
      
      if (isMobileMenuOpen && navbar && !navbar.contains(target)) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen]);

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
                  className="navbar-logo dark:filter dark:brightness-0 dark:invert sm:w-[120px] w-[100px]"
                />
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              {NAV_LINKS.map(link => {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-link inactive"
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button & Controls */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={toggleMobileMenu}
                className={`mobile-menu-btn ${isMobileMenuOpen ? 'hamburger-open' : ''}`}
                aria-label="Toggle mobile menu"
              >
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20 animate-fadeInUp">
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map(link => {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="mobile-nav-link"
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}