import { useEffect, useState } from "react";

const AdminHome = () => {
  const [orders, setOrders] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/rendelesek")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        const sum = data.reduce((acc, order) => acc + order.total, 0);
        setTotalRevenue(sum);
      });
  }, []);

  return (
    <div className="text-white mx-32 my-14 lg:mx-0 lg:my-0 space-y-6 border-2 rounded-xl">
      <h2 className="text-3xl font-bold">Welcome to the Admin Panel</h2>
      <p className="text-white/80">
        Here's a quick overview of the current order statistics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow">
          <h3 className="text-xl font-semibold mb-2">Total Orders</h3>
          <p className="text-3xl font-bold text-green-400">{orders.length}</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow">
          <h3 className="text-xl font-semibold mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-400">
            ${totalRevenue.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
