import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/logo.jpg";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black">
      {/* Logo */}
      {/* <img src={Logo} alt="Xtraordinary Blend Logo" className="w-20 h-20" /> */}
      <Link to="/" className="text-white font-bold text-sm tracking-widest uppercase">
        Xtraordinary Blend
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/about" className="text-white text-xs tracking-widest uppercase hover:text-[#ffad5b] transition-colors">
          About
        </Link>
        <Link to="/shop" className="text-white text-xs tracking-widest uppercase hover:text-[#ffad5b] transition-colors">
          Shop
        </Link>
        <Link to="/services" className="text-white text-xs tracking-widest uppercase hover:text-[#ffad5b] transition-colors">
          Services
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-3">
          <a href="https://x.com/xtraordinaryblend" target="_blank" rel="noreferrer" aria-label="X" className="text-white hover:text-[#ffad5b] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.24 4.24 0 0 0 1.85-2.34 8.54 8.54 0 0 1-2.7 1.03 4.25 4.25 0 0 0-7.24 3.88A12.07 12.07 0 0 1 3.15 4.9a4.24 4.24 0 0 0 1.32 5.68 4.18 4.18 0 0 1-1.93-.53v.05a4.25 4.25 0 0 0 3.4 4.17 4.27 4.27 0 0 1-1.92.07 4.25 4.25 0 0 0 3.97 2.95A8.53 8.53 0 0 1 2 19.54a12.05 12.05 0 0 0 6.53 1.91c7.84 0 12.12-6.5 12.12-12.12 0-.18 0-.35-.01-.53A8.64 8.64 0 0 0 24 5.55a8.44 8.44 0 0 1-2.54.7z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/xtraordinaryblend" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-white hover:text-[#ffad5b] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99h-2.1V12h2.1V9.8c0-2.07 1.23-3.22 3.12-3.22.9 0 1.84.16 1.84.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.3V12h2.3l-.37 2.88h-1.93v6.99A10 10 0 0 0 22 12" />
            </svg>
          </a>
          <a href="https://www.instagram.com/xtraordinaryblend" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white hover:text-[#ffad5b] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5" />
              <path d="M16 11.37a4 4 0 1 1-4.63-4.63" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </a>
        </div>

        <a
          href="#contact"
          className="bg-[#ffad5b] text-black text-xs font-bold tracking-widest uppercase px-5 py-2.5 hover:bg-[#b8973e] transition-colors"
        >
          Get Your Piece
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-5 h-0.5 bg-white mb-1" />
        <div className="w-5 h-0.5 bg-white mb-1" />
        <div className="w-5 h-0.5 bg-white" />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black py-6 flex flex-col items-center gap-6 md:hidden">
          <Link to="/about" className="text-white text-xs tracking-widest uppercase">About</Link>
          <Link to="/shop" className="text-white text-xs tracking-widest uppercase">Shop</Link>
          <Link to="/services" className="text-white text-xs tracking-widest uppercase">Services</Link>

          <a href="mailto:xblendix@xtraordinaryblend.com" className="bg-[#ffad5b] text-black text-xs font-bold tracking-widest uppercase px-5 py-2.5">
            Get Your Piece
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
