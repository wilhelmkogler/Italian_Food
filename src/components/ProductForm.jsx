import { useState } from "react";
import Swal from "sweetalert2";

const ProductForm = ({ initialData, onClose, onRefresh }) => {
  const [form, setForm] = useState(
    initialData || {
      name: "",
      price: "",
      category: "",
      description: "",
      image: "",
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
      Swal.fire({
        title: initialData ? "Product Updated!" : "Product Added!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to save product.",
        icon: "error",
        confirmButtonText: "OK",
      });
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
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="text"
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full px-3 py-2 border rounded"
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

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full px-3 py-2 border rounded"
        rows={3}
      ></textarea>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-zold text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {initialData ? "Update" : "Add"} Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
