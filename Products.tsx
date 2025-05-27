import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'tumbler', name: 'Tumblers' },
    { id: 'jar', name: 'Jars' },
    { id: 'gift-set', name: 'Gift Sets' },
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of premium customizable drinkware. Each product is crafted with care and designed to be personalized to your exact specifications.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <ProductGrid 
          products={filteredProducts} 
          title={
            selectedCategory === 'all' 
              ? 'All Products' 
              : categories.find(c => c.id === selectedCategory)?.name || 'Products'
          }
          description={
            selectedCategory === 'all'
              ? 'Explore our complete collection of customizable products.'
              : `Browse our selection of customizable ${
                  categories.find(c => c.id === selectedCategory)?.name.toLowerCase() || 'products'
                }.`
          }
        />
      </div>
    </div>
  );
};

export default Products;