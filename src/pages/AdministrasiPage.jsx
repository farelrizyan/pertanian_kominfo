import React from "react";
import { motion } from "motion/react";
import { 
  Briefcase, 
  FileCheck, 
  TrendingUp, 
  Activity, 
  Settings, 
  ArrowRight, 
  Download,
  Calendar,
  Layers
} from "lucide-react";
import { BackButton } from "../components/BackButton";
import "./ProfilPages.css";

export const AdministrasiPage = () => {
  const documents = [
    { id: "renstra", title: "RENSTRA", icon: <Layers size={24} />, desc: "Rencana Strategis jangka menengah Dinas Pertanian.", items: ["Renstra 2021-2026", "Revisi Renstra 2024", "Rencana Aksi Strategis"] },
    { id: "lakip", title: "LAKIP", icon: <FileCheck size={24} />, desc: "Laporan Akuntabilitas Kinerja Instansi Pemerintah.", items: ["Lakip 2025", "Lakip 2024", "Lakip 2023", "Analisis Capaian Kinerja"] },
    { id: "rkt", title: "RKT", icon: <Calendar size={24} />, desc: "Rencana Kerja Tahunan yang mendetailkan program kerja tahunan.", items: ["RKT 2026 (Draft)", "RKT 2025", "Pelaksanaan RKT 2024"] },
    { id: "sop", title: "SOP", icon: <Settings size={24} />, desc: "Standar Operasional Prosedur untuk setiap layanan administrasi.", items: ["SOP Kepegawaian", "SOP Tata Persuratan", "SOP Pelaporan Keuangan"] },
  ];

  const PerformanceSection = ({ title, items }) => (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 mb-8">
      <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">{title}</h2>
        <TrendingUp className="text-green-600" size={28} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="group flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-white hover:border-green-500 hover:shadow-xl transition-all cursor-pointer">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-black text-slate-800 uppercase tracking-wide group-hover:text-green-700">{item}</span>
              <span className="text-[10px] text-slate-400 font-bold group-hover:text-slate-500 uppercase tracking-widest">Update: Feb 2026</span>
            </div>
            <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Download size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="profil-page">
      <div className="profil-bg-glow" />
      <div className="profil-bg-glow-2" />

      <div className="profil-content max-w-7xl">
        <BackButton />

        <div className="flex flex-col gap-16 mt-8">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="profil-header-card p-10 lg:p-16 text-center"
          >
            <div className="profil-header-accent" />
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
              <div className="profil-icon-wrapper scale-125 mb-4">
                <div className="profil-icon-glow" />
                <Briefcase size={36} />
              </div>
              <h1 className="profil-title text-4xl lg:text-6xl font-black !mb-0 text-slate-900 tracking-tighter">Administrasi & Akuntabilitas</h1>
              <p className="profil-text text-xl mx-auto text-slate-500 font-medium">
                Pusat transparansi dokumen manajerial dan administrasi Dinas Pertanian Sumatera Barat. 
                Kami menyediakan dokumentasi perencanaan, pelaksanaan, dan pelaporan kinerja secara terpadu.
              </p>
            </div>
          </motion.div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {documents.map((doc, idx) => (
              <motion.div 
                key={doc.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col gap-8 group hover:border-green-200 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                    {doc.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">{doc.title}</h3>
                    <p className="text-sm font-medium text-slate-400">{doc.desc}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {doc.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 group/item cursor-pointer">
                      <span className="text-sm font-bold text-slate-700 group-hover/item:text-green-600 transition-colors">{item}</span>
                      <ArrowRight size={16} className="text-slate-300 transform -translate-x-2 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                    </div>
                  ))}
                </div>

                <button className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-green-600 transition-all">
                  Lihat Seluruh Arsip
                </button>
              </motion.div>
            ))}
          </div>

          {/* Performance Dashboard Areas */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <PerformanceSection 
              title="Indikator Kinerja & Realisasi" 
              items={["IKU (Indikator Kinerja Utama)", "Indikator Kinerja Individu (IKI)", "Perjanjian Kinerja (PK)", "Rencana Aksi (Renaksi)"]} 
            />
            
            <PerformanceSection 
              title="Pelaporan & Reformasi Birokrasi" 
              items={["SKP (Sasaran Kinerja Pegawai)", "Pelaporan Harian/Bulanan", "Evaluasi Kinerja Tahunan", "Monitoring Kinerja Unit Kerja"]} 
            />
          </motion.div>

          {/* Call to Action Wrapper */}
          <div className="bg-[#ff6a00] p-12 rounded-[3.5rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
             <div className="flex flex-col gap-4 relative z-10 max-w-2xl text-center lg:text-left">
                <Activity size={48} className="mb-4 text-white/40 mx-auto lg:mx-0" />
                <h2 className="text-4xl font-black tracking-tighter">Laporan Kinerja Terpadu (e-Kinerja)</h2>
                <p className="text-lg text-white/80 font-medium">Akses sistem pelaporan kinerja pegawai dan monitoring progres rencana aksi secara real-time melalui platform internal kami.</p>
             </div>
             <button className="relative z-10 px-10 py-6 bg-white text-[#ff6a00] rounded-[2rem] font-black uppercase text-sm tracking-widest shadow-2xl hover:scale-105 transition-all">
                Masuk Sistem e-Kinerja
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
