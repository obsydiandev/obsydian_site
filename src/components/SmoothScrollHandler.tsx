"use client";
import { useEffect } from "react";

export default function SmoothScrollHandler({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Obsługa kliknięć w linki anchorowe
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          
          const targetId = href.slice(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // Płynne przewijanie z offsetem dla navbar - lepsze obliczenie pozycji
            const navbarHeight = 80;
            const targetRect = targetElement.getBoundingClientRect();
            const absoluteElementTop = targetRect.top + window.pageYOffset;
            const scrollToPosition = absoluteElementTop - navbarHeight;
            
            window.scrollTo({
              top: Math.max(0, scrollToPosition), // Zapobiega scrollowaniu powyżej góry strony
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}
