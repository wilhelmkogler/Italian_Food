import { useEffect, useState } from "react";
import { Pizza, UtensilsCrossed, Sandwich } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const categoryIcons = {
  pizza: <Pizza size={20} className="mr-2" />,
  pasta: <UtensilsCrossed size={20} className="mr-2" />,
  other: <Sandwich size={20} className="mr-2" />,
};

const Browse = () => {
  const [termekek, setTermekek] = useState([]);
  const [kategoria, setKategoria] = useState("all");
  const [kategoriak, setKategoriak] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/termekek")
      .then((res) => res.json())
      .then((data) => {
        setTermekek(data);
        const uniqueCats = [...new Set(data.map((item) => item.category))];
        setKategoriak(uniqueCats);
      })
      .catch((err) => console.error("Hiba a termékek lekérésénél:", err));
  }, []);

  const szurtTermekek =
    kategoria === "all"
      ? termekek
      : termekek.filter((item) => item.category === kategoria);

  const handleAddToCart = (termek) => {
    const exists = cart.find((item) => item._id === termek._id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item._id === termek._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...termek, quantity: 1 }]);
    }
  };
  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const getTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <section className="max-w-6xl mx-auto px-32 py-10 lg:py-16 lg:px-4 font-nicer relative">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        Browse Our Menu
      </h2>

      {/* Kategóriagombok */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setKategoria("all")}
          className={`px-5 py-2 rounded-full border-2 flex items-center transition-all duration-200 hover:scale-105 hover:ring-2 hover:ring-white ${
            kategoria === "all"
              ? "bg-zold text-white font-bold"
              : "bg-transparent text-white border-white"
          }`}
        >
          <span></span> All
        </button>

        {kategoriak.map((cat) => (
          <button
            key={cat}
            onClick={() => setKategoria(cat)}
            className={`px-5 py-2 rounded-full border-2 flex items-center capitalize transition-all duration-200 hover:scale-105 hover:ring-2 hover:ring-white ${
              kategoria === cat
                ? "bg-zold text-white font-bold"
                : "bg-transparent text-white border-white"
            }`}
          >
            {categoryIcons[cat] || <Sandwich size={20} className="mr-2" />}
            {cat}
          </button>
        ))}
      </div>

      {/* Termékkártyák */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {szurtTermekek.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 flex flex-col"
          >
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col h-[18vh] lg:h-[30vh]">
              <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>

              {/* Ár + gomb egy sorban */}
              <div className="mt-auto flex justify-between items-center">
                <span className="text-lg font-semibold text-black">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-black text-white py-2 px-4 rounded-xl transition-all duration-200 hover:bg-zold hover:text-white hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Kosár ikon */}
      <button
        onClick={() => setShowCart((prev) => !prev)}
        className="fixed bottom-6 right-6 bg-zold text-white rounded-full shadow-lg p-4 hover:scale-105 hover:bg-white hover:text-black transition z-50"
      >
        🛒 <span className="font-bold ml-1">{cart.length}</span>
      </button>

      {/* Kosár panel */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative w-[90%] max-w-xl bg-white rounded-2xl p-6 shadow-xl flex flex-col max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Your Cart</h3>

            {/* Kosár tartalom */}
            {cart.length === 0 ? (
              <div>

                <p className="text-red-600 font-bold text-lg m-8 text-center">
                The cart is empty.
              </p>
              <button
              onClick={() => setShowCart(false)}
              className="w-full bg-red-500 text-white text-md rounded-xl py-4 px-6 hover:bg-red-700 transition font-bold"
            >
              Close
            </button>
              </div>
              
            ) : (
              <>
                {/* Vásárolt termékek */}
                {cart
                  .filter((item) => item.quantity > 0)
                  .map((item) => (
                    <div
                      key={item._id}
                      className="mb-6 flex justify-between items-center"
                    >
                      <div>
                        <span className="text-black text-lg">{item.name}</span>
                        <p className="text-sm font-bold text-gray-500">
                          {item.category}, quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <span className="text-black text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleRemoveFromCart(item._id)}
                          className="text-white bg-red-500 px-2 font-mono hover:bg-black text-lg font-bold"
                          title="Remove"
                        >
                          x
                        </button>
                      </div>
                    </div>
                  ))}

                {/* Nem vásárolt termékek külön */}
                {cart.some((item) => item.quantity === 0) && (
                  <>
                    <hr className="my-4" />
                    <p className="text-sm text-gray-500 mb-2">Other items:</p>
                    {cart
                      .filter((item) => item.quantity === 0)
                      .map((item) => (
                        <div key={item._id} className="mb-2">
                          <div className="flex justify-between text-sm text-gray-400">
                            <span>{item.name}</span>
                            <span>x0</span>
                          </div>
                        </div>
                      ))}
                  </>
                )}

                {/* Összegzés */}
                <div className="mt-16">
                  <div className="flex justify-between font-medium text-black mb-2">
                    <span>Shipping:</span>
                    <span>$5.00</span>
                  </div>

                  <div className="flex justify-between font-bold text-lg my-4">
                    <span>Total:</span>
                    <span>${(parseFloat(getTotal()) + 5).toFixed(2)}</span>
                  </div>

                  {/* Checkout gomb */}
                  {/* Bezáró gomb */}
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setShowCart(false)}
                      className="w-full bg-red-500 text-white text-md rounded-xl py-4 px-6 hover:bg-red-700 transition font-bold"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        setShowCart(false);
                        navigate("/summary", { state: { cart } });
                      }}
                      className="w-full text-center bg-zold text-white text-md rounded-xl py-4 px-6 hover:bg-green-700 transition font-bold"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Browse;
