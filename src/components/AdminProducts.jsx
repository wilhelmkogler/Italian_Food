import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/termekek")
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
    if (!confirm("Are you sure you want to delete this product?")) return;

    const res = await fetch(`http://localhost:5000/api/termekek/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setProducts(products.filter((p) => p._id !== id));
    }
  };

  const refreshProducts = () => {
    fetch("http://localhost:5000/api/termekek")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  return (
    <div className="p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Products</h2>
        <button
          onClick={() => openModal()}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white/10 p-4 rounded-xl border border-white/20"
          >
            <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
            <p className="text-sm text-gray-300 mb-1">{product.description}</p>
            <p className="text-sm">Category: {product.category}</p>
            <p className="text-sm mb-2">Price: ${product.price}</p>

            <div className="flex gap-3 mt-3">
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
