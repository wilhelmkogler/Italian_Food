const dishes = [
  {
    id: 1,
    name: "Margherita",
    description:
      "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce.",
    image: "../public/img/fea1.jpg",
  },
  {
    id: 2,
    name: "Pepperoni",
    description:
      "Traditional Roman pasta with creamy sauce, pancetta, and parmesan.",
    image: "../public/img/fea2.jpg",
  },
  {
    id: 3,
    name: "Carbonara",
    description:
      "Famous Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
    image: "../public/img/fea3.jpg",
  },
];

function Featured() {
  return (
    <section className="px-32 py-10 lg:py-10 lg:px-4 max-w-6xl mx-auto font-nicer">
      <h2 className="text-white text-5xl font-bold text-center mb-12">
        Popular Dishes
      </h2>

      <div className="flex flex-row lg:justify-between gap-8">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 w-[100%]"
          >
            {/* Fix aspect ratio  */}
            <div className="relative pt-[75%]">
              <img
                src={dish.image}
                alt={dish.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="p-4 lg:p-6">
              <h3 className="text-md lg:text-2xl font-semibold mb-3">{dish.name}</h3>
              <p className="text-gray-600 text-xs lg:text-sm">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featured;
