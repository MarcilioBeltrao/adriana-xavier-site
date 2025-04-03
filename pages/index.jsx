// Adriana Xavier Legal Services - Multilingual, Modern Legal Website (EN/PT)
// Updated with bilíngue content and section anchors for translation toggle

export default function HomePage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: "url('/images/legal-hero.jpg')" }}>
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

      {/* Contact Form */}
      <section className="py-16 px-10 bg-white" id="contact">
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
