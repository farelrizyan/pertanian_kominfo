import React from "react";
import { motion } from "motion/react";
import { BackButton } from "../components/BackButton";
import { Info, Sprout, Handshake, Landmark, TrendingUp } from "lucide-react";
import "./ProfilPages.css";

export const Overview = () => {
  const values = [
    { icon: <Landmark size={24} />, title: "Legasi & Sejarah", desc: "Berdiri sejak awal pembentukan provinsi untuk memajukan sektor pertanian daerah." },
    { icon: <TrendingUp size={24} />, title: "Potensi Strategis", desc: "Mengoptimalkan 2.3 juta hektar lahan produktif di Sumatera Barat." },
    { icon: <Sprout size={24} />, title: "Inovasi Berkelanjutan", desc: "Mengadopsi teknologi digital untuk efisiensi produksi pangan." }
  ];

  return (
    <div className="profil-page">
      <div className="profil-bg-glow" />
      <div className="profil-bg-glow-2" />
      
      <div className="profil-content max-w-7xl">
        <BackButton />
        
        <div className="flex flex-col gap-12 mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="profil-header-card group p-12 lg:p-20"
          >
            <div className="profil-header-accent" />
            <div className="flex flex-col lg:flex-row gap-16 items-start">
               <div className="flex-1">
                  <div className="profil-icon-wrapper mb-10">
                    <div className="profil-icon-glow" />
                    <Info size={32} />
                  </div>
                  <h1 className="profil-title tracking-tighter">Selayang Pandang</h1>
                  <p className="profil-text mb-8">
                    Dinas Pertanian Provinsi Sumatera Barat merupakan jantung ekonomi bagi lebih dari 
                    60% penduduk daerah. Kami adalah garda terdepan dalam mewujudkan 
                    ketahanan pangan dan mendorong transformasi digital di pedesaan.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <span className="px-5 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-black uppercase text-slate-500 tracking-widest shadow-sm shadow-green-500/5">Terpercaya</span>
                     <span className="px-5 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-black uppercase text-slate-500 tracking-widest shadow-sm shadow-green-500/5">Transparan</span>
                     <span className="px-5 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-black uppercase text-slate-500 tracking-widest shadow-sm shadow-green-500/5">Inovatif</span>
                  </div>
               </div>
               
               <div className="w-full lg:w-1/3 grid grid-cols-1 gap-6">
                  {values.map((v, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl flex items-center gap-6 hover:border-green-500 transition-colors group"
                    >
                       <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                          {v.icon}
                       </div>
                       <div className="flex flex-col">
                          <h4 className="text-lg font-black text-slate-800 tracking-tight">{v.title}</h4>
                          <p className="text-xs text-slate-500 font-medium">{v.desc}</p>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 mb-8">
             <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase whitespace-pre-line">Komitmen{"\n"}Kesejahteraan Petani</h2>
                <div className="w-20 h-2 bg-orange-500 rounded-full" />
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                   Sejak didirikan, fokus kami tetap sama: memastikan setiap bulir padi dan setiap hasil perkebunan memberikan 
                   dampak ekonomi yang maksimal bagi keluarga tani di Sumatera Barat. Kami menjembatani teknologi modern 
                   dengan tradisi kearifan lokal.
                </p>
             </div>
             <div className="relative group rounded-[3.5rem] overflow-hidden shadow-2xl h-[400px]">
                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="field" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                   <h3 className="text-2xl font-black mb-1 leading-none uppercase">Lumbung Pangan</h3>
                   <p className="text-xs font-bold text-white/70 tracking-widest uppercase">Masa Depan Indonesia</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
