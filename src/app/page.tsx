import Hero from '@/components/Hero';
import ServicesPortfolio from '@/components/ServicesPortfolio';
import AboutContact from '@/components/AboutContact';

export default function HomePage() {
  return (
    <main className="relative">
      <section id="home" className="pt-32 pb-8 flex items-center"><Hero /></section>
      <section id="uslugi" className="py-8 flex items-center"><ServicesPortfolio /></section>
      <section id="about" className="py-8 flex items-center">
        <AboutContact />
      </section>
    </main>
  );
}