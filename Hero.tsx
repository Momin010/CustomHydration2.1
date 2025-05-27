import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 4 Side-by-Side Background Images */}
      <div className="absolute inset-0 z-0 flex">
        <img
          src="/images/gl3.png"
          alt="Jar 1"
          className="w-1/4 h-full object-cover"
        />
        <img
          src="/images/gift set 1.png"
          alt="Jar 2"
          className="w-1/4 h-full object-cover"
        />
        <img
          src="/images/gl1.png"
          alt="Jar 3"
          className="w-1/4 h-full object-cover"
        />
        <img
          src="/images/gift set 2.png"
          alt="Jar4"
          className="w-1/4 h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Where Personalization Meets Aesthetic
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Premium customizable drinkware designed to reflect your unique style
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/products"
              className="px-8 py-3 bg-white text-pink-300 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Explore Our Collection
            </a>
            
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
