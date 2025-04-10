import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      id="main" className="flex flex-col justify-stretch"
      style={{
        /*backgroundImage: "url('../public/img/hero.jpg')", */
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
      }}
    >
      <div
        id="navbar"
        className="text-xl text-white h-1/5 font-semibold flex justify-between items-start px-8 py-4"
      >
        <div id="left" className="w-2/4 flex justify-center">
          <div>
            <Link to="/" className="text-4xl font-serif">
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
            <Link to="/" className="relative group">
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

      <div id="hero">
        <div className="text-white text-4xl flex flex-col justify-between items-center gap-10">
          <h1>Are you hungry?</h1>
          <div className="flex gap-[200px]">
            <div className=" flex flex-col justify-center p-5 rounded-3xl">
              <img className="w-50 h-30" src="data:image/png;base64,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" alt="restaurant"></img>
              <Link to="/" className=" text-white border-4 border-white border-solid font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:bg-zold hover:text-white">Dine In</Link>
            </div>
            <div className="flex flex-col justify-center p-5 rounded-3xl">
                <img className="w-50 h-30" src="data:image/png;base64,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" alt="scooter"></img>
                <Link to="/" className=" text-white border-4 border-white border-solid font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:bg-zold hover:text-white">Take Away</Link>
            </div>
           
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default Header;
