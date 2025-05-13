import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅ NEW
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import Soporte from "./pages/Soporte";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <ScrollToTop /> {/* ✅ This ensures scroll-to-top on route change */}
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/soporte" element={<Soporte />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;