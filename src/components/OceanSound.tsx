import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

const OceanSound: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true) // Default to true - audio should be "on" by default
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.2 // Set to 20% volume for ambient sound
      
      // Try to autoplay immediately when component mounts
      const attemptAutoplay = async () => {
        try {
          await audio.play()
          // Audio is already playing successfully, isPlaying is already true
        } catch (error) {
          console.log('Initial autoplay prevented by browser, waiting for user interaction')
          
          // Fallback: Try to autoplay after user interaction
          // Keep isPlaying as true to show the "on" state even if autoplay fails initially
          const handleUserInteraction = async () => {
            try {
              await audio.play()
              // Audio is now playing, isPlaying is already true
              document.removeEventListener('click', handleUserInteraction)
              document.removeEventListener('touchstart', handleUserInteraction)
              document.removeEventListener('keydown', handleUserInteraction)
            } catch (err) {
              console.log('Could not play audio even after user interaction')
              // Only now set to false if we really can't play
              setIsPlaying(false)
            }
          }
          
          document.addEventListener('click', handleUserInteraction)
          document.addEventListener('touchstart', handleUserInteraction)
          document.addEventListener('keydown', handleUserInteraction)
          
          return () => {
            document.removeEventListener('click', handleUserInteraction)
            document.removeEventListener('touchstart', handleUserInteraction)
            document.removeEventListener('keydown', handleUserInteraction)
          }
        }
      }
      
      attemptAutoplay()
    }
  }, [])

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
        autoPlay
        preload="auto"
        className="hidden"
        muted={isMuted}
      >
        {/* Local ocean sound file */}
        <source src="/assets/soothing-ocean-waves-372489.mp3" type="audio/mpeg" />
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
