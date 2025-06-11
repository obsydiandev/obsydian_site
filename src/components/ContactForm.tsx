'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Możesz tu dodać obsługę wysyłki przez email API
    setSent(true);
  };

  return (
    <div className="h-full">
      <div className="glass-main p-8 h-full flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Masz pomysł lub pytanie?</h2>
      {sent ? (
        <div className="flex-1 flex items-center justify-center text-center py-8 text-green-400">
          Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.
        </div>
      ) : (
        <form className="flex-1 flex flex-col gap-4 justify-center" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Imię"
            className="p-3 glass-card text-white placeholder:text-slate-400"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="p-3 glass-card text-white placeholder:text-slate-400"
          />
          <textarea
            required
            placeholder="Twoja wiadomość"
            rows={5}
            className="p-3 glass-card text-white placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="px-8 py-3 glass-card text-white hover:bg-slate-600 transition-colors"
          >
            Wyślij
          </button>
        </form>
      )}
      </div>
    </div>
  );
}