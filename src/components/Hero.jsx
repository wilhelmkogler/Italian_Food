import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/img/fea1.jpg",
  "/img/fea2.jpg",
  "/img/fea3.jpg",
];

const texts = [
  "HUNGRY?",
  "COME AND ENJOY A GREAT MEAL!",
  "OR ORDER DELIVERY!",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleImageChange = (nextIndex) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setFade(false);
    }, 300);
  };

  const prevImage = () => {
    const nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    handleImageChange(nextIndex);
  };

  const nextImage = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    handleImageChange(nextIndex);
  };

  return (
    <section className="pt-2 pb-10 mx-auto">
      <div className="relative">
        {/* Háttér kép blur-ral */}
        <img
          src={images[currentIndex]}
          alt="Restaurant gallery"
          className={`w-full h-[20vh] lg:h-[80vh] object-cover rounded-0 shadow-lg transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'} blur-sm brightness-75`}
        />

        {/* Szöveg középen */}
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-fancy text-5xl lg:text-7xl font-bold text-center drop-shadow-lg">
          {texts[currentIndex]}
        </h2>

        {/* Bal nyíl */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Jobb nyíl */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
