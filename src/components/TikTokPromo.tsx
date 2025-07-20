import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TikTokPromo: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-ocean-50 to-turquoise-50">
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
              src="./images/TikTopPromo.png" 
              alt="עקבו אחרי ברשתות החברתיות - TikTok"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl border border-turquoise-200"
            />
            
            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 w-6 h-6 bg-coral-400 rounded-full opacity-30"
            />
            <motion.div
              animate={{ y: [5, -5, 5], rotate: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-3 w-8 h-8 bg-turquoise-400 rounded-full opacity-30"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-ocean-600 font-medium text-lg"
          >
            עקבו אחרי ברשתות החברתיות לעוד תוכן מעשיר! 🌟
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default TikTokPromo
