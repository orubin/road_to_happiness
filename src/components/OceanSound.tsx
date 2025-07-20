import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

const OceanSound: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.2 // Set to 20% volume for ambient sound
      
      // Try to autoplay after user interaction
      const handleUserInteraction = () => {
        if (!isPlaying) {
          audio.play().then(() => {
            setIsPlaying(true)
          }).catch(() => {
            console.log('Autoplay prevented by browser')
          })
        }
        document.removeEventListener('click', handleUserInteraction)
        document.removeEventListener('touchstart', handleUserInteraction)
      }
      
      document.addEventListener('click', handleUserInteraction)
      document.addEventListener('touchstart', handleUserInteraction)
      
      return () => {
        document.removeEventListener('click', handleUserInteraction)
        document.removeEventListener('touchstart', handleUserInteraction)
      }
    }
  }, [isPlaying])

  const toggleSound = () => {
    const audio = audioRef.current
    if (audio) {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        audio.play().then(() => {
          setIsPlaying(true)
        }).catch(() => {
          console.log('Could not play audio')
        })
      }
    }
  }

  return (
    <>
      {/* Audio element with ocean sounds */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
        muted={isMuted}
      >
        {/* Using a royalty-free ocean sound URL */}
        <source src="https://www.soundjay.com/misc/sounds/ocean-wave-1.wav" type="audio/wav" />
        {/* Fallback ocean sound */}
        <source src="https://actions.google.com/sounds/v1/water/ocean_waves_crashing_on_rocks.ogg" type="audio/ogg" />
      </audio>

      {/* Floating Sound Control Button */}
      <motion.button
        onClick={toggleSound}
        className="fixed bottom-32 left-4 w-14 h-14 bg-turquoise-500 hover:bg-turquoise-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -5, 0],
          boxShadow: [
            "0 4px 20px rgba(20, 184, 166, 0.3)",
            "0 8px 30px rgba(20, 184, 166, 0.5)",
            "0 4px 20px rgba(20, 184, 166, 0.3)"
          ]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-label={isPlaying ? "השתק צלילי אוקיינוס" : "הפעל צלילי אוקיינוס"}
        title={isPlaying ? "השתק צלילי אוקיינוס" : "הפעל צלילי אוקיינוס"}
      >
        {isPlaying ? (
          <Volume2 size={20} />
        ) : (
          <VolumeX size={20} />
        )}
        
        {/* Pulse effect when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 bg-turquoise-400 rounded-full opacity-30"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Sound waves animation when playing */}
      {isPlaying && (
        <div className="fixed bottom-32 left-4 pointer-events-none z-40">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-14 h-14 border-2 border-turquoise-300 rounded-full"
              animate={{ 
                scale: [1, 2.5, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4
              }}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default OceanSound
