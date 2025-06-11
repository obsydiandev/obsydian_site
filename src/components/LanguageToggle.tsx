'use client';

import { useLanguage } from './LanguageProvider';
import { languages } from '@/lib/translations';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={toggleLanguage}
        className="language-toggle-btn"
        aria-label={t.ui.languageTooltip}
      >
        <span className="text-sm font-medium uppercase">
          {language}
        </span>
      </button>
    </div>
  );
}
