import { useEffect, useState } from "react";

const getTimeSince = (timestamp) => {
  const now = new Date();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} h ${remainingMinutes} m ago`;
};

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/rendelesek")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Hiba a rendelések lekérésekor:", err));
  }, []);

  return (
    <div className=" text-white font-fancy mx-32 my-14 lg:my-0 lg:mx-0">
      <h2 className="text-4xl font-bold mb-6 text-center">Received Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="flex flex-col lg:flex-row justify-between gap-6 bg-white/10 rounded-xl p-4 space-y-3"
            >
              <div className="flex flex-col justify-around gap-2 text-md">
                <span>
                  <strong>Name:</strong> {order.customer.name}
                </span>
                <span>
                  <strong>Phone:</strong> {order.customer.phone}
                </span>
                <span>
                  <strong>Address:</strong> {order.customer.address}
                </span>
                <span>
                  <strong>Payment:</strong> {order.customer.payment}
                </span>
              </div>

              <div className="flex flex-col">
                <div className="text-md">
                  {order.items.map((item, idx) => (
                    <div className="mb-4" key={idx}>
                      {item.name} × {item.quantity} ($
                      {item.price * item.quantity})
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-row lg:flex-col justify-around gap-4">
                <div className="text-md bg-white text-black px-16 lg:px-4 py-2 rounded-xl text-center">
                  {getTimeSince(new Date(order.createdAt))}
                </div>

                <div className="font-bold bg-zold text-white px-16 lg:px-4 py-2 rounded-xl text-center">
                  Total: ${order.total.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
