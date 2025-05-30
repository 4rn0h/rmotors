import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Exceptional Luxury <br />
              <span className="text-accent">Automotive</span> Excellence
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Experience the finest selection of premium vehicles sourced directly from the UK
              to Kenya and Tanzania. Unparalleled quality, impeccable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/cars"
                className="btn btn-primary text-white flex items-center justify-center"
              >
                Explore Collection
                <ChevronRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="btn bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;