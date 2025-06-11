export default function About() {
  return (
    <div className="h-full">
      <div className="glass-main p-8 h-full flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">O mnie</h2>
        <div className="flex items-center gap-6 mb-6">
          <img 
            src="/7DE5618B-B1CE-4FDF-8A07-ED74DC2483DB_4_5005_c.jpeg" 
            alt="Obsydian" 
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Imię</h3>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-lg text-center mb-2 text-slate-200">
            Jestem pasjonatem nowoczesnych technologii, designu i skutecznego marketingu.
            Obsydian to nie tylko nazwa – to symbol przemiany, energii i nieszablonowych rozwiązań.
          </p>
          <p className="text-md text-center text-slate-300">
            Jeśli chcesz, żeby Twój projekt się wyróżnił – połączmy siły!
          </p>
        </div>
      </div>
    </div>
  );
}