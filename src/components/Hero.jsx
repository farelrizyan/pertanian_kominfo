import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src="/sapta-usaha-tani-kesejahteraan-petani.jpg"
          alt="Pertanian Sumbar"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge">
            Dinas Pertanian Provinsi Sumatera Barat
          </span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Membangun <span className="hero-title-gradient">Kedaulatan Pangan</span>
          <br />Sumatera Barat
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Mewujudkan pertanian modern, mandiri, dan berkelanjutan untuk kesejahteraan
          masyarakat Sumatera Barat.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/profil" className="btn-primary">
            Pelajari Lebih Lanjut
          </Link>
          <Link to="/layanan" className="btn-outline">
            Layanan Kami
          </Link>
        </motion.div>
      </div>
    </section>
  );
};