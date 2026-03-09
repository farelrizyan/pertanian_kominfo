import React from "react";
import { motion } from "motion/react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  GraduationCap,
  Calendar,
  Briefcase,
  ChevronRight,
  Star
} from "lucide-react";
import { BackButton } from "../components/BackButton";
import "./PimpinanKami.css";

export const PimpinanKami = () => {
  const educationData = [
    { level: "SD", school: "SDN Kumango", year: "1985-1991" },
    { level: "SMP", school: "SMP Kumango", year: "1991-1994" },
    { level: "SMA", school: "SMU N Batusangkar", year: "1994-1997" },
    { level: "S1", school: "Universitas Andalas", year: "1997-2002", major: "Agribisnis" },
    { level: "S2", school: "Institut Pertanian Bogor (IPB)", year: "2003-2005", major: "Agronomi" },
    { level: "S3", school: "Institut Pertanian Bogor (IPB)", year: "2006-2010", major: "Agronomi" }
  ];

  const achievements = [
    "Penghargaan Inovasi Pertanian 2023",
    "Tokoh Penggerak Pertanian Sumatera Barat 2022",
    "Peneliti Terbaik Bidang Agronomi 2021",
    "Inovator Teknologi Pertanian 2020"
  ];

  const experiences = [
    { position: "Kepala Balai Penerapan Modernisasi Pertanian", period: "2020 - Sekarang" },
    { position: "Wakil Kepala Balai Penelitian Pertanian", period: "2017 - 2020" },
    { position: "Koordinator Program Inovasi Teknologi", period: "2014 - 2017" },
    { position: "Peneliti Agronomi", period: "2010 - 2014" }
  ];

  return (
    <div className="pimpinan-page">
      <BackButton />
      
      {/* Main Profile Section - Hero section dihapus */}
      <section className="pimpinan-main">
        <div className="pimpinan-container">
          {/* Profile Card */}
          <motion.div 
            className="pimpinan-profile-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="pimpinan-profile-grid">
              {/* Image Section */}
              <div className="pimpinan-image-section">
                <div className="pimpinan-image-wrapper">
                  <div className="pimpinan-image-glow" />
                  <img 
                    src="/pimpinan.png" 
                    alt="Dr. Salwati, S.P., M.Si." 
                    className="pimpinan-image"
                  />
                  <div className="pimpinan-image-badge">
                    <Star size={16} />
                    <span>Kepala Dinas</span>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="pimpinan-quick-stats">
                  <div className="pimpinan-stat-item">
                    <Calendar size={20} />
                    <div>
                      <span className="pimpinan-stat-value">15+</span>
                      <span className="pimpinan-stat-label">Tahun Pengabdian</span>
                    </div>
                  </div>
                  <div className="pimpinan-stat-item">
                    <Award size={20} />
                    <div>
                      <span className="pimpinan-stat-value">8</span>
                      <span className="pimpinan-stat-label">Penghargaan</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="pimpinan-details-section">
                <div className="pimpinan-name-wrapper">
                  <h1 className="pimpinan-name">Dr. Salwati, S.P., M.Si.</h1>
                  <p className="pimpinan-title">
                    Kepala Balai Penerapan Modernisasi Pertanian
                    <span className="pimpinan-title-region">Sumatera Barat</span>
                  </p>
                </div>

                <div className="pimpinan-divider" />

                {/* Contact Info */}
                <div className="pimpinan-contact-grid">
                  <div className="pimpinan-contact-item">
                    <div className="pimpinan-contact-icon">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="pimpinan-contact-label">Alamat Kantor</span>
                      <p className="pimpinan-contact-value">
                        Jln. Raya Padang-Solok km 40, Sukarami, Kab Solok 27365
                      </p>
                    </div>
                  </div>

                  <div className="pimpinan-contact-item">
                    <div className="pimpinan-contact-icon">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="pimpinan-contact-label">Telepon</span>
                      <p className="pimpinan-contact-value">(0755) 31564</p>
                    </div>
                  </div>

                  <div className="pimpinan-contact-item">
                    <div className="pimpinan-contact-icon">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="pimpinan-contact-label">Email</span>
                      <p className="pimpinan-contact-value">salwati@pertanian.go.id</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biography & Career Section */}
          <div className="pimpinan-bio-section">
            {/* Education */}
            <motion.div 
              className="pimpinan-bio-card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="pimpinan-bio-header">
                <GraduationCap size={24} />
                <h2>Riwayat Pendidikan</h2>
              </div>
              
              <div className="pimpinan-timeline">
                {educationData.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="pimpinan-timeline-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="pimpinan-timeline-dot" />
                    <div className="pimpinan-timeline-content">
                      <span className="pimpinan-timeline-level">{edu.level}</span>
                      <h3>{edu.school}</h3>
                      {edu.major && <p className="pimpinan-timeline-major">{edu.major}</p>}
                      <span className="pimpinan-timeline-year">{edu.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Career & Achievements */}
            <div className="pimpinan-bio-right">
              {/* Work Experience */}
              <motion.div 
                className="pimpinan-bio-card"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="pimpinan-bio-header">
                  <Briefcase size={24} />
                  <h2>Riwayat Jabatan</h2>
                </div>
                
                <div className="pimpinan-experience-list">
                  {experiences.map((exp, index) => (
                    <motion.div 
                      key={index}
                      className="pimpinan-experience-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="pimpinan-experience-period">{exp.period}</div>
                      <h3>{exp.position}</h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div 
                className="pimpinan-bio-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="pimpinan-bio-header">
                  <Award size={24} />
                  <h2>Penghargaan</h2>
                </div>
                
                <ul className="pimpinan-achievement-list">
                  {achievements.map((achievement, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <ChevronRight size={16} />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};