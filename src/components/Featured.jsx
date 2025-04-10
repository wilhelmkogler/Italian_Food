const dishes = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce.",
      image: "../public/img/fea1.jpg",
    },
    {
      id: 2,
      name: "Spaghetti Carbonara",
      description: "Traditional Roman pasta with creamy sauce, pancetta, and parmesan.",
      image: "../public/img/fea2.jpg",
    },
    {
      id: 3,
      name: "Tiramisu",
      description: "Famous Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
      image: "../public/img/fea3.jpg",
    },
  ];
  
  function Featured() {
    return (
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold text-center mb-12">
          Featured Dishes
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img src={dish.image} alt={dish.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Featured;
  