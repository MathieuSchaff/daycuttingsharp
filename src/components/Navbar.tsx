"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Ensure component is mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#about", label: "À propos" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "#contact", label: "Contact" },
    { href: "#faq", label: "FAQ" },
  ];

  const MobileMenu = () => (
    <div className="fixed inset-0 z-[9999] md:hidden">
      {/* Full screen backdrop with gradient */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)",
        }}
        onClick={closeMenu}
      >
        {/* Menu content */}
        <div className="flex flex-col h-full justify-center items-center px-8 relative">
          {/* Close button */}
          <button
            onClick={closeMenu}
            className="absolute top-8 right-8 p-3 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: "rgba(249, 115, 22, 0.1)",
              color: "#f97316",
              border: "1px solid rgba(249, 115, 22, 0.3)",
            }}
          >
            <X size={24} />
          </button>

          {/* Logo/Branding */}
          <div className="text-center mb-12">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: "#f97316" }}
            >
              <span className="text-3xl font-bold" style={{ color: "#0f0f0f" }}>
                D
              </span>
            </div>
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "#f97316" }}
            >
              Day Cutting Sharp
            </h2>
            <p style={{ color: "#888888" }}>Affûteur professionnel à Sète</p>
          </div>

          {/* Navigation links */}
          <nav className="mb-12">
            <ul className="space-y-6 text-center">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block text-2xl font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      color: "#ffffff",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(249, 115, 22, 0.1)";
                      e.target.style.borderColor = "rgba(249, 115, 22, 0.3)";
                      e.target.style.color = "#f97316";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.05)";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.target.style.color = "#ffffff";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Call button */}
          <div className="text-center">
            <a
              href="tel:+0676306582"
              onClick={closeMenu}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                color: "#ffffff",
                boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05) translateY(-2px)";
                e.target.style.boxShadow =
                  "0 15px 40px rgba(249, 115, 22, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow =
                  "0 10px 30px rgba(249, 115, 22, 0.3)";
              }}
            >
              <Phone className="w-6 h-6" />
              06 76 30 65 82
            </a>
            <p className="mt-4 text-sm" style={{ color: "#888888" }}>
              Disponible de 9h à 17h
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-8 opacity-10">
            <div
              className="w-32 h-32 rounded-full"
              style={{ backgroundColor: "#f97316" }}
            />
          </div>
          <div className="absolute bottom-1/4 right-8 opacity-10">
            <div
              className="w-24 h-24 rounded-full"
              style={{ backgroundColor: "#f97316" }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            {link.label}
          </Link>
        ))}

        <a
          href="tel:+0676306582"
          className="btn-primary inline-flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          Appeler
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Portal */}
      {mounted && isMenuOpen && createPortal(<MobileMenu />, document.body)}
    </>
  );
};

export default Navbar;
