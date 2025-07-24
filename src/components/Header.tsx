import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

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
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src="./images/logo.png" 
              alt="מסע אל שלווה פנימית" 
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Navigation */}
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

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col space-y-2"
            >
              <button
                onClick={() => scrollToSection('about')}
                className="text-ocean-700 hover:text-coral-500 font-medium text-sm"
              >
                מי אני
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-ocean-700 hover:text-coral-500 font-medium text-sm"
              >
                השירות שלי
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-coral-500 text-white px-4 py-1 rounded-full hover:bg-coral-600 text-sm"
              >
                צור קשר
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
