import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t-4 border-white text-gray-300 py-10 font-nicer">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Név */}
        <h3 className="text-2xl font-bold text-white">ITALY</h3>

        {/* Linkek */}
        <div className="flex flex-row gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/menu" className="hover:text-white transition">Menu</Link>
          <Link to="/restaurant" className="hover:text-white transition">Restaurant</Link>
          <Link to="/delivery" className="hover:text-white transition">Delivery</Link>

        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Italiano. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
