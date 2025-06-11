'use client';

import { useEffect } from 'react';

export default function ScrollShimmer() {
  useEffect(() => {
    const handleScroll = () => {
      const glassElements = document.querySelectorAll('.glass-main');
      
      glassElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        
        if (isVisible) {
          const elementTop = rect.top;
          const elementHeight = rect.height;
          const viewportMiddle = windowHeight / 2;
          
          let scrollProgress = 0;
          
          if (elementTop <= viewportMiddle && elementTop + elementHeight >= viewportMiddle) {
            scrollProgress = 1;
          } else if (elementTop > 0) {
            scrollProgress = Math.max(0, (windowHeight - elementTop) / windowHeight);
          } else {
            scrollProgress = Math.max(0, (elementTop + elementHeight) / windowHeight);
          }
          
          const beforeElement = element as HTMLElement;
          
          if (scrollProgress > 0.1) {
            // Shimmer zawsze porusza się z lewej górnej do prawej dolnej
            // Używamy całkowitej pozycji scroll względem całej strony
            const totalScrolled = window.pageYOffset;
            const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
            const globalScrollProgress = Math.min(totalScrolled / maxScroll, 1);
            
            // Shimmer wolno przesuwa się przez cały viewport podczas scrolla
            // Od -150% do +150% dla szerszego zakresu
            const shimmerX = -150 + (globalScrollProgress * 300);
            const shimmerY = -60 + (globalScrollProgress * 120);
            const opacity = Math.min(scrollProgress * 1.2, 0.6); // Maksymalna opacity 0.6
            
            beforeElement.style.setProperty('--shimmer-x', `${shimmerX}%`);
            beforeElement.style.setProperty('--shimmer-y', `${shimmerY}%`);
            beforeElement.style.setProperty('--shimmer-opacity', opacity.toString());
          } else {
            beforeElement.style.setProperty('--shimmer-opacity', '0');
          }
        } else {
          const beforeElement = element as HTMLElement;
          beforeElement.style.setProperty('--shimmer-opacity', '0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
