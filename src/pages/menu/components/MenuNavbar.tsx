
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';

const MenuNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="https://public.readdy.ai/ai/img_res/7692f775-8a54-4e3d-8c97-330b4fcba136.png"
              alt="Logo BurgerHouse"
              className="h-12 w-12 object-contain"
            />
            <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              BurgerHouse
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/menu"
              className={`font-bold transition-colors whitespace-nowrap cursor-pointer ${
                isScrolled ? 'text-gray-900' : 'text-[#d4ff00]'
              }`}
            >
              Menú Completo
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#d4ff00] hover:text-gray-900 transition-all whitespace-nowrap cursor-pointer"
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

          {/* Mobile cart button */}
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

export default MenuNavbar;
