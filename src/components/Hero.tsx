export default function Hero() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="glass-main p-12 min-h-[60vh] dark:bg-white/20 dark:backdrop-blur-lg dark:border dark:border-white/30">
        <div className="flex flex-col items-center justify-center text-center h-full py-16">
          <img
            src="/obsydian_no_background.png"
            alt="Obsydian Logo"
            className="w-100 h-100"
          />
          <h2 className="text-4xl md:text-5xl mb-8">Twój partner w cyfrowej magii</h2>
          
          <p className="text-xl md:text-2xl max-w-3xl mb-16 text-slate-200 leading-relaxed">
            Łączę technologię z kreatywnością dla firm i osób prywatnych.
          </p>
          <a href="#kontakt">
            <button className="px-10 py-4 text-xl glass-card text-white hover:bg-slate-600 transition-all duration-300 transform hover:scale-105">
              Kontakt
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}