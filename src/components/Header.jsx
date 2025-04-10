import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="main" style={{backgroundImage: "url('../public/img/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "70vh" }}>
              
              <div id="navbar" className="text-xl text-white font-semibold flex justify-between items-center px-8 py-4">

                <div id="left" className="w-2/4 flex justify-center">

                
                      <div className="flex items-center gap-8">
                        <img className="w-10 h-10" src="data:image/png;base64,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" alt="pizza"></img>
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
              <section className="flex flex-col justify-center items-center">
                  

              </section>



              </div>
        

    </div>

      


      
      
  );
}

export default Header;
