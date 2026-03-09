// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { Home } from "./pages/Home";
import { Berita } from "./pages/Berita";
import { BeritaFoto } from "./pages/BeritaFoto";
import { PPIDPage } from "./pages/PPIDPage";
import { AdministrasiPage } from "./pages/AdministrasiPage";
import { GaleriPage } from "./pages/GaleriPage";
import { PimpinanKami } from "./pages/PimpinanKami";
import { Overview } from "./pages/Overview";
import { VisiMisiPage } from "./pages/VisiMisiPage";
import { StrukturOrganisasi } from "./pages/StrukturOrganisasi";
import { TugasFungsi } from "./pages/TugasFungsi";
import { SatuanKerja } from "./pages/SatuanKerja";
import { SumberDayaManusia } from "./pages/SumberDayaManusia";
import { Mitra } from "./pages/Mitra";
import { Layanan } from "./pages/Layanan";
import { StandarPelayanan } from "./pages/StandarPelayanan";
import { MaklumatLayanan } from "./pages/MaklumatLayanan";
import { Pengaduan } from "./pages/Pengaduan";
import { SurveyKepuasan } from "./pages/SurveyKepuasan";
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
  );
}

export default App;