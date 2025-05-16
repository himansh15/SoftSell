import { useEffect } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import DarkModeToggle from './components/DarkModeToggle';

// << Import your logo SVG from assets >>
import logo from './assets/logo.svg';

function App() {
  useEffect(() => {
    document.title = "SoftSell | Sell Your Unused Software";
  }, []);

  return (
    <div className="font-sans min-h-screen transition-colors duration-300 bg-[var(--bg-main)] text-[var(--text-main)]">
      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 md:px-6 py-4 shadow border-b transition-colors duration-300 bg-[var(--bg-main)] text-[var(--text-main)] border-[var(--primary)]">
        <a href="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <img
            src={logo}       
            alt="SoftSell Logo"
            className="w-8 h-8"
            width={32}
            height={32}
            loading="eager"
            decoding="async"
            style={{ display: 'block' }}
          />
          <span className="font-bold text-lg" style={{ color: "var(--primary)" }}>
            SoftSell
          </span>
        </a>
        <DarkModeToggle />
      </header>

      <main className="pb-8">
        <section id="hero">
          <Hero />
        </section>
        <section id="how">
          <HowItWorks />
        </section>
        <section id="why">
          <WhyChooseUs />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <footer className="text-center py-4 text-xs transition-colors duration-300"
        style={{ color: "var(--text-main)", borderTop: "1px solid var(--primary)" }}>
        &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
      </footer>
      <ChatWidget />
    </div>
  );
}

export default App;