import React, { useState } from 'react';

const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    'https://hp.widen.net/content/pun3rwanmz/webp/pun3rwanmz.png?dpi=72&color=ffffff00&w=270',
    'https://cdn.mos.cms.futurecdn.net/UE3nLeNY8p5g84mstLamsD.jpg',
    'https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479302_640.jpg',
    'https://static1.pocketnowimages.com/wordpress/wp-content/uploads/styles/xxlarge/public/2022-04/LI%20Samsung%20Galaxy%20S22%20Ultra%20Back%20Angled%20Shot.jpg?q=50&fit=crop&w=825&dpr=1.5'
  ];

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Main Gallery */}
      <div className="relative mb-6">
        <div className="relative overflow-hidden rounded-lg bg-gray-100">
          <img
            src={images[activeIndex]}
            alt={`Product ${activeIndex + 1}`}
            className="w-full h-96 object-contain"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={prevImage}
          className="p-1 rounded hover:bg-gray-200 transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex gap-3 overflow-x-auto max-w-md">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-200 ${
                index === activeIndex
                  ? 'ring-2 ring-blue-500 ring-offset-2 scale-105'
                  : 'hover:scale-102 hover:ring-1 hover:ring-gray-300 hover:ring-offset-1'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover"
              />
              {index === activeIndex && (
                <div className="absolute inset-0 bg-blue-500 bg-opacity-20"></div>
              )}
            </button>
          ))}
        </div>
        
        <button
          onClick={nextImage}
          className="p-1 rounded hover:bg-gray-200 transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;