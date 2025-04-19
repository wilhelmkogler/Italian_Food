import { useState } from "react";

const ProductForm = ({ initialData, onClose, onRefresh }) => {
  const [form, setForm] = useState(
    initialData || {
      name: "",
      price: "",
      category: "",
      description: "",
    }
  );

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = initialData ? "PUT" : "POST";
    const url = initialData
      ? `http://localhost:5000/api/termekek/${initialData._id}`
      : `http://localhost:5000/api/termekek`;

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      onRefresh();
      onClose();
    } else {
      alert("Hiba történt a mentés során.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Product name"
        className="w-full px-3 py-2 border rounded"
        required
      />
      <input
        type="number"
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full px-3 py-2 border rounded"
        required
      />
      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full px-3 py-2 border rounded"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full px-3 py-2 border rounded"
        rows={3}
      ></textarea>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {initialData ? "Update" : "Add"} Product
      </button>
    </form>
  );
};

export default ProductForm;
