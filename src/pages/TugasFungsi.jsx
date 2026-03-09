import React from "react";
import { motion } from "motion/react";
import { BackButton } from "../components/BackButton";
import { Briefcase, ClipboardCheck, Users, ShieldAlert, BadgeCheck } from "lucide-react";
import "./ProfilPages.css";

export const TugasFungsi = () => {
  const tasks = [
    { 
      title: "Perumusan Kebijakan", 
      icon: <ClipboardCheck size={28} />, 
      desc: "Menyusun regulasi dan kebijakan teknis di bidang pertanian tanaman pangan, hortikultura, perkebunan, dan peternakan." 
    },
    { 
      title: "Pelaksanaan Tugas", 
      icon: <Briefcase size={28} />, 
      desc: "Mengimplementasikan program kerja strategis sesuai dengan standar operasional prosedur yang berlaku." 
    },
    { 
      title: "Koordinasi Stakeholder", 
      icon: <Users size={28} />, 
      desc: "Membangun sinergi antara pemerintah pusat, daerah, dan pelaku usaha tani demi tercapainya target produksi." 
    },
    { 
      title: "Evaluasi & Pelaporan", 
      icon: <BadgeCheck size={28} />, 
      desc: "Melakukan pengawasan berkala dan pelaporan akuntabilitas terhadap seluruh capaian kinerja instansi." 
    }
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
            className="profil-header-card group p-12 lg:p-16"
          >
            <div className="profil-header-accent" />
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="profil-icon-wrapper mb-6">
                  <div className="profil-icon-glow" />
                  <Briefcase size={32} />
                </div>
                <h1 className="profil-title tracking-tighter">Tugas & Fungsi</h1>
                <p className="profil-text">
                  Berdasarkan Peraturan Gubernur, Dinas Pertanian memiliki tanggung jawab utama dalam mengelola urusan 
                  pemerintahan sektor agrikultur guna mendukung kedaulatan pangan dan kesejahteraan ekonomi.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
                 <ShieldAlert className="text-orange-500 mb-4" size={32} />
                 <h4 className="text-xl font-black text-slate-800 mb-2">Mandat Resmi</h4>
                 <p className="text-sm text-slate-500 font-medium">Fungsi ini dijalankan sesuai dengan prinsip tata kelola pemerintahan yang baik (Good Governance).</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {tasks.map((task, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="feature-card p-10 flex flex-col gap-6"
              >
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                   {task.icon}
                </div>
                <div>
                   <h3 className="text-2xl font-black text-slate-800 mb-3">{task.title}</h3>
                   <p className="text-slate-500 font-medium leading-relaxed">{task.desc}</p>
                </div>
                <div className="feature-card-accent" />
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-900 to-indigo-900 rounded-[3rem] p-12 text-white flex flex-col lg:flex-row items-center gap-12">
             <div className="flex-1">
                <h2 className="text-3xl font-black mb-4">Struktur Tupoksi Lengkap</h2>
                <p className="text-green-100/70 font-medium italic">"Setiap bidang memiliki rincian tugas yang spesifik untuk menjamin koordinasi yang presisi."</p>
             </div>
             <button className="px-10 py-5 bg-white text-green-900 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-2xl">Unduh Dokumen PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};
