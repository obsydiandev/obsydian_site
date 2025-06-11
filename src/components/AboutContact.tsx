'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';
import About from './About';

export default function AboutContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tu będzie logika wysyłania formularza
    console.log('Form submitted:', formData);
    // Reset formularza
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* About Section */}
        <div className="h-full">
          <div className="glass-main p-8 h-full">
            <h2 className="text-3xl font-bold mb-6 text-white">O mnie</h2>
            <div className="space-y-4 text-slate-200">
              <p>
                Jestem specjalistą od tworzenia nowoczesnych stron internetowych i aplikacji.
                Łączę technologię z kreatywnością, aby dostarczać rozwiązania, które nie tylko wyglądają świetnie,
                ale także działają perfekcyjnie.
              </p>
              <p>
                Moją pasją jest fotografia, która pomaga mi lepiej rozumieć estetykę i kompozycję -
                umiejętności, które przenoszę do projektowania interfejsów użytkownika.
              </p>
              <p>
                Pracuję z firmami i osobami prywatnymi, oferując kompleksowe usługi od koncepcji
                po wdrożenie i dalsze wsparcie.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Technologie</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS'].map(tech => (
                    <span key={tech} className="px-3 py-1 glass-card text-sm text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="h-full" id="kontakt">
          <div className="glass-main p-8 h-full">
            <h2 className="text-3xl font-bold mb-6 text-white">Kontakt. Masz pomysł lub pytanie?</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Wpisz swoje imię i nazwisko"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="twoj@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 glass-card text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Opisz swój projekt lub zadaj pytanie..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 glass-card text-white font-medium hover:bg-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              >
                Wyślij wiadomość
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-slate-200 text-sm">
                Lub skontaktuj się bezpośrednio:
              </p>
              <div className="mt-2 space-y-1 text-slate-300 text-sm">
                <p>📧 kontakt@obsydian.pl</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}