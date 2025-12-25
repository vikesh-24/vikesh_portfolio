'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { projectsData } from '../data/projects'
import Container from './Container'
import Section from './Section'
import Button from './Button'
import { Mail } from 'lucide-react'

export default function Hero() {
  const downloadResume = (event) => {
    event.preventDefault()
    const resumeUrl = '/VIkeshResume.pdf'
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Vikesh_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const reveal = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <Section id="home" className="pt-16 relative overflow-hidden">
      {/* Decorative circles with animations */}
      <motion.div 
        className="absolute top-32 right-20 w-16 h-16 border-2 border-orange-500 rounded-full opacity-20"
        {...floatAnimation}
      />
      <motion.div 
        className="absolute bottom-20 left-32 w-12 h-12 border-2 border-orange-500 rounded-full opacity-25"
        animate={{
          ...floatAnimation.animate,
          transition: { ...floatAnimation.transition, delay: 1 }
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-40 w-24 h-24 border-2 border-orange-500 rounded-full opacity-15"
        animate={{
          ...floatAnimation.animate,
          transition: { ...floatAnimation.transition, delay: 2 }
        }}
      />
      
      <Container>
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Picture with decorative elements */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Crescent shapes */}
            <motion.div 
              className="absolute -top-4 -left-4 w-8 h-8 border-4 border-orange-500 rounded-full transform rotate-45"
              animate={{ rotate: [45, 405] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-8 h-8 border-4 border-orange-500 rounded-full transform -rotate-45"
              animate={{ rotate: [-45, -405] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Profile Image */}
            <motion.div 
              className="relative w-40 h-40 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-orange-500 shadow-xl"
              whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/dp.jpg"
                alt="Vikesh"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-2xl font-bold text-orange-500"
          >
            IT Undergraduate | Project Manager | Full-Stack Developer
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 max-w-4xl"
          >
            Delivering successful project outcomes
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl"
          >
            Motivated IT undergraduate with strong project management skills and expertise in full-stack development. Experienced in leading technical projects, coordinating cross-functional teams, and delivering successful web and mobile applications.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          >
            <motion.a
              href="#work"
              className="inline-block px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Projects
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}