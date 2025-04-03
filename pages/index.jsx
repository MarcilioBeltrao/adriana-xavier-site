// Adriana Xavier Legal Services – Bilingual Legal Website with Enhanced Design and Sections

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    document.title = "Adriana Xavier Legal Services";
  }, []);

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/images/legal-hero.jpg')" }}
      >
        <div className="text-center bg-black/60 p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold">Adriana Xavier Legal Services</h1>
          <p className="text-lg mt-4">Paralegal Services · Serviços Jurídicos · Niagara Falls</p>
        </div>
      </section>

      {/* Services */}
      <section className="p-10 max-w-6xl mx-auto text-center" id="services">
        <h2 className="text-3xl font-semibold mb-6">Our Services / Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div>
            <h3 className="text-xl font-bold">Notary Public / Notário Público</h3>
            <p>Document certification, affidavits, POA. / Autenticação de documentos, declarações juramentadas, procurações.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Provincial Offences / Infrações Provinciais</h3>
            <p>Traffic tickets, by-law offences. / Multas de trânsito, infrações de regulamentos.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Small Claims Court / Tribunal de Pequenas Causas</h3>
            <p>Disputes up to $35K. / Disputas civis até $35.000.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Residential Tenancies (LTB) / Locação Residencial (LTB)</h3>
            <p>Landlord-tenant issues. / Questões entre locadores e inquilinos.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-100 py-16 px-10" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">About / Sobre Adriana Xavier</h2>
          <p className="text-lg text-justify">
            EN: Licensed paralegal serving Niagara Falls with integrity, clarity, and accessibility. — PT: Paralegal licenciada atuando em Niagara Falls com integridade, clareza e acessibilidade.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-10 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">FAQ / Perguntas Frequentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Do I need a lawyer for Small Claims Court? / Preciso de advogado para Tribunal de Pequenas Causas?</h3>
              <p>No, a licensed paralegal can represent you. / Não, um paralegal licenciado pode representá-lo.</p>
            </div>
            <div>
              <h3 className="font-bold">Are consultations free? / As consultas são gratuitas?</h3>
              <p>Initial consultations are free. / A primeira consulta é gratuita.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-10" id="testimonials">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">What Clients Say / Depoimentos</h2>
          <blockquote className="italic">“Adriana was efficient, compassionate, and effective. I highly recommend her!”</blockquote>
          <p className="mt-2">— Client / Cliente</p>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 px-10 bg-white" id="blog">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Blog & News / Blog e Notícias</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded p-4">
              <h3 className="text-xl font-bold">Understanding Provincial Offences / Entendendo as Infrações Provinciais</h3>
              <p>Insights into traffic tickets and other common offences.</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="text-xl font-bold">Why Notarization Matters / Por que a Autenticação é Importante</h3>
              <p>Legal value of certified documents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-10 bg-gray-100" id="contact">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Contact / Contato</h2>
          <form className="grid gap-4" action="mailto:contact@adrianaxavierlegal.ca" method="POST">
            <input className="border p-3 rounded" type="text" name="name" placeholder="Your Name / Seu Nome" required />
            <input className="border p-3 rounded" type="email" name="email" placeholder="Your Email / Seu Email" required />
            <textarea className="border p-3 rounded" name="message" placeholder="Your Message / Sua Mensagem" rows="4" required></textarea>
            <button className="bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-900 w-fit">Send / Enviar</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white p-6 text-center">
        <p>&copy; 2025 Adriana Xavier Legal Services. All rights reserved. / Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
