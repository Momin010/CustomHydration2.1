// src/pages/ProductDetail.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';
import SignUpOverlay from '../components/SignUpOverlay';
import { useUser } from '@supabase/auth-helpers-react';

const ProductDetail: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const user = useUser();

  const [showSignUp, setShowSignUp] = useState(false);
  const [customText, setCustomText] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button variant="primary" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!user) {
      setShowSignUp(true);
      return;
    }

    addToCart(product, quantity, '', customText);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                    index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-blue-500 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="space-y-6">
              <div>
                <label htmlFor="customText" className="block text-sm font-medium mb-3">
                  Personalization Text
                </label>
                <input
                  type="text"
                  id="customText"
                  maxLength={20}
                  placeholder="Enter your custom text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">
                  {20 - customText.length} characters remaining
                </p>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium mb-3">
                  Quantity
                </label>
                <select
                  id="quantity"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                variant="primary"
                fullWidth
                onClick={handleAddToCart}
                className="py-4"
                disabled={isAddedToCart}
              >
                {isAddedToCart ? (
                  <span className="flex items-center justify-center">
                    <Check className="mr-2 h-5 w-5" /> Added to Cart
                  </span>
                ) : (
                  'Add to Cart'
                )}
              </Button>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium">Shipping</h3>
                    <p className="text-sm text-gray-600">
                      Free shipping on orders over $50
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Returns</h3>
                    <p className="text-sm text-gray-600">
                      Free 30-day returns on unopened items
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUpOverlay isVisible={showSignUp} onClose={() => setShowSignUp(false)} />
    </div>
  );
};

export default ProductDetail;
