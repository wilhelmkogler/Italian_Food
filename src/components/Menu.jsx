const pizzas = [
  {
    name: "Margherita",
    price: "$9.99",
    ingredients: "Tomato sauce, mozzarella, basil",
  },
  {
    name: "Pepperoni",
    price: "$11.99",
    ingredients: "Tomato sauce, mozzarella, pepperoni",
  },
  {
    name: "Prosciutto",
    price: "$12.99",
    ingredients: "Tomato sauce, mozzarella, prosciutto",
  },
  {
    name: "Quattro Formaggi",
    price: "$13.99",
    ingredients: "Mozzarella, gorgonzola, parmesan, goat cheese",
  },
  {
    name: "Vegetariana",
    price: "$10.99",
    ingredients: "Tomato sauce, mozzarella, grilled vegetables",
  },
  {
    name: "Diavola",
    price: "$12.49",
    ingredients: "Tomato sauce, mozzarella, spicy salami",
  },
  {
    name: "Hawaiian",
    price: "$11.49",
    ingredients: "Tomato sauce, mozzarella, ham, pineapple",
  },
  {
    name: "Tonno",
    price: "$12.49",
    ingredients: "Tomato sauce, mozzarella, tuna, onion",
  },
  {
    name: "Capricciosa",
    price: "$13.49",
    ingredients: "Tomato sauce, mozzarella, ham, mushrooms, artichokes",
  },
  {
    name: "Calzone",
    price: "$12.99",
    ingredients: "Folded pizza with ham, cheese, mushrooms",
  },
];

const pastas = [
  {
    name: "Spaghetti Carbonara",
    price: "$10.99",
    ingredients: "Pasta, eggs, pancetta, parmesan, black pepper",
  },
  {
    name: "Penne Arrabbiata",
    price: "$9.99",
    ingredients: "Pasta, spicy tomato sauce, garlic, chili",
  },
  {
    name: "Tagliatelle al Pesto",
    price: "$11.49",
    ingredients: "Pasta, basil pesto, parmesan",
  },
  {
    name: "Lasagna",
    price: "$12.99",
    ingredients: "Layers of pasta, meat sauce, béchamel, cheese",
  },
  {
    name: "Gnocchi al Pomodoro",
    price: "$10.49",
    ingredients: "Gnocchi, tomato sauce, basil",
  },
];

const drinks = [
  {
    name: "Cold Drinks",
    price: "$4.99",
    ingredients: "Fanta, cola, sprite",
  },
  {
    name: "Wine",
    price: "$7.99",
    ingredients: "Red, white, rosé",
  },
  {
    name: "Lemonade",
    price: "$9.99",
    ingredients: "Strawberry, mango, kiwi",
  },

];

const Menu = () => {
  return (
    <section id="menu" className="px-32 py-10 lg:py-16 lg:px-4 max-w-6xl mx-auto font-nicer">
      <h2 className="text-5xl font-bold text-white text-center mb-12">Menu</h2>

      <div className="relative border-2 border-white rounded-3xl overflow-hidden">
        {/* Háttérkép blur-ral */}
        <div className="absolute inset-0 bg-[url(/img/menu.png)] bg-cover bg-center blur-md brightness-75"></div>

        {/* Tartalom */}
        <div className="relative p-10 flex flex-col lg:flex-row lg:justify-around gap-0 lg:gap-16">
          <div>
            <h3 className="text-3xl font-semibold text-white underline mb-10">Pizza</h3>
            {pizzas.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between font-semibold text-md">
                  <span className="text-white">{item.name}</span>
                  <span className="text-white">{item.price}</span>
                </div>
                <p className="text-white">{item.ingredients}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-white underline mt-10 mb-10 lg:mt-0">Pasta</h3>
            {pastas.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between font-semibold text-md">
                  <span className="text-white">{item.name}</span>
                  <span className="text-white">{item.price}</span>
                </div>
                <p className="text-white">{item.ingredients}</p>
              </div>
            ))}
            <h3 className="text-3xl font-semibold text-white underline my-10">Drinks</h3>
            {drinks.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between font-semibold text-md">
                  <span className="text-white">{item.name}</span>
                  <span className="text-white">{item.price}</span>
                </div>
                <p className="text-white">{item.ingredients}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
