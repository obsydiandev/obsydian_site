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
        className="glass-card p-2 rounded-full transition hover:scale-110 text-slate-300"
        disabled
      >
        <div className="w-5 h-5 bg-slate-400 rounded-full opacity-50"></div>
      </button>
    );
  }

  return (
    <button
      aria-label="Przełącz motyw"
      className="glass-card p-2 rounded-full transition hover:scale-110 text-slate-300 hover:text-white"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      title="Przełącz motyw"
    >
      {resolvedTheme === 'dark' ? <LightIcon /> : <DarkIcon />}
    </button>
  );
}