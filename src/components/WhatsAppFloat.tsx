import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppFloat: React.FC = () => {
  const phoneNumber = "972507870204"
  const message = "שלום! אני מעוניין/ת לשמוע עוד על השירותים שלך 😊"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ 
        y: [0, -10, 0],
        boxShadow: [
          "0 4px 20px rgba(37, 211, 102, 0.3)",
          "0 8px 30px rgba(37, 211, 102, 0.5)",
          "0 4px 20px rgba(37, 211, 102, 0.3)"
        ]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      aria-label="צור קשר בוואטסאפ"
    >
      <MessageCircle size={30} />
      
      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 bg-green-400 rounded-full opacity-30"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  )
}

export default WhatsAppFloat
