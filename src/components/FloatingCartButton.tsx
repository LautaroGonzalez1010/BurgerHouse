import { useCart } from '../contexts/CartContext';

const FloatingCartButton = () => {
  const { getTotalItems, setIsCartOpen } = useCart();

  if (getTotalItems() === 0) return null;

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-6 right-6 w-16 h-16 bg-gray-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40 cursor-pointer animate-bounce-slow"
    >
      <i className="ri-shopping-cart-line text-2xl"></i>
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold rounded-full h-7 w-7 flex items-center justify-center">
        {getTotalItems()}
      </span>
    </button>
  );
};

export default FloatingCartButton;