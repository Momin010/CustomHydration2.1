import React from 'react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import { Trash2, ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-6" />
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button variant="primary" onClick={() => window.location.href = '/products'}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <button
          onClick={clearCart}
          className="text-gray-500 hover:text-gray-700 flex items-center gap-2"
        >
          <X className="h-4 w-4" />
          Clear Cart
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={`${item.product.id}-${item.color}-${item.customText}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="py-6 flex flex-col sm:flex-row gap-4 border-b border-gray-200 last:border-0"
                  >
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-lg font-semibold">{item.product.name}</h3>
                        <span className="font-semibold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="text-gray-600 text-sm mb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span>Selected Color</span>
                        </div>
                        
                        {item.customText && (
                          <div className="mb-1">
                            <span>Personalization: </span>
                            <span className="font-medium">{item.customText}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
                          >
                            +
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700 flex items-center text-sm"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{totalPrice >= 50 ? 'Free' : '$4.99'}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${(totalPrice >= 50 ? totalPrice : totalPrice + 4.99).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="primary" 
                fullWidth
                onClick={() => window.location.href = '/checkout'}
              >
                Proceed to Checkout
              </Button>
              
              <div className="mt-6 text-center">
                <a
                  href="/products"
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;