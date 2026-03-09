import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  ChevronDown,
  Menu,
  X,
  Mail,
  Home
} from "lucide-react";
import { cn } from "../utils/cn";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Beranda",
      href: "/",
      icon: <Home size={16} />
    },
    {
      name: "Profil",
      href: "/profil",
      dropdown: [
        { name: "Selayang Pandang", href: "/profil/overview" },
        { name: "Visi & Misi", href: "/profil/visi-misi" },
        { name: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
        { name: "Tupoksi", href: "/profil/tugas-fungsi" },
        { name: "SDM", href: "/profil/sumber-daya-manusia" },
        { name: "Satuan Kerja", href: "/profil/satuan-kerja" },
      ],
    },
    {
      name: "Layanan",
      href: "/layanan",
      dropdown: [
        { name: "Standar Pelayanan", href: "/layanan" },
        { name: "Maklumat Layanan", href: "/layanan" },
        { name: "Pengaduan", href: "/layanan" },
        { name: "Survey Kepuasan", href: "/layanan" },
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
        { name: "Profil PPID", href: "/ppid" },
        { name: "Informasi Berkala", href: "/ppid" },
        { name: "Informasi Serta Merta", href: "/ppid" },
      ],
    },
    {
      name: "Galeri",
      href: "/galeri"
    },
    {
      name: "Administrasi",
      href: "/administrasi"
    },
  ];

  return (
    <header className="navbar-wrapper">
      <div className={cn("navbar-container", scrolled && "scrolled")}>
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="/logo-sumbar.png" alt="Logo" className="logo-img" />
          <div className="logo-text">
            <span className="logo-title">Pertanian Sumbar</span>
            <span className="logo-subtitle">Dinas Pertanian Provinsi</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          {navLinks.map((link) => (
            <div key={link.name} className="nav-item">
              <Link
                to={link.href}
                className={cn(
                  "nav-link",
                  location.pathname === link.href && "active"
                )}
              >
                {link.icon}
                {link.name}
                {link.dropdown && <ChevronDown size={14} className="ml-1" />}
              </Link>

              {link.dropdown && (
                <div className="nav-dropdown">
                  {link.dropdown.map((sub) => (
                    <Link key={sub.name} to={sub.href} className="dropdown-item">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Cari informasi..."
              className="search-input"
            />
          </div>

          <a
            href="https://www.lapor.go.id/"
            target="_blank"
            rel="noopener"
            className="lapor-button"
          >
            <Mail size={16} />
            <span>LAPOR!</span>
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={cn("mobile-sidebar-overlay", isMobileOpen && "active")} onClick={() => setIsMobileOpen(false)} />
      <div className={cn("mobile-sidebar", isMobileOpen && "open")}>
        <div className="mobile-nav-header">
          <img src="/logo-sumbar.png" alt="Logo" style={{ height: 40 }} />
          <button className="mobile-close-btn" onClick={() => setIsMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {navLinks.map((link) => (
          <div key={link.name} className="mobile-nav-item">
            <Link
              to={link.href}
              className="mobile-nav-link"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.name}
              {link.dropdown && <ChevronDown size={14} />}
            </Link>

            {link.dropdown && (
              <div className="mobile-dropdown">
                {link.dropdown.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.href}
                    className="mobile-dropdown-item"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};