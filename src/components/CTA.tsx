const CTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-[#d4ff00] px-6 py-2 rounded-full mb-6">
          <span className="text-sm font-bold tracking-wider text-gray-900">¿LISTO PARA ORDENAR?</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Haz tu pedido ahora y<br />
          <span className="text-[#d4ff00]">disfruta en minutos</span>
        </h2>
        
        <p className="text-xl sm:text-2xl text-white font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
          Entrega rápida, ingredientes frescos y el mejor sabor de la ciudad. ¡No esperes más!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('catalogo')}
            className="bg-[#d4ff00] text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-[#c4ef00] transition-all flex items-center gap-3 whitespace-nowrap cursor-pointer shadow-2xl"
          >
            <i className="ri-restaurant-line text-2xl"></i>
            Ver Menú Completo
          </button>
          
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-2xl whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-fill text-2xl"></i>
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;