
import { Burger } from '../data/burgers';
import { useCart } from '../contexts/CartContext';

interface BurgerCardProps {
  burger: Burger;
}

const BurgerCard = ({ burger }: BurgerCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(burger);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100">
      <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={burger.image}
          alt={burger.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Badges top-left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {burger.isNew && (
            <span className="bg-emerald-500 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md">
              NUEVO
            </span>
          )}
          {burger.isPopular && (
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md">
              POPULAR
            </span>
          )}
        </div>

        {/* Category badge top-right */}
        <div className="absolute top-3 right-3">
          <span className="bg-[#d4ff00] text-gray-900 px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg">
            {burger.category}
          </span>
        </div>

        {/* Rating bottom-left */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <i className="ri-star-fill text-yellow-400 text-xs"></i>
            {burger.rating.toFixed(1)}
          </span>
        </div>

        {/* Calories bottom-right */}
        <div className="absolute bottom-3 right-3">
          <span className="bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <i className="ri-fire-line text-orange-400 text-xs"></i>
            {burger.calories} kcal
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-gray-700 transition-colors">
          {burger.name}
        </h3>

        {/* Tags */}
        {burger.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {burger.tags.map(tag => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed line-clamp-2 flex-grow">
          {burger.description}
        </p>

        <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium mb-0.5">Precio</span>
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">
              ${burger.price.toLocaleString('es-AR')}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-gray-900 hover:bg-[#d4ff00] text-white hover:text-gray-900 px-5 sm:px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer transform hover:scale-105"
          >
            <i className="ri-shopping-cart-line text-lg"></i>
            <span className="text-sm sm:text-base">Agregar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;
