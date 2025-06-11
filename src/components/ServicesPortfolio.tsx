"use client";

import Image from 'next/image';
import { useLanguage } from './LanguageProvider';

export default function ServicesPortfolio() {
    const { t } = useLanguage();

    const services = [
        {
            title: t.services.web.title,
            desc: t.services.web.description,
            icon: "/website-design.png",
            iconAlt: "Websites",
            width: 120,
            height: 120
        },
        {
            title: t.services.app.title,
            desc: t.services.app.description,
            icon: "/mobile-app.png",
            iconAlt: "Applications",
            width: 80,
            height: 80
        },
        {
            title: t.services.marketing.title,
            desc: t.services.marketing.description,
            icon: "/photo-album.png",
            iconAlt: "Marketing",
            width: 80,
            height: 80
        },
    ];

    return (
        <div className="py-6 md:py-8 px-4 max-w-6xl mx-auto">
            <div className="glass-main p-6 md:p-8">
                {/* Sekcja Usługi */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-white">
                        {t.services.title}
                    </h2>
                    <p className="text-center mb-6 md:mb-8 text-slate-300 text-base md:text-lg px-4">
                        {t.services.subtitle}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 services-grid">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="p-6 md:p-10 text-left glass-card h-full min-h-[200px] md:min-h-[220px] flex flex-col justify-center service-card"
                            >
                                <div className="mb-3 md:mb-4 flex items-center justify-center h-16 md:h-24">
                                    <Image
                                        src={service.icon}
                                        alt={service.iconAlt}
                                        width={service.width}
                                        height={service.height}
                                        className="max-w-[60px] md:max-w-none max-h-[60px] md:max-h-none"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">
                                    {service.title}
                                </h3>
                                <p className="text-base md:text-lg text-slate-300">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Portfolio - odkomentuj gdy potrzebne */}
                {/* 
                <div>
                    <h2 className="text-3xl font-bold text-center mb-8 text-white">
                        Realizacje
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map((proj, idx) => (
                            <div key={idx} className="p-6 text-left glass-card">
                                <div
                                    className="mb-4 bg-slate-700 rounded-lg h-64 flex items-center justify-center overflow-hidden group cursor-zoom-in"
                                    onClick={() =>
                                        proj.img &&
                                        openModal(proj.img, proj.name)
                                    }
                                >
                                    {proj.img ? (
                                        <img
                                            src={proj.img}
                                            alt={proj.name}
                                            className="portfolio-image"
                                        />
                                    ) : (
                                        <span className="text-slate-400">
                                            Projekt {idx + 1}
                                        </span>
                                    )}
                                </div>
                                <h3 className="font-semibold text-lg mb-2 text-white">
                                    {proj.name}
                                </h3>
                                <p className="text-sm text-slate-300">
                                    {proj.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                */}
            </div>
        </div> 
    );
}
