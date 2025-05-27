import React, { useState } from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />

        {/* Overlay Content */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href={`/products/${product.id}`}
            className="px-6 py-2 bg-white text-gray-900 font-medium rounded-md transform hover:scale-105 transition-transform"
          >
            View Details
          </a>
        </div>

        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          {product.description.length > 70
            ? `${product.description.substring(0, 70)}...`
            : product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-lg">
            ${product.price.toFixed(2)}
          </span>

          <div className="flex space-x-1">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
                title={`Color option ${index + 1}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;