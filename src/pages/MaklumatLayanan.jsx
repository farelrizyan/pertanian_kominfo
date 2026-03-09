import React from "react";
import { motion } from "motion/react";
import {
    FileCheck,
    Award,
    Heart,
    CheckCircle2,
    ShieldCheck,
    Quote
} from "lucide-react";
import { BackButton } from "../components/BackButton";
import "./ProfilPages.css";

export const MaklumatLayanan = () => {
    const points = [
        { title: "Pelayanan Prima", desc: "Memberikan pelayanan yang cepat, tepat, dan akurat.", icon: <CheckCircle2 size={24} /> },
        { title: "Transparansi", desc: "Menjamin keterbukaan dalam setiap proses pelayanan.", icon: <ShieldCheck size={24} /> },
        { title: "Integritas", desc: "Melaksanakan tugas dengan penuh tanggung jawab dan kejujuran.", icon: <Award size={24} /> },
        { title: "Dedikasi", desc: "Berkomitmen tinggi untuk melayani kebutuhan masyarakat pertanian.", icon: <Heart size={24} /> },
    ];

    return (
        <div className="profil-page">
            <div className="profil-bg-glow" />
            <div className="profil-bg-glow-2" />

            <div className="profil-content max-w-7xl">
                <BackButton />

                <div className="mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="profil-header-card group p-16 text-center flex flex-col items-center gap-12 relative overflow-hidden"
                    >
                        <div className="profil-header-accent" />
                        <div className="absolute top-10 left-10 text-slate-100 rotate-180">
                            <Quote size={80} />
                        </div>

                        <div className="profil-icon-wrapper scale-125 mb-6">
                            <div className="profil-icon-glow" />
                            <FileCheck size={32} />
                        </div>

                        <h1 className="profil-title !mb-0 text-4xl lg:text-6xl font-black tracking-tighter">Maklumat Pelayanan</h1>

                        <div className="max-w-3xl border-y-2 border-slate-100 py-12 my-6">
                            <p className="text-2xl lg:text-3xl font-bold text-slate-800 italic leading-relaxed">
                                "Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji, kami siap menerima sanksi sesuai peraturan perundang-undangan yang berlaku."
                            </p>
                        </div>

                        <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-sm mt-4">
                            Kepala Dinas Pertanian Provinsi Sumatera Barat
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                        {points.map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:border-green-500 transition-all flex flex-col items-center text-center gap-4 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                                    {point.icon}
                                </div>
                                <h3 className="text-lg font-black text-slate-800">{point.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{point.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-16 p-12 bg-white rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col lg:flex-row items-center gap-12"
                    >
                        <div className="flex-1">
                            <h2 className="text-3xl font-black text-slate-900 mb-6">Budaya Kerja Kami</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-600 flex-shrink-0 mt-1 flex items-center justify-center text-[10px] font-bold text-white">1</div>
                                    <p className="text-slate-600 font-medium">Senantiasa bersikap ramah, sopan, dan santun dalam melayani.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-600 flex-shrink-0 mt-1 flex items-center justify-center text-[10px] font-bold text-white">2</div>
                                    <p className="text-slate-600 font-medium">Tidak menerima imbalan atau gratifikasi dalam bentuk apapun.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-600 flex-shrink-0 mt-1 flex items-center justify-center text-[10px] font-bold text-white">3</div>
                                    <p className="text-slate-600 font-medium">Memberikan solusi yang solutif bagi permasalahan petani dan pemangku kepentingan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 aspect-[3/4] bg-slate-100 rounded-[2rem] overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center text-white/50 font-black uppercase text-xs tracking-widest text-center p-8">
                                Sertifikat Maklumat Layanan Terpasang di Lobby Kantor
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
