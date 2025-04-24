function Story() {
  return (
    <section className=" text-white px-32 py-10 lg:py-10 lg:px-4 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
      <div className="flex-1">
        <img
          src="../public/img/story.jpg"
          alt="Italian Restaurant"
          className="rounded-2xl shadow-2xl"
        />
      </div>

      <div className="flex-1 flex flex-col font-nicer">
        <h2 className="text-5xl font-bold mb-6 text-center md:text-left">
          Our Story
        </h2>
        <p className="text-lg mb-4 leading-relaxed text-justify">
          Welcome to PIZZA POCO — where tradition meets taste. Since 1995, we
          have been serving authentic Italian dishes made with fresh ingredients
          and love.
        </p>
        <p className="text-l leading-relaxed text-justify">
          From our handcrafted pizzas to our signature pastas, every bite is a
          journey to PIZZA POCO. Enjoy the cozy atmosphere, friendly service,
          and unforgettable flavors.
        </p>
      </div>
    </section>
  );
}

export default Story;
