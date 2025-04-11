import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-gray-300 py-4 font-nicer">
      <div className="max-w-6xl mx-auto px-32 lg:px-4 flex flex-row md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-5">ITALY</h3>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Italiano. All rights reserved.
          </p>
        </div>

        <div className="flex flex-row gap-2 md:gap-16 text-sm">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/menu" className="hover:text-white transition">
            Menu
          </Link>
          <Link to="/restaurant" className="hover:text-white transition">
            Restaurant
          </Link>
          <Link to="/delivery" className="hover:text-white transition">
            Delivery
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
