// components/Navbar.jsx
import { useState } from 'react';

export default function Navbar({ t, lang, setLang }) {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">Adriana Xavier</div>
            <div className="space-x-6 flex items-center">
                <a href="#home" className="hover:text-blue-700">Home</a>
                <a href="#about" className="hover:text-blue-700">Sobre</a>
                <a href="#services" className="hover:text-blue-700">Serviços</a>
                <a href="#contact" className="hover:text-blue-700">Contato</a>
                <button
                    className="border px-2 py-1 rounded text-sm hover:bg-blue-100"
                    onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
                >
                    {lang === 'en' ? 'PT' : 'EN'}
                </button>
            </div>
        </nav>
    );
}
