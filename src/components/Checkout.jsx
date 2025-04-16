import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

    const order = {
      customer: form,
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 5,
    };

    try {
      const res = await fetch("http://localhost:5000/api/rendelesek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (res.ok) {
        alert("Order placed successfully!");
        console.log("Order being sent:", order);

        navigate("/");
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Order error:", error);
    }
  };

  return (
    <section className="max-w-lg mx-auto py-16 px-6 font-nicer text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded text-black"
          />
        </div>

        <div>
          <label className="block mb-1">Address</label>
          <input
            type="text"
            name="address"
            required
            value={form.address}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded text-black"
          />
        </div>

        <div>
          <label className="block mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded text-black"
          />
        </div>

        <div>
          <label className="block mb-1">Payment</label>
          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded text-black"
          >
            <option value="cash">Cash</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition py-2 rounded-xl font-semibold"
        >
          Place Order
        </button>
      </form>
    </section>
  );
};

export default Checkout;
