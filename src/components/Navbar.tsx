
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 bg-hover right-0 z-100 transition-all duration-500 ease-in-out px-6 md:px-16 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="cursor-pointer text-button group">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h1 className="font-serif text-lg font-normal tracking-widest text-button">
                La Principauté
              </h1>

              <span className="block text-[9px] tracking-[0.4em] uppercase font-light text-neutral-500 mt-0.5">
                Hotel
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 list-none">
          <Link
            to="/"
            className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 hover:text-button transition-colors duration-300"
          >
            Accueil
          </Link>

          <Link
            to="/about"
            className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 hover:text-button transition-colors duration-300"
          >
            À propos
          </Link>

          <Link
            to="/rooms"
            className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 hover:text-button transition-colors duration-300"
          >
            Chambres
          </Link>

          {/* <Link
            to="/services"
            className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 hover:text-button transition-colors duration-300"
          >
            Services
          </Link> */}

          <Link
            to="/branches"
            className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 hover:text-button transition-colors duration-300"
          >
            Succursales
          </Link>

          <Link
            to="/gallery"
            className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 hover:text-button transition-colors duration-300"
          >
            Galerie
          </Link>

          <Link
            to="/contact"
            className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 hover:text-button transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden lg:flex">
          <a
            href="https://wa.me/+237694243888"
            className="btn"
          >
            Réserver
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-full bg-[#0a0906]/95 backdrop-blur-xl transform transition-transform duration-500 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-button/20">
          <span className="uppercase tracking-[0.3em] text-sm text-button">
          <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
          </span>

          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>

        <nav className="flex flex-col gap-8 px-8 pt-12">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-[12px] uppercase tracking-[0.2em] text-neutral-400 hover:text-button transition"
          >
            Accueil
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-[12px] uppercase tracking-[0.2em] text-neutral-400 hover:text-button transition"
          >
            À propos
          </Link>

          <Link
            to="/rooms"
            onClick={() => setIsOpen(false)}
            className="text-[12px] uppercase tracking-[0.2em] text-neutral-400 hover:text-button transition"
          >
            Chambres
          </Link>

          {/* <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="text-[12px] uppercase tracking-[0.2em] text-neutral-400 hover:text-button transition"
          >
            Services
          </Link> */}

          <Link
            to="/branches"
            onClick={() => setIsOpen(false)}
            className="text-[12px] uppercase tracking-[0.2em] text-neutral-400 hover:text-button transition"
          >
            Succursales
          </Link>

          <Link
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className="text-[12px] uppercase tracking-[0.2em] text-neutral-400 hover:text-button transition"
          >
            Galerie
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-[12px] uppercase tracking-[0.2em] text-neutral-400 hover:text-button transition"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/+237651118070"
            className="btn w-50"
          >
            Réserver
          </a>
        </nav>
      </div>
    </header>
  );
}
