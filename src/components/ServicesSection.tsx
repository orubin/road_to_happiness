import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Star, Users, Sparkles } from 'lucide-react'

const ServicesSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Heart,
      title: "ייעוץ אישי",
      description: "פגישות אישיות מותאמות לצרכים שלך, בהן נעבוד יחד על פיתוח כלים להתמודדות עם אתגרים ובניית חיים מלאי משמעות."
    },
    {
      icon: Users,
      title: "קבוצות תמיכה",
      description: "סדנאות קבוצתיות שבהן תוכל לחלוק חוויות עם אחרים, ללמוד מהניסיון שלהם ולקבל תמיכה במסע האישי שלך."
    },
    {
      icon: Star,
      title: "הדרכה רוחנית",
      description: "מסע עמוק לגילוי העצמי הפנימי, חיבור לערכים האמיתיים שלך ופיתוח תודעה רוחנית המובילה לשלווה ואושר."
    },
    {
      icon: Sparkles,
      title: "סדנאות מיוחדות",
      description: "סדנאות בנושאים מגוונים כמו מדיטציה, חשיבה חיובית, ניהול רגשות ובניית ביטחון עצמי."
    }
  ]

  return (
    <section id="services" className="py-20 px-4 w-full bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-800 mb-6">
            השירות שלי
          </h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto leading-relaxed">
            אני מציעה מגוון שירותי ליווי והדרכה המותאמים לצרכים האישיים שלך, 
            כדי לעזור לך למצוא את הדרך שלך לאושר ולמימוש עצמי.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-ocean-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-coral-400 to-coral-600 p-3 rounded-xl shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-ocean-800 mr-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-ocean-700 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-ocean-50 to-coral-50 rounded-2xl p-8 shadow-lg border border-ocean-200">
            <h3 className="text-2xl font-bold text-ocean-800 mb-4">
              למה לבחור בי? 🌟
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-ocean-700">
              <div>
                <div className="text-3xl mb-2">💝</div>
                <p className="font-medium">גישה אישית ומותאמת</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🌊</div>
                <p className="font-medium">ניסיון רב בתחום</p>
              </div>
              <div>
                <div className="text-3xl mb-2">✨</div>
                <p className="font-medium">תוצאות מוכחות</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
