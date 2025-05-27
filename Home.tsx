import React from 'react';
import Hero from '../components/home/Hero';
import ProductHighlight from '../components/home/ProductHighlight';
import FeaturedProducts from '../components/home/FeaturedProducts';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      <ProductHighlight
        title="Premium Black Tumblers"
        description="Our signature tumblers are crafted from the finest materials, designed to keep your drinks at the perfect temperature while showcasing your personal style with custom engraving and color options."
        imageSrc="/images/tumbler(blc).png"
        imageAlt="Crystal Tumbler"
        direction="left"
        ctaText="Shop Tumblers"
        ctaLink="/products"
      />
      
      <ProductHighlight
        title="Elegant Ceramic Gift Sets"
        description="Start your mornings with a personalized mug that's as unique as you are. Our ceramic mugs combine sophisticated design with customization options to create the perfect vessel for your favorite beverages."
        imageSrc="/images/gift set 1.png"
        imageAlt="Ceramic Mug"
        direction="right"
        ctaText="Shop Mugs"
        ctaLink="/products"
      />
      
      <FeaturedProducts />
      
      <ProductHighlight
        title="Customizable Frosted glass Jars"
        description="Sip in style with our personalized frosted glass jars, designed to make every drink feel special.
These matte-finished jars blend modern aesthetics with your custom touch, perfect for iced coffee, smoothies, or infused water"
        imageSrc="/images/gl3.png"
        imageAlt="Gift Set"
        direction="left"
        ctaText="Explore Gift Sets"
        ctaLink="/products"
      />
    </>
  );
};

export default Home;