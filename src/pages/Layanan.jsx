import React from "react";
import { motion } from "motion/react";
import { BackButton } from "../components/BackButton";
import { Link } from "react-router-dom";
import {
  FileCheck,
  MessageSquareWarning,
  Database,
  BookOpen,
  HelpCircle,
  ChevronRight,
  ClipboardList,
  Search,
  ShieldCheck,
  Activity
} from "lucide-react";
import "./ProfilPages.css";
import "./Layanan.css";

export const Layanan = () => {
  const serviceCategories = [
    {
      title: "Standar Pelayanan",
      icon: <ClipboardList size={32} />,
      desc: "Kumpulan standar kepastian pelayanan sebagai komitmen penyelengara kepada masyarakat.",
      features: ["Janji Layanan", "Alur Pelayanan", "Produk Pelayanan"],
      accent: "#16a34a",
      link: "/layanan/standar-pelayanan"
    },
    {
      title: "Maklumat Layanan",
      icon: <FileCheck size={32} />,
      desc: "Pernyataan tertulis yang berisi kesanggupan dalam melaksanakan pelayanan sesuai standar.",
      features: ["Sertifikat Maklumat", "Budidaya Mutu", "Komitmen Kerja"],
      accent: "#10b981",
      link: "/layanan/maklumat-layanan"
    },
    {
      title: "Layanan Pengaduan",
      icon: <MessageSquareWarning size={32} />,
      desc: "Saluran resmi pengaduan masyarakat terkait kualitas pelayanan dan pelanggaran kode etik.",
      features: ["SP4N-LAPOR!", "Whistleblowing System", "Cek Status Laporan"],
      accent: "#f59e0b",
      link: "/layanan/pengaduan"
    },
    {
      title: "Survey Kepuasan",
      icon: <Activity size={32} />,
      desc: "Hasil pengukuran komprehensif atas tingkat kepuasan masyarakat terhadap pelayanan kami.",
      features: ["Nilai IKM", "Laporan SKM Tahunan", "Form Kuesioner"],
      accent: "#ef4444",
      link: "/layanan/survey-kepuasan"
    },
    {
      title: "Permohonan Informasi",
      icon: <Search size={32} />,
      desc: "Layanan pengajuan data dan dokumen publik sesuai dengan UU Keterbukaan Informasi Publik.",
      features: ["Form Permohonan", "Prosedur Keberatan", "Daftar Informasi"],
      accent: "#8b5cf6",
      link: "/ppid"
    }
  ];

  const stats = [
    { label: "IPKP Skor", value: "3.85", icon: <Star size={20} /> },
    { label: "Indeks Kepuasan", value: "A (Sangat Baik)", icon: <ThumbsUp size={20} /> },
    { label: "Durasi Respon", value: "24 Jam", icon: <Clock size={20} /> },
    { label: "Total Layanan", value: "15+", icon: <Layers size={20} /> }
  ];

  return (
    <div className="layanan-page">
      <div className="profil-bg-glow" />
      <div className="profil-bg-glow-2" />

      <div className="profil-content max-w-[1400px] mx-auto px-6">
        <BackButton />

        <div className="layanan-grid">
          {/* Main Header Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="layanan-main-header"
          >
            <div className="profil-header-card group p-12">
              <div className="profil-header-accent" />
              <div className="layanan-header-content flex flex-col lg:flex-row gap-16 items-center">
                <div className="layanan-header-text flex-1">
                  <div className="profil-icon-wrapper mb-10">
                    <HelpCircle size={48} className="text-green-600 relative z-10" />
                  </div>
                  <h1 className="profil-title !mb-6 text-5xl font-black text-slate-900 tracking-tighter">Portal Layanan Terpadu</h1>
                  <p className="profil-text text-lg text-slate-500 font-medium">
                    Selamat datang di pusat layanan informasi dan administrasi Dinas Pertanian Sumatera Barat.
                    Kami berdedikasi untuk memberikan pelayanan prima yang transparan, mudah diakses, dan akuntabel.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center gap-3 hover:bg-white transition-all shadow-xl hover:shadow-green-500/5">
                      <div className="text-green-600 mb-2">{stat.icon}</div>
                      <div className="text-2xl font-black text-slate-800">{stat.value}</div>
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Items Exactly as requested */}
          {serviceCategories.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="layanan-item-wrapper"
            >
              <Link to={service.link} className="layanan-item-card group overflow-hidden block">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rotate-45 translate-x-16 -translate-y-16 group-hover:bg-green-600 group-hover:text-white transition-all flex items-end justify-start pl-8 pb-8">
                  <ChevronRight size={24} className="-rotate-45" />
                </div>

                <div className="layanan-item-icon-box !mb-10 scale-110 shadow-2xl shadow-slate-200" style={{ color: service.accent }}>
                  {service.icon}
                </div>

                <h3 className="layanan-item-title text-2xl font-black tracking-tight mb-4">{service.title}</h3>
                <p className="layanan-item-desc text-slate-500 font-medium leading-relaxed mb-10">
                  {service.desc}
                </p>

                <div className="flex flex-col gap-5 mb-12">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4 text-sm font-bold text-slate-600">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: service.accent }} />
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="mt-auto py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest group-hover:bg-green-600 transition-all flex items-center justify-center gap-3">
                  Lihat Detail Layanan <ChevronRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Final Help Banner */}
          <div className="col-span-12 bg-green-600 rounded-[3rem] p-12 lg:p-16 text-white text-center flex flex-col items-center gap-8 shadow-2xl shadow-green-500/30 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-indigo-800 opacity-50" />
            <div className="relative z-10 max-w-3xl flex flex-col gap-4">
              <ShieldCheck size={48} className="mx-auto text-green-300" />
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter">Bantuan CS Virtual Pertanian</h2>
              <p className="text-lg text-green-100/80 font-medium">Jika Anda memiliki pertanyaan spesifik atau membutuhkan panduan langsung, asisten layanan kami siap membantu Anda 24/7.</p>
            </div>
            <button className="relative z-10 px-12 py-6 bg-white text-green-600 rounded-3xl font-black uppercase text-sm tracking-widest shadow-2xl hover:scale-105 transition-all">
              Hubungi WhatsApp Kami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components for stats
const Star = ({ size, className }) => <Activity size={size} className={className} />;
const ThumbsUp = ({ size, className }) => <ShieldCheck size={size} className={className} />;
const Clock = ({ size, className }) => <Database size={size} className={className} />;
const Layers = ({ size, className }) => <FileCheck size={size} className={className} />;
