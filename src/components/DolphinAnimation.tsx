import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const DolphinAnimation: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Left side dolphins */}
      <motion.div
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none hidden lg:block"
        animate={{ 
          y: scrollY * -0.1,
          rotate: Math.sin(scrollY * 0.01) * 5
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-6xl opacity-20 hover:opacity-40 transition-opacity duration-300"
        >
          🐬
        </motion.div>
      </motion.div>

      {/* Right side dolphins */}
      <motion.div
        className="fixed right-4 top-1/3 transform -translate-y-1/2 z-10 pointer-events-none hidden lg:block"
        animate={{ 
          y: scrollY * -0.15,
          rotate: Math.sin(scrollY * 0.01 + Math.PI) * -5
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="text-5xl opacity-20 hover:opacity-40 transition-opacity duration-300"
        >
          🐬
        </motion.div>
      </motion.div>

      {/* Bottom dolphins */}
      <motion.div
        className="fixed left-8 bottom-32 z-10 pointer-events-none hidden lg:block"
        animate={{ 
          x: scrollY * 0.05,
          rotate: Math.sin(scrollY * 0.008) * 3
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            rotate: [-10, 10, -10]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="text-4xl opacity-15 hover:opacity-35 transition-opacity duration-300"
        >
          🐬
        </motion.div>
      </motion.div>

      {/* Floating bubbles */}
      <motion.div
        className="fixed right-12 top-2/3 z-10 pointer-events-none hidden lg:block"
        animate={{ 
          y: scrollY * -0.2,
          x: Math.sin(scrollY * 0.01) * 20
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-3xl"
        >
          💙
        </motion.div>
      </motion.div>

      {/* Ocean waves decoration */}
      <motion.div
        className="fixed left-1/4 bottom-20 z-10 pointer-events-none hidden lg:block"
        animate={{ 
          x: Math.sin(scrollY * 0.005) * 30,
          y: scrollY * -0.08
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="text-2xl opacity-20"
        >
          🌊
        </motion.div>
      </motion.div>

      {/* Additional decorative elements */}
      <motion.div
        className="fixed right-1/4 top-1/4 z-10 pointer-events-none hidden lg:block"
        animate={{ 
          y: scrollY * -0.12,
          x: Math.cos(scrollY * 0.008) * 15
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="text-3xl opacity-25"
        >
          ✨
        </motion.div>
      </motion.div>
    </>
  )
}

export default DolphinAnimation
