import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 hero-section">
      <div className="glass-main p-12 min-h-[60vh] dark:bg-white/20 dark:backdrop-blur-lg dark:border dark:border-white/30 ">
        <div className="flex flex-col items-center justify-center text-center h-full py-16">
          <Image
            src="/obsydian_no_background.png"
            alt="Obsydian Logo"
            width={400}
            height={250}
          />
          <h2 className="text-4xl md:text-5xl mb-8 text-white">Twój partner w cyfrowej magii</h2>
          <p className="text-xl md:text-2xl max-w-3xl mb-16 text-slate-200 leading-relaxed">
            Łączę technologię z kreatywnością dla firm i osób prywatnych.
          </p>
          <a href="#kontakt">
            <button className="hero-button">
              Kontakt
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}