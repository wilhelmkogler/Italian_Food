function Story() {
  return (
    <section className="text-white py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      {/* Kép */}
      <div className="flex-1">
        <img
          src="../public/img/story.jpg"
          alt="Italian Restaurant"
          className="rounded-2xl shadow-2xl"
        />
      </div>

      {/* Szöveg */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
          Our Story
        </h2>
        <p className="text-lg mb-4 leading-relaxed">
          Welcome to La Tavola — where tradition meets taste. Since 1995, we have been serving authentic Italian dishes made with fresh ingredients and love.
        </p>
        <p className="text-lg leading-relaxed">
          From our handcrafted pizzas to our signature pastas, every bite is a journey to Italy. Enjoy the cozy atmosphere, friendly service, and unforgettable flavors.
        </p>
      </div>
    </section>
    
  );
}

export default Story;

