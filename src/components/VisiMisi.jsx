import React, { useEffect, useRef } from "react";
import {
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { cn } from "../utils/cn";
import "./VisiMisi.css";

const visi =
  "Terwujudnya Pertanian Sumatera Barat yang Tangguh, Mandiri, dan Berkelanjutan Menuju Masyarakat yang Sejahtera dan Madani.";

const misi = [
  {
    id: 1,
    title: "Modernisasi & Inovasi",
    description:
      "Meningkatkan penerapan inovasi dan teknologi pertanian tepat guna untuk produktivitas hasil tani yang optimal.",
    icon: Lightbulb,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    gradient: "from-amber-400 to-amber-500",
  },
  {
    id: 2,
    title: "Kedaulatan Pangan",
    description:
      "Memantapkan stabilitas ketersediaan, keterjangkauan, dan pemanfaatan pangan yang aman serta bermutu.",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    gradient: "from-emerald-400 to-emerald-500",
  },
  {
    id: 3,
    title: "Nilai Tambah Ekspor",
    description:
      "Mendorong daya saing dan hilirisasi produk pertanian unggulan daerah menuju pasar nasional maupun internasional.",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-50",
    gradient: "from-green-400 to-green-500",
  },
  {
    id: 4,
    title: "Pemberdayaan SDM",
    description:
      "Memperkuat kapasitas penyuluh, kemandirian petani, serta kelembagaan ekonomi agribisnis pedesaan.",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    gradient: "from-purple-400 to-purple-500",
  },
];

export const VisiMisi = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="profil" className="visimisi-section">
      {/* Animated Background Decorations */}
      <div className="visimisi-bg-1" />
      <div className="visimisi-bg-2" />

      <div className="visimisi-container">
        <div ref={headerRef} className="visimisi-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="visimisi-badge"
            >
              Arah & Tujuan
            </motion.span>
            <h2 className="visimisi-title">Visi & Misi</h2>
            <div
              className={`visimisi-underline ${isHeaderInView ? "visible" : ""}`}
            />
            <p className="visimisi-description">
              Komitmen kami dalam memajukan sektor pertanian dan menyejahterakan
              para petani di Provinsi Sumatera Barat.
            </p>
          </motion.div>
        </div>

        <div className="visimisi-grid">
          {/* Visi Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="visi-card">
              <div className="visi-card-bg" />

              <div className="visi-icon">
                <Target />
              </div>

              <h3 className="visi-subtitle">
                <span />
                Visi
              </h3>

              <p className="visi-text">"{visi}"</p>
            </div>
          </motion.div>

          {/* Misi Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="misi-title">
              <span />
              Misi
            </h3>

            <div className="misi-grid">
              {misi.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="misi-card"
                  >
                    <div className={`misi-card-icon ${item.bgColor}`}>
                      <Icon className={item.color} />
                    </div>
                    <h4 className="misi-card-title">{item.title}</h4>
                    <p className="misi-card-description">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
