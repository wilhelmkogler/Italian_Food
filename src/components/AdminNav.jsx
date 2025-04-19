import { Link, useLocation } from "react-router-dom";

const AdminNav = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `block py-2 px-6 text-xl rounded-lg ${
      location.pathname === path
        ? "bg-zold text-white font-bold"
        : "text-white hover:bg-white/20"
    }`;

  return (
    <nav className="px-4">

      <div className="flex flex-row lg:flex-col justify-center gap-4">
        <Link to="/admin" className={linkClass("/admin")}>
          Dashboard
        </Link>

        <Link to="/admin/products" className={linkClass("/admin/products")}>
          Products
        </Link>

        <Link to="/admin/orders" className={linkClass("/admin/orders")}>
          Orders
        </Link>
      </div>
    </nav>
  );
};

export default AdminNav;
