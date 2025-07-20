import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react'

const ContactSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://www.facebook.com/share/15eS9FpatG/",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/rina_ruslana?igsh=OHA3dnVwc2tldjNm",
      color: "bg-pink-600 hover:bg-pink-700"
    },
    {
      icon: MessageCircle,
      label: "TikTok",
      url: "https://tiktok.com/@rina_ruslana_goldman",
      color: "bg-black hover:bg-gray-800"
    },
    {
      icon: MessageCircle,
      label: "Threads",
      url: "https://www.threads.net/@rina_ruslana",
      color: "bg-gray-800 hover:bg-gray-900"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-800 mb-6">
            צור קשר
          </h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto leading-relaxed">
            מוזמנים ליצור קשר ולהתחיל את המסע שלכם לאושר ולמימוש עצמי
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-ocean-800 mb-6 flex items-center">
                <Phone className="w-6 h-6 text-coral-500 ml-3" />
                פרטי קשר
              </h3>

              <div className="space-y-4 text-ocean-700">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-coral-500 ml-3 flex-shrink-0" />
                  <span>מקבלת באשקלון בקליניקה שלי ובראשון לציון בקליניקה של המכללה ובזום🙏🏻 🩵</span>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-coral-500 ml-3 flex-shrink-0" />
                  <a
                    href="https://wa.me/972507870204"
                    className="hover:text-coral-500 transition-colors duration-300"
                  >
                    ‪+972 50‑787‑0204‬
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-ocean-800 mb-6">
                מוזמנים להכיר אותי ולעקוב 👇
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} text-white p-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <social.icon className="w-6 h-6 ml-2" />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-ocean-800 mb-6">
              שלחו הודעה
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-ocean-700 font-medium mb-2">
                  שם מלא
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-ocean-200 focus:border-coral-500 focus:ring-2 focus:ring-coral-200 transition-all duration-300 text-right"
                  placeholder="השם שלך..."
                />
              </div>

              <div>
                <label className="block text-ocean-700 font-medium mb-2">
                  טלפון
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-ocean-200 focus:border-coral-500 focus:ring-2 focus:ring-coral-200 transition-all duration-300 text-right"
                  placeholder="מספר הטלפון שלך..."
                />
              </div>

              <div>
                <label className="block text-ocean-700 font-medium mb-2">
                  הודעה
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-ocean-200 focus:border-coral-500 focus:ring-2 focus:ring-coral-200 transition-all duration-300 text-right resize-none"
                  placeholder="איך אוכל לעזור לך?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-coral-500 to-coral-600 text-white py-4 rounded-xl font-medium text-lg hover:from-coral-600 hover:to-coral-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                שלח הודעה 💌
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-ocean-500 to-coral-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              מוכנים להתחיל את המסע? 🌟
            </h3>
            <p className="text-xl mb-6 opacity-90">
              בואו נפגש ונתחיל יחד לבנות את החיים שאתם חולמים עליהם
            </p>
            <motion.a
              href="https://wa.me/972507870204"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-ocean-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              יצירת קשר עכשיו 📞
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
