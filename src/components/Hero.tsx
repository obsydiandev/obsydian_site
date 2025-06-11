'use client';

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 hero-section">
      <div className="glass-main p-6 md:p-12 min-h-[50vh] md:min-h-[60vh] dark:bg-white/20 dark:backdrop-blur-lg dark:border dark:border-white/30">
        <div className="flex flex-col items-center justify-center text-center h-full py-8 md:py-16">
          <div className="mb-6 md:mb-8">
            <Image
              src="/obsydian_no_background.png"
              alt="Obsydian Logo"
              width={300}
              height={300}
              className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
              priority
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 text-white font-bold px-4">
            {t.hero.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 md:mb-16 text-slate-200 leading-relaxed px-4">
            {t.hero.subtitle}
          </p>
          <a href="#kontakt">
            <button className="hero-button px-6 py-3 md:px-8 md:py-4 text-base md:text-lg">
              {t.hero.cta}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}