// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { Home } from "./pages/Home";
import { ProfilPage } from "./pages/ProfilPage";
import { Layanan } from "./pages/Layanan";
<<<<<<< HEAD
import { Berita } from "./pages/Berita";
=======
import { StandarPelayanan } from "./pages/StandarPelayanan";
import { MaklumatLayanan } from "./pages/MaklumatLayanan";
import { Pengaduan } from "./pages/Pengaduan";
import { SurveyKepuasan } from "./pages/SurveyKepuasan";
>>>>>>> 891cdf240c66aa7fe406d199f199522054fc67e1
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
<<<<<<< HEAD
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
=======
    <div className="font-sans selection:bg-red-200 selection:text-red-900 bg-white pt-[130px]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita-foto" element={<BeritaFoto />} />
        <Route path="/ppid/*" element={<PPIDPage />} />
        <Route path="/administrasi/*" element={<AdministrasiPage />} />
        <Route path="/galeri" element={<GaleriPage />} />
        <Route path="/pimpinan-kami" element={<PimpinanKami />} />
        <Route path="/profil/overview" element={<Overview />} />
        <Route path="/profil/visi-misi" element={<VisiMisiPage />} />
        <Route path="/profil/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/profil/tugas-fungsi" element={<TugasFungsi />} />
        <Route path="/profil/satuan-kerja" element={<SatuanKerja />} />
        <Route path="/profil/sumber-daya-manusia" element={<SumberDayaManusia />} />
        <Route path="/mitra" element={<Mitra />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/layanan/standar-pelayanan" element={<StandarPelayanan />} />
        <Route path="/layanan/maklumat-layanan" element={<MaklumatLayanan />} />
        <Route path="/layanan/pengaduan" element={<Pengaduan />} />
        <Route path="/layanan/survey-kepuasan" element={<SurveyKepuasan />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
      <Footer />
    </div>
>>>>>>> 891cdf240c66aa7fe406d199f199522054fc67e1
  );
}

export default App;