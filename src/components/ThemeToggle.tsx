'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import LightIcon from './themeIcons/LightIcon';
import DarkIcon from './themeIcons/DarkIcon';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Zapobiega problemom z hydratacją - pokazuje neutralną ikonę dopóki nie jest mounted
  if (!mounted) {
    return (
      <button
        aria-label="Przełącz motyw"
        className="theme-toggle-btn"
        disabled
      >
        <div className="theme-toggle-placeholder"></div>
      </button>
    );
  }

  return (
    <button
      aria-label="Przełącz motyw"
      className="theme-toggle-btn"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      title="Przełącz motyw"
    >
      {resolvedTheme === 'dark' ? <LightIcon /> : <DarkIcon />}
    </button>
  );
}