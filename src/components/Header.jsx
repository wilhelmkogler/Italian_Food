import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="main" className="flex flex-col justify-stretch">
      <div
        id="navbar"
        className=" text-xl text-white font-nicer font-semibold flex justify-between items-start px-8 py-4"
      >
        <div id="left" className="w-2/4 flex justify-center">
          <div>
            <Link to="/" className="text-4xl ">
              ITALY
            </Link>
          </div>
        </div>

        <div id="right" className="800 w-2/4 flex justify-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="relative group">
              Home
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/menu" className="relative group">
              Menu
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/" className="relative group">
              Restaurant
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/"
              className="bg-zold py-2 px-4 rounded-xl transform transition-all duration-500 ease-in-out hover:bg-white hover:text-black"
            >
              Delivery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
