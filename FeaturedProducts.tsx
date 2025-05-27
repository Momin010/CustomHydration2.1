import React, { useEffect, useState } from 'react';
import { products } from '../../data/products';
import { Product } from '../../types';
import ProductCard from '../products/ProductCard';

const FeaturedProducts: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featuredProducts = products.filter((product) => product.featured);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular customizable products, perfect for gifting or treating yourself.
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          
          {/* If we have less than 3 featured products, add a "View All" card */}
          {featuredProducts.length < 3 && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <h3 className="text-xl font-bold mb-4">Discover More</h3>
                <p className="text-gray-600 text-center mb-6">
                  Explore our full collection of customizable products.
                </p>
                <a
                  href="/products"
                  className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
                >
                  View All Products
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;