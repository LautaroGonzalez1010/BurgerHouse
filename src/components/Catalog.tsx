
import { useNavigate } from 'react-router-dom';
import { burgers } from '../data/burgers';
import BurgerCard from './BurgerCard';

interface CatalogProps {
  searchTerm: string;
}

const Catalog = ({ searchTerm }: CatalogProps) => {
  const navigate = useNavigate();

  // Solo mostrar destacadas (populares o nuevas), máximo 6
  const featuredBurgers = burgers
    .filter(b => b.isPopular || b.isNew)
    .slice(0, 6);

  const filteredBurgers = searchTerm
    ? burgers.filter(burger =>
        burger.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        burger.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        burger.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : featuredBurgers;

  return (
    <section id="catalogo" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-bold tracking-wider">DESTACADAS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Elige tu <span className="italic font-serif text-[#d4ff00]">favorita</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Nuestras hamburguesas más populares y nuevas incorporaciones, preparadas al momento con ingredientes frescos
          </p>
        </div>

        {filteredBurgers.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-search-line text-5xl text-gray-400"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No encontramos resultados</h3>
            <p className="text-gray-600 text-lg">Intenta con otro término de búsqueda</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {filteredBurgers.map(burger => (
              <BurgerCard key={burger.id} burger={burger} />
            ))}
          </div>
        )}

        {/* Botón al menú completo */}
        {!searchTerm && (
          <div className="mt-14 flex flex-col items-center gap-4">
            <p className="text-gray-500 text-base">
              ¿Quieres ver todas nuestras opciones? Tenemos{' '}
              <span className="font-semibold text-gray-800">{burgers.length} hamburguesas</span> en el menú
            </p>
            <button
              onClick={() => navigate('/menu')}
              className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-[#d4ff00] text-white hover:text-gray-900 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-restaurant-line text-xl"></i>
              Ver Menú Completo
              <i className="ri-arrow-right-line text-xl transition-transform duration-300 group-hover:translate-x-1"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
