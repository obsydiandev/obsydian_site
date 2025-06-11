'use client';

import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="mt-12 md:mt-16 pb-6 md:pb-8 pt-8 md:pt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center text-sm">
        <div className="text-slate-300 text-xs md:text-sm">
         Made with <span className="text-red-400">♥</span> {t.footer.copyright}
        </div>
        
        <div className="mt-2 text-xs text-slate-400 footer-links">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link hover:text-slate-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}