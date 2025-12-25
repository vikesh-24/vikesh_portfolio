'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from './Container'
import Section from './Section'

export default function About() {
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
      y: [-8, 8, -8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const aboutParagraphs = [
    "I'm Vikesh Ramesh, a motivated IT undergraduate with strong project management skills and comprehensive full-stack development expertise. My background combines web development, mobile development, and proven project coordination abilities.",
    "With experience in leading technical projects and coordinating cross-functional teams, I bring a unique blend of development knowledge and project management methodologies to deliver successful applications."
  ]

  const skills = [
    'Project Management',
    'Agile & Scrum Methodologies',
    'Stakeholder Management',
    'Risk Assessment & Mitigation',
    'Resource Planning & Allocation',
    'Timeline Management',
    'Quality Assurance',
    'Team Leadership',
    'Cross-functional Coordination',
    'Project Documentation',
    'Budget Management',
    'Full-Stack Development',
    'Web Development',
    'Mobile Development',
    'Python Programming',
    'Java Development',
    'React.js',
    'Node.js',
    'MongoDB',
    'MySQL',
    'AWS Cloud'
  ]

  return (
    <Section id="about" className="relative overflow-hidden">
      {/* Decorative elements with animations */}
      <motion.div 
        className="absolute top-20 right-10 w-16 h-16 border-2 border-orange-500 rounded-full opacity-20"
        {...floatAnimation}
      />
      <motion.div 
        className="absolute bottom-32 left-20 w-12 h-12 border-2 border-orange-500 rounded-full opacity-25"
        animate={{
          ...floatAnimation.animate,
          transition: { ...floatAnimation.transition, delay: 1.5 }
        }}
      />
      
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              About Me
            </h2>
            <motion.div 
              className="w-24 h-1 bg-orange-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            />
          </motion.div>

          {/* Content */}
          <div className="grid gap-12 md:grid-cols-2 items-start">
            {/* Left Content */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="space-y-6"
            >
              {aboutParagraphs.map((paragraph, index) => (
                <motion.p 
                  key={index} 
                  className="text-lg text-gray-600 leading-relaxed text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                >
                  {paragraph}
                </motion.p>
              ))}
              
              <div className="pt-6 text-left">
                <motion.button 
                  onClick={downloadResume}
                  className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Skills */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className="space-y-8"
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Developing Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-2 text-left"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, delay: index * 0.1, repeat: Infinity }}
                      />
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-orange-50 rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-orange-500 mb-2 text-left">Development Journey</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Web Projects', value: '8+' },
                    { label: 'Mobile Apps', value: '2' },
                    { label: 'Full-Stack Apps', value: '6' },
                    { label: 'Programming Languages', value: '8' },
                    { label: 'Frameworks', value: '5' },
                    { label: 'Database Systems', value: '3' }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="flex justify-between items-center text-left"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    >
                      <span className="text-gray-600 text-sm">{stat.label}</span>
                      <span className="text-orange-500 font-bold text-sm">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
