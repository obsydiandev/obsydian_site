'use client';

import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="mt-16 pb-8 pt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center text-sm">
        <div className="text-slate-300">
         Made with <span>♥</span> {t.footer.copyright}
        </div>
        
        <div className="mt-2 text-xs text-slate-400">
                    <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}