import React from "react";
import { motion } from "motion/react";
import { 
  Database, 
  FileText, 
  ShieldCheck, 
  Search, 
  Activity, 
  ExternalLink, 
  ChevronRight, 
  Download,
  BookOpen
} from "lucide-react";
import { BackButton } from "../components/BackButton";
import "./ProfilPages.css";

export const PPIDPage = () => {
  const transparencyItems = [
    { title: "Profil PPID", desc: "Informasi mengenai struktur, tugas, dan fungsi Pejabat Pengelola Informasi dan Dokumentasi (PPID) Dinas Pertanian.", icon: <ShieldCheck size={28} />, color: "border-green-500 text-green-600" },
    { title: "Visi & Misi PPID", desc: "Komitmen PPID dalam mewujudkan keterbukaan informasi di lingkungan Dinas Pertanian Provinsi Sumatera Barat.", icon: <Activity size={28} />, color: "border-emerald-500 text-emerald-600" },
    { title: "Informasi Berkala", desc: "Daftar informasi publik yang diperbarui secara rutin, mencakup laporan keuangan, kegiatan, dan profil dinas.", icon: <Database size={28} />, color: "border-amber-500 text-amber-600" },
    { title: "Informasi Serta Merta", desc: "Informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum disampaikan secara cepat.", icon: <Search size={28} />, color: "border-red-500 text-red-600" },
  ];

  const informationCategories = [
    { id: "berkala", title: "Informasi Berkala", items: ["Laporan Keuangan", "Daftar Aset & BMN", "Rencana Strategis", "Laporan Kinerja Instansi"] },
    { id: "setiap-saat", title: "Informasi Setiap Saat", items: ["SOP Pelayanan", "Produk Hukum", "Daftar Informasi Publik", "Kerjasama Pihak Ketiga"] },
    { id: "dikecualikan", title: "Informasi Dikecualikan", items: ["Rahasia Jabatan", "Data Pribadi", "Rahasia Persaingan Usaha", "Daftar Informasi Dikecualikan"] },
  ];

  return (
    <div className="profil-page">
      {/* Background Decor */}
      <div className="profil-bg-glow" />
      <div className="profil-bg-glow-2" />
      
      <div className="profil-content max-w-7xl">
        <BackButton />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          {/* Main Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="lg:col-span-8 flex flex-col gap-8"
          >
            <div className="profil-header-card group p-8 lg:p-12">
              <div className="profil-header-accent" />
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="profil-icon-wrapper">
                    <div className="profil-icon-glow" />
                    <Database size={32} />
                  </div>
                  <h1 className="profil-title !mb-0 text-3xl lg:text-5xl font-black">Portal PPID</h1>
                </div>
                <p className="profil-text text-lg !max-w-none text-slate-600 leading-relaxed">
                  Selamat datang di Layanan Informasi Publik (PPID) Dinas Pertanian Provinsi Sumatera Barat. 
                  Sesuai dengan amanah UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik, kami berkomitmen 
                  untuk menyediakan akses informasi yang mudah, cepat, dan transparan bagi seluruh lapisan masyarakat.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                   <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-bold uppercase text-xs tracking-wider shadow-xl shadow-green-500/20 hover:scale-105 transition-all">
                     Permohonan Informasi Online <ExternalLink size={14} />
                   </button>
                   <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-slate-50 transition-all">
                     Cek Status Permohonan <ChevronRight size={14} />
                   </button>
                </div>
              </div>
            </div>

            {/* Transparency Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {transparencyItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className={`bg-white p-6 rounded-3xl border-l-8 ${item.color.split(' ')[0]} shadow-xl flex flex-col gap-4 hover:scale-[1.02] transition-transform`}
                >
                  <div className={item.color.split(' ')[1]}>{item.icon}</div>
                  <h3 className="text-xl font-black text-slate-800">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Side Nav/List Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="lg:col-span-4 flex flex-col gap-8"
          >
            {informationCategories.map((cat, idx) => (
              <div key={cat.id} className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-2 h-8 bg-green-600 rounded-full" />
                   <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">{cat.title}</h2>
                </div>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item, iIdx) => (
                    <div key={iIdx} className="group flex items-center justify-between p-3 rounded-xl hover:bg-green-50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FileText size={18} className="text-slate-400 group-hover:text-green-500" />
                        <span className="text-sm font-bold text-slate-600 group-hover:text-green-700">{item}</span>
                      </div>
                      <Download size={16} className="text-slate-300 group-hover:text-green-500" />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-indigo-900 to-green-900 p-8 rounded-3xl text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <BookOpen className="mb-4 text-green-300" size={32} />
               <h3 className="text-xl font-black mb-2">Maklumat Pelayanan</h3>
               <p className="text-sm text-green-100/70 mb-6 font-medium">Kami berjanji untuk memberikan pelayanan informasi publik yang akurat, transparan, dan akuntabel.</p>
               <button className="w-full py-4 bg-white text-green-900 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">Lihat Selengkapnya</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
