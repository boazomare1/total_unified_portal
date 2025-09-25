import React, { useState, useEffect } from 'react';

/**
 * SlidingAds component
 * Displays promotional material with automatic sliding animation
 */
const SlidingAds = ({ 
  ads = [], 
  autoSlideInterval = 5000, 
  className = "",
  showCTA = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    if (ads.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === ads.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [ads.length, autoSlideInterval]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? ads.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === ads.length - 1 ? 0 : currentIndex + 1);
  };

  // Default ads if none provided
  const defaultAds = [
    {
      id: 1,
      title: "New LPG Distribution System",
      description: "Experience our enhanced LPG ordering and delivery platform with real-time tracking",
      image: "/api/placeholder/400/200",
      ctaText: "Learn More",
      ctaUrl: "#",
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Fuel Order Management",
      description: "Streamline your fuel ordering process with our integrated eFuel platform",
      image: "/api/placeholder/400/200",
      ctaText: "Get Started",
      ctaUrl: "#",
      bgColor: "bg-gradient-to-r from-green-500 to-green-600",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Track & Trace Solutions",
      description: "Monitor your deliveries in real-time with our advanced tracking system",
      image: "/api/placeholder/400/200",
      ctaText: "View Demo",
      ctaUrl: "#",
      bgColor: "bg-gradient-to-r from-purple-500 to-purple-600",
      textColor: "text-white"
    }
  ];

  const adsToShow = ads.length > 0 ? ads : defaultAds;

  if (adsToShow.length === 0) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden rounded-xl shadow-xl border border-gray-200 ${className}`}>
      {/* Ad Container */}
      <div className="relative h-48 md:h-56 lg:h-64">
        {adsToShow.map((ad, index) => (
          <div
            key={ad.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 
              index < currentIndex ? '-translate-x-full' : 
              'translate-x-full'
            }`}
          >
            <div className={`h-full ${ad.bgColor || 'bg-gradient-to-r from-gray-500 to-gray-600'} flex items-center relative`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
              </div>

              {/* Offer Badge */}
              {ad.badge && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg animate-pulse">
                    {ad.badge}
                  </div>
                </div>
              )}

              {/* Offer Amount Badge */}
              {ad.offer && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                    {ad.offer}
                  </div>
                </div>
              )}
              
              <div className="flex-1 p-6 md:p-8 relative z-10">
                <div className="max-w-md">
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-3 ${ad.textColor || 'text-white'} leading-tight`}>
                    {ad.title}
                  </h3>
                  <p className={`text-sm md:text-base lg:text-lg mb-6 ${ad.textColor || 'text-white'} opacity-95 leading-relaxed`}>
                    {ad.description}
                  </p>
                  {showCTA && ad.ctaText && (
                    <button
                      onClick={() => ad.ctaUrl && window.open(ad.ctaUrl, '_blank')}
                      className="bg-white bg-opacity-25 hover:bg-opacity-35 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:scale-105 transform shadow-lg hover:shadow-xl"
                    >
                      {ad.ctaText}
                    </button>
                  )}
                </div>
              </div>
              <div className="hidden md:block flex-1 p-6 relative z-10">
                <div className="h-full bg-white bg-opacity-15 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white border-opacity-20">
                  {ad.image ? (
                    <img 
                      src={ad.image} 
                      alt={ad.title}
                      className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                    />
                  ) : (
                    <div className="text-center text-white opacity-80">
                      <svg className="w-20 h-20 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-medium">Promotional Image</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {adsToShow.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous ad"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Next ad"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {adsToShow.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {adsToShow.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white bg-opacity-60 hover:bg-opacity-80 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default SlidingAds;