import React from 'react'
import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-ocean-800 mb-6 leading-tight"
            >
              מסע אל שלווה פנימית
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-ocean-600 mb-8 font-medium"
            >
              רינה גולדמן
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg text-ocean-700 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              מלווה אותך במסע האישי שלך לאושר, שלווה ומימוש עצמי. 
              יחד נגלה את הכוח הפנימי שלך ונבנה חיים מלאי משמעות ושמחה.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="bg-coral-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-coral-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                מי אני
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="border-2 border-turquoise-500 text-turquoise-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-turquoise-500 hover:text-white transition-all duration-300"
              >
                השירות שלי
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <ImageCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
