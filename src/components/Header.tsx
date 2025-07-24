import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg header-accent' 
          : 'bg-transparent header-accent'
      }`}
      style={{
        background: isScrolled 
          ? 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(56,189,197,0.1) 100%)' 
          : 'linear-gradient(to bottom, rgba(56,189,197,0.2) 0%, rgba(56,189,197,0.05) 50%, transparent 100%)'
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between relative">
          {/* Hamburger Menu Button (Mobile Only) */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="z-50 text-ocean-700 hover:text-coral-500 transition-colors duration-300 absolute left-0 top-0"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          
          {/* Centered Logo/Title */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
          >
            <img 
              src="./images/logo.png" 
              alt="מסע אל שלווה פנימית" 
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Empty div to balance the layout */}
          <div className="w-6"></div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('about')}
              className="text-ocean-700 hover:text-coral-500 font-medium transition-colors duration-300"
            >
              מי אני
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="text-ocean-700 hover:text-coral-500 font-medium transition-colors duration-300"
            >
              השירות שלי
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-coral-500 text-white px-6 py-2 rounded-full hover:bg-coral-600 transition-colors duration-300"
            >
              צור קשר
            </motion.button>
          </nav>

          {/* Mobile Slide-in Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Slide-in Menu */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 flex flex-col"
                >
                  <div className="flex justify-end p-4">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="text-ocean-700 hover:text-coral-500 transition-colors duration-300"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="flex flex-col items-center mt-8 space-y-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        scrollToSection('about')
                        setIsMenuOpen(false)
                      }}
                      className="text-ocean-700 hover:text-coral-500 font-medium text-lg transition-colors duration-300"
                    >
                      מי אני
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        scrollToSection('services')
                        setIsMenuOpen(false)
                      }}
                      className="text-ocean-700 hover:text-coral-500 font-medium text-lg transition-colors duration-300"
                    >
                      השירות שלי
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        scrollToSection('contact')
                        setIsMenuOpen(false)
                      }}
                      className="bg-coral-500 text-white px-6 py-2 rounded-full hover:bg-coral-600 transition-colors duration-300 text-lg"
                    >
                      צור קשר
                    </motion.button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
