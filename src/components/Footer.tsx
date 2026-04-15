
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#d4ff00] rounded-full flex items-center justify-center">
                <i className="ri-restaurant-line text-2xl text-gray-900"></i>
              </div>
              <h3 className="text-2xl font-bold">BurgerHouse</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 font-medium">
              Las mejores hamburguesas artesanales de la ciudad. Ingredientes frescos, sabor auténtico.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 bg-white/10 hover:bg-[#d4ff00] rounded-full flex items-center justify-center transition-all cursor-pointer hover:text-gray-900">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 hover:bg-[#d4ff00] rounded-full flex items-center justify-center transition-all cursor-pointer hover:text-gray-900">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 hover:bg-[#d4ff00] rounded-full flex items-center justify-center transition-all cursor-pointer hover:text-gray-900">
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-[#d4ff00] transition-colors cursor-pointer font-medium">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('catalogo')} className="text-gray-300 hover:text-[#d4ff00] transition-colors cursor-pointer font-medium">
                  Menú
                </button>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-[#d4ff00] transition-colors cursor-pointer font-medium">
                  Menú Completo
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('buscador')} className="text-gray-300 hover:text-[#d4ff00] transition-colors cursor-pointer font-medium">
                  Buscar
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-phone-fill text-[#d4ff00] text-xl mt-1"></i>
                <div>
                  <p className="text-gray-300 font-medium">+54 911 1234-5678</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-mail-fill text-[#d4ff00] text-xl mt-1"></i>
                <div>
                  <p className="text-gray-300 font-medium">info@burgerhouse.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-fill text-[#d4ff00] text-xl mt-1"></i>
                <div>
                  <p className="text-gray-300 font-medium">Av. Principal 1234<br />Buenos Aires, Argentina</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Horarios</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-300 font-medium">
                <span>Lun - Vie</span>
                <span className="text-white">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between text-gray-300 font-medium">
                <span>Sábados</span>
                <span className="text-white">12:00 - 00:00</span>
              </li>
              <li className="flex justify-between text-gray-300 font-medium">
                <span>Domingos</span>
                <span className="text-white">12:00 - 23:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-medium">
            © 2024 BurgerHouse. Todos los derechos reservados.
          </p>
          <span className="text-gray-400 text-sm font-medium">
            Powered by AkiDev
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
