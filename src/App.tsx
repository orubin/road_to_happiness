import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import DolphinAnimation from './components/DolphinAnimation'
import OceanSound from './components/OceanSound'
import Testimonial from './components/Testimonial'
import TikTokPromo from './components/TikTokPromo'
import CollegeImage from './components/CollegeImage'

function App() {
  return (
    <div className="min-h-screen ocean-bg rtl overflow-x-hidden w-full">
      <Header />
      <main className="relative w-full overflow-x-hidden">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <Testimonial />
        <TikTokPromo />
        <CollegeImage />
        <ContactSection />
        <DolphinAnimation />
      </main>
      <Footer />
      <WhatsAppFloat />
      <OceanSound />
    </div>
  )
}

export default App
