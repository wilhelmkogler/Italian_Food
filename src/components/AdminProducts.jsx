import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import Swal from "sweetalert2";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/termekek")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const openModal = (product = null) => {
    setEditProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setEditProduct(null);
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    const res = await fetch(`http://localhost:5000/api/termekek/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setProducts(products.filter((p) => p._id !== id));
      Swal.fire({
        title: "Deleted!",
        icon: "success",
        timer: 1200,
        showConfirmButton: false,
      });
    }
  };

  const refreshProducts = () => {
    fetch("http://localhost:5000/api/termekek")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      });
  };

  return (
    <div className="px-32 py-10 lg:p-0 font-fancy text-white">
      <h2 className="text-4xl font-bold text-center mb-6">All Products</h2>

      {/* Filter gombok */}
      <div className="mb-6 flex justify-between">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1 rounded-lg ${
              selectedCategory === "all"
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Show All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg capitalize ${
                selectedCategory === cat
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <button
          onClick={() => openModal()}
          className="bg-white text-black px-4 py-2 rounded transition hover:scale-105 hover:bg-zold hover:text-white"
        >
          + Add Product
        </button>
      </div>

      {/* Termékkártyák */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products
          .filter((p) =>
            selectedCategory === "all" ? true : p.category === selectedCategory
          )
          .map((product) => (
            <div
              key={product._id}
              className="bg-white/10 text-white rounded-xl overflow-hidden shadow-lg flex flex-col justify-around"
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
<img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-2 capitalize">
                  Category: {product.category}
                </p>
                <p className="text-sm text-gray-300">
                  Description: {product.description}
                </p>
              </div>
              <div className="px-4 py-2">
                <p className="text-lg text-center font-bold text-green-400">
                  ${product.price}
                </p>
              </div>

              <div className="flex justify-center gap-4 my-4">
                <button
                  onClick={() => openModal(product)}
                  className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white text-black rounded-xl p-6 w-[90%] max-w-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✖
            </button>
            <h3 className="text-2xl font-semibold mb-4">
              {editProduct ? "Edit Product" : "Add Product"}
            </h3>

            <ProductForm
              initialData={editProduct}
              onClose={closeModal}
              onRefresh={refreshProducts}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
