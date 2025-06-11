'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageProvider';
import LightIcon from './themeIcons/LightIcon';
import DarkIcon from './themeIcons/DarkIcon';


export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    
    // Show pulse animation for 8 seconds after page load
    const pulseTimeout = setTimeout(() => setShowPulse(true), 1000);
    const hidePulseTimeout = setTimeout(() => setShowPulse(false), 9000);
    
    return () => {
      clearTimeout(pulseTimeout);
      clearTimeout(hidePulseTimeout);
    };
  }, [mounted]);

  const handleToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    setShowPulse(false); // Hide pulse when user interacts
  };

  // Zapobiega problemom z hydratacją - pokazuje neutralną ikonę dopóki nie jest mounted
  if (!mounted) {
    return (
      <button
        aria-label={t.ui.themeTooltip}
        className="theme-toggle-btn"
        disabled
      >
        <div className="theme-toggle-placeholder"></div>
      </button>
    );
  }

  return (
    <div className="relative flex items-center justify-center">
      <button
        aria-label={t.ui.themeTooltip}
        className={`theme-toggle-btn ${showPulse ? 'theme-toggle-pulse' : ''}`}
        onClick={handleToggle}
      >
        {resolvedTheme === 'dark' ? <LightIcon /> : <DarkIcon />}
      </button>
    </div>
  );
}