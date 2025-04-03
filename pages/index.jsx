// Release 4 – Adriana Xavier Legal Services Website (Visual Upgrade)

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Adriana Xavier Legal Services";
  }, []);

  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/featured/?law,canada')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-4">Adriana Xavier Legal Services</h1>
            <p className="text-xl">Professional Paralegal Services · Serviços Jurídicos · Niagara Falls, ON</p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between">
          <span className="font-bold">Adriana Xavier</span>
          <div className="space-x-4">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#faq" className="hover:text-blue-700">FAQ</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>
        </div>
      </nav>

      {/* Services */}
      <section className="p-10 max-w-6xl mx-auto" id="services">
        <h2 className="text-3xl font-semibold mb-6 text-center">Services / Serviços</h2>
        <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
          <Service title="Notary Public / Notário Público" desc="Document certification, affidavits, POA. / Autenticação de documentos, declarações juramentadas, procurações." />
          <Service title="Provincial Offences / Infrações Provinciais" desc="Traffic tickets, by-law offences. / Multas de trânsito, infrações de regulamentos." />
          <Service title="Small Claims Court / Tribunal de Pequenas Causas" desc="Disputes up to $35K. / Disputas civis até $35.000." />
          <Service title="Residential Tenancies (LTB) / Locação Residencial (LTB)" desc="Landlord-tenant issues. / Questões entre locadores e inquilinos." />
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-100 py-16 px-10" id="about">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">About / Sobre Adriana Xavier</h2>
          <p className="text-lg">EN: Licensed paralegal serving Niagara Falls with integrity, clarity, and accessibility. — PT: Paralegal licenciada atuando em Niagara Falls com integridade, clareza e acessibilidade.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-10" id="faq">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-6 text-center">FAQ / Perguntas Frequentes</h2>
          <FAQ question="Do I need a lawyer for Small Claims Court? / Preciso de advogado?" answer="No, a licensed paralegal can represent you. / Não, um paralegal licenciado pode representá-lo." />
          <FAQ question="Are consultations free? / As consultas são gratuitas?" answer="Initial consultations are free. / A primeira consulta é gratuita." />
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-50 py-16 px-10" id="contact">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-6 text-center">Contact / Contato</h2>
          <form className="grid gap-4" action="mailto:contact@adrianaxavierlegal.ca" method="POST">
            <input className="border p-3 rounded" type="text" name="name" placeholder="Your Name / Seu Nome" required />
            <input className="border p-3 rounded" type="email" name="email" placeholder="Your Email / Seu Email" required />
            <textarea className="border p-3 rounded" name="message" placeholder="Your Message / Sua Mensagem" rows="4" required></textarea>
            <button className="bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-900 w-fit">Send / Enviar</button>
          </form>
        </div>
      </section>

      <footer className="bg-blue-800 text-white p-6 text-center">
        <p>&copy; 2025 Adriana Xavier Legal Services. All rights reserved. / Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

function Service({ title, desc }) {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <div className="mb-4">
      <h4 className="font-bold">{question}</h4>
      <p>{answer}</p>
    </div>
  );
}
