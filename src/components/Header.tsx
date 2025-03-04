import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium hover:text-nexlead-green transition-colors">Services</a>
          <a href="#benefits" className="font-medium hover:text-nexlead-green transition-colors">Benefits</a>
          <a href="#testimonials" className="font-medium hover:text-nexlead-green transition-colors">Testimonials</a>
          <a href="#contact" className="btn-primary">Get Started</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-nexlead-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="font-medium py-2 hover:text-nexlead-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#benefits" 
              className="font-medium py-2 hover:text-nexlead-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className="font-medium py-2 hover:text-nexlead-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header