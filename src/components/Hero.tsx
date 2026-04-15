const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=professional%20burger%20restaurant%20kitchen%20with%20flames%20and%20grill%20cooking%20delicious%20hamburgers%20warm%20orange%20and%20red%20tones%20atmospheric%20lighting%20high%20quality%20food%20photography%20background%20image%20with%20space%20for%20text%20overlay&width=1920&height=1080&seq=hero-bg&orientation=landscape)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white">
            <div className="inline-block bg-white/30 backdrop-blur-sm px-4 py-1.5 sm:px-5 sm:py-2 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-white">/HAMBURGUESAS ARTESANALES</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              LAS MEJORES<br />
              HAMBURGUESAS<br />
              <span className="text-[#d4ff00]">DE LA CIUDAD</span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-white font-medium mb-6 sm:mb-8 max-w-xl leading-relaxed">
              Ingredientes frescos, carne premium y recetas únicas. Cada hamburguesa es una experiencia gastronómica inolvidable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('catalogo')}
                className="bg-[#d4ff00] text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#c4ef00] transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shadow-xl"
              >
                VER MENÚ
                <i className="ri-arrow-right-line"></i>
              </button>
              <button
                onClick={() => scrollToSection('catalogo')}
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/30 transition-all whitespace-nowrap cursor-pointer"
              >
                Hacer pedido ahora
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
              <img
                src="https://readdy.ai/api/search-image?query=delicious%20gourmet%20hamburger%20with%20melted%20cheese%20fresh%20vegetables%20and%20sesame%20bun%20on%20wooden%20board%20warm%20restaurant%20lighting%20professional%20food%20photography%20high%20quality%20appetizing%20presentation%20simple%20background&width=600&height=450&seq=hero-burger&orientation=landscape"
                alt="Hamburguesa destacada"
                fetchPriority="high"
                decoding="sync"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;