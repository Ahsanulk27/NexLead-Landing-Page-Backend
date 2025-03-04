import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'

const Footer: React.FC = () => {
  return (
    <footer className="bg-nexlead-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6">
              NexLead Solutions provides premium business process outsourcing services to help companies scale faster and more efficiently.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nexlead-green transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nexlead-green transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nexlead-green transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nexlead-green transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-nexlead-green transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-nexlead-green transition-colors">Services</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-nexlead-green transition-colors">Benefits</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-nexlead-green transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-nexlead-green transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-nexlead-green transition-colors">Outbound Calling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexlead-green transition-colors">Lead Generation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexlead-green transition-colors">24/7 Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexlead-green transition-colors">Sales Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexlead-green transition-colors">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-nexlead-green flex-shrink-0 mt-1" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-nexlead-green flex-shrink-0 mt-1" />
                <span className="text-gray-400">info@nexleadsolutions.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-nexlead-green flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Business Avenue, Suite 456, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} NexLead Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-nexlead-green transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-nexlead-green transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-nexlead-green transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer