'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';

export default function AboutContact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || t.contact.form.error);
        setStatus("error");
      }
    } catch {
      setErrorMsg(t.contact.form.error);
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* About Section */}
        <div className="h-full">
          <div className="glass-main p-8 h-full">
            <h2 className="text-3xl font-bold mb-2 text-white">{t.about.title}</h2>
            <p className="text-lg text-slate-300 mb-6">{t.about.subtitle}</p>
            <div className="space-y-4 text-slate-200">
              <p>{t.about.description}</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full pb-8 px-8">
              <h3 className="font-bold text-xl mb-4 text-white">{t.about.skills}</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Java', 'IoT', 'System Engineering'].map(tech => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="h-full" id="kontakt">
          <div className="glass-main p-8 h-full">
            <h2 className="text-3xl font-bold mb-2 text-white">{t.contact.title}</h2>
            <p className="text-lg text-slate-300 mb-6">{t.contact.subtitle}</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder={t.contact.form.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder={t.contact.form.email}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="contact-textarea"
                  placeholder={t.contact.form.message}
                />
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={status==="loading"}
              >
                {status==="loading" ? t.contact.form.sending : t.contact.form.send}
              </button>
              {status==="success" && (
                <div className="status-success">{t.contact.form.success}</div>
              )}
              {status==="error" && (
                <div className="status-error">{errorMsg}</div>
              )}
            </form>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-slate-200 text-sm">
                {t.contact.directContact}<a href="mailto:biuro@obsydian.dev">biuro@obsydian.dev</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}