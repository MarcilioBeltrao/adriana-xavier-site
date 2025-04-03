// RELEASE FINAL – Parte 1: Layout base + SEO + Navegação multilíngue (EN/PT)

import Head from 'next/head';
import { useState } from 'react';

export default function HomePage() {
  const [lang, setLang] = useState('en');

  const t = (en, pt) => (lang === 'en' ? en : pt);

  return (
    <main className="font-sans text-gray-900">
      <Head>
        <title>Adriana Xavier Legal Services</title>
        <meta name="description" content="Paralegal services in Niagara Falls for Small Claims, POA, Notary and LTB." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="paralegal, Niagara Falls, Small Claims, Notary, POA, Ontario legal services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Navigation with Language Switcher */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold">Adriana Xavier</span>
        <div className="space-x-6 flex items-center">
          <a href="#services" className="hover:text-blue-700">{t('Services', 'Serviços')}</a>
          <a href="#about" className="hover:text-blue-700">{t('About', 'Sobre')}</a>
          <a href="#faq" className="hover:text-blue-700">FAQ</a>
          <a href="#contact" className="hover:text-blue-700">{t('Contact', 'Contato')}</a>
          <button
            className="ml-4 border px-2 py-1 rounded text-sm hover:bg-blue-100"
            onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091870622-2e43f4e12758?fit=crop&w=1950&q=80')" }}
      >
        <div className="bg-black/50 p-8 rounded-xl text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold">Adriana Xavier Legal Services</h1>
          <p className="mt-4 text-lg">{t('Legal support with integrity, clarity and results.', 'Apoio jurídico com integridade, clareza e resultados.')}</p>
        </div>
      </header>

      {/* Conteúdo segue nas próximas partes... */}
    </main>
  );
}
