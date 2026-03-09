import React from "react";
import { motion } from "motion/react";
import {
    MessageSquareWarning,
    Send,
    PhoneCall,
    Mail,
    ShieldAlert,
    Search,
    ChevronRight,
    ExternalLink
} from "lucide-react";
import { BackButton } from "../components/BackButton";
import "./ProfilPages.css";

export const Pengaduan = () => {
    const complaintChannels = [
        {
            title: "SP4N LAPOR!",
            desc: "Layanan aspirasi dan pengaduan daring rakyat yang terintegrasi secara nasional.",
            icon: <Send size={28} />,
            link: "https://www.lapor.go.id/",
            color: "from-red-500 to-rose-600"
        },
        {
            title: "Whistleblowing System",
            desc: "Sarana pelaporan bagi Anda yang memiliki informasi perilaku tindak pidana korupsi.",
            icon: <ShieldAlert size={28} />,
            link: "#",
            color: "from-slate-700 to-slate-900"
        },
        {
            title: "Email Pengaduan",
            desc: "Kirimkan detail pengaduan Anda langsung melalui surat elektronik resmi kami.",
            icon: <Mail size={28} />,
            link: "mailto:pengaduan@pertanian.sumbarprov.go.id",
            color: "from-blue-500 to-indigo-600"
        },
        {
            title: "WhatsApp Center",
            desc: "Layanan pengaduan cepat melalui pesan singkat WhatsApp di jam operasional.",
            icon: <PhoneCall size={28} />,
            link: "https://wa.me/628123456789",
            color: "from-green-500 to-emerald-600"
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
                                        <MessageSquareWarning size={32} />
                                    </div>
                                    <h1 className="profil-title !mb-0 text-3xl lg:text-5xl font-black">Layanan Pengaduan</h1>
                                </div>
                                <p className="profil-text text-lg !max-w-none text-slate-600 leading-relaxed">
                                    Kami berkomitmen untuk terus meningkatkan kualitas pelayanan. Jika Anda menemukan ketidaksesuaian
                                    dalam pelayanan kami atau melihat adanya pelanggaran, jangan ragu untuk melaporkannya melalui kanal-kanal resmi berikut.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {complaintChannels.map((channel, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col md:flex-row group"
                                >
                                    <div className={`w-full md:w-56 bg-gradient-to-br ${channel.color} flex items-center justify-center p-10 text-white relative`}>
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {channel.icon}
                                    </div>
                                    <div className="flex-1 p-10 flex flex-col justify-center">
                                        <h3 className="text-xl font-black text-slate-800 mb-3">{channel.title}</h3>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">{channel.desc}</p>
                                        <a
                                            href={channel.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-green-600 transition-colors"
                                        >
                                            Lapor Sekarang <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-4">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-8">
                                    <Search size={26} />
                                </div>
                                <h3 className="text-lg font-black text-slate-800 mb-5">Cek Status Laporan</h3>
                                <p className="text-sm text-slate-500 font-medium mb-8">Sudah melapor? Pantau perkembangan penanganan pengaduan Anda secara berkala.</p>
                                <button className="w-full py-5 border-2 border-slate-100 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-all">Lihat Status</button>
                            </div>

                            <div className="lg:col-span-2 bg-indigo-900 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden flex flex-col justify-center">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <h2 className="text-2xl lg:text-3xl font-black mb-6 relative z-10">Kerahasian Pelapor Dijamin</h2>
                                <p className="text-indigo-100/70 font-medium mb-10 relative z-10 leading-relaxed text-lg">
                                    Kami menjamin kerahasiaan identitas pelapor (Whistleblower) sesuai dengan ketentuan hukum yang berlaku.
                                    Anda tidak perlu khawatir akan intimidasi atau tindakan balasan atas laporan yang Anda berikan dengan itikad baik.
                                </p>
                                <div className="flex items-center gap-3 text-indigo-300 font-black uppercase text-[10px] tracking-widest">
                                    <ShieldAlert size={18} /> Privacy Protected & Secured
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
