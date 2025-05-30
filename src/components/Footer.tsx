import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 text-xl font-heading">RoyaMotorsUK</span>
            </div>
            <p className="text-gray-300 mb-6">
              Luxury automotive excellence delivering exceptional vehicles from the UK to
              East Africa, with unparalleled service and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-300 hover:text-accent transition-colors">
                  Our Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-accent mt-1" />
                <div>
                  <p className="text-gray-300">UK Office:</p>
                  <a href="tel:+441234567890" className="text-white hover:text-accent">
                    +44 123 456 7890
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-accent mt-1" />
                <div>
                  <p className="text-gray-300">East Africa Office:</p>
                  <a href="tel:+254123456789" className="text-white hover:text-accent">
                    +254 123 456 789
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-accent mt-1" />
                <a href="mailto:info@royamotorsuk.com" className="text-white hover:text-accent">
                  info@royamotorsuk.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Luxury Lane, London, UK SW1A 1AA
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-medium mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday:</span>
                <span className="text-white">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday:</span>
                <span className="text-white">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday:</span>
                <span className="text-white">By Appointment</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2">We Accept</h4>
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 px-3 py-1 rounded text-sm">Visa</div>
                <div className="bg-white/10 px-3 py-1 rounded text-sm">MasterCard</div>
                <div className="bg-white/10 px-3 py-1 rounded text-sm">Bank Transfer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary-dark py-4 border-t border-gray-700">
        <div className="container-custom text-center text-gray-400">
          <p>© {new Date().getFullYear()} RoyaMotorsUK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;