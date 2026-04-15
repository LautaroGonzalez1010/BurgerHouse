
import { categories, allTags } from '../../../data/burgers';

interface MenuFiltersProps {
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  minPrice: number;
  maxPrice: number;
  onClearFilters: () => void;
  activeFiltersCount: number;
}

const MenuFilters = ({
  selectedCategory,
  onCategoryChange,
  selectedTags,
  onTagToggle,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
  minPrice,
  maxPrice,
  onClearFilters,
  activeFiltersCount,
}: MenuFiltersProps) => {
  const sortOptions = [
    { value: 'default', label: 'Destacados' },
    { value: 'price-asc', label: 'Precio: menor a mayor' },
    { value: 'price-desc', label: 'Precio: mayor a menor' },
    { value: 'rating', label: 'Mejor valorados' },
    { value: 'calories-asc', label: 'Menos calorías' },
    { value: 'name', label: 'Nombre A-Z' },
  ];

  const tagIcons: Record<string, string> = {
    Popular: 'ri-fire-line',
    Nuevo: 'ri-sparkling-line',
    Picante: 'ri-temp-hot-line',
    Vegano: 'ri-leaf-line',
    'Sin Gluten': 'ri-heart-line',
    "Chef's Pick": 'ri-award-line',
  };

  return (
    <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-24">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-equalizer-2-line text-xl text-gray-900"></i>
            </div>
            <span className="text-lg font-bold text-gray-900">Filtros</span>
            {activeFiltersCount > 0 && (
              <span className="bg-gray-900 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </div>
          {activeFiltersCount > 0 && (
            <button
              onClick={onClearFilters}
              className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Limpiar todo
            </button>
          )}
        </div>

        <div className="p-6 space-y-7 max-h-[calc(100vh-10rem)] overflow-y-auto">
          {/* Ordenar por */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
              Ordenar por
            </h3>
            <div className="space-y-1.5">
              {sortOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => onSortChange(opt.value)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    sortBy === opt.value
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
              Categoría
            </h3>
            <div className="space-y-1.5">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer whitespace-nowrap flex items-center justify-between ${
                    selectedCategory === cat
                      ? 'bg-[#d4ff00] text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span>{cat}</span>
                  {selectedCategory === cat && (
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-check-line text-sm font-bold"></i>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Rango de precios */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
              Rango de precio
            </h3>
            <div className="px-1">
              <div className="flex justify-between mb-3">
                <span className="text-sm font-bold text-gray-900">
                  ${priceRange[0].toLocaleString('es-AR')}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  ${priceRange[1].toLocaleString('es-AR')}
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Mínimo</label>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[0]}
                    onChange={e => {
                      const val = Number(e.target.value);
                      if (val <= priceRange[1]) onPriceRangeChange([val, priceRange[1]]);
                    }}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Máximo</label>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={e => {
                      const val = Number(e.target.value);
                      if (val >= priceRange[0]) onPriceRangeChange([priceRange[0], val]);
                    }}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-gray-900"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                {[1500, 2000, 2500, 3200].map(preset => (
                  <button
                    key={preset}
                    onClick={() => onPriceRangeChange([minPrice, preset])}
                    className={`flex-1 text-xs py-1.5 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap ${
                      priceRange[1] === preset && priceRange[0] === minPrice
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    &lt;${(preset / 1000).toFixed(1)}k
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
              Características
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => onTagToggle(tag)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                    selectedTags.includes(tag)
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <div className="w-3.5 h-3.5 flex items-center justify-center">
                    <i className={`${tagIcons[tag] || 'ri-tag-line'} text-xs`}></i>
                  </div>
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MenuFilters;
