import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "../public/img/fea1.jpg",
  "../public/img/fea2.jpg",
  "../public/img/fea3.jpg",
  "../public/img/fea2.jpg",

];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleImageChange = (nextIndex) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setFade(false);
    }, 300); // animáció ideje (ms)
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
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-white text-4xl font-bold text-center mb-12">Gallery</h2>

      <div className="relative">
        <img
          src={images[currentIndex]}
          alt="Restaurant gallery"
          className={`w-full h-[500px] object-cover rounded-2xl shadow-lg transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
        />

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

export default Gallery;
