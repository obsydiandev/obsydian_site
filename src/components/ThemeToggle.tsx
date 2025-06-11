'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import LightIcon from './themeIcons/LightIcon';
import DarkIcon from './themeIcons/DarkIcon';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Dzięki temu unikamy problemów z SSR (miga przy ładowaniu)
  if (!mounted) return null;

  return (
    <button
      aria-label="Przełącz motyw"
      className="glass p-2 rounded-full transition hover:scale-110"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      title="Przełącz motyw"
    >
      {resolvedTheme === 'dark' ? (
        <span role="img" aria-label="Jasny motyw">🌞</span>
      ) : (
        <span role="img" aria-label="Ciemny motyw">🌜</span>
      )}
    </button>
  );
}