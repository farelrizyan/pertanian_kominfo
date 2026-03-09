import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Image as ImageIcon, 
  Video, 
  Maximize2, 
  Play, 
  X,
  Camera,
  Film
} from "lucide-react";
import { BackButton } from "../components/BackButton";
import { GALLERY } from "../data/mockData";
import "./ProfilPages.css";

export const GaleriPage = () => {
  const [activeTab, setActiveTab] = useState("foto");
  const [selectedImage, setSelectedImage] = useState(null);

  const videos = [
    { title: "Panen Raya Padi 2025", thumbnail: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800", date: "15 Jan 2026" },
    { title: "Inovasi Pertanian Digital", thumbnail: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800", date: "10 Feb 2026" },
    { title: "Kunjungan Kerja Gubernur", thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fee7c5c2?auto=format&fit=crop&q=80&w=800", date: "05 Mar 2026" },
  ];

  return (
    <div className="profil-page">
      <div className="profil-bg-glow" />
      <div className="profil-bg-glow-2" />

      <div className="profil-content max-w-7xl">
        <BackButton />

        <div className="flex flex-col gap-12 mt-8">
          {/* Custom Header */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                 <div className="w-12 h-1 bg-green-600 rounded-full" />
                 <span className="text-green-600 font-black uppercase tracking-widest text-xs">Visual Documentation</span>
              </div>
              <h1 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter">Galeri Kegiatan</h1>
              <p className="text-xl text-slate-500 font-medium max-w-2xl">Melihat lebih dekat dedikasi dan inovasi Dinas Pertanian melalui dokumentasi visual terbaik kami.</p>
            </div>

            <div className="flex bg-slate-100 p-2 rounded-2xl border border-slate-200">
               <button 
                 onClick={() => setActiveTab("foto")}
                 className={cn("px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all flex items-center gap-2", activeTab === "foto" ? "bg-white text-green-600 shadow-xl" : "text-slate-500 hover:text-slate-800")}
               >
                 <Camera size={16} /> Foto
               </button>
               <button 
                 onClick={() => setActiveTab("video")}
                 className={cn("px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all flex items-center gap-2", activeTab === "video" ? "bg-white text-green-600 shadow-xl" : "text-slate-500 hover:text-slate-800")}
               >
                 <Film size={16} /> Video
               </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "foto" ? (
              <motion.div 
                key="foto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {GALLERY.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedImage(img.image)}
                    className="group relative h-[300px] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl border-4 border-white"
                  >
                    <img src={img.image} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                       <h3 className="text-white font-black text-lg mb-1">{img.title}</h3>
                       <p className="text-white/60 text-xs uppercase font-black tracking-widest">{img.category}</p>
                       <Maximize2 size={24} className="absolute top-8 right-8 text-white/40" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="video"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {videos.map((vid, idx) => (
                  <div key={idx} className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-slate-100">
                    <div className="relative h-64 overflow-hidden">
                       <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                          <div className="w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center shadow-2xl scale-100 group-hover:scale-110 transition-transform">
                             <Play fill="currentColor" size={24} />
                          </div>
                       </div>
                    </div>
                    <div className="p-8">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-black uppercase text-green-600 bg-green-50 px-3 py-1 rounded-full">{vid.date}</span>
                          <Video size={16} className="text-slate-300" />
                       </div>
                       <h3 className="text-2xl font-black text-slate-800 mb-2">{vid.title}</h3>
                       <p className="text-sm text-slate-500 font-medium tracking-tight">Dokumentasi video resmi Dinas Pertanian Provinsi Sumatera Barat tentang {vid.title.toLowerCase()}.</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/60 hover:text-white"><X size={48} /></button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const cn = (...classes) => classes.filter(Boolean).join(' ');
