import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = location.state?.cart || [];

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "cash",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.phone) {
      Swal.fire({
        title: "Error",
        text: "Please fill out all the fields.",
        icon: "warning",
        confirmButtonText: "Okay",
      });
      return;
    }

    const order = {
      customer: form,
      items: cart,
      total:
        cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 5,
    };

    try {
      const res = await fetch("http://localhost:5000/api/rendelesek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (res.ok) {
        Swal.fire({
          title: "Thank you!",
          text: "Your order has been placed successfully.",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Home Page",
          cancelButtonText: "Place another Order",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            navigate("/delivery");
          }
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong while placing your order.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.error("Order error:", error);
      Swal.fire({
        title: "Error",
        text: "Could not connect to server.",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <section className="max-w-6xl mx-auto h-[85vh] px-32 py-20 lg:py-16 lg:px-4 font-nicer text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">Checkout</h2>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="relative flex-1 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url(/img/menu.png)] bg-cover bg-center blur-sm brightness-75 z-0"></div>

          <form
            onSubmit={handleSubmit}
            className="relative z-10 space-y-6 p-6 h-full text-white"
          >
            <h3 className="text-2xl font-semibold mb-10">Customer Info</h3>

            <div>
              <label className="block mb-4">Full Name:</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded text-white bg-transparent border-4"
              />
            </div>

            <div>
              <label className="block mb-4">Delivery Address:</label>
              <input
                type="text"
                name="address"
                required
                value={form.address}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded text-white bg-transparent border-4"
              />
            </div>

            <div>
              <label className="block mb-4">Phone Number:</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded text-white bg-transparent border-4"
              />
            </div>
          </form>
        </div>

        <div className="relative flex-1 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url(/img/menu.png)] bg-cover bg-center blur-sm brightness-75 z-0"></div>

          <div className="relative z-10 p-6 h-full text-white">
            <h3 className="text-2xl font-semibold mb-12">Order Summary</h3>

            <div className="flex justify-between mb-2">
              <span>Items Total:</span>
              <span>
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>$5.00</span>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
              <span>Total:</span>
              <span>
                $
                {(
                  cart.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  ) + 5
                ).toFixed(2)}
              </span>
            </div>

            <div className="my-8 text-lg">
              <div className="flex flex-row items-center">
                <div className="w-1/2">
                  <label className="block font-medium">Payment Method:</label>
                </div>

                <div className="w-1/2 flex flex-col items-end gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={form.payment === "cash"}
                      onChange={handleChange}
                      className="accent-green-600"
                    />
                    Cash on Delivery
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={form.payment === "card"}
                      onChange={handleChange}
                      className="accent-green-600 hover:scale-105 transition-all"
                    />
                    Credit/Debit Card
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full text-lg py-2 px-4 bg-zold transition-all duration-500 hover:bg-white hover:text-black rounded-xl font-semibold"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
