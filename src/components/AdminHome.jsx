import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const AdminHome = () => {
  const [orders, setOrders] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [last7Days, setLast7Days] = useState(0);
  const [paymentStats, setPaymentStats] = useState([]);
  const [dailyRevenue, setDailyRevenue] = useState([]);
  const [mostPopularItem, setMostPopularItem] = useState("");
  const [avgOrderValue, setAvgOrderValue] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/rendelesek")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);

        const now = new Date();
        const sevenDaysAgo = new Date(now);
        sevenDaysAgo.setDate(now.getDate() - 7);

        const last7 = data.filter(
          (order) => new Date(order.createdAt) >= sevenDaysAgo
        );
        setLast7Days(last7.length);

        const total = data.reduce((acc, order) => acc + order.total, 0);
        setTotalRevenue(total);
        setAvgOrderValue((total / data.length).toFixed(2));

        const itemCount = {};
        data.forEach((order) => {
          order.items.forEach((item) => {
            itemCount[item.name] = (itemCount[item.name] || 0) + item.quantity;
          });
        });

        const mostPopular = Object.entries(itemCount).sort(
          (a, b) => b[1] - a[1]
        )[0];
        setMostPopularItem(mostPopular?.[0] || "-");

        const cash = data.filter((o) => o.customer.payment === "cash").length;
        const card = data.filter((o) => o.customer.payment === "card").length;
        setPaymentStats([
          { name: "Cash", value: cash },
          { name: "Card", value: card },
        ]);

        const grouped = {};
        data.forEach((order) => {
          const date = new Date(order.createdAt).toLocaleDateString();
          grouped[date] = (grouped[date] || 0) + order.total;
        });

        const revenueArray = Object.entries(grouped).map(([date, total]) => ({
          date,
          total,
        }));
        setDailyRevenue(revenueArray.reverse());
      });
  }, []);

  const COLORS = ["#22c55e", "#3b82f6"];

  return (
    <div className="text-white px-32 py-14 lg:p-0 space-y-6">
      <h2 className="text-4xl text-center font-bold">Welcome to the Admin Panel</h2>

      {/* Fő statisztikák */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatBox label="Total Orders" value={orders.length} />
        <StatBox label="Total Revenue" value={`$${totalRevenue.toFixed(2)}`} />
        
        <StatBox label="Avg. Order Value" value={`$${avgOrderValue}`} />
        <StatBox label="Top Product" value={mostPopularItem} />
      </div>

      {/* Pie Chart fizetési módok */}
      <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow mt-8">
        <h3 className="text-xl font-semibold mb-4">Payment Method Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={paymentStats}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {paymentStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Diagram napi bevételről */}
      <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow mt-8">
        <h3 className="text-xl font-semibold mb-4">Revenue by Day</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailyRevenue}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#22c55e" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const StatBox = ({ label, value }) => (
  <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow text-center">
    <h3 className="text-lg font-medium mb-1 text-gray-300">{label}</h3>
    <p className="text-3xl font-bold text-green-400">{value}</p>
  </div>
);

export default AdminHome;
