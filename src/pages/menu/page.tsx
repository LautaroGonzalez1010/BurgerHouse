
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { burgers } from '../../data/burgers';
import BurgerCard from '../../components/BurgerCard';
import Cart from '../../components/Cart';
import FloatingCartButton from '../../components/FloatingCartButton';
import MenuFilters from './components/MenuFilters';
import MenuNavbar from './components/MenuNavbar';
import Footer from '../../components/Footer';

const MIN_PRICE = 1500;
const MAX_PRICE = 3200;

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('TODAS');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]);
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategory('TODAS');
    setSelectedTags([]);
    setPriceRange([MIN_PRICE, MAX_PRICE]);
    setSortBy('default');
    setSearchTerm('');
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'TODAS') count++;
    count += selectedTags.length;
    if (priceRange[0] !== MIN_PRICE || priceRange[1] !== MAX_PRICE) count++;
    if (sortBy !== 'default') count++;
    return count;
  }, [selectedCategory, selectedTags, priceRange, sortBy]);

  const filteredAndSorted = useMemo(() => {
    let result = burgers.filter(b => {
      const matchesCategory = selectedCategory === 'TODAS' || b.category === selectedCategory;
      const matchesTags = selectedTags.length === 0 || selectedTags.every(t => b.tags.includes(t));
      const matchesPrice = b.price >= priceRange[0] && b.price <= priceRange[1];
      const matchesSearch =
        searchTerm === '' ||
        b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesTags && matchesPrice && matchesSearch;
    });

    switch (sortBy) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'calories-asc':
        result = [...result].sort((a, b) => a.calories - b.calories);
        break;
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result = [...result].sort((a, b) => {
          const aScore = (a.isPopular ? 2 : 0) + (a.isNew ? 1 : 0);
          const bScore = (b.isPopular ? 2 : 0) + (b.isNew ? 1 : 0);
          return bScore - aScore;
        });
    }
    return result;
  }, [selectedCategory, selectedTags, priceRange, sortBy, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <MenuNavbar />

      {/* Page Header */}
      <div className="bg-gray-900 pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#d4ff00] text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
                >
                  Inicio
                </Link>
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-right-s-line text-gray-500 text-sm"></i>
                </div>
                <span className="text-[#d4ff00] text-sm font-medium">Menú Completo</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Menú <span className="text-[#d4ff00] italic font-serif">Completo</span>
              </h1>
              <p className="text-gray-400 mt-2 text-base sm:text-lg">
                {filteredAndSorted.length} productos disponibles
              </p>
            </div>

            {/* Search bar */}
            <div className="relative w-full sm:w-80">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                <i className="ri-search-line text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                placeholder="Buscar hamburguesa..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-full pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-[#d4ff00] focus:bg-white/15 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="ri-close-line text-lg"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter toggle */}
      <div className="lg:hidden sticky top-20 z-30 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-bold cursor-pointer whitespace-nowrap"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-equalizer-2-line text-sm"></i>
            </div>
            Filtros
            {activeFiltersCount > 0 && (
              <span className="bg-[#d4ff00] text-gray-900 text-xs font-bold px-1.5 py-0.5 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>
          <span className="text-sm text-gray-500 font-medium">
            {filteredAndSorted.length} resultados
          </span>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="relative ml-auto w-full max-w-sm bg-white h-full overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-lg font-bold text-gray-900">Filtros</span>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
              >
                <i className="ri-close-line text-xl text-gray-700"></i>
              </button>
            </div>
            <div className="p-4">
              <MenuFilters
                selectedCategory={selectedCategory}
                onCategoryChange={cat => { setSelectedCategory(cat); setShowMobileFilters(false); }}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                sortBy={sortBy}
                onSortChange={setSortBy}
                minPrice={MIN_PRICE}
                maxPrice={MAX_PRICE}
                onClearFilters={handleClearFilters}
                activeFiltersCount={activeFiltersCount}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-8 items-start">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <MenuFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              sortBy={sortBy}
              onSortChange={setSortBy}
              minPrice={MIN_PRICE}
              maxPrice={MAX_PRICE}
              onClearFilters={handleClearFilters}
              activeFiltersCount={activeFiltersCount}
            />
          </div>

          {/* Products grid */}
          <div className="flex-1 min-w-0">
            {/* Active filters chips */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory !== 'TODAS' && (
                  <span className="flex items-center gap-1.5 bg-gray-900 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                    {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory('TODAS')}
                      className="w-3.5 h-3.5 flex items-center justify-center cursor-pointer hover:text-[#d4ff00]"
                    >
                      <i className="ri-close-line text-xs"></i>
                    </button>
                  </span>
                )}
                {selectedTags.map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 bg-gray-900 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                    {tag}
                    <button
                      onClick={() => handleTagToggle(tag)}
                      className="w-3.5 h-3.5 flex items-center justify-center cursor-pointer hover:text-[#d4ff00]"
                    >
                      <i className="ri-close-line text-xs"></i>
                    </button>
                  </span>
                ))}
                {(priceRange[0] !== MIN_PRICE || priceRange[1] !== MAX_PRICE) && (
                  <span className="flex items-center gap-1.5 bg-gray-900 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                    ${priceRange[0].toLocaleString('es-AR')} - ${priceRange[1].toLocaleString('es-AR')}
                    <button
                      onClick={() => setPriceRange([MIN_PRICE, MAX_PRICE])}
                      className="w-3.5 h-3.5 flex items-center justify-center cursor-pointer hover:text-[#d4ff00]"
                    >
                      <i className="ri-close-line text-xs"></i>
                    </button>
                  </span>
                )}
                <button
                  onClick={handleClearFilters}
                  className="text-xs text-gray-500 hover:text-gray-900 font-medium underline cursor-pointer whitespace-nowrap"
                >
                  Limpiar todo
                </button>
              </div>
            )}

            {filteredAndSorted.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-search-line text-5xl text-gray-300"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sin resultados</h3>
                <p className="text-gray-500 mb-6 max-w-xs">
                  No encontramos hamburguesas con esos filtros. Intenta con otras opciones.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="bg-gray-900 text-white px-6 py-3 rounded-full font-bold hover:bg-[#d4ff00] hover:text-gray-900 transition-all cursor-pointer whitespace-nowrap"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSorted.map(burger => (
                  <BurgerCard key={burger.id} burger={burger} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <Cart />
      <FloatingCartButton />
    </div>
  );
};

export default MenuPage;
