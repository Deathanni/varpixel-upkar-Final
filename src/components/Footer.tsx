
import React from 'react';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Address */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-2">Blue Pixel Visions</h3>
            <p className="text-gray-300 text-sm">
              123 Digital Street<br />
              Tech City, TC 12345<br />
              contact@bluepixelvisions.com
            </p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Blue Pixel Visions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
