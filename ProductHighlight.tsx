import React, { useEffect, useRef, useState } from 'react';

interface ProductHighlightProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  direction?: 'left' | 'right';
  ctaText?: string;
  ctaLink?: string;
}

const ProductHighlight: React.FC<ProductHighlightProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  direction = 'left',
  ctaText = 'Explore',
  ctaLink = '#',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const isDirectionLeft = direction === 'left';

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isDirectionLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-16`}>
          {/* Image */}
          <div 
            className={`w-full md:w-1/2 transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : `opacity-0 ${isDirectionLeft ? '-translate-x-12' : 'translate-x-12'}`
            }`}
          >
            <div className="relative">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none border border-gray-200"></div>
            </div>
          </div>

          {/* Content */}
          <div 
            className={`w-full md:w-1/2 transition-all duration-1000 delay-300 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            <a
              href={ctaLink}
              className="px-8 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors inline-block"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;