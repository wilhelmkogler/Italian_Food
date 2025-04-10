import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Név */}
        <h3 className="text-2xl font-bold text-white">Italiano</h3>

        {/* Linkek */}
        <div className="flex flex-col gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/menu" className="hover:text-white transition">Menu</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
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
