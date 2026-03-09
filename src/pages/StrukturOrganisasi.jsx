import React from "react";
import { motion } from "motion/react";
import { BackButton } from "../components/BackButton";
import { Network, UserCheck, ShieldCheck, ChevronRight } from "lucide-react";
import "./ProfilPages.css";

export const StrukturOrganisasi = () => {
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
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 text-center lg:text-left">
                <div className="profil-icon-wrapper mb-6 scale-110">
                  <div className="profil-icon-glow" />
                  <Network size={36} />
                </div>
                <h1 className="profil-title tracking-tighter">Struktur Organisasi</h1>
                <p className="profil-text mx-auto lg:mx-0">
                  Bagan hierarki ini mencerminkan integritas dan koordinasi taktis antar bidang untuk 
                  menjamin efektivitas setiap kebijakan pertanian di Sumatera Barat.
                </p>
              </div>

              <div className="w-full lg:w-1/3 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col gap-6">
                 <div className="flex items-center gap-3">
                    <UserCheck className="text-green-600" size={24} />
                    <span className="text-sm font-black uppercase text-slate-800 tracking-tight">Hirarki Pimpinan</span>
                 </div>
                 <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                       <div className="w-3 h-3 rounded-full bg-green-600" />
                       Eselon II.a (Pimpinan Tinggi Pratama)
                    </div>
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                       <div className="w-3 h-3 rounded-full bg-orange-500" />
                       Eselon III/IV (Pejabat Administrasi)
                    </div>
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                       <div className="w-3 h-3 rounded-full bg-emerald-500" />
                       Fungsional Ahli (Tenaga Teknis)
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          <div className="bg-white p-16 rounded-[4rem] shadow-2xl border border-slate-100 overflow-x-auto flex flex-col items-center">
             <div className="min-w-[1000px] flex flex-col items-center gap-12">
                {/* Kepala Dinas */}
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-green-900 text-white p-10 rounded-3xl min-w-[350px] text-center shadow-2xl shadow-green-500/20 border-t-8 border-orange-500"
                >
                  <ShieldCheck size={48} className="mx-auto mb-4 text-green-300" />
                  <h3 className="text-3xl font-black mb-1 uppercase tracking-tighter">Kepala Dinas</h3>
                  <p className="text-green-100/60 font-black uppercase text-xs tracking-widest mt-2 px-4 py-2 bg-green-800 rounded-full inline-block">Pimpinan Utama</p>
                </motion.div>

                {/* Vertical Line */}
                <div className="w-1 h-12 bg-slate-200" />

                {/* Horizontal Branches */}
                <div className="relative w-full">
                   <div className="absolute top-0 left-[15%] right-[15%] h-1 bg-slate-200 rounded-full" />
                   
                   <div className="grid grid-cols-4 gap-4 pt-12">
                      {["Sekretariat", "Bidang Tanaman Pangan", "Bidang Hortikultura", "UPTD Teknis"].map((dept, i) => (
                        <div key={i} className="flex flex-col items-center gap-6">
                           <div className="w-1 h-6 bg-slate-200 -mt-12" />
                           <motion.div 
                             whileHover={{ y: -10 }}
                             className="org-tree-node group cursor-help !min-w-[200px] hover:border-green-500 hover:shadow-green-500/10"
                           >
                              <div className="w-12 h-12 bg-slate-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-all">
                                 <Network size={24} />
                              </div>
                              <h4 className="text-lg font-black text-slate-800 uppercase tracking-tighter">{dept}</h4>
                              <p className="text-[10px] font-black uppercase text-slate-400 mt-2 tracking-widest flex items-center justify-center gap-1">
                                Selengkapnya <ChevronRight size={10} />
                              </p>
                           </motion.div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] text-center border-2 border-dashed border-slate-200">
             <h3 className="text-2xl font-black text-slate-800 mb-2 uppercase tracking-tight">Hubungi Sekretariat</h3>
             <p className="text-sm text-slate-500 font-medium mb-8">Untuk permohonan koordinasi teknis antar bidang, silakan ajukan surat resmi melalui tata usaha sekretariat.</p>
             <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-green-600 transition-all">Surat Elektronik (e-Persuratan)</button>
          </div>
        </div>
      </div>
    </div>
  );
};
