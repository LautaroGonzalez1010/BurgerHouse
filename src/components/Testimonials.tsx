const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Cliente frecuente",
      comment: "Las mejores hamburguesas que he probado. La calidad de la carne es excepcional y siempre llegan calientes. ¡Totalmente recomendadas!",
      rating: 5,
      avatar: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20happy%20young%20latina%20woman%20smiling%20customer%20testimonial%20photo%20clean%20white%20background%20high%20quality&width=100&height=100&seq=avatar1&orientation=squarish"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Amante de las hamburguesas",
      comment: "Pedí la Mega Bacon y quedé impresionado. Generosa, jugosa y con un sabor increíble. El servicio de entrega fue rápido y eficiente.",
      rating: 5,
      avatar: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20happy%20young%20latino%20man%20smiling%20customer%20testimonial%20photo%20clean%20white%20background%20high%20quality&width=100&height=100&seq=avatar2&orientation=squarish"
    },
    {
      id: 3,
      name: "Laura Martínez",
      role: "Vegetariana feliz",
      comment: "Como vegetariana, me encanta que tengan opciones deliciosas. La Veggie Deluxe es mi favorita, llena de sabor y muy bien preparada.",
      rating: 5,
      avatar: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20happy%20young%20woman%20smiling%20customer%20testimonial%20photo%20clean%20white%20background%20high%20quality&width=100&height=100&seq=avatar3&orientation=squarish"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-[#faf6f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-bold tracking-wider">TESTIMONIOS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros <span className="italic font-serif text-[#d4ff00]">clientes</span>
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            Miles de clientes satisfechos respaldan la calidad de nuestras hamburguesas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id}
              className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-gray-900 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover border-2 border-gray-900"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-[#d4ff00] text-xl"></i>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-base font-medium">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;