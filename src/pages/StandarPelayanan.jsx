import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Search,
    X,
    FileText,
    Clock,
    DollarSign,
    ShieldCheck,
    ArrowRight,
    Leaf,
    Settings,
    HeartPulse,
    CheckCircle2,
    Download,
    Sparkles,
    Zap,
    Scale,
    Users,
    Activity
} from "lucide-react";
import { BackButton } from "../components/BackButton";
import "./StandarPelayanan.css";

const servicesData = [
    {
        id: 1,
        category: "Tanaman Pangan",
        title: "Sertifikasi Benih Unggul",
        shortTitle: "Sertifikasi Benih",
        icon: <Leaf />,
        size: "large",
        color: "from-emerald-500 to-green-600",
        desc: "Layanan pengujian mutu dan sertifikasi benih untuk menjamin kualitas benih yang beredar di masyarakat.",
        persyaratan: [
            "Surat permohonan sertifikasi",
            "Dokumen asal usul benih/sumber",
            "Peta lokasi penangkaran",
            "Deskripsi varietas"
        ],
        prosedur: [
            { title: "Pendaftaran", desc: "Penyerahan berkas & verifikasi" },
            { title: "Inspeksi Lapangan", desc: "Pemeriksaan fase vegetatif" },
            { title: "Sampling", desc: "Pengambilan contoh benih" },
            { title: "Uji Lab", desc: "Analisis kemurnian & daya tumbuh" },
            { title: "Pelabelan", desc: "Penerbitan label & sertifikat" }
        ],
        waktu: "14-21 Hari",
        biaya: "PNBP / Mandiri",
        produk: "Label Mutu Benih",
        stats: "1.2k+ Sertifikat/Tahun"
    },
    {
        id: 2,
        category: "Perkebunan",
        title: "Rekomendasi Izin Usaha",
        shortTitle: "Izin Usaha",
        icon: <Scale />,
        size: "medium",
        color: "from-amber-400 to-orange-500",
        desc: "Pemberian rekomendasi teknis untuk pembukaan atau perluasan usaha perkebunan di wilayah Provinsi.",
        persyaratan: [
            "NIB (Nomor Induk Berusaha)",
            "Rencana Kerja Tahunan",
            "KTP Pemilik",
            "Dokumen Lingkungan (AMDAL)"
        ],
        prosedur: [
            { title: "Pengajuan", desc: "Input berkas digital" },
            { title: "Verifikasi", desc: "Cek admin & kesesuaian lahan" },
            { title: "Tinjauan", desc: "Kunjungan lapangan Tim Teknis" },
            { title: "Rekomendasi", desc: "Penerbitan SK Rekomendasi" }
        ],
        waktu: "10 Hari Kerja",
        biaya: "Gratis (Bebas Biaya)",
        produk: "SK Rekom Teknis IUP",
        stats: "98% Approval Rate"
    },
    {
        id: 3,
        category: "Peternakan",
        title: "Pelayanan Kesehatan Hewan",
        shortTitle: "Kesehatan Hewan",
        icon: <HeartPulse />,
        size: "small",
        color: "from-rose-500 to-pink-600",
        desc: "Layanan pemeriksaan kesehatan hewan, pengobatan, serta pemberian vitamin bagi ternak masyarakat.",
        persyaratan: ["Identitas Pemilik", "Data Populasi", "Riwayat Penyakit"],
        prosedur: [
            { title: "Laporan", desc: "Call Center atau Puskeswan" },
            { title: "Diagnosa", desc: "Pemeriksaan fisik di lokasi" },
            { title: "Tindakan", desc: "Pemberian obat/vaksin" },
            { title: "Selesai", desc: "Penerbitan SKKH" }
        ],
        waktu: "1x24 Jam (Emergency)",
        biaya: "Biaya Obat Subsidid",
        produk: "SKKH (Surat Kesehatan)",
        stats: "24/7 Response"
    },
    {
        id: 4,
        category: "Alsintan",
        title: "Peminjaman Mesin Pertanian",
        shortTitle: "Pinjam Alsintan",
        icon: <Settings />,
        size: "medium",
        color: "from-blue-500 to-indigo-600",
        desc: "Layanan fasilitasi peminjaman traktor, combine harvester, dan alat lainnya untuk kelompok tani.",
        persyaratan: ["Proposal Gapoktan", "Surat Tanggung Jawab", "Data CPCL"],
        prosedur: [
            { title: "Proposal", desc: "Pengajuan via Dinas" },
            { title: "Cek Lapangan", desc: "Verifikasi Kelompok & Lokasi" },
            { title: "MoU", desc: "Penandatanganan Berita Acara" },
            { title: "Dropping", desc: "Mobilisasi Alat ke Lokasi" }
        ],
        waktu: "7 Hari Kerja",
        biaya: "Dana Operasional Kelompok",
        produk: "Izin Pakai Alat",
        stats: "500+ Unit Tersedia"
    },
    {
        id: 5,
        category: "Umum",
        title: "Konsultasi & Bimtek Budidaya",
        shortTitle: "Bimtek Budidaya",
        icon: <Users />,
        size: "small",
        color: "from-violet-500 to-purple-600",
        desc: "Layanan bimbingan teknis dan konsultasi bagi petani/pengusaha terkait teknik budidaya modern.",
        persyaratan: ["Identitas", "Info Lahan"],
        prosedur: [
            { title: "Jadwal", desc: "Booking sesi konsultasi" },
            { title: "Sesi", desc: "Diskusi dengan Penyuluh" },
            { title: "Output", desc: "Penyusunan SOP Budidaya" }
        ],
        waktu: "Sesuai Janji",
        biaya: "Gratis",
        produk: "Rekomendasi Budidaya",
        stats: "Weekly Updates"
    },
    {
        id: 6,
        category: "Informasi",
        title: "Penyediaan Data & Statistik",
        shortTitle: "Data Pertanian",
        icon: <Activity />,
        size: "small",
        color: "from-cyan-500 to-blue-500",
        desc: "Akses data statistik produksi, pasar, dan harga komoditas pertanian secara real-time.",
        persyaratan: ["Permohonan Data", "Tujuan Penggunaan"],
        prosedur: [
            { title: "Request", desc: "Pilih dataset yang dibutuhkan" },
            { title: "Approve", desc: "Cek klasifikasi informasi" },
            { title: "Export", desc: "Data dikirim dalam format PDF/Excel" }
        ],
        waktu: "2 Hari Kerja",
        biaya: "Gratis / Terbuka",
        produk: "Data Statistik / Infografis",
        stats: "Lengkap & Akurat"
    }
];

const categories = ["Semua", "Tanaman Pangan", "Perkebunan", "Peternakan", "Alsintan", "Umum"];

export const StandarPelayanan = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("Semua");
    const [selectedId, setSelectedId] = useState(null);
    const selectedService = servicesData.find(s => s.id === selectedId);

    const filteredServices = useMemo(() => {
        return servicesData.filter(s => {
            const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTab = activeTab === "Semua" || s.category === activeTab;
            return matchesSearch && matchesTab;
        });
    }, [searchTerm, activeTab]);

    useEffect(() => {
        if (selectedId) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [selectedId]);

    return (
        <div className="sp-container">
            <div className="sp-bg-elements">
                <div className="sp-glow-1" />
                <div className="sp-glow-2" />
            </div>

            <div className="sp-content">
                <BackButton />

                <header className="sp-hero">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center"
                        style={{ gap: "2.5rem" }}
                    >
                        <div className="sp-badge">
                            <Sparkles size={14} /> Service Standard V2.0
                        </div>
                        <h1 className="sp-hero-title">
                            Ecosystem <span>Layanan</span> <br />Pertanian Modern
                        </h1>
                        <p className="sp-hero-subtitle">
                            Menghubungkan petani Sumatera Barat ke pusat informasi dan bantuan teknis melalui standar pelayanan prima kelas dunia.
                        </p>
                    </motion.div>

                    <div className="sp-controls">
                        <div className="sp-tabs">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`sp-tab-btn ${activeTab === cat ? 'active' : ''}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="sp-search-wrapper">
                            <Search size={18} className="sp-search-icon" />
                            <input
                                type="text"
                                placeholder="Search ecosystem services..."
                                className="sp-search-input"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </header>

                <motion.div layout className="sp-bento-grid">
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                layoutId={`card-${service.id}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setSelectedId(service.id)}
                                className={`sp-card sp-card-${service.size}`}
                            >
                                <div className="sp-card-inner">
                                    <div className={`sp-card-mesh bg-gradient-to-br ${service.color}`} />

                                    <div className={`sp-card-icon-box bg-gradient-to-br ${service.color}`}>
                                        {React.cloneElement(service.icon, { size: 36 })}
                                    </div>

                                    <div className="sp-card-footer">
                                        <div className="sp-card-category">{service.category}</div>
                                        <h3 className="sp-card-title">
                                            {service.size === 'large' ? service.title : service.shortTitle}
                                        </h3>
                                        {service.size !== 'small' && (
                                            <p className="sp-card-desc">
                                                {service.desc}
                                            </p>
                                        )}
                                        <div className="sp-card-action-bar">
                                            <div className="sp-card-stat">
                                                {service.stats}
                                            </div>
                                            <div className="sp-card-arrow">
                                                <ArrowRight size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <AnimatePresence>
                    {selectedId && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="sp-overlay"
                            />

                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="sp-drawer"
                            >
                                <div className="sp-drawer-header">
                                    <div className="sp-drawer-header-left">
                                        <div className={`sp-drawer-icon bg-gradient-to-br ${selectedService.color}`}>
                                            {React.cloneElement(selectedService.icon, { size: 24 })}
                                        </div>
                                        <h2 className="sp-drawer-title">{selectedService.title}</h2>
                                    </div>
                                    <button onClick={() => setSelectedId(null)} className="sp-close-btn">
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="sp-drawer-body">
                                    <section>
                                        <p className="sp-drawer-desc">
                                            "{selectedService.desc}"
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="sp-section-label">
                                            <Zap size={16} className="text-green-500" /> Alur Perjalanan Farmer's Journey
                                        </h3>
                                        <div className="sp-stepper">
                                            {selectedService.prosedur.map((step, i) => (
                                                <div key={i} className="sp-stepper-item">
                                                    <div className="sp-stepper-left">
                                                        <div className="sp-stepper-node">{i + 1}</div>
                                                        {i < selectedService.prosedur.length - 1 && <div className="sp-stepper-line" />}
                                                    </div>
                                                    <div className="sp-stepper-content">
                                                        <h4 className="sp-stepper-title">{step.title}</h4>
                                                        <p className="sp-stepper-desc">{step.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="sp-info-grid">
                                        <div className="sp-info-card">
                                            <h3 className="sp-section-label" style={{ marginBottom: "2rem" }}>
                                                <FileText size={16} className="text-blue-500" /> Mandatory Dokumen
                                            </h3>
                                            <div className="sp-doc-list">
                                                {selectedService.persyaratan.map((item, i) => (
                                                    <div key={i} className="sp-doc-item">
                                                        <div className="sp-check-icon"><CheckCircle2 size={18} /></div>
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="sp-stats-column">
                                            <div className="sp-mini-stat">
                                                <div className="sp-mini-stat-icon bg-orange-50 text-orange-500"><Clock size={28} /></div>
                                                <div>
                                                    <div className="sp-mini-stat-label">Time To Finish</div>
                                                    <div className="sp-mini-stat-value">{selectedService.waktu}</div>
                                                </div>
                                            </div>
                                            <div className="sp-mini-stat">
                                                <div className="sp-mini-stat-icon bg-blue-50 text-blue-500"><DollarSign size={28} /></div>
                                                <div>
                                                    <div className="sp-mini-stat-label">Biaya / Tarif</div>
                                                    <div className="sp-mini-stat-value">{selectedService.biaya}</div>
                                                </div>
                                            </div>
                                            <div className="sp-mini-stat">
                                                <div className="sp-mini-stat-icon bg-violet-50 text-violet-500"><ShieldCheck size={28} /></div>
                                                <div>
                                                    <div className="sp-mini-stat-label">Produk Akhir</div>
                                                    <div className="sp-mini-stat-value">{selectedService.produk}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <div className="sp-drawer-action-foot">
                                        <button className="sp-btn-download">
                                            <Download size={20} /> Unduh Dokumen Lengkap (PDF)
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                <div className="sp-footer-container">
                    <div className="sp-footer-card">
                        <div className="sp-footer-glow" />
                        <div className="sp-footer-content">
                            <div className="sp-footer-text-box">
                                <h2 className="sp-footer-title">
                                    Belum menemukan <span>layanan</span> yang tepat?
                                </h2>
                                <p className="sp-footer-desc">
                                    Admin kami siap membantu menjawab pertanyaan teknis terkait segala jenis administrasi pertanian 24/7.
                                </p>
                                <div className="sp-btn-group">
                                    <button className="sp-btn-primary">WhatsApp Support</button>
                                    <button className="sp-btn-secondary">Surat Elektronik</button>
                                </div>
                            </div>
                            <div className="sp-footer-icon-huge">
                                <Zap size={100} className="fill-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
