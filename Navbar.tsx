import React, { useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, Menu, X, Droplets } from 'lucide-react';

const Navbar: React.FC = () => {
  const { isScrolled } = useScrollPosition();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold flex items-center">
              <Droplets className="h-6 w-6 mr-2 text-blue-500" />
              <span>CustomHydration</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-medium hover:text-blue-500 transition-colors">
              Home
            </a>
            <a href="/products" className="font-medium hover:text-blue-500 transition-colors">
              Products
            </a>
            <a href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <a href="/cart" className="ml-4 relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-5 space-y-5">
            <a 
              href="/"
              className="block font-medium hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/products"
              className="block font-medium hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;