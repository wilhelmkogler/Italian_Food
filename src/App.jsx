import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";


export default function App() {
  return (
    <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            
          </Routes>
          <Footer />

    </Router>

  )
}