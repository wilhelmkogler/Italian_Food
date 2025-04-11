function GoMenu() {
    return (
      <section className="text-white font-nicer py-10 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
  
        {/* Szöveg */}
        <div className="flex flex-col items-end w-1/3">
          <h2 className="text-4xl font-bold mb-6 md:text-left">
            Menu
          </h2>
          <p className="text-lg mb-4 leading-relaxed text-justify">
            Click on the image on the right to open our Menu.
          </p>
          
        </div>

        {/* Kép */}
        <div className="flex w-2/3">
        <img
            src="../public/img/story.jpg"
            alt="Italian Restaurant"
            className="rounded-2xl shadow-2xl"
        />
        </div>


      </section>
      
    );
  }
  
  export default GoMenu;
  
  