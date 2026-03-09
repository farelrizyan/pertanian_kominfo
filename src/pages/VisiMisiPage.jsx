import React from "react";
import { motion } from "motion/react";
import { BackButton } from "../components/BackButton";
import { Flag, Target, Heart } from "lucide-react";
import "./ProfilPages.css";

export const VisiMisiPage = () => {
  const missions = [
    { title: "Kualitas Manusia", desc: "Meningkatkan kualitas sumber daya manusia petani dan aparatur melalui inovasi teknologi serta pendidikan berkelanjutan." },
    { title: "Ekonomi Sejahtera", desc: "Menciptakan nilai tambah produk pertanian guna meningkatkan pendapatan dan kesejahteraan ekonomi masyarakat daerah." },
    { title: "Kedaulatan Pangan", desc: "Mewujudkan kemandirian pangan daerah yang berkelanjutan, aman, dan berdaya saing tinggi di pasar nasional." },
    { title: "Inovasi Modern", desc: "Mengembangkan ekosistem pertanian modern yang berbasis pada digitalisasi dan mekanisasi yang ramah lingkungan." }
  ];

  return (
    <div className="profil-page">
      <div className="profil-bg-glow" />
      <div className="profil-bg-glow-2" />
      
      <div className="profil-content max-w-7xl">
        <BackButton />
        
        <div className="flex flex-col gap-12 mt-8">
          {/* Header Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="profil-header-card group bg-green-900 border-none p-16 relative overflow-hidden text-center"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-indigo-900" />
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
             
             <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="profil-icon-wrapper scale-125 mb-4 bg-white/10 text-white">
                  <div className="profil-icon-glow" />
                  <Flag size={36} />
                </div>
                <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter">Visi & Misi Kami</h1>
                <p className="text-xl text-green-100/70 font-medium max-w-3xl">
                  Landasan strategis dalam membangun kemandirian dan kejayaan pertanian di Sumatera Barat 
                  untuk masa depan yang gemilang.
                </p>
             </div>
          </motion.div>

          {/* Visi Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
               <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 flex flex-col gap-8">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Visi Utama</h2>
                    <p className="text-2xl font-bold text-slate-600 leading-relaxed italic">
                      "Menjadikan Sumatera Barat sebagai lumbung pangan nasional yang mandiri, modern, dan menyejahterakan masyarakat tani pada tahun 2026."
                    </p>
                  </div>
               </div>
            </motion.div>

            {/* Misi Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col gap-8"
            >
               <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-1 bg-green-600 rounded-full" />
                  <span className="text-green-600 font-extrabold uppercase tracking-widest text-xs">Misi Pembangunan</span>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {missions.map((misi, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:border-green-400 transition-colors group">
                       <div className="w-12 h-12 bg-white border border-slate-200 text-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                          <Heart size={20} className={idx % 2 === 0 ? "fill-current" : ""} />
                       </div>
                       <h3 className="text-xl font-black text-slate-800 mb-3">{misi.title}</h3>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">{misi.desc}</p>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>

          {/* Core Values / Nilai Organisasi */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-12 lg:p-16 rounded-[4rem] text-white flex flex-col items-center gap-12"
          >
             <h2 className="text-4xl font-black tracking-tighter">Nilai Budaya Organisasi</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center">
                <div className="flex flex-col gap-4 items-center">
                   <div className="text-5xl font-black text-green-500">I</div>
                   <h4 className="text-xl font-bold uppercase tracking-widest">Inovasi</h4>
                   <p className="text-slate-400 text-sm">Terbuka terhadap perubahan dan teknologi terbaru.</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                   <div className="text-5xl font-black text-orange-500">I</div>
                   <h4 className="text-xl font-bold uppercase tracking-widest">Integritas</h4>
                   <p className="text-slate-400 text-sm">Kekonsistenan antara tindakan dan kejujuran.</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                   <div className="text-5xl font-black text-emerald-500">I</div>
                   <h4 className="text-xl font-bold uppercase tracking-widest">Inklusivitas</h4>
                   <p className="text-slate-400 text-sm">Merangkul seluruh elemen masyarakat tani.</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
