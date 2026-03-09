import React, { useState } from "react";
import {
  Menu, X, Search, Globe, ChevronDown, Mail
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {
      name: "Profil",
      href: "/profil",
      dropdown: [
        { name: "Selayang Pandang", href: "/profil/overview" },
        { name: "Visi dan Misi", href: "/profil/visi-misi" },
        { name: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
        { name: "Tupoksi", href: "/profil/tugas-fungsi" },
        { name: "Sumber Daya Manusia", href: "/profil/sumber-daya-manusia" },
        { name: "Satuan Kerja", href: "/profil/satuan-kerja" },
      ],
    },
    {
      name: "Layanan",
      href: "/layanan",
      dropdown: [
        { name: "Standar Pelayanan", href: "/layanan/standar" },
        { name: "Maklumat Layanan", href: "/layanan/maklumat" },
        { name: "Pengaduan", href: "/layanan/pengaduan" },
        { name: "Survey Kepuasan", href: "/layanan/survey" },
        { name: "Permohonan Info", href: "/layanan/permohonan" },
      ]
    },
    {
      name: "Berita",
      href: "/berita"
    },
    {
      name: "PPID",
      href: "/ppid",
      dropdown: [
        { name: "Profil PPID", href: "/ppid/profil" },
        { name: "Visi Misi", href: "/ppid/visi-misi" },
        { name: "Tugas Fungsi", href: "/ppid/tugas-fungsi" },
        { name: "Maklumat Pelayanan", href: "/ppid/maklumat" },
        { name: "Informasi Berkala", href: "/ppid/berkala" },
        { name: "Informasi Serta Merta", href: "/ppid/serta-merta" },
        { name: "Informasi Setiap Saat", href: "/ppid/setiap-saat" },
        { name: "Informasi Dikecualikan", href: "/ppid/dikecualikan" },
      ],
    },
    {
      name: "Galeri",
      href: "/galeri",
      dropdown: [
        { name: "Foto", href: "/galeri?tab=foto" },
        { name: "Video", href: "/galeri?tab=video" },
      ],
    },
    {
      name: "Administrasi",
      href: "/administrasi",
      dropdown: [
        { name: "RENSTRA", href: "/administrasi/renstra" },
        { name: "LAKIP", href: "/administrasi/lakip" },
        { name: "RKT", href: "/administrasi/rkt" },
        { name: "SOP", href: "/administrasi/sop" },
      ],
    },
  ];

  return (
    <header className="navbar-wrapper">
      {/* Top Header */}
      <div className="navbar-top">
        <Link to="/" className="logo-section">
          <img src="/logo-sumbar.png" alt="Logo Sumbar" className="logo-main" />
          <div className="logo-text">
            <h1>Pertanian Sumbar</h1>
            <p>Dinas Pertanian Provinsi Sumatera Barat</p>
          </div>
        </Link>

        <div className="search-section">
          <input type="text" placeholder="Cari Informasi..." className="search-input" />
          <Search className="search-icon" size={18} />
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Blue Navigation Bar */}
      <nav className="navbar-bottom shadow-lg">
        <div className="nav-tabs">
          <Link to="/" className={cn("nav-tab-item", location.pathname === "/" && "active")}>
            Beranda
          </Link>

          {navLinks.map((link) => (
            <div key={link.name} className="nav-tab-item group">
              <Link to={link.href} className="flex items-center gap-1.5 h-full">
                {link.name}
                {link.dropdown && <ChevronDown size={12} className="transition-transform group-hover:rotate-180 opacity-60" />}
              </Link>

              {/* Luxury Dropdown */}
              {link.dropdown && (
                <div className="nav-dropdown-luxury group-hover:block">
                  {link.dropdown.map(sub => (
                    <Link key={sub.name} to={sub.href} className="nav-link-item">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-stretch">
          <div className="hidden xl:flex items-center text-white/70 font-bold text-[10px] gap-2 mr-4">
            <Globe size={14} />
            <span>ID | EN</span>
          </div>
          <a
            href="https://www.lapor.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="orange-box gap-2"
          >
            <Mail size={18} color="white" strokeWidth={3} />
            <span className="text-white font-black text-sm tracking-tighter">LAPOR!</span>
          </a>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/80 z-[1001] lg:hidden" onClick={() => setIsMobileOpen(false)}>
          <div className="float-right h-full w-[80%] bg-green-600 p-8 pt-20 flex flex-col gap-6" onClick={e => e.stopPropagation()}>
            <Link to="/" className="text-white text-2xl font-bold border-b border-white/10 pb-4">Beranda</Link>
            {navLinks.map(link => (
              <div key={link.name} className="flex flex-col gap-3">
                <h4 className="text-white/40 text-[10px] font-black uppercase tracking-widest">{link.name}</h4>
                <div className="pl-4 border-l border-white/20 flex flex-col gap-3">
                  {link.dropdown.map(sub => (
                    <Link key={sub.name} to={sub.href} className="text-white font-semibold" onClick={() => setIsMobileOpen(false)}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
