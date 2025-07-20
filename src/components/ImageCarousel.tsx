import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageCarousel: React.FC = () => {
  // List of images excluding logos
  const images = [
    '/images/IMG-20250417-WA0081.jpg',
    '/images/IMG_20250717_125008_505.jpg',
    '/images/IMG_20250717_125018_230.jpg',
    '/images/IMG_20250717_125027_847.jpg',
    '/images/IMG_20250717_125101_767.jpg',
    '/images/IMG_20250717_125111_691.jpg',
    '/images/IMG_20250717_125146_777.jpg',
    '/images/IMG_20250717_125158_005.jpg',
    '/images/photo.jpg',
    '/images/testimonial.png'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`תמונה ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-ocean-700 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-ocean-700 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-coral-500 scale-125'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating decoration */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 w-12 h-12 bg-coral-400/30 rounded-full blur-sm"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -left-6 w-16 h-16 bg-ocean-400/30 rounded-full blur-sm"
      />
    </div>
  )
}

export default ImageCarousel
