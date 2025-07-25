import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 w-full">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-800 mb-6">
            מי אני
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-turquoise-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-ocean-100 to-coral-100">
                <img
                  src="./images/photo.jpg"
                  alt="רינה גולדמן"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-turquoise-400 rounded-full"
              />
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-ocean-400/20 rounded-full blur-sm"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-center lg:text-right"
          >
            <div className="prose prose-lg max-w-none text-ocean-700 leading-relaxed">
              <p className="text-xl mb-6">
                שלום, אני רינה גולדמן 🌊
              </p>

              <p className="mb-6">
                אני מאמינה שכל אחד מאיתנו נושא בתוכו את הכוח לחיות חיים מלאי אושר ומשמעות.
                במשך שנים רבות אני מלווה אנשים במסע האישי שלהם לגילוי העצמי ולמימוש הפוטנציאל הפנימי.
              </p>

              <p className="mb-6">
                המטרה שלי היא לעזור לך לגלות את הדרך הייחודית שלך לאושר,
                לפתח כלים פרקטיים להתמודדות עם אתגרי החיים, ולבנות חיים מלאי שמחה ושלווה פנימית.
              </p>

              <p className="mb-6">
                יחד נעבור מסע של צמיחה אישית, נחקור את הערכים והחלומות שלך,
                ונבנה תוכנית פעולה מותאמת אישית שתוביל אותך לחיים שאתה באמת רוצה לחיות.
              </p>

              <div className="bg-gradient-to-r from-ocean-50 to-coral-50 p-6 rounded-xl border-r-4 border-coral-400">
                <p className="text-ocean-800 font-medium italic">
                  "האושר הוא לא יעד, אלא דרך חיים. בואו נלמד יחד איך לחיות אותה." 💫
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
