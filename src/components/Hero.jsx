import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HERO_SLIDES } from "../data/mockData";
import { ArrowDown, Sparkles } from "lucide-react";
import "./Hero.css";

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 3 + Math.random() * 5,
    delay: Math.random() * 5,
  }));

  return (
    <section ref={containerRef} className="hero-section">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="hero-background">
        <div className="hero-overlay" />
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="sapta-usaha-tani-kesejahteraan-petani.jpg"
          className="w-full h-full object-cover"
          alt="Pertanian Sumatera Barat"
          referrerPolicy="no-referrer"
        />

        {/* Animated overlay particles */}
        <div className="hero-particles">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="hero-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="hero-subtitle">Selamat Datang di Portal Dinas</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="hero-title">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block"
            >
              Pertanian
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hero-title-gradient"
            >
              Sumatera Barat
            </motion.span>
          </h1>
        </motion.div>


      </motion.div>

    </section>
  );
};
``;
