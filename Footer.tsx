import React from 'react';
import { Droplets, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Droplets className="h-6 w-6 mr-2 text-blue-500" />
              <span className="text-xl font-bold">CustomHydration</span>
            </div>
            <p className="text-gray-600 mb-4">
              Where personalization meets aesthetic. Create custom drinkware that reflects your unique style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Tumblers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Mugs</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Gift Sets</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">New Arrivals</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Shipping Info</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Returns</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} CustomHydration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;