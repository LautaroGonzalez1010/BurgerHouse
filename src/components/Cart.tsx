import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    updateNotes,
    getTotalPrice, 
    isCartOpen, 
    setIsCartOpen,
    clearCart 
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let message = '¡Hola! Quiero hacer el siguiente pedido:\n\n';
    
    cartItems.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - $${(item.price * item.quantity).toLocaleString('es-AR')}\n`;
      if (item.notes && item.notes.trim()) {
        message += `  Nota: ${item.notes}\n`;
      }
    });
    
    message += `\n*Total: $${getTotalPrice().toLocaleString('es-AR')}*`;
    
    const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#d4ff00] rounded-full flex items-center justify-center">
              <i className="ri-shopping-bag-3-fill text-2xl text-gray-900"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Tu Pedido</h2>
              <p className="text-sm text-gray-300">
                {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-3xl"></i>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shopping-bag-3-line text-5xl text-gray-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tu carrito está vacío</h3>
              <p className="text-gray-600 mb-6 max-w-xs">
                Agrega algunas hamburguesas deliciosas para comenzar tu pedido
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all whitespace-nowrap cursor-pointer"
              >
                Ver Menú
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white border-2 border-gray-200 rounded-2xl p-4 hover:border-gray-300 transition-all">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-red-500 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
                          title="Eliminar"
                        >
                          <i className="ri-delete-bin-line text-xl"></i>
                        </button>
                      </div>
                      
                      <p className="text-[#d4ff00] font-bold text-xl mb-3">
                        ${(item.price * item.quantity).toLocaleString('es-AR')}
                      </p>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
                        >
                          <i className="ri-subtract-line text-xl text-gray-700"></i>
                        </button>
                        <span className="font-bold text-gray-900 text-lg min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-9 h-9 flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-colors cursor-pointer"
                        >
                          <i className="ri-add-line text-xl"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Notes Section */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <i className="ri-edit-line mr-1"></i>
                      Comentarios adicionales
                    </label>
                    <textarea
                      value={item.notes || ''}
                      onChange={(e) => updateNotes(item.id, e.target.value)}
                      placeholder="Ej: Sin cebolla, carne bien cocida, extra queso..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none resize-none transition-colors"
                      rows={2}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Personaliza tu hamburguesa como quieras
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t-2 border-gray-200 bg-white p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="text-gray-700 font-medium">Subtotal</span>
                <span className="font-bold text-gray-900">
                  ${getTotalPrice().toLocaleString('es-AR')}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-2xl">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-[#d4ff00]">
                  ${getTotalPrice().toLocaleString('es-AR')}
                </span>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-fill text-2xl"></i>
                Hacer Pedido por WhatsApp
              </button>

              <button
                onClick={clearCart}
                className="w-full text-red-600 hover:text-red-700 font-semibold py-3 transition-colors whitespace-nowrap cursor-pointer"
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;