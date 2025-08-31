import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SMC</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">St. Mary's College</h3>
                <p className="text-sm text-gray-300">Excellence in Education</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Education Street, Springfield, ST 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@stmaryscollege.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="/achievements" className="hover:text-white transition-colors">Achievements</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* About School */}
          <div>
            <h3 className="font-bold text-lg mb-4">About School</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/office-bearers" className="hover:text-white transition-colors">Faculty</Link></li>
              <li><Link href="/rules-regulations" className="hover:text-white transition-colors">Rules & Regulations</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Curriculum</Link></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Campus Life</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Facilities</span></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Important Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><span className="hover:text-white transition-colors cursor-pointer">Student Portal</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Parent Portal</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Online Library</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Examination Results</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Fee Payment</span></li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 St. Mary's College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}