
export interface Burger {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags: string[];
  rating: number;
  calories: number;
  isNew?: boolean;
  isPopular?: boolean;
}

export const categories = [
  "TODAS",
  "CLÁSICAS",
  "PREMIUM",
  "POLLO",
  "PICANTES",
  "VEGETARIANA",
  "COMBOS",
  "ESPECIALES",
];

export const allTags = ["Popular", "Nuevo", "Picante", "Vegano", "Sin Gluten", "Chef's Pick"];

export const burgers: Burger[] = [
  {
    id: 1,
    name: "Doble Cheddar",
    description: "Doble carne de res, doble queso cheddar, lechuga, tomate, cebolla caramelizada y salsa especial",
    price: 1800,
    category: "CLÁSICAS",
    tags: ["Popular"],
    rating: 4.8,
    calories: 720,
    isPopular: true,
    image: "https://readdy.ai/api/search-image?query=delicious%20double%20cheeseburger%20with%20melted%20cheddar%20cheese%20layers%20and%20fresh%20vegetables%20on%20a%20clean%20simple%20white%20background%20with%20soft%20lighting%20professional%20food%20photography%20high%20quality%20appetizing%20presentation&width=400&height=300&seq=burger1&orientation=landscape"
  },
  {
    id: 2,
    name: "Bacon BBQ",
    description: "Carne premium, bacon crocante, queso ahumado, aros de cebolla, salsa BBQ casera",
    price: 2000,
    category: "PREMIUM",
    tags: ["Popular", "Chef's Pick"],
    rating: 4.9,
    calories: 850,
    isPopular: true,
    image: "https://readdy.ai/api/search-image?query=gourmet%20bacon%20bbq%20burger%20with%20crispy%20bacon%20strips%20smoked%20cheese%20onion%20rings%20and%20barbecue%20sauce%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality%20delicious%20presentation&width=400&height=300&seq=burger2&orientation=landscape"
  },
  {
    id: 3,
    name: "Clásica Simple",
    description: "Carne jugosa, queso americano, lechuga, tomate, pepinillos y salsa de la casa",
    price: 1500,
    category: "CLÁSICAS",
    tags: [],
    rating: 4.5,
    calories: 580,
    image: "https://readdy.ai/api/search-image?query=classic%20simple%20hamburger%20with%20american%20cheese%20fresh%20lettuce%20tomato%20pickles%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality%20appetizing%20presentation&width=400&height=300&seq=burger3&orientation=landscape"
  },
  {
    id: 4,
    name: "Crispy Chicken",
    description: "Pollo empanizado crocante, lechuga, tomate, mayonesa de chipotle y queso suizo",
    price: 1700,
    category: "POLLO",
    tags: ["Popular"],
    rating: 4.7,
    calories: 640,
    isPopular: true,
    image: "https://readdy.ai/api/search-image?query=crispy%20fried%20chicken%20burger%20with%20golden%20breaded%20chicken%20breast%20swiss%20cheese%20fresh%20vegetables%20and%20chipotle%20mayo%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality&width=400&height=300&seq=burger4&orientation=landscape"
  },
  {
    id: 5,
    name: "Mega Bacon",
    description: "Triple carne, triple bacon, triple queso, cebolla morada, jalapeños y salsa picante",
    price: 2500,
    category: "PREMIUM",
    tags: ["Popular", "Picante", "Chef's Pick"],
    rating: 4.9,
    calories: 1100,
    isPopular: true,
    image: "https://readdy.ai/api/search-image?query=massive%20triple%20bacon%20cheeseburger%20with%20three%20beef%20patties%20three%20bacon%20layers%20three%20cheese%20slices%20jalapenos%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality%20impressive%20presentation&width=400&height=300&seq=burger5&orientation=landscape"
  },
  {
    id: 6,
    name: "Veggie Deluxe",
    description: "Medallón de garbanzos y quinoa, aguacate, rúcula, tomate, cebolla morada y alioli vegano",
    price: 1600,
    category: "VEGETARIANA",
    tags: ["Vegano", "Sin Gluten"],
    rating: 4.4,
    calories: 480,
    image: "https://readdy.ai/api/search-image?query=delicious%20vegetarian%20burger%20with%20chickpea%20quinoa%20patty%20fresh%20avocado%20arugula%20tomato%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality%20healthy%20appetizing%20presentation&width=400&height=300&seq=burger6&orientation=landscape"
  },
  {
    id: 7,
    name: "Blue Cheese",
    description: "Carne angus, queso azul, cebolla caramelizada, rúcula y reducción de balsámico",
    price: 2200,
    category: "PREMIUM",
    tags: ["Chef's Pick"],
    rating: 4.6,
    calories: 780,
    image: "https://readdy.ai/api/search-image?query=gourmet%20blue%20cheese%20burger%20with%20angus%20beef%20caramelized%20onions%20arugula%20balsamic%20reduction%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality%20elegant%20presentation&width=400&height=300&seq=burger7&orientation=landscape"
  },
  {
    id: 8,
    name: "Spicy Jalapeño",
    description: "Carne especiada, queso pepper jack, jalapeños frescos, guacamole y salsa picante",
    price: 1900,
    category: "PICANTES",
    tags: ["Picante", "Popular"],
    rating: 4.7,
    calories: 710,
    isPopular: true,
    image: "https://readdy.ai/api/search-image?query=spicy%20jalapeno%20burger%20with%20pepper%20jack%20cheese%20fresh%20jalapenos%20guacamole%20hot%20sauce%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality%20fiery%20appetizing%20presentation&width=400&height=300&seq=burger8&orientation=landscape"
  },
  {
    id: 9,
    name: "Truffle Mushroom",
    description: "Carne wagyu, champiñones salteados, queso gruyère, aceite de trufa y mayonesa de ajo negro",
    price: 2800,
    category: "ESPECIALES",
    tags: ["Chef's Pick", "Nuevo"],
    rating: 4.9,
    calories: 820,
    isNew: true,
    image: "https://readdy.ai/api/search-image?query=luxury%20truffle%20mushroom%20burger%20with%20wagyu%20beef%20sauteed%20mushrooms%20gruyere%20cheese%20truffle%20oil%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality%20gourmet%20elegant%20presentation&width=400&height=300&seq=burger9&orientation=landscape"
  },
  {
    id: 10,
    name: "Pollo Picante",
    description: "Pollo a la parrilla marinado en especias, queso cheddar, coleslaw picante y salsa sriracha",
    price: 1750,
    category: "POLLO",
    tags: ["Picante", "Nuevo"],
    rating: 4.6,
    calories: 600,
    isNew: true,
    image: "https://readdy.ai/api/search-image?query=spicy%20grilled%20chicken%20burger%20with%20cheddar%20cheese%20coleslaw%20sriracha%20sauce%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality%20vibrant%20appetizing%20presentation&width=400&height=300&seq=burger10&orientation=landscape"
  },
  {
    id: 11,
    name: "Combo Clásico",
    description: "Hamburguesa clásica + papas fritas medianas + bebida a elección. La combinación perfecta",
    price: 2200,
    category: "COMBOS",
    tags: ["Popular"],
    rating: 4.7,
    calories: 950,
    isPopular: true,
    image: "https://readdy.ai/api/search-image?query=classic%20burger%20combo%20meal%20with%20french%20fries%20and%20soft%20drink%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality%20complete%20meal%20presentation%20appetizing&width=400&height=300&seq=burger11&orientation=landscape"
  },
  {
    id: 12,
    name: "Combo Premium",
    description: "Hamburguesa Bacon BBQ + papas fritas grandes + bebida + postre del día. Todo incluido",
    price: 3200,
    category: "COMBOS",
    tags: ["Popular", "Chef's Pick"],
    rating: 4.8,
    calories: 1250,
    isPopular: true,
    image: "https://readdy.ai/api/search-image?query=premium%20burger%20combo%20meal%20with%20large%20fries%20dessert%20and%20drink%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality%20deluxe%20complete%20meal%20presentation&width=400&height=300&seq=burger12&orientation=landscape"
  },
  {
    id: 13,
    name: "Smash Burger",
    description: "Dos medallones aplastados en plancha, queso americano fundido, pepinillos, mostaza y ketchup artesanal",
    price: 1950,
    category: "ESPECIALES",
    tags: ["Nuevo", "Popular"],
    rating: 4.8,
    calories: 760,
    isNew: true,
    isPopular: true,
    image: "https://readdy.ai/api/search-image?query=smash%20burger%20with%20two%20smashed%20beef%20patties%20melted%20american%20cheese%20pickles%20mustard%20ketchup%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality%20crispy%20edges%20appetizing&width=400&height=300&seq=burger13&orientation=landscape"
  },
  {
    id: 14,
    name: "Inferno Burger",
    description: "Carne con mezcla de chiles, queso habanero, jalapeños encurtidos, cebolla roja y salsa ghost pepper",
    price: 2100,
    category: "PICANTES",
    tags: ["Picante", "Nuevo"],
    rating: 4.5,
    calories: 730,
    isNew: true,
    image: "https://readdy.ai/api/search-image?query=extreme%20spicy%20inferno%20burger%20with%20habanero%20cheese%20pickled%20jalapenos%20red%20onion%20ghost%20pepper%20sauce%20flames%20on%20clean%20white%20background%20professional%20food%20photography%20high%20quality%20intense%20fiery%20presentation&width=400&height=300&seq=burger14&orientation=landscape"
  }
];
