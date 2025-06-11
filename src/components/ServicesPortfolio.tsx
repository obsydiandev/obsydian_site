"use client";

import { useState } from 'react';
import Image from 'next/image';

const services = [
    {
        title: 'Strony internetowe',
        desc: 'Nowoczesne, responsywne strony www – wizytówki, sklepy, portale.',
        icon: "/website-design.png",
        iconAlt: "Websites",
        width: 120,
        height: 100
    },
    {
        title: 'Aplikacje',
        desc: 'Dedykowane aplikacje webowe – szyte na miarę Twojego biznesu.',
        icon: "/mobile-app.png",
        iconAlt: "Applications",
        width: 80,
        height: 80
    },
    {
        title: 'Marketing & Foto',
        desc: 'Kampanie, social media, content, fotografia produktowa i wizerunkowa.',
        icon: "/photo-album.png",
        iconAlt: "Marketing",
        width: 80,
        height: 80
    },
];

const projects = [
    {
        name: 'Sklep BlueZen',
        desc: 'Nowoczesny e-commerce dla branży beauty. UX + optymalizacja sprzedaży.',
        img: '/portfolio1.jpg',
    },
    {
        name: 'Strona prezentacyjna',
        desc: 'Strona prezentująca przepyszne desery. Minimalistyczny design, duże zdjęcia.',
        img: '/pracovnia-biz-pl.png',
    },
    {
        name: 'Kampania foto dla ZENBAG',
        desc: 'Zdjęcia produktowe + landing sprzedażowy. Wyrazisty, mistyczny klimat.',
        img: '/portfolio3.jpg',
    },
];

export default function ServicesPortfolio() {
    const [modalImg, setModalImg] = useState<string | null>(null);
    const [modalAlt, setModalAlt] = useState<string>('');

    const openModal = (img: string, alt: string) => {
        setModalImg(img);
        setModalAlt(alt);
        document.body.style.overflow = 'hidden';
    };
    
    const closeModal = () => {
        setModalImg(null);
        setModalAlt('');
        document.body.style.overflow = '';
    };

    return (
        <div className="py-8 px-4 max-w-6xl mx-auto">
            <div className="glass-main p-8">
                {/* Sekcja Usługi */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8 text-white">
                        Usługi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="p-10 text-left glass-card h-full min-h-[220px] flex flex-col justify-center"
                            >
                                <div className="mb-4 flex items-center justify-center h-24">
                                    <Image
                                        src={service.icon}
                                        alt={service.iconAlt}
                                        width={service.width}
                                        height={service.height}
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-white">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-slate-300">
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
                                            className="object-cover w-full h-64 rounded-lg transition-transform duration-200 group-hover:scale-105"
                                            style={{ background: '#1e293b' }}
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

            {modalImg && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="glass-main relative p-4 md:p-8 max-w-2xl w-[90vw] flex flex-col items-center animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-2xl text-white/80 hover:text-white bg-black/30 rounded-full px-2 py-1 transition"
                        >
                            &times;
                        </button>
                        <img
                            src={modalImg}
                            alt={modalAlt}
                            className="max-h-[70vh] w-auto rounded-xl shadow-xl mb-2"
                            style={{ background: '#1e293b' }}
                        />
                        <div className="text-white text-center text-lg font-semibold mt-2">
                            {modalAlt}
                        </div>
                    </div>
                </div>
            )}
        </div> 
    );
}
