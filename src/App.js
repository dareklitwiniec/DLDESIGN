import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { About } from "./components/About/about";
import { Gallery } from "./components/Gallery/gallery";
import { Pko } from "./components/pkobp/pko";
import { Foto } from "./components/foto/foto";
import { Example } from "./components/example/example";
import { Portfolio } from "./components/portfolio/page";
import { Category } from "./components/portfolio/[category]/page";
import { Layout } from "./components/portfolio/layout";
import Footer from "./components/footer/Footer";
import { ShopContextProvider } from "./context/shop-context";
import HeroOver from "./components/hero_section/HeroOver";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />          
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pko" element={<Pko />} />
            <Route path="/foto" element={<Foto />} />
            <Route path="/example" element={<Example />} />
            
            <Route path="/category" element={<Category />} />
            <Route path="/layout" element={<Layout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
      <Footer />
    </div>
  );
}

export default App;
