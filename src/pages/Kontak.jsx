import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  Building2,
} from "lucide-react";
import { BackButton } from "../components/BackButton";
import "./Kontak.css";
// tea plantation image is served from public folder; no import needed

export const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    department: "umum",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormStatus({
      submitted: true,
      success: true,
      message: "Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.",
    });

    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        department: "umum",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      details: ["Jln. Raya Padang-Solok km 40", "Sukarami, Kab Solok 27365"],
      color: "#4ade80",
    },
    {
      icon: Phone,
      title: "Telepon",
      details: ["(0755) 31564", "(0755) 31565"],
      color: "#4ade80",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["dinas.pertanian@sumbarprov.go.id", "salwati@pertanian.go.id"],
      color: "#f59e0b",
    },
    {
      icon: Clock,
      title: "Jam Kerja",
      details: ["Senin - Jumat: 08.00 - 16.00", "Sabtu - Minggu: Tutup"],
      color: "#a78bfa",
    },
  ];

  const departments = [
    { value: "umum", label: "Bagian Umum" },
    { value: "tanaman", label: "Tanaman Pangan" },
    { value: "hortikultura", label: "Hortikultura" },
    { value: "perkebunan", label: "Perkebunan" },
    { value: "peternakan", label: "Peternakan" },
    { value: "penyuluhan", label: "Penyuluhan" },
  ];

  return (
    <div className="kontak-page">
      <BackButton />

      {/* Hero Section with Tea Plantation Background */}
      <section className="kontak-hero">
        <div className="kontak-hero-bg">
          <img
            src="/kebunteh.jpg"
            alt="Kebun Teh Sumatera Barat"
            className="kontak-hero-image"
          />
          <div className="kontak-hero-pattern" />
          <div className="kontak-hero-overlay" />
        </div>

        <div className="kontak-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="kontak-hero-text"
          >
            <motion.span
              className="kontak-badge"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              HUBUNGI KAMI
            </motion.span>

            <motion.h1
              className="kontak-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Mari Berkolaborasi untuk
              <span className="kontak-title-highlight"> Pertanian Maju</span>
            </motion.h1>

            <motion.p
              className="kontak-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Kami siap mendengarkan aspirasi, saran, dan pertanyaan Anda untuk
              kemajuan pertanian Sumatera Barat.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      <section className="kontak-main">
        <div className="kontak-container">
          {/* info cards */}
          <div className="kontak-info-grid">
            {contactInfo.map((info, idx) => (
              <div
                className="kontak-info-card"
                key={idx}
                style={{ borderTopColor: info.color }}
              >
                <div
                  className="kontak-info-icon"
                  style={{ background: info.color + "22" }}
                >
                  <info.icon color={info.color} />
                </div>
                <h3>{info.title}</h3>
                {info.details.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>
            ))}
          </div>

          {/* form and optional map */}
          <div className="kontak-form-section">
            <div className="kontak-form-container">
              <div className="kontak-form-header">
                <h2>Form Kontak</h2>
                <p>Isi formulir di bawah untuk menghubungi kami</p>
              </div>

              {formStatus.submitted && (
                <div
                  className={`kontak-alert ${
                    formStatus.success ? "success" : "error"
                  }`}
                >
                  {formStatus.success ? (
                    <CheckCircle size={24} />
                  ) : (
                    <AlertCircle size={24} />
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}

              <form className="kontak-form" onSubmit={handleSubmit}>
                <div className="kontak-form-row">
                  <div className="kontak-form-group">
                    <label>
                      <User size={16} /> Nama
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={focusedField === "name" ? "focused" : ""}
                      required
                    />
                  </div>

                  <div className="kontak-form-group">
                    <label>
                      <Mail size={16} /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={focusedField === "email" ? "focused" : ""}
                      required
                    />
                  </div>
                </div>

                <div className="kontak-form-group">
                  <label>
                    <Building2 size={16} /> Departemen
                  </label>
                  <select
                    name="department"
                    className="kontak-select"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    {departments.map((dept) => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="kontak-form-group">
                  <label>
                    <MessageSquare size={16} /> Pesan
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={focusedField === "message" ? "focused" : ""}
                    required
                  />
                </div>

                <button type="submit" className="btn-submit">
                  <Send size={16} /> Kirim
                </button>
              </form>
            </div>

            {/* optional map or illustration could go here */}
            <div className="kontak-map-container">
              <div className="kontak-map">
                {/* embedded Google Map for the office location */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0642641244027!2d100.61823937504083!3d-0.8075116351078741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4f3d50d3b1a49%3A0x3b8b1d2b5534c1b2!2sDinas%20Pertanian%20Sumatera%20Barat!5e0!3m2!1sen!2sid!4v1700000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
