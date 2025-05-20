import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-button-dark shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-text-light hover:text-primary-yellow transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-text-light hover:text-primary-yellow transition-colors"
            >
              Services
            </a>
            <a
              href="#benefits"
              className="text-text-light hover:text-primary-yellow transition-colors"
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className="text-text-light hover:text-primary-yellow transition-colors"
            >
              Testimonials
            </a>
            <a href="#contact" className="btn-primary">
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-light hover:text-primary-yellow transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-button-dark border-t border-border-muted">
            <nav className="flex flex-col space-y-4 py-4">
              <a
                href="#about"
                className="text-text-light hover:text-primary-yellow transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#services"
                className="text-text-light hover:text-primary-yellow transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#benefits"
                className="text-text-light hover:text-primary-yellow transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Benefits
              </a>
              <a
                href="#testimonials"
                className="text-text-light hover:text-primary-yellow transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="btn-primary mx-4"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
