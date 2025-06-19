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

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <div className="fixed inset-0 z-[9999] bg-background flex flex-col">
      {/* Close button - plus visible */}
      <div className="flex justify-end p-4">
        <button
          onClick={closeMenu}
          className="p-3 rounded-full bg-primary/20 border-2 border-primary/40 text-primary hover:bg-primary/30 hover:scale-110 hover:rotate-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Fermer le menu"
        >
          <X size={28} />
        </button>
      </div>

      {/* Menu content - centré avec espace pour le bouton */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform">
            <span className="text-2xl font-bold text-background">D</span>
          </div>
          <h2 className="text-xl font-bold text-primary mb-1">
            Day Cutting Sharp
          </h2>
          <p className="text-sm text-muted-foreground">
            Affûteur professionnel
          </p>
        </div>

        {/* Navigation */}
        <nav className="mb-8">
          <ul className="space-y-4 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-lg font-medium text-foreground hover:text-primary py-2 px-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Call button - avec plus d'espace */}
        <div className="w-full max-w-xs">
          <a
            href="tel:+0676306582"
            onClick={closeMenu}
            className="btn-primary w-full text-base py-3 px-4 flex items-center justify-center gap-2"
            aria-label="Appeler Jeff"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>06 76 30 65 82</span>
          </a>
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
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
          >
            {link.label}
          </Link>
        ))}

        <a
          href="tel:+0676306582"
          className="btn-primary inline-flex items-center gap-2"
          aria-label="Appeler Jeff"
        >
          <Phone className="w-4 h-4" />
          Appeler
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md"
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Portal */}
      {mounted && isMenuOpen && createPortal(<MobileMenu />, document.body)}
    </>
  );
};

export default Navbar;
