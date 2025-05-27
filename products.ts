import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Gift Set - Pink',
    price: 24.87,
    description: 'Elegant gift set featuring our signature best mom design in a beautiful pink finish.',
    images: [
      '/images/gift set 1.png',
      '/images/gift set 1(plus).png',
    ],
    colors: ['#FFB6C1', '#F8C8DC', '#FFE4E1'],
    category: 'gift-set',
    featured: true,
  },
  {
    id: '7',
    name: 'Butterfly glass jar',
    price: 12.93,
    description: 'Beautiful butterfly glass jar with intricate designs, perfect for a happy morining.',
    images: [
      '/images/flower tumbler2.png',
      '/images/flower tumbler3.png',
      '/images/flower tumbler1.png',
    ],
    colors: ['#FFB6C1', '#F8C8DC', '#FFE4E1'],
    category: 'mug',
    
  },
  {
    id: '8',
    name: 'Frosted customiziable glass jar',
    price: 13.99,
    description: 'Elegant frosted glass jar with customizable text, perfect for any occasion.',
    images: [
      '/images/gl3.png',
      
    ],
    colors: ['#FFB6C1', '#F8C8DC', '#FFE4E1'],
    category: 'mug',
    featured: true,
  },
  {
    id: '7',
    name: 'Clear customizeable glass jar',
    price: 13.99,
    description: 'Stylish clear glass jar with customizable text, perfect for any occasion.',
    images: [
      '/images/gl1.png',
      
    ],
    colors: ['#FFB6C1', '#F8C8DC', '#FFE4E1'],
    category: 'mug',
    featured: false,
  },
 
  {
    id: '3',
    name: 'Classic Black Tumbler',
    price: 24.87,
    description: 'Sleek black tumbler with customizable text and premium insulation.',
    images: [
      '/images/tumbler(blc).png',
      
    ],
    colors: ['#000000', '#333333'],
    category: 'tumbler',
  },
  {
    id: '4',
    name: 'Rose Pink Tumbler',
    price: 24.87,
    description: 'Elegant rose pink tumbler with customizable text and premium insulation.',
    images: [
      '/images/tumbler(p).png',
      
    ],
    colors: ['#FFB6C1', '#FFC0CB'],
    category: 'tumbler',
  },
  {
    id: '5',
    name: 'Custom Text Tumbler - Black',
    price: 24.87,
    description: 'Premium blue tumbler with your personalized text in elegant script.',
    images: [
      '/images/tumbler(bl).png',
      
    ],
    colors: ['#000000', '#333333'],
    category: 'tumbler',
  },
  {
    id: '6',
    name: 'Custom Text Tumbler - White',
    price: 24.87,
    description: 'Premium white tumbler with your personalized text in elegant script.',
    images: [
      '/images/tumbler(w).png',
      
    ],
    colors: ['#FFFFFF', '#F5F5F5'],
    category: 'tumbler',
  },
   {
    id: '2',
    name: 'Gift Set - Marble',
    price: 19.97,
    description: 'Luxurious marble-themed gift set with our signature Best Mom design.',
    images: [
      '/images/gift set 2.png',
      '/images/gift set 2(plus).png',
    ],
    colors: ['#FFFFFF', '#F5F5F5', '#E6E6E6'],
    category: 'gift-set',
    featured: false,
  },
];