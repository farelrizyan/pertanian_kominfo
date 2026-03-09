import React from "react";
import { motion } from "motion/react";
import {
    Activity,
    ThumbsUp,
    BarChart3,
    FileSpreadsheet,
    Users,
    Star,
    ChevronRight,
    Download
} from "lucide-react";
import { BackButton } from "../components/BackButton";
import "./ProfilPages.css";

export const SurveyKepuasan = () => {
    const ikmResults = [
        { year: "2023", score: "88.45", category: "A (Sangat Baik)", respondents: "1,240" },
        { year: "2022", score: "86.12", category: "A (Sangat Baik)", respondents: "1,050" },
        { year: "2021", score: "84.30", category: "B (Baik)", respondents: "980" },
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
                                        <Activity size={32} />
                                    </div>
                                    <h1 className="profil-title !mb-0 text-3xl lg:text-5xl font-black">Survey Kepuasan Masyarakat</h1>
                                </div>
                                <p className="profil-text text-lg !max-w-none text-slate-600 leading-relaxed">
                                    Kami senantiasa berupaya memberikan pelayanan terbaik. Melalui Survey Kepuasan Masyarakat (SKM),
                                    kami mengukur kinerja pelayanan secara kolektif sebagai bahan evaluasi dan perbaikan berkelanjutan.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 bg-white rounded-[3.5rem] p-10 lg:p-16 shadow-2xl border border-slate-100">
                                <div className="flex items-center justify-between mb-12">
                                    <h2 className="text-2xl lg:text-3xl font-black text-slate-800">Indeks Kepuasan (IKM)</h2>
                                    <div className="px-6 py-2.5 bg-green-50 text-green-600 rounded-xl font-bold text-xs uppercase tracking-widest">Update 2023</div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                                    <div className="flex flex-col items-center p-10 bg-slate-50 rounded-[2.5rem] gap-3 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                                        <Star className="text-amber-500" size={36} />
                                        <span className="text-4xl font-black text-slate-800">88.45</span>
                                        <span className="text-[10px] font-black uppercase text-slate-400">Skor Akhir IKM</span>
                                    </div>
                                    <div className="flex flex-col items-center p-10 bg-slate-50 rounded-[2.5rem] gap-3 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                                        <ThumbsUp className="text-green-600" size={36} />
                                        <span className="text-4xl font-black text-slate-800">A</span>
                                        <span className="text-[10px] font-black uppercase text-slate-400">Mutu Pelayanan</span>
                                    </div>
                                    <div className="flex flex-col items-center p-10 bg-slate-50 rounded-[2.5rem] gap-3 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                                        <Users className="text-blue-600" size={36} />
                                        <span className="text-4xl font-black text-slate-800">1.2K</span>
                                        <span className="text-[10px] font-black uppercase text-slate-400">Total Responden</span>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b-2 border-slate-50">
                                                <th className="pb-6 font-black text-slate-400 uppercase text-[10px] tracking-widest">Tahun Anggaran</th>
                                                <th className="pb-6 font-black text-slate-400 uppercase text-[10px] tracking-widest text-center">Nilai IKM</th>
                                                <th className="pb-6 font-black text-slate-400 uppercase text-[10px] tracking-widest text-center">Kategori Mutu</th>
                                                <th className="pb-6 font-black text-slate-400 uppercase text-[10px] tracking-widest text-right">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ikmResults.map((res, i) => (
                                                <tr key={i} className="border-b border-slate-50 group hover:bg-slate-50/50 transition-colors">
                                                    <td className="py-8 font-black text-slate-800">{res.year}</td>
                                                    <td className="py-8 font-bold text-slate-600 text-center">{res.score}</td>
                                                    <td className="py-8 text-center">
                                                        <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-wider ${res.category.includes('A') ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                                            {res.category}
                                                        </span>
                                                    </td>
                                                    <td className="py-8 text-right">
                                                        <button className="p-4 text-slate-400 hover:text-green-600 transition-colors">
                                                            <Download size={20} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="flex flex-col gap-12">
                                <div className="bg-gradient-to-br from-green-600 to-indigo-700 p-10 lg:p-14 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <FileSpreadsheet className="mb-8 opacity-50" size={48} />
                                    <h3 className="text-2xl lg:text-3xl font-black mb-6">Ikuti Survey Online</h3>
                                    <p className="text-green-50/70 font-medium mb-10 leading-relaxed text-lg">Berikan penilaian Anda secara langsung terhadap kualitas pelayanan kami melalui formulir kuesioner online.</p>
                                    <button className="w-full py-6 bg-white text-green-700 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:scale-105 transition-all">Isi Kuesioner SKM</button>
                                </div>

                                <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                            <BarChart3 size={28} />
                                        </div>
                                        <h3 className="text-xl font-black text-slate-800">Laporan Analisis</h3>
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium mb-8">Unduh laporan lengkap hasil analisis dan tindak lanjut dari Survey Kepuasan Masyarakat setiap tahunnya.</p>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl group hover:bg-indigo-50 cursor-pointer transition-all">
                                            <span className="text-xs font-black uppercase text-slate-600 group-hover:text-indigo-700">Laporan SKM 2023.pdf</span>
                                            <Download size={18} className="text-slate-300 group-hover:text-indigo-500" />
                                        </div>
                                        <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl group hover:bg-indigo-50 cursor-pointer transition-all">
                                            <span className="text-xs font-black uppercase text-slate-600 group-hover:text-indigo-700">Laporan SKM 2022.pdf</span>
                                            <Download size={18} className="text-slate-300 group-hover:text-indigo-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
