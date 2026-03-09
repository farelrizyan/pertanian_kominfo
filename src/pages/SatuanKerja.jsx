import React from "react";
import { motion } from "motion/react";
import { BackButton } from "../components/BackButton";
import { Building2, MapPin, ChevronRight, Sprout, Tractor, Leaf } from "lucide-react";
import "./ProfilPages.css";

export const SatuanKerja = () => {
  const uptds = [
    { name: "UPTD Balai Benih Induk Padi & Palawija", desc: "Bertanggung jawab dalam memproduksi, mengelola, dan mendistribusikan benih unggul bersertifikat untuk mendukung produktivitas kelompok tani daerah.", loc: "Kab. Padang Pariaman", icon: <Sprout size={28} />, color: "text-amber-600", bg: "bg-amber-100/60" },
    { name: "UPTD Balai Perlindungan Tanaman Pangan & Hortikultura", desc: "Penyusunan mitigasi resiko hama dan pengawasan serta perlindungan komoditas dari penyakit, demi menjaga ketahanan dan kualitas hasil panen.", loc: "Kota Padang", icon: <Leaf size={28} />, color: "text-emerald-600", bg: "bg-emerald-100/60" },
    { name: "UPTD Balai Penerapan Teknologi Pertanian", desc: "Melaksanakan kajian, uji terap, dan pendampingan mekanisasi pertanian presisi kepada masyarakat dalam era teknologi industri.", loc: "Kab. Solok", icon: <Tractor size={28} />, color: "text-green-600", bg: "bg-green-100/60" },
    { name: "UPTD Balai Pelatihan Penyuluh Pertanian", desc: "Pengembangan kapasitas dan sertifikasi SDM, peningkatan mutu penyuluhan, dan pemberdayaan tata kelembagaan sosial masyarakat tani.", loc: "Kota Payakumbuh", icon: <Building2 size={28} />, color: "text-purple-600", bg: "bg-purple-100/60" }
  ];

  return (
    <div className="profil-page">
      <div className="profil-bg-glow" />
      <div className="profil-bg-glow-2" />
      
      <div className="profil-content max-w-6xl">
        <BackButton />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="profil-header-card mt-8 bg-transparent border-0 shadow-none p-0"
        >
          <div className="bg-white rounded-[2rem] p-10 mb-10 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="profil-header-accent" />
            <div className="profil-icon-wrapper">
              <div className="profil-icon-glow" />
              <Building2 size={32} />
            </div>
            
            <h1 className="profil-title">Satuan Kerja / UPTD</h1>
            <p className="profil-text max-w-3xl">
              Unit Pelaksana Teknis Dinas (UPTD) di lingkungan Dinas Pertanian Provinsi Sumatera Barat 
              yang bertugas menyelenggarakan tugas dan kebijakan operasional secara langsung di wilayah tertentu maupun daerah fungsional teknis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {uptds.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="group bg-white rounded-3xl p-8 border border-slate-200/60 hover:border-green-400 hover:shadow-2xl hover:shadow-green-900/10 transition-all cursor-pointer relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none">
                  {React.cloneElement(item.icon, { size: 160 })}
                </div>

                <div className="flex gap-5 items-start relative z-10 flex-col sm:flex-row h-full">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${item.bg} ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 flex flex-col h-full">
                    <h3 className="font-bold text-xl text-slate-800 group-hover:text-green-700 transition-colors leading-tight mb-3">
                      {item.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between text-sm font-medium text-slate-500 border-t border-slate-100 pt-5 mt-auto">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-slate-400" />
                        {item.loc}
                      </div>
                      <div className="flex items-center gap-1 text-green-600 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        <span>Lihat detail</span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
