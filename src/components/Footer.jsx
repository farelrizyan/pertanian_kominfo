import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Globe,
} from "lucide-react";
import { motion } from "motion/react";
import "./Footer.css";

export const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", bg: "facebook", color: "bg-green-600" },
    {
      icon: Instagram,
      label: "Instagram",
      bg: "instagram",
      color: "bg-pink-600",
    },
    { icon: Twitter, label: "Twitter", bg: "twitter", color: "bg-sky-500" },
    { icon: Youtube, label: "Youtube", bg: "youtube", color: "bg-red-600" },
  ];

  const quickLinks = [
    { name: "Kementerian Pertanian", href: "#" },
    { name: "BSIP Kementan", href: "#" },
    { name: "PPID Utama", href: "#" },
    { name: "Satu Data Pertanian", href: "#" },
    { name: "Peta Situs", href: "#" },
  ];

  return (
    <footer className="footer" id="kontak">
      {/* Background Decorations */}
      <div className="footer-bg-1" />
      <div className="footer-bg-2" />

      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-grid">
            {/* Column 1: Logo & Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="footer-logo-card">
                <div className="footer-logo-wrapper">
                  <img
                    src="logo-sumbar.png"
                    alt="Logo Sumbar"
                    className="footer-logo"
                    referrerPolicy="no-referrer"
                  />
                  <div className="footer-logo-text">
                    <span className="footer-logo-title">
                      Pemerintah Provinsi
                    </span>
                    <span className="footer-logo-subtitle">Sumatera Barat</span>
                    <span className="footer-logo-small">Dinas Pertanian</span>
                  </div>
                </div>

                <p className="footer-description">
                  Portal resmi Dinas Pertanian Provinsi Sumatera Barat untuk
                  mendukung modernisasi pertanian dan ketahanan pangan di Ranah
                  Minang.
                </p>

                <ul className="footer-contact-list">
                  <li className="footer-contact-item">
                    <MapPin className="footer-contact-icon" />
                    <span className="footer-contact-text">
                      Jl. Sudirman No. 1, Padang, Sumatera Barat 25111
                    </span>
                  </li>
                  <li className="footer-contact-item">
                    <Phone className="footer-contact-icon" />
                    <span className="footer-contact-text">(0751) 123456</span>
                  </li>
                  <li className="footer-contact-item">
                    <Mail className="footer-contact-icon" />
                    <span className="footer-contact-text">
                      dinas.pertanian@sumbarprov.go.id
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:px-8"
            >
              <div className="footer-section-title">
                <span className="footer-title-decoration" />
                <h4>Tautan Cepat</h4>
              </div>

              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="footer-link-item"
                  >
                    <a href={link.href} className="footer-link">
                      <Globe className="footer-link-icon" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Social Media & Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="footer-section-title">
                <span className="footer-title-decoration" />
                <h4>Sosial Media</h4>
              </div>

              <div className="footer-social-grid">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`footer-social-link ${social.bg}`}
                      aria-label={social.label}
                    >
                      <Icon className="footer-social-icon" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <motion.div whileHover={{ y: -4 }} className="footer-map">
                <div className="footer-map-placeholder">
                  Informasi Peta Lokasi
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-copyright">
        <div className="footer-copyright-content">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="footer-copyright-text"
          >
            © 2025 - 2026 Dinas Pertanian Provinsi Sumatera Barat. All Right
            Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
