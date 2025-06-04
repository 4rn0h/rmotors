import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Landmark } from 'lucide-react'; // Landmark for bank transfer
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
                href="https://instagram.com/RoyaMotorsUK"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/RoyaMotorsUK"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/RoyaMotorsUK"
                target="_blank"
                rel="noopener noreferrer"
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
                  <a href="tel:+447964595923" className="text-white hover:text-accent">
                    +44 7964 595923
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-accent mt-1" />
                <div>
                  <p className="text-gray-300">East Africa Office:</p>
                  <a href="tel:+254710966523" className="text-white hover:text-accent">
                    +254 710 966523
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
                  39 Kinross drive,Bletchley, 
                  Milton Keynes,MK3 7UF
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours and Payment Methods */}
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
                {/* Visa Logo (Revised Inline SVG) */}
                <div className="bg-white/10 p-2 rounded text-sm flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 256"
                    fill="currentColor"
                    className="h-6 w-auto text-white" /* Changed w-6 to w-auto to maintain aspect ratio */
                  >
                    <path d="M378.1 106.6H315c-1.3 0-2.3.4-3.2 1.2L255 186.2l-24.1-60.3c-.9-2.2-2.1-3.2-3.4-3.2H170.8c-1.3 0-2.3.4-3.2 1.2L110 186.2 85.9 125.9c-.9-2.2-2.1-3.2-3.4-3.2H25.9c-1.3 0-2.3.4-3.2 1.2L0 178.6V106.6H25.9c1.3 0 2.3-.4 3.2-1.2l32.1-80.3c.9-2.2 2.1-3.2 3.4-3.2H147.2c1.3 0 2.3.4 3.2 1.2l32.1 80.3 24.1-60.3c.9-2.2 2.1-3.2 3.4-3.2H315c1.3 0 2.3.4 3.2 1.2l32.1 80.3 24.1-60.3c.9-2.2 2.1-3.2 3.4-3.2H378.1zM195.2 208.4H147.2c-1.3 0-2.3-.4-3.2-1.2L110 137.8h32.1l24.1 60.3c.9 2.2 2.1 3.2 3.4 3.2z" />
                  </svg>
                </div>
                {/* MasterCard Logo (Revised Inline SVG) */}
                <div className="bg-white/10 p-2 rounded text-sm flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-auto text-white" /* Changed w-6 to w-auto to maintain aspect ratio */
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 4c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zM12 6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                  </svg>
                </div>
                {/* Bank Transfer Logo (Lucide Icon) */}
                <div className="bg-white/10 p-2 rounded text-sm flex items-center justify-center">
                  <Landmark size={24} className="text-white" />
                </div>
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
