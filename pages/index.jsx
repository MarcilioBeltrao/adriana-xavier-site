// index.jsx – Adriana Xavier Legal Services (final version)

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

      {/* Navigation Bar */}
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

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">{t('Our Services', 'Nossos Serviços')}</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <ServiceCard
              title={t('Notary Public', 'Notário Público')}
              description={t('Document certification, affidavits, POA.', 'Certificação de documentos, declarações juramentadas, procurações.')}
              imageUrl="https://images.unsplash.com/photo-1556742400-b5fdd6f17249?fit=crop&w=600&q=80"
            />
            <ServiceCard
              title={t('Provincial Offences', 'Infrações Provinciais')}
              description={t('Traffic tickets, by-law disputes.', 'Multas de trânsito, disputas de regulamentos.')}
              imageUrl="https://images.unsplash.com/photo-1620058122840-24cf5f2d7609?fit=crop&w=600&q=80"
            />
            <ServiceCard
              title={t('Small Claims Court', 'Tribunal de Pequenas Causas')}
              description={t('Disputes up to $35,000.', 'Disputas até $35.000.')}
              imageUrl="https://images.unsplash.com/photo-1633158829585-e8d3efcd0145?fit=crop&w=600&q=80"
            />
            <ServiceCard
              title={t('Residential Tenancies (LTB)', 'Locações Residenciais (LTB)')}
              description={t('Tenant-landlord disputes and advice.', 'Disputas e orientação entre inquilinos e locadores.')}
              imageUrl="https://images.unsplash.com/photo-1570129477492-45c003edd2be?fit=crop&w=600&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">{t('Contact Us', 'Fale Conosco')}</h2>
          <form
            action="https://formspree.io/f/mldjplqq"
            method="POST"
            className="grid gap-4"
          >
            <input type="text" name="name" placeholder={t('Your Name', 'Seu Nome')} required className="border rounded p-3" />
            <input type="email" name="email" placeholder={t('Your Email', 'Seu Email')} required className="border rounded p-3" />
            <textarea name="message" rows="4" placeholder={t('Your Message', 'Sua Mensagem')} required className="border rounded p-3"></textarea>
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded">
              {t('Send Message', 'Enviar Mensagem')}
            </button>
          </form>
          <p className="text-sm text-center text-gray-500 mt-4">
            {t('We will respond within 24 hours.', 'Responderemos em até 24 horas.')}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-10">
        <div className="space-y-2">
          <p>&copy; 2025 Adriana Xavier Legal Services</p>
          <div className="space-x-4">
            <a href="/terms" className="hover:underline">{t('Terms of Use', 'Termos de Uso')}</a>
            <a href="/privacy" className="hover:underline">{t('Privacy Policy', 'Política de Privacidade')}</a>
          </div>
          <p>{t('Website created for academic purposes.', 'Website criado para fins acadêmicos.')}</p>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({ title, description, imageUrl }) {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}
