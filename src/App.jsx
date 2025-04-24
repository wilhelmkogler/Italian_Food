import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Delivery from "./pages/Delivery";
import Summary from "./pages/Summary";
import Admin from "./pages/Admin";
import AdminHome from "./components/AdminHome";
import AdminOrders from "./components/AdminOrders";
import AdminProducts from "./components/AdminProducts";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToHashElement />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/summary" element={<Summary />} />

        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminHome />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
}
