'use client';

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Header() {
  return (
    <>
      {/* Subheader */}
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@stmaryscollege.edu</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <Facebook className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="w-4 h-4 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SMC</span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">St. Mary's College</h1>
                <p className="text-gray-600 text-sm md:text-base">Excellence in Education Since 1965</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <div className="text-sm md:text-base">
                <p>123 Education Street</p>
                <p>Springfield, ST 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}