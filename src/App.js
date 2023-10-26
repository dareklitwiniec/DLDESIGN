import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components/navbar";
import Navbar from "./components/Nav/Navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import HeroOver from "./components/hero_section/HeroOver";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <HeroOver />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
