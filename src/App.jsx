// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { Home } from "./pages/Home";
import { ProfilPage } from "./pages/ProfilPage";
import { Layanan } from "./pages/Layanan";
import { Berita } from "./pages/Berita";
import { PPIDPage } from "./pages/PPIDPage";
import { GaleriPage } from "./pages/GaleriPage";
import { Kontak } from "./pages/Kontak";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil/*" element={<ProfilPage />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/ppid" element={<PPIDPage />} />
            <Route path="/galeri" element={<GaleriPage />} />
            <Route path="/administrasi" element={<AdministrasiPage />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;