import React from "react";
import { Image as ImageIcon, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { GALLERY } from "../data/mockData";
import "./GallerySection.css";

export const GallerySection = () => {
  return (
    <section className="gallery-section" id="galeri">
      <div className="gallery-bg-pattern" />

      <div className="gallery-container">
        <div className="gallery-header">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="gallery-title">Berita Foto</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="gallery-divider"
            />
            <p className="gallery-subtitle">
              Kumpulan momen dan dokumentasi kegiatan Pertanian Sumatera Barat.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ gap: "0.75rem" }}
            className="gallery-view-all"
          >
            Lihat Galeri Foto
            <ArrowRight className="gallery-view-all-icon" size={16} />
          </motion.button>
        </div>

        <div className="gallery-slider-viewport">
          <motion.div
            className="gallery-slider-track"
            animate={{
              x: [0, -((GALLERY.length * 300) + (GALLERY.length * 24))],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...GALLERY, ...GALLERY].map((item, index) => (
              <div key={`${item.id}-${index}`} className="gallery-item-wrapper">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % GALLERY.length) * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="gallery-item"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-item-image"
                    referrerPolicy="no-referrer"
                  />
                  <div className="gallery-item-overlay">
                    <ImageIcon className="gallery-item-icon" />
                    <h4 className="gallery-item-title">{item.title}</h4>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
