import React from 'react';
import { Calendar, Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Calendar className="h-8 w-8 text-purple-400 mr-3" />
              <div>
                <h3 className="text-2xl font-bold">Velvet Panther</h3>
                <p className="text-purple-400">Event Management Pvt Ltd (R)</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Creating unforgettable experiences with meticulous planning and flawless execution. 
              Your trusted partner for all types of events and celebrations.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Wedding Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Corporate Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Social Celebrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Photography</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Entertainment</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-purple-400 mr-3" />
              <span className="text-gray-300">+91 98765 43210 | +91 87654 32109</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-purple-400 mr-3" />
              <span className="text-gray-300">info@velvetpanther.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Velvet Panther Event Management Pvt Ltd (R). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;