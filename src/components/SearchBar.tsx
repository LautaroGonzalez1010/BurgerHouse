interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <section id="buscador" className="py-12 sm:py-16 bg-gradient-to-b from-[#faf6f1] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Encuentra tu <span className="italic font-serif text-[#d4ff00]">favorita</span>
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl font-medium">
            Busca entre nuestras deliciosas opciones
          </p>
        </div>

        <div className="relative bg-white rounded-3xl shadow-2xl p-2 border-2 border-gray-200">
          <div className="flex items-center gap-4 px-4">
            <i className="ri-search-line text-2xl sm:text-3xl text-gray-900"></i>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Busca tu hamburguesa favorita..."
              className="flex-1 py-4 text-base sm:text-lg outline-none text-gray-900 placeholder-gray-500 font-medium"
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange('')}
                className="text-gray-900 hover:text-gray-700 transition-colors cursor-pointer w-10 h-10 flex items-center justify-center"
              >
                <i className="ri-close-line text-2xl sm:text-3xl"></i>
              </button>
            )}
          </div>
        </div>

        {searchTerm && (
          <div className="mt-4 text-center text-gray-700 font-medium">
            Buscando: <span className="font-bold text-gray-900">{searchTerm}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchBar;