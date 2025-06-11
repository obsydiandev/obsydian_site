const services = [
  {
    title: 'Strony internetowe',
    desc: 'Nowoczesne, responsywne strony www – wizytówki, sklepy, portale.',
  },
  {
    title: 'Aplikacje',
    desc: 'Dedykowane aplikacje webowe – szyte na miarę Twojego biznesu.',
  },
  {
    title: 'Marketing & Foto',
    desc: 'Kampanie, social media, content, fotografia produktowa i wizerunkowa.',
  },
];

const projects = [
  {
    name: "Sklep BlueZen",
    desc: "Nowoczesny e-commerce dla branży beauty. UX + optymalizacja sprzedaży.",
    img: "/portfolio1.jpg",
  },
  {
    name: "Aplikacja EventX",
    desc: "Aplikacja webowa do zarządzania wydarzeniami. Mobile-first, integracje API.",
    img: "/portfolio2.jpg",
  },
  {
    name: "Kampania foto dla ZENBAG",
    desc: "Zdjęcia produktowe + landing sprzedażowy. Wyrazisty, mistyczny klimat.",
    img: "/portfolio3.jpg",
  },
];

export default function ServicesPortfolio() {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <div className="glass-main p-8">
        {/* Sekcja Usługi */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Usługi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 text-left glass-card h-full"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-base text-slate-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sekcja Portfolio */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="p-6 text-left glass-card">
                <div className="mb-4 bg-slate-700 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-slate-400">Projekt {idx + 1}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">{proj.name}</h3>
                <p className="text-sm text-slate-300">{proj.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Zobacz moje projekty →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
