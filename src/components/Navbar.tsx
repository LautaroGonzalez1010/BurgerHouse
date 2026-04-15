
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <img
              src="https://public.readdy.ai/ai/img_res/7692f775-8a54-4e3d-8c97-330b4fcba136.png"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              BurgerHouse
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className={`font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('catalogo')}
              className={`font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
              }`}
            >
              Menú
            </button>
            <Link
              to="/menu"
              className={`font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-[#d4ff00]'
              }`}
            >
              Menú Completo
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-shopping-cart-line mr-2"></i>
              Carrito
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="md:hidden relative bg-gray-900 text-white p-3 rounded-full cursor-pointer"
          >
            <i className="ri-shopping-cart-line text-xl"></i>
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
