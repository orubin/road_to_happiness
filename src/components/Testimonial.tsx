import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star, Heart } from 'lucide-react'

const Testimonial: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-turquoise-50 to-ocean-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-800 mb-6">
            המלצות
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-turquoise-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Note: On mobile this will stack vertically, on large screens it will show 3 columns */}
          {/* First Testimonial - Long detailed testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
          {/* Testimonial Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-turquoise-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-turquoise-100 to-coral-100 rounded-full opacity-30 -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-ocean-100 to-turquoise-100 rounded-full opacity-30 translate-y-12 -translate-x-12"></div>
            
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-turquoise-500 to-ocean-500 p-4 rounded-full shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <Star className="w-6 h-6 text-coral-400 fill-coral-400 mx-1" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial Text */}
            <div className="text-ocean-700 leading-relaxed text-lg space-y-4 relative z-10">
              <p className="font-medium text-xl text-center mb-6 text-turquoise-700">
                רינה אהובה! 
              </p>
              
              <p>
                אז הגיע תורי לסכם את המסע שעברנו יחד☺️
              </p>

              <p className="font-semibold text-ocean-800">
                12 מפגשים מרתקים כואבים מייאשים לפעמים ובסוף מאירים את החיים 
              </p>

              <p>
                אני רוצה להביע את הערכתי הרבה על התהליך המשמעותי שעברתי בהנחייתך
              </p>

              <p>
                במהלך המפגשים, חקרנו יחד נושאים רבים וקיבלתי כלים מגוונים שבהחלט הולכים איתי קדימה. עבדנו על שחרור פחדים שונים, בחנו מצבי רווח והפסד, מודל אפרת יצרתי הצהרות חיוביות מקוריות שלי בזכותך וגיבשנו לוח חזון. משימות רוחניות יומיות שכל אחד מהדברים האלה נותן לי נקודות מבט חדשות.
              </p>

              <p className="bg-gradient-to-r from-turquoise-50 to-coral-50 p-4 rounded-xl border-r-4 border-turquoise-400">
                אני מודה לך במיוחד על האסרטיביות והנחישות שלך. ברגעים שהרגשתי רצון לוותר, וזה קרה לא פעם, לא ויתרת לי ודחפת אותי להמשיך ולצלול עמוק יותר למרות שהייתי מעצבנת וצעקתי עלייך חזרה ועקצתי אותך.. סליחה!! 
                היום הבנתי שההתמדה הזו הייתה קריטית להתקדמות שלי
              </p>

              <p>
                למרות שמהסביבה אני שומעת תגובות על שינוי שחל בי, אני באופן אישי עדיין לא לגמרי מרגישה את השינוי הזה. וגם על זה אנחנו עובדות.. 
                עם זאת, אני יכולה לומר בבירור שהיה לי טוב מאוד בתהליך. הרגשתי מובנת, נתמכת ומכוונת.
              </p>

              <p>
                הגדרנו יעדים, זמנים ומטרות ברורים, ואני בהחלט מתכוונת ליישם את כל מה שרשמנו. 
              </p>

              <p className="font-semibold text-turquoise-700">
                אני כן מרגישה שיש לי עכשיו את הכלים והמוטיבציה להמשיך את החיים מנק מבט שונה לחלוטין 
              </p>

              <p className="text-center font-medium text-coral-600 text-xl">
                אז רינוש מהממת שאת גם חיצונית אגב 
              </p>

              <p>
                תודה רבה לך על הליווי המקצועי והמסור למרות שהייתי נודניקית ובכיינית ועוקצנית כזאת... אני מעריכה מאוד מאוד מאוד את הזמן וההשקעה שלך בי.
                אגב , כנראה שגם הסביבה שלי מודה לך😅
              </p>

              <p className="text-center text-2xl font-bold text-gradient bg-gradient-to-r from-turquoise-600 to-coral-600 bg-clip-text text-transparent">
                תודה לך❤️🙏😍
              </p>
            </div>

            {/* Client signature */}
            <div className="mt-8 pt-6 border-t border-turquoise-200 text-center">
              <p className="text-ocean-600 font-medium">לקוחה מרוצה</p>
              <p className="text-ocean-500 text-sm">12 מפגשי ליווי אישי</p>
            </div>
          </div>

          {/* Floating decorations */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-coral-400 rounded-full opacity-20"
          />
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 w-12 h-12 bg-turquoise-400 rounded-full opacity-20"
          />
        </motion.div>

          {/* Second Testimonial - Birth support testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Testimonial Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-coral-100 relative overflow-hidden h-full flex flex-col">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-coral-100 to-turquoise-100 rounded-full opacity-30 -translate-y-16 -translate-x-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-turquoise-100 to-coral-100 rounded-full opacity-30 translate-y-12 translate-x-12"></div>
              
              {/* Heart icon for birth/motherhood theme */}
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-coral-500 to-turquoise-500 p-4 rounded-full shadow-lg">
                  <Heart className="w-8 h-8 text-white fill-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  >
                    <Star className="w-6 h-6 text-coral-400 fill-coral-400 mx-1" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <div className="text-ocean-700 leading-relaxed text-lg space-y-4 relative z-10 flex-grow">
                <p className="font-medium text-xl text-center mb-6 text-coral-700">
                  רינה, בזכותך שהעברת לי מסר על שכל הפחדים לזרוק לבורא עולם!
                </p>
                
                <div className="bg-gradient-to-r from-coral-50 to-turquoise-50 p-6 rounded-xl border-r-4 border-coral-400">
                  <p className="mb-4">
                    כי היה לי פחד ממש מלידה
                  </p>
                  <p className="text-sm text-ocean-600 italic mb-4">
                    (כי בלידה קודמת הייתה לי לידה שקטה בחודש 8)
                  </p>
                  <p className="font-semibold text-turquoise-700">
                    והלידה עברה בהצלחה וחשתי הכי בטוחה בעולם..
                  </p>
                </div>

                <p className="text-center text-2xl font-bold text-gradient bg-gradient-to-r from-coral-600 to-turquoise-600 bg-clip-text text-transparent">
                  תודה עליך🙏🏻
                </p>
              </div>

              {/* Client signature */}
              <div className="mt-8 pt-6 border-t border-coral-200 text-center">
                <p className="text-ocean-600 font-medium">אמא מאושרת</p>
                <p className="text-ocean-500 text-sm">ליווי רגשי לקראת לידה</p>
              </div>
            </div>

            {/* Floating decorations */}
            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [0, -3, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-6 h-6 bg-turquoise-400 rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [8, -8, 8], rotate: [0, 3, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 w-10 h-10 bg-coral-400 rounded-full opacity-20"
            />
          </motion.div>

          {/* Third Testimonial - לימי's anxiety and negative thoughts testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            {/* Testimonial Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-turquoise-100 relative overflow-hidden h-full flex flex-col">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-turquoise-100 to-ocean-100 rounded-full opacity-30 -translate-y-14 translate-x-14"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-coral-100 to-turquoise-100 rounded-full opacity-30 translate-y-10 -translate-x-10"></div>
              
              {/* Quote icon for general testimonial */}
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-ocean-500 to-turquoise-500 p-4 rounded-full shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  >
                    <Star className="w-6 h-6 text-coral-400 fill-coral-400 mx-1" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <div className="text-ocean-700 leading-relaxed text-lg space-y-4 relative z-10 flex-grow">
                <p className="font-medium text-xl text-center mb-6 text-turquoise-700">
                  רינה מהממת❤️
                </p>
                
                <p className="mb-4">
                  היא מאוד מקצועית, ונותנת הרגשה שאפשר לפתוח ולפטור את הכל !🙏🏻
                </p>
                
                <p className="font-semibold text-coral-600 mb-4">
                  תודה על הזכות לעבור טיפול נהנתי מכל רגע❤️
                </p>

                <div className="bg-gradient-to-r from-turquoise-50 to-ocean-50 p-6 rounded-xl border-r-4 border-turquoise-400">
                  <p className="mb-4">
                    אני בשנה האחרונה עם הרבה חרדות ומחשבות שלילות, והיא נתתה לי כלים איך לצאת ממחשבות שליליות.
                  </p>
                  <p className="font-semibold text-turquoise-700">
                    ממליצה בחום לעבור אצלה אימון מנסיון אישי...
                  </p>
                </div>

                <p className="text-center text-2xl font-bold text-gradient bg-gradient-to-r from-turquoise-600 to-coral-600 bg-clip-text text-transparent">
                  ❤️❤️
                </p>
              </div>

              {/* Client signature */}
              <div className="mt-8 pt-6 border-t border-turquoise-200 text-center">
                <p className="text-ocean-600 font-medium">לימי</p>
                <p className="text-ocean-500 text-sm">טיפול בחרדות ומחשבות שליליות</p>
              </div>
            </div>

            {/* Floating decorations */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [0, 4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-7 h-7 bg-ocean-400 rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [6, -6, 6], rotate: [0, -4, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-9 h-9 bg-turquoise-400 rounded-full opacity-20"
            />
          </motion.div>
        </div>

        {/* Second Row - Image Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-ocean-800 mb-4">
              עוד המלצות מלקוחות מרוצים
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-coral-500 to-turquoise-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Image Testimonial 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-ocean-100 overflow-hidden">
                <img 
                  src="./images/testimonial4.png" 
                  alt="המלצה מלקוח מרוצה"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                
                {/* Floating decorations */}
                <motion.div
                  animate={{ y: [-4, 4, -4], rotate: [0, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-coral-400 rounded-full opacity-30"
                />
                <motion.div
                  animate={{ y: [4, -4, 4], rotate: [0, -2, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 -left-2 w-8 h-8 bg-turquoise-400 rounded-full opacity-30"
                />
              </div>
            </motion.div>

            {/* Image Testimonial 5 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-turquoise-100 overflow-hidden">
                <img 
                  src="./images/testimonial5.png" 
                  alt="המלצה מלקוח מרוצה"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                
                {/* Floating decorations */}
                <motion.div
                  animate={{ y: [-3, 3, -3], rotate: [0, 3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -left-2 w-7 h-7 bg-ocean-400 rounded-full opacity-30"
                />
                <motion.div
                  animate={{ y: [3, -3, 3], rotate: [0, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 -right-2 w-5 h-5 bg-coral-400 rounded-full opacity-30"
                />
              </div>
            </motion.div>

            {/* Image Testimonial 6 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-coral-100 overflow-hidden">
                <img 
                  src="./images/testimonial6.png" 
                  alt="המלצה מלקוח מרוצה"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                
                {/* Floating decorations */}
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [0, 4, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-turquoise-400 rounded-full opacity-30"
                />
                <motion.div
                  animate={{ y: [5, -5, 5], rotate: [0, -4, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 -left-2 w-7 h-7 bg-ocean-400 rounded-full opacity-30"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial
