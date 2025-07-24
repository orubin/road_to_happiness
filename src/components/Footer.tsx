import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer 
      className="bg-ocean-900 footer-accent text-white py-12 px-4"
      style={{
        background: 'linear-gradient(to bottom, rgba(56,189,197,0.15) 0%, rgba(13,55,65,1) 40%, rgba(13,55,65,1) 100%)'
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-right"
          >
            <img 
              src="./images/footer_logo.jpg" 
              alt="מסע אל שלווה פנימית" 
              className="h-16 w-auto mx-auto md:mx-0 mb-4 rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-bold mb-2">מסע אל שלווה פנימית</h3>
            <p className="text-ocean-200">רינה גולדמן</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4 text-coral-300">קישורים מהירים</h4>
            <div className="space-y-2">
              <a 
                href="#about" 
                className="block hover:text-coral-300 transition-colors duration-300"
              >
                מי אני
              </a>
              <a 
                href="#services" 
                className="block hover:text-coral-300 transition-colors duration-300"
              >
                השירות שלי
              </a>
              <a 
                href="#contact" 
                className="block hover:text-coral-300 transition-colors duration-300"
              >
                צור קשר
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-4 text-coral-300">יצירת קשר</h4>
            <div className="space-y-2 text-ocean-200">
              <p>ראשון לציון, יבנה, אשקלון</p>
              <p>או בזום 🩵</p>
              <a 
                href="https://wa.me/972507870204" 
                className="block hover:text-coral-300 transition-colors duration-300"
              >
                ‪+972 50‑787‑0204‬
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-ocean-700 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-ocean-200">נבנה באהבה</span>
            <Heart className="w-4 h-4 text-coral-400 mx-2 animate-pulse" />
            <span className="text-ocean-200">עבור מסע אל שלווה פנימית</span>
          </div>
          <p className="text-ocean-300 text-sm">
            © {new Date().getFullYear()} מסע אל שלווה פנימית - רינה גולדמן. כל הזכויות שמורות.
          </p>
          <div className="mt-4 flex justify-center space-x-4 space-x-reverse">
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl"
            >
              🌊
            </motion.div>
            <motion.div
              animate={{ y: [2, -2, 2] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl"
            >
              🐬
            </motion.div>
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl"
            >
              ✨
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
