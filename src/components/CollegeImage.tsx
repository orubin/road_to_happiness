import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CollegeImage: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-turquoise-50 to-coral-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative inline-block"
          >
            <img 
              src="./images/college.jpeg" 
              alt="השכלה והכשרה מקצועית - רינה גולדמן"
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl border border-ocean-200"
            />
            
            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-turquoise-400 rounded-full opacity-30"
            />
            <motion.div
              animate={{ y: [6, -6, 6], rotate: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-coral-400 rounded-full opacity-30"
            />
            
            {/* Sparkle effects */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-1/4 w-4 h-4 bg-ocean-300 rounded-full opacity-30"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-turquoise-300 rounded-full opacity-30"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <h3 className="text-2xl font-bold text-ocean-800 mb-4">
              השכלה והכשרה מקצועית
            </h3>
            <p className="text-ocean-600 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
              מסע הלמידה וההתפתחות המקצועית שלי - בסיס איתן לליווי מקצועי ומסור 🎓✨
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CollegeImage
