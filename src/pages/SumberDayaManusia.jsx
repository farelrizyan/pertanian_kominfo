import React from "react";
import { motion } from "motion/react";
import { BackButton } from "../components/BackButton";
import { Users, Award, GraduationCap, Briefcase, ChevronRight } from "lucide-react";
import "./ProfilPages.css";

export const SumberDayaManusia = () => {
    const stats = [
        { label: "Total Pegawai", value: "245", detail: "ASN & Non-ASN" },
        { label: "Sertifikasi", value: "85%", detail: "Tenaga Ahli" },
        { label: "Unit Kerja", value: "12", detail: "Tersebar di Sumbar" }
    ];

    const categories = [
        {
            icon: <GraduationCap size={24} />,
            title: "Pendidikan & Pelatihan",
            desc: "Program peningkatan kapasitas berkelanjutan untuk seluruh tim teknis dan administratif."
        },
        {
            icon: <Award size={24} />,
            title: "Kesejahteraan & Karir",
            desc: "Sistem manajemen karir yang transparan berbasis kompetansi dan kinerja nyata."
        },
        {
            icon: <Briefcase size={24} />,
            title: "Struktur Jabatan",
            desc: "Pengelolaan jabatan fungsional dan struktural yang optimal sesuai amanat regulasi."
        }
    ];

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
                        className="profil-header-card group p-12 lg:p-20"
                    >
                        <div className="profil-header-accent" />
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="flex-1">
                                <div className="profil-icon-wrapper mb-10">
                                    <div className="profil-icon-glow" />
                                    <Users size={32} />
                                </div>
                                <h1 className="profil-title tracking-tighter">Sumber Daya Manusia</h1>
                                <p className="profil-text mb-12">
                                    Aset terpenting kami adalah orang-orang di baliknya. Dinas Pertanian Sumatera Barat
                                    didukung oleh tenaga profesional yang berdedikasi tinggi untuk melayani masyarakat,
                                    melakukan inovasi, dan memastikan sektor pertanian tetap menjadi tulang punggung daerah.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {stats.map((s, i) => (
                                        <div key={i} className="flex flex-col gap-1 border-l-2 border-green-500/20 pl-6 border-dotted">
                                            <span className="text-3xl font-black text-slate-900">{s.value}</span>
                                            <span className="text-[10px] font-black uppercase text-green-600 tracking-widest">{s.label}</span>
                                            <span className="text-xs text-slate-400 font-medium">{s.detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:w-1/3 grid grid-cols-1 gap-6">
                                {categories.map((c, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl flex flex-col gap-4 hover:border-green-500 transition-colors group relative overflow-hidden"
                                    >
                                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                                            {c.icon}
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-lg font-black text-slate-800 tracking-tight">{c.title}</h4>
                                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{c.desc}</p>
                                        </div>
                                        <ChevronRight className="absolute bottom-8 right-8 text-slate-100 group-hover:text-green-500 transition-colors" size={40} strokeWidth={3} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Additional Content Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 mb-16">
                        <div className="relative group rounded-[3.5rem] overflow-hidden shadow-2xl h-[450px] order-2 md:order-1">
                            <img src="https://images.unsplash.com/photo-1573161559525-97029174e7cc?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="team" />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent" />
                            <div className="absolute bottom-12 left-12 right-12 text-white">
                                <div className="w-12 h-1 bg-white/30 mb-6 rounded-full" />
                                <h3 className="text-3xl font-black mb-2 leading-none">ETOS KERJA</h3>
                                <p className="text-sm font-bold text-white/70 tracking-widest uppercase">Berintegritas, Melayani, Profesional</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 py-8 order-1 md:order-2">
                            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">Membangun Sinergi{"\n"}Hingga ke Pelosok</h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                Tim kami tidak hanya bekerja di balik meja. Dari penyuluh lapangan di lereng Gunung Singgalang hingga
                                analis data di pusat kota Padang, kami bersatu untuk satu tujuan: memperkuat kedaulatan pangan
                                Provinsi Sumatera Barat.
                            </p>
                            <div className="flex flex-col gap-4">
                                {[
                                    "Penyuluh Pertanian yang tersebar di 19 kabupaten/kota",
                                    "Analis ketahanan pangan yang kompeten",
                                    "Tenaga teknis operasional alat mesin pertanian",
                                    "Administrator yang responsif dan transparan"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-2 h-2 rounded-full bg-green-500 group-hover:w-4 transition-all" />
                                        <span className="text-slate-700 font-bold text-sm tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
