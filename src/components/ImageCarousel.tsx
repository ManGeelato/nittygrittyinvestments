import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  title: string;
}
const ImageCarousel = ({ images, title }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay, images.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setAutoplay(false);
  };

  return (
    <div
      className="relative w-full h-96 md:h-[500px] bg-slate-900 rounded-xl overflow-hidden group shadow-2xl"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`${title} - Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setAutoplay(false);
            }}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? 'bg-blue-500 w-8'
                : 'bg-white/50 hover:bg-white/70 w-2'
            }`}
          />
        ))}
      </div>

      <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm z-10">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}

export default ImageCarousel