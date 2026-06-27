import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Facebook, ArrowDown, Check } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for reveal on scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white-custom font-sans selection:bg-accent-custom selection:text-white">
      
      {/* 2. NAVIGATION */}
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out px-6 md:px-14 flex flex-col md:flex-row md:items-center justify-between ${
          scrolled
            ? 'bg-black/97 backdrop-blur-md border-b border-border-mid py-3 md:h-18'
            : 'bg-transparent py-4 md:h-20'
        }`}
      >
        <div className="flex justify-between items-center w-full md:w-auto">
          <a
            href="#"
            onClick={(e) => handleSmoothScroll(e, '#')}
            className="flex flex-col no-underline group"
            id="nav-logo"
          >
            <span className="font-condensed font-[800] text-[22px] text-white tracking-[4px] uppercase leading-none transition-colors duration-200 group-hover:text-accent-custom">
              SKUP AUT
            </span>
            <span className="font-condensed font-[600] text-[14px] text-accent-custom tracking-[6px] uppercase leading-none mt-1">
              WARSZAWA
            </span>
          </a>
        </div>

        {/* Center badge (hidden on mobile) */}
        <div className="hidden md:flex items-center justify-center" id="nav-badge">
          <div className="border border-accent-custom px-3.5 py-1 rounded-[2px] flex items-center gap-2">
            <span className="text-accent-custom text-[11px] animate-pulse-dot">●</span>
            <span className="font-mono font-[500] text-[11px] text-accent-custom tracking-[3px] uppercase">
              DZIAŁAMY 24/7
            </span>
          </div>
        </div>

        {/* Right navigation links & CTA (hidden on mobile except in custom way) */}
        <div className="hidden md:flex items-center gap-8" id="nav-links">
          <a
            href="#jak-to-dziala"
            onClick={(e) => handleSmoothScroll(e, '#jak-to-dziala')}
            className="font-sans font-[500] text-[13px] tracking-[2px] text-gray-custom hover:text-white-custom uppercase transition-colors duration-200 no-underline"
          >
            Jak to działa
          </a>
          <a
            href="#co-kupujemy"
            onClick={(e) => handleSmoothScroll(e, '#co-kupujemy')}
            className="font-sans font-[500] text-[13px] tracking-[2px] text-gray-custom hover:text-white-custom uppercase transition-colors duration-200 no-underline"
          >
            Co kupujemy
          </a>
          <a
            href="#kontakt"
            onClick={(e) => handleSmoothScroll(e, '#kontakt')}
            className="font-sans font-[500] text-[13px] tracking-[2px] text-gray-custom hover:text-white-custom uppercase transition-colors duration-200 no-underline"
          >
            Kontakt
          </a>
          <a
            href="tel:+533393332"
            className="bg-accent-custom hover:bg-accent-dark text-white hover:-translate-y-[1px] active:translate-y-0 px-6 py-2.5 rounded-[2px] font-condensed font-[700] text-[14px] tracking-[3px] uppercase transition-all duration-200 no-underline"
            id="nav-cta-btn"
          >
            ZADZWOŃ
          </a>
        </div>

        {/* Mobile Full-width Button (under logo on a separate line as requested) */}
        <div className="block md:hidden w-full mt-3" id="nav-mobile-cta">
          <a
            href="tel:+533393332"
            className="block text-center bg-accent-custom hover:bg-accent-dark text-white py-3 rounded-[2px] font-condensed font-[700] text-[14px] tracking-[3px] uppercase transition-all duration-200 no-underline w-full"
          >
            ZADZWOŃ: +53 33 93332
          </a>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-screen bg-black flex flex-col justify-center overflow-hidden" id="hero-section">
        {/* Inner Grid Texture */}
        <div className="hero-mesh absolute inset-0 z-0"></div>

        {/* Diagonal Accent Block */}
        <div className="absolute top-0 right-0 w-[35%] h-full bg-gradient-to-br from-transparent via-transparent to-accent-glow pointer-events-none z-1"></div>

        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 md:px-14 pt-[160px] pb-20 flex flex-col justify-center min-h-screen">
          
          {/* Tag above title */}
          <div className="border-l-3 border-accent-custom pl-4 mb-8" id="hero-tag-block">
            <span className="font-mono font-[400] text-[12px] text-accent-custom tracking-[3px] uppercase">
              WARSZAWA + 50 KM · KAŻDY STAN · KAŻDA MARKA
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-condensed font-[900] leading-[0.92] uppercase select-none" id="hero-title">
            <span className="block text-white text-[56px] sm:text-[76px] md:text-[96px] lg:text-[110px] xl:text-[120px]">
              SKUPUJEMY
            </span>
            <span className="block text-white text-[56px] sm:text-[76px] md:text-[96px] lg:text-[110px] xl:text-[120px] tracking-[4px]">
              TWOJE AUTO
            </span>
            <span className="block text-accent-custom text-[56px] sm:text-[76px] md:text-[96px] lg:text-[110px] xl:text-[120px] tracking-[8px]">
              ZA GOTÓWKĘ
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-[400] text-base md:text-lg text-gray-light leading-relaxed max-w-[600px] mt-8" id="hero-subtitle">
            Kupujemy każde auto do 15 000 zł — bez OC, bez przeglądu, w każdym stanie. Płacimy gotówką od ręki, minimum formalności.
          </p>

          {/* Key benefits panel */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 my-12" id="hero-benefits">
            <div className="lg:pr-8 lg:border-r lg:border-border-custom pl-0">
              <div className="font-condensed font-[800] text-2xl md:text-[28px] text-white leading-none">DO 15 000 ZŁ</div>
              <div className="font-mono text-[11px] text-gray-custom tracking-[2px] uppercase mt-1">wartość skupu</div>
            </div>
            <div className="lg:px-8 lg:border-r lg:border-border-custom">
              <div className="font-condensed font-[800] text-2xl md:text-[28px] text-white leading-none">24/7</div>
              <div className="font-mono text-[11px] text-gray-custom tracking-[2px] uppercase mt-1">dostępność</div>
            </div>
            <div className="lg:px-8 lg:border-r lg:border-border-custom">
              <div className="font-condensed font-[800] text-2xl md:text-[28px] text-white leading-none">50 KM</div>
              <div className="font-mono text-[11px] text-gray-custom tracking-[2px] uppercase mt-1">zasięg od Warszawy</div>
            </div>
            <div className="lg:pl-8">
              <div className="font-condensed font-[800] text-2xl md:text-[28px] text-white leading-none">GOTÓWKA</div>
              <div className="font-mono text-[11px] text-gray-custom tracking-[2px] uppercase mt-1">od ręki</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4" id="hero-actions">
            <a
              href="tel:+533393332"
              className="bg-accent-custom hover:bg-accent-dark text-white text-center px-8 md:px-10 py-4.5 rounded-[2px] font-condensed font-[700] text-[16px] tracking-[3px] uppercase transition-all duration-200 shadow-[0_8px_28px_rgba(217,48,37,0.35)] hover:-translate-y-0.5 active:translate-y-0 no-underline"
              id="hero-btn-primary"
            >
              ZADZWOŃ TERAZ — +53 33 93332
            </a>
            <a
              href="#jak-to-dziala"
              onClick={(e) => handleSmoothScroll(e, '#jak-to-dziala')}
              className="border border-border-mid hover:border-white text-gray-light hover:text-white text-center px-8 md:px-10 py-4.5 rounded-[2px] font-condensed font-[700] text-[16px] tracking-[3px] uppercase transition-colors duration-200 no-underline"
              id="hero-btn-secondary"
            >
              JAK TO DZIAŁA
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-6 md:left-14 flex items-center gap-4 pointer-events-none" id="scroll-indicator">
            <span className="font-mono text-[10px] text-gray-custom tracking-[4px] uppercase">PRZEWIŃ</span>
            <div className="h-[1px] bg-accent-custom animate-expand-line"></div>
          </div>

        </div>
      </section>

      {/* 4. INFINITE TICKER (MARQUEE) */}
      <div className="bg-accent-custom py-3.5 overflow-hidden border-y border-accent-dark/20 flex select-none" id="marquee-bar">
        <div className="marquee-container">
          <div className="marquee-content text-black font-condensed font-[700] text-[13px] tracking-[3px] uppercase whitespace-nowrap">
            KUPUJEMY BEZ OC  ✦  KUPUJEMY BEZ PRZEGLĄDU  ✦  KAŻDY STAN TECHNICZNY  ✦  WYPŁATA GOTÓWKĄ  ✦  DZIAŁAMY 24/7  ✦  WARSZAWA I OKOLICE 50 KM  ✦  MINIMUM FORMALNOŚCI  ✦  DO 15 000 ZŁ  ✦ &nbsp;
            KUPUJEMY BEZ OC  ✦  KUPUJEMY BEZ PRZEGLĄDU  ✦  KAŻDY STAN TECHNICZNY  ✦  WYPŁATA GOTÓWKĄ  ✦  DZIAŁAMY 24/7  ✦  WARSZAWA I OKOLICE 50 KM  ✦  MINIMUM FORMALNOŚCI  ✦  DO 15 000 ZŁ  ✦ &nbsp;
          </div>
          <div className="marquee-content text-black font-condensed font-[700] text-[13px] tracking-[3px] uppercase whitespace-nowrap">
            KUPUJEMY BEZ OC  ✦  KUPUJEMY BEZ PRZEGLĄDU  ✦  KAŻDY STAN TECHNICZNY  ✦  WYPŁATA GOTÓWKĄ  ✦  DZIAŁAMY 24/7  ✦  WARSZAWA I OKOLICE 50 KM  ✦  MINIMUM FORMALNOŚCI  ✦  DO 15 000 ZŁ  ✦ &nbsp;
            KUPUJEMY BEZ OC  ✦  KUPUJEMY BEZ PRZEGLĄDU  ✦  KAŻDY STAN TECHNICZNY  ✦  WYPŁATA GOTÓWKĄ  ✦  DZIAŁAMY 24/7  ✦  WARSZAWA I OKOLICE 50 KM  ✦  MINIMUM FORMALNOŚCI  ✦  DO 15 000 ZŁ  ✦ &nbsp;
          </div>
        </div>
      </div>

      {/* 5. SEKCJA „JAK TO DZIAŁA" */}
      <section className="bg-black py-20 md:py-[120px] px-6 md:px-14 border-b border-border-custom" id="jak-to-dziala">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Header */}
          <div className="reveal" id="process-header">
            <span className="font-mono text-[12px] text-accent-custom tracking-[4px] uppercase block">
              // PROCES SKUPU
            </span>
            <h2 className="font-condensed font-[900] text-[42px] sm:text-[56px] md:text-[72px] text-white tracking-[4px] uppercase mt-2 leading-none">
              JAK TO DZIAŁA
            </h2>
            <p className="font-sans font-[400] text-[17px] text-gray-custom leading-[1.7] mt-4 max-w-[560px]">
              Cały proces od pierwszego kontaktu do wypłaty gotówki zajmuje zazwyczaj kilka godzin.
            </p>
          </div>

          {/* Grid of steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-border-custom mt-16 overflow-hidden rounded-[2px]" id="process-grid">
            
            {/* Step 01 */}
            <div className="reveal bg-dark p-8 md:p-10 transition-all duration-300 hover:bg-card border-t-2 border-transparent hover:border-accent-custom group relative" id="step-1">
              <div className="font-condensed font-[900] text-[56px] text-accent-glow leading-none select-none mb-[-8px]" style={{ color: 'rgba(217, 48, 37, 0.2)' }}>
                01
              </div>
              <h3 className="font-condensed font-[700] text-[22px] text-white tracking-[2px] uppercase mb-4 transition-colors duration-200 group-hover:text-accent-custom">
                ZADZWOŃ LUB NAPISZ
              </h3>
              <p className="font-sans text-[15px] text-gray-custom leading-[1.75]">
                Skontaktuj się z nami telefonicznie lub przez e-mail — o każdej porze, 24 godziny na dobę, 7 dni w tygodniu. Podaj markę, model, rok i stan auta.
              </p>
            </div>

            {/* Step 02 */}
            <div className="reveal bg-dark p-8 md:p-10 transition-all duration-300 hover:bg-card border-t-2 border-transparent hover:border-accent-custom group relative" id="step-2">
              <div className="font-condensed font-[900] text-[56px] text-accent-glow leading-none select-none mb-[-8px]" style={{ color: 'rgba(217, 48, 37, 0.2)' }}>
                02
              </div>
              <h3 className="font-condensed font-[700] text-[22px] text-white tracking-[2px] uppercase mb-4 transition-colors duration-200 group-hover:text-accent-custom">
                WYCENA
              </h3>
              <p className="font-sans text-[15px] text-gray-custom leading-[1.75]">
                Na podstawie podanych informacji podajemy wstępną wycenę. W razie potrzeby umawiamy się na oględziny — dojeżdżamy do Ciebie w Warszawie i okolicach (50 km).
              </p>
            </div>

            {/* Step 03 */}
            <div className="reveal bg-dark p-8 md:p-10 transition-all duration-300 hover:bg-card border-t-2 border-transparent hover:border-accent-custom group relative" id="step-3">
              <div className="font-condensed font-[900] text-[56px] text-accent-glow leading-none select-none mb-[-8px]" style={{ color: 'rgba(217, 48, 37, 0.2)' }}>
                03
              </div>
              <h3 className="font-condensed font-[700] text-[22px] text-white tracking-[2px] uppercase mb-4 transition-colors duration-200 group-hover:text-accent-custom">
                OGLĘDZINY I UMOWA
              </h3>
              <p className="font-sans text-[15px] text-gray-custom leading-[1.75]">
                Przyjeżdżamy, sprawdzamy auto i potwierdzamy cenę. Minimum formalności — nie wymagamy OC ani ważnego przeglądu technicznego.
              </p>
            </div>

            {/* Step 04 */}
            <div className="reveal bg-dark p-8 md:p-10 transition-all duration-300 hover:bg-card border-t-2 border-transparent hover:border-accent-custom group relative" id="step-4">
              <div className="font-condensed font-[900] text-[56px] text-accent-glow leading-none select-none mb-[-8px]" style={{ color: 'rgba(217, 48, 37, 0.2)' }}>
                04
              </div>
              <h3 className="font-condensed font-[700] text-[22px] text-white tracking-[2px] uppercase mb-4 transition-colors duration-200 group-hover:text-accent-custom">
                GOTÓWKA OD RĘKI
              </h3>
              <p className="font-sans text-[15px] text-gray-custom leading-[1.75]">
                Płacimy gotówką na miejscu, natychmiast po podpisaniu umowy kupna-sprzedaży. Szybko, bezpiecznie, bez zbędnego czekania.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SEKCJA „CO KUPUJEMY" */}
      <section className="bg-dark py-20 md:py-[120px] px-6 md:px-14 border-b border-border-custom" id="co-kupujemy">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Header */}
          <div className="reveal mb-16" id="conditions-header">
            <span className="font-mono text-[12px] text-accent-custom tracking-[4px] uppercase block">
              // WARUNKI SKUPU
            </span>
            <h2 className="font-condensed font-[900] text-[42px] sm:text-[56px] md:text-[72px] text-white tracking-[4px] uppercase mt-2 leading-none">
              KUPUJEMY KAŻDE AUTO
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left column - conditions list */}
            <div className="lg:col-span-7 flex flex-col" id="conditions-list-col">
              <span className="font-sans italic font-[400] text-lg md:text-xl text-gray-custom mb-10 block">
                Nie stawiamy wymagań.
              </span>

              <div className="flex flex-col">
                
                {/* Condition 1 */}
                <div className="reveal flex gap-5 items-start py-6 border-b border-border-custom" id="cond-1">
                  <div className="font-condensed font-[700] text-[20px] text-accent-custom bg-accent-glow w-9 h-9 flex items-center justify-center border border-accent-custom flex-shrink-0 rounded-[2px]">
                    <Check className="w-5 h-5 text-accent-custom" />
                  </div>
                  <div>
                    <h4 className="font-sans font-[600] text-[17px] text-white mb-1.5">Bez OC</h4>
                    <p className="font-sans font-[400] text-[14px] text-gray-custom leading-[1.6]">
                      Nie musisz mieć aktualnego ubezpieczenia OC.
                    </p>
                  </div>
                </div>

                {/* Condition 2 */}
                <div className="reveal flex gap-5 items-start py-6 border-b border-border-custom" id="cond-2">
                  <div className="font-condensed font-[700] text-[20px] text-accent-custom bg-accent-glow w-9 h-9 flex items-center justify-center border border-accent-custom flex-shrink-0 rounded-[2px]">
                    <Check className="w-5 h-5 text-accent-custom" />
                  </div>
                  <div>
                    <h4 className="font-sans font-[600] text-[17px] text-white mb-1.5">Bez przeglądu technicznego</h4>
                    <p className="font-sans font-[400] text-[14px] text-gray-custom leading-[1.6]">
                      Nieważny lub brakujący przegląd nie stanowi problemu.
                    </p>
                  </div>
                </div>

                {/* Condition 3 */}
                <div className="reveal flex gap-5 items-start py-6 border-b border-border-custom" id="cond-3">
                  <div className="font-condensed font-[700] text-[20px] text-accent-custom bg-accent-glow w-9 h-9 flex items-center justify-center border border-accent-custom flex-shrink-0 rounded-[2px]">
                    <Check className="w-5 h-5 text-accent-custom" />
                  </div>
                  <div>
                    <h4 className="font-sans font-[600] text-[17px] text-white mb-1.5">W każdym stanie technicznym</h4>
                    <p className="font-sans font-[400] text-[14px] text-gray-custom leading-[1.6]">
                      Uszkodzone, po kolizji, niesprawne — kupujemy wszystko.
                    </p>
                  </div>
                </div>

                {/* Condition 4 */}
                <div className="reveal flex gap-5 items-start py-6 border-b border-border-custom" id="cond-4">
                  <div className="font-condensed font-[700] text-[20px] text-accent-custom bg-accent-glow w-9 h-9 flex items-center justify-center border border-accent-custom flex-shrink-0 rounded-[2px]">
                    <Check className="w-5 h-5 text-accent-custom" />
                  </div>
                  <div>
                    <h4 className="font-sans font-[600] text-[17px] text-white mb-1.5">Każda marka i model</h4>
                    <p className="font-sans font-[400] text-[14px] text-gray-custom leading-[1.6]">
                      Od aut miejskich po SUV-y, krajowe i importowane.
                    </p>
                  </div>
                </div>

                {/* Condition 5 */}
                <div className="reveal flex gap-5 items-start py-6 border-b border-border-custom" id="cond-5">
                  <div className="font-condensed font-[700] text-[20px] text-accent-custom bg-accent-glow w-9 h-9 flex items-center justify-center border border-accent-custom flex-shrink-0 rounded-[2px]">
                    <Check className="w-5 h-5 text-accent-custom" />
                  </div>
                  <div>
                    <h4 className="font-sans font-[600] text-[17px] text-white mb-1.5">Do 15 000 zł</h4>
                    <p className="font-sans font-[400] text-[14px] text-gray-custom leading-[1.6]">
                      Skupujemy pojazdy w tej cenie — wycena indywidualna.
                    </p>
                  </div>
                </div>

                {/* Condition 6 */}
                <div className="reveal flex gap-5 items-start py-6 border-b border-border-custom" id="cond-6">
                  <div className="font-condensed font-[700] text-[20px] text-accent-custom bg-accent-glow w-9 h-9 flex items-center justify-center border border-accent-custom flex-shrink-0 rounded-[2px]">
                    <Check className="w-5 h-5 text-accent-custom" />
                  </div>
                  <div>
                    <h4 className="font-sans font-[600] text-[17px] text-white mb-1.5">Warszawa i okolice 50 km</h4>
                    <p className="font-sans font-[400] text-[14px] text-gray-custom leading-[1.6]">
                      Dojeżdżamy do Ciebie — nie musisz nigdzie jechać.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right column - highlight container with beautiful solid white background */}
            <div className="lg:col-span-5 w-full" id="conditions-cta-col">
              <div className="reveal bg-white border border-white border-t-3 border-t-accent-custom p-8 md:p-12 text-center rounded-[2px] shadow-2xl" id="highlight-box">
                <div className="font-mono font-[600] text-[12px] text-accent-custom tracking-[5px] uppercase mb-2">
                  PŁACIMY
                </div>
                <div className="font-condensed font-[900] text-[56px] sm:text-[72px] text-black tracking-[4px] leading-none uppercase">
                  GOTÓWKĄ
                </div>
                <div className="font-mono font-[500] text-[13px] text-zinc-600 tracking-[3px] mt-2">
                  od ręki · natychmiast
                </div>
                
                <div className="w-[60px] h-[2px] bg-accent-custom my-8 mx-auto"></div>
                
                <p className="font-sans font-[500] text-[16px] text-zinc-800 leading-[1.7] mb-9">
                  Zero przelewów, zero oczekiwania. Gotówka w dłoń w dniu transakcji.
                </p>
                
                <a
                  href="tel:+533393332"
                  className="inline-block w-full bg-accent-custom hover:bg-accent-dark text-white text-center py-4 rounded-[2px] font-condensed font-[700] text-[15px] tracking-[3px] uppercase transition-all duration-200 no-underline shadow-[0_4px_16px_rgba(217,48,37,0.25)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  ZADZWOŃ TERAZ
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. SEKCJA KONTAKT */}
      <section className="bg-black py-20 md:py-[120px] px-6 md:px-14 border-b border-border-custom" id="kontakt">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Header */}
          <div className="reveal mb-16" id="contact-header">
            <span className="font-mono text-[12px] text-accent-custom tracking-[4px] uppercase block">
              // SKONTAKTUJ SIĘ
            </span>
            <h2 className="font-condensed font-[900] text-[42px] sm:text-[56px] md:text-[64px] text-white tracking-[4px] uppercase mt-2 leading-none">
              ZADZWOŃ LUB NAPISZ
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left column - contact items */}
            <div className="lg:col-span-5 flex flex-col" id="contact-details-col">
              <span className="font-sans font-[400] text-[17px] text-gray-custom leading-[1.8] mb-12 block">
                Działamy 24 godziny na dobę, 7 dni w tygodniu — zadzwoń kiedy chcesz.
              </span>

              <div className="flex flex-col">
                
                {/* Contact item 1: Phone */}
                <div className="reveal flex gap-5 items-start py-7 border-b border-border-custom" id="contact-tel">
                  <div className="text-[22px] w-12 h-12 bg-accent-glow border border-accent-custom/30 flex items-center justify-center rounded-[2px] flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent-custom" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-accent-custom tracking-[4px] uppercase mb-1.5">
                      TELEFON
                    </div>
                    <a
                      href="tel:+533393332"
                      className="font-sans font-[600] text-[20px] text-white hover:text-accent-custom transition-colors duration-200 no-underline"
                    >
                      +53 33 93332
                    </a>
                  </div>
                </div>

                {/* Contact item 2: Email */}
                <div className="reveal flex gap-5 items-start py-7 border-b border-border-custom" id="contact-email">
                  <div className="text-[22px] w-12 h-12 bg-accent-glow border border-accent-custom/30 flex items-center justify-center rounded-[2px] flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-custom" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-accent-custom tracking-[4px] uppercase mb-1.5">
                      E-MAIL
                    </div>
                    <a
                      href="mailto:kolaaahovrak@gmail.com"
                      className="font-sans font-[600] text-[18px] sm:text-[20px] text-white hover:text-accent-custom transition-colors duration-200 no-underline break-all"
                    >
                      kolaaahovrak@gmail.com
                    </a>
                  </div>
                </div>

                {/* Contact item 3: Address */}
                <div className="reveal flex gap-5 items-start py-7 border-b border-border-custom" id="contact-address">
                  <div className="text-[22px] w-12 h-12 bg-accent-glow border border-accent-custom/30 flex items-center justify-center rounded-[2px] flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-custom" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-accent-custom tracking-[4px] uppercase mb-1.5">
                      ADRES
                    </div>
                    <span className="font-sans font-[600] text-[20px] text-white">
                      Stefana Batorego 29, Warszawa
                    </span>
                  </div>
                </div>

                {/* Contact item 4: Facebook */}
                <div className="reveal flex gap-5 items-start py-7 border-b border-border-custom" id="contact-facebook">
                  <div className="text-[22px] w-12 h-12 bg-accent-glow border border-accent-custom/30 flex items-center justify-center rounded-[2px] flex-shrink-0">
                    <Facebook className="w-5 h-5 text-accent-custom" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-accent-custom tracking-[4px] uppercase mb-1.5">
                      FACEBOOK
                    </div>
                    <a
                      href="https://www.facebook.com/profile.php?id=61587712101689"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-[600] text-[20px] text-accent-custom hover:text-accent-dark transition-colors duration-200 no-underline"
                    >
                      Profil na Facebooku →
                    </a>
                  </div>
                </div>

              </div>

              {/* Availability Badge */}
              <div className="reveal mt-8 inline-flex" id="contact-availability">
                <div className="bg-accent-glow border border-accent-custom px-6 py-3.5 flex items-center gap-3 rounded-[2px]">
                  <span className="text-accent-custom text-[12px] animate-pulse-dot">●</span>
                  <span className="font-mono font-[500] text-[12px] text-accent-custom tracking-[3px] uppercase">
                    DOSTĘPNI TERAZ · 24/7
                  </span>
                </div>
              </div>

            </div>

            {/* Right column - Google Map */}
            <div className="lg:col-span-7 w-full" id="contact-map-col">
              <div className="reveal flex flex-col" id="map-wrapper">
                <div className="font-mono text-[11px] text-accent-custom tracking-[3px] uppercase mb-4">
                  // NASZA LOKALIZACJA
                </div>
                <div className="relative pb-[65%] h-0 overflow-hidden border border-border-mid rounded-[2px]" id="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.783400090629!2d21.00939677710561!3d52.21098355906164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccdcba0be01d%3A0x1f33a276c9b2954c!2sStefana%20Batorego%2029%2C%2002-591%20Warszawa!5e0!3m2!1spl!2spl!4v1782551440442!5m2!1spl!2spl"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Skup Aut Warszawa - Lokalizacja"
                  ></iframe>
                </div>
                <div className="mt-3 font-sans text-[14px] text-gray-custom px-4 py-3 bg-card border-l-3 border-accent-custom rounded-[2px]">
                  Stefana Batorego 29, 02-591 Warszawa
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. CTA BOTTOM SECTION */}
      <section className="bg-accent-custom py-20 px-6 md:px-14 select-none" id="cta-bottom-section">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          
          <div className="max-w-[700px]" id="cta-bottom-text">
            <h2 className="font-condensed font-[900] text-[36px] sm:text-[42px] md:text-[48px] text-white tracking-[4px] uppercase leading-none">
              MASZ AUTO DO SPRZEDANIA?
            </h2>
            <p className="font-sans font-[400] text-[18px] text-white/80 mt-3">
              Zadzwoń teraz — wyceniamy i przyjeżdżamy tego samego dnia.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end w-full lg:w-auto" id="cta-bottom-phone">
            <a
              href="tel:+533393332"
              className="font-condensed font-[900] text-[40px] sm:text-[46px] md:text-[52px] text-white tracking-[2px] hover:text-white/80 transition-colors duration-200 no-underline whitespace-nowrap block"
            >
              +53 33 93332
            </a>
            <span className="font-mono text-[11px] text-white/75 tracking-[3px] uppercase block text-center lg:text-right mt-1">
              ● DOSTĘPNI 24/7
            </span>
          </div>

        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-dark border-t border-border-mid py-12 px-6 md:px-14" id="footer-section">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Left branding */}
          <div className="flex flex-col" id="footer-logo">
            <a
              href="#"
              onClick={(e) => handleSmoothScroll(e, '#')}
              className="font-condensed font-[800] text-[18px] text-white tracking-[3px] uppercase leading-none no-underline block"
            >
              SKUP AUT WARSZAWA
            </a>
            <span className="font-sans font-[300] text-[13px] text-gray-custom mt-2 block">
              Skup aut osobowych · Warszawa i okolice 50 km
            </span>
          </div>

          {/* Center Address & Contact metadata */}
          <div className="font-mono text-[12px] text-gray-custom" id="footer-center">
            Stefana Batorego 29, Warszawa · kolaaahovrak@gmail.com
          </div>

          {/* Right copyright */}
          <div className="font-sans font-[400] text-[12px] text-gray-custom" id="footer-right">
            © 2026 Skup Aut Warszawa. Wszelkie prawa zastrzeżone.
          </div>

        </div>
      </footer>

    </div>
  );
}
