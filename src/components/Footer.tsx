import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-button-dark text-text-light">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="w-28 h-10 overflow-hidden">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-full h-full object-cover scale-[2.6] object-center"
              />
            </div>
            <p className="text-text-muted">
              Transforming businesses through innovative BPO solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-text-muted hover:text-primary-yellow transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-primary-yellow transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-primary-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-primary-yellow transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-text-muted hover:text-primary-yellow transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-text-muted hover:text-primary-yellow transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-text-muted hover:text-primary-yellow transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-text-muted hover:text-primary-yellow transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-text-muted hover:text-primary-yellow transition-colors"
                >
                  Outbound Calling
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-text-muted hover:text-primary-yellow transition-colors"
                >
                  Lead Generation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-text-muted hover:text-primary-yellow transition-colors"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-text-muted hover:text-primary-yellow transition-colors"
                >
                  Sales Analytics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-text-muted">
                2 Grayscroft Road, London,
                <br />
                SW16 5UP, United Kingdom
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-text-muted hover:text-primary-yellow transition-colors"
                >
                  +44 790 3704 083
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nexlead.com"
                  className="text-text-muted hover:text-primary-yellow transition-colors"
                >
                  nexleadtech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-muted mt-12 pt-8 text-center">
          <p className="text-text-muted">
            © {new Date().getFullYear()} NexLead. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
