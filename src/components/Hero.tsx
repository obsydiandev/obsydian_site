'use client';

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 hero-section">
      <div className="glass-main p-12 min-h-[60vh] dark:bg-white/20 dark:backdrop-blur-lg dark:border dark:border-white/30 ">
        <div className="flex flex-col items-center justify-center text-center h-full py-16">
          <Image
            src="/obsydian_no_background.png"
            alt="Obsydian Logo"
            width={400}
            height={400}
          />
          <h2 className="text-4xl md:text-5xl mb-8 text-white">{t.hero.title}</h2>
          <p className="text-xl md:text-2xl max-w-3xl mb-16 text-slate-200 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <a href="#kontakt">
            <button className="hero-button">
              {t.hero.cta}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}