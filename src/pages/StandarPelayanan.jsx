import React from "react";
import { motion } from "motion/react";
import {
    ClipboardList,
    Clock,
    DollarSign,
    UserCheck,
    ShieldCheck,
    FileText,
    ChevronRight,
    Info
} from "lucide-react";
import { BackButton } from "../components/BackButton";
import "./ProfilPages.css";

export const StandarPelayanan = () => {
    const standards = [
        {
            title: "Persyaratan Pelayanan",
            desc: "Dokumen dan kelengkapan yang harus dipenuhi oleh pemohon untuk mendapatkan layanan.",
            icon: <FileText size={28} />,
            color: "border-green-500 text-green-600"
        },
        {
            title: "Sistem, Mekanisme, dan Prosedur",
            desc: "Tata cara pelayanan yang dilakukan bagi pemberi dan penerima pelayanan termasuk pengaduan.",
            icon: <UserCheck size={28} />,
            color: "border-emerald-500 text-emerald-600"
        },
        {
            title: "Jangka Waktu Penyelesaian",
            desc: "Waktu yang diperlukan sejak diterimanya permintaan sampai dengan selesainya pelayanan.",
            icon: <Clock size={28} />,
            color: "border-amber-500 text-amber-600"
        },
        {
            title: "Biaya / Tarif",
            desc: "Besaran biaya yang dikenakan kepada penerima layanan dalam mengurus dan/atau memperoleh pelayanan.",
            icon: <DollarSign size={28} />,
            color: "border-blue-500 text-blue-600"
        },
        {
            title: "Produk Pelayanan",
            desc: "Hasil pelayanan yang diberikan dan diterima sesuai dengan ketentuan yang telah ditetapkan.",
            icon: <ShieldCheck size={28} />,
            color: "border-purple-500 text-purple-600"
        },
        {
            title: "Penanganan Pengaduan",
            desc: "Mekanisme pengelolaan pengaduan, saran, dan masukan dari pengguna layanan.",
            icon: <Info size={28} />,
            color: "border-red-500 text-red-600"
        }
    ];

    return (
        <div className="profil-page">
            <div className="profil-bg-glow" />
            <div className="profil-bg-glow-2" />

            <div className="profil-content max-w-7xl">
                <BackButton />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-12 flex flex-col gap-12"
                    >
                        <div className="profil-header-card group p-10 lg:p-16">
                            <div className="profil-header-accent" />
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-6">
                                    <div className="profil-icon-wrapper scale-110">
                                        <div className="profil-icon-glow" />
                                        <ClipboardList size={32} />
                                    </div>
                                    <h1 className="profil-title !mb-0 text-3xl lg:text-5xl font-black">Standar Pelayanan</h1>
                                </div>
                                <p className="profil-text text-lg !max-w-none text-slate-600 leading-relaxed">
                                    Standar Pelayanan merupakan tolok ukur yang dipergunakan sebagai pedoman penyelenggaraan pelayanan
                                    dan acuan penilaian kualitas pelayanan sebagai kewajiban dan janji penyelenggara kepada masyarakat
                                    dalam rangka pelayanan yang berkualitas, cepat, mudah, terjangkau, and terukur.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {standards.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`bg-white p-10 rounded-[2.5rem] border-l-8 ${item.color.split(' ')[0]} shadow-xl flex flex-col gap-6 hover:scale-[1.02] transition-all group`}
                                >
                                    <div className={`p-5 rounded-2xl bg-slate-50 w-fit ${item.color.split(' ')[1]} group-hover:bg-white group-hover:shadow-lg transition-all`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-black text-slate-800 leading-tight">{item.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                    <div className="mt-auto pt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-green-600 transition-colors">
                                        Lihat Selengkapnya <ChevronRight size={14} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-green-600 rounded-[3.5rem] p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl shadow-green-900/20 mt-8">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                                <div className="flex-1">
                                    <h3 className="text-3xl lg:text-4xl font-black mb-6 tracking-tighter">Kepuasan Anda adalah Prioritas Kami</h3>
                                    <p className="text-green-50/80 font-medium text-lg">Kami terus berupaya meningkatkan standar pelayanan demi kenyamanan dan kepuasan masyarakat penerima layanan di sektor pertanian.</p>
                                </div>
                                <button className="px-10 py-5 bg-white text-green-700 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:scale-105 transition-all whitespace-nowrap">
                                    Unduh Dokumen Standar (PDF)
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
