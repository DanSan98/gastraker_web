import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import Instalacion from "./pages/Instalacion";
import Contacto from "./pages/Contacto";
import Soporte from "./pages/Soporte"; // ✅ NEW

function App() {
  return (
    <div className="app-wrapper"> {/* ✅ Full height flex container */}
      <Router>
        <Navbar />
        <main className="content"> {/* ✅ Main content grows */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/instalacion" element={<Instalacion />} />
            <Route path="/soporte" element={<Soporte />} /> {/* ✅ NEW */}
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
