'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from './Container'
import Section from './Section'
import { projectsData } from '../data/projects'
import { ArrowRight, ExternalLink, Code, Database, Globe, Smartphone, Users, Calendar, Star } from 'lucide-react'

export default function Projects() {
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
      y: [-6, 6, -6],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const getProjectIcon = (title) => {
    if (title.toLowerCase().includes('mobile') || title.toLowerCase().includes('app')) return Smartphone
    if (title.toLowerCase().includes('web') || title.toLowerCase().includes('studio')) return Globe
    if (title.toLowerCase().includes('system') || title.toLowerCase().includes('management')) return Database
    return Code
  }

  return (
    <Section id="work" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #f97316 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, #f97316 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, #f97316 0%, transparent 50%)`
        }} />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 border-2 border-orange-500 rounded-full opacity-10"
        {...floatAnimation}
      />
      <motion.div 
        className="absolute top-40 right-20 w-16 h-16 border-2 border-orange-400 rounded-full opacity-15"
        animate={{
          ...floatAnimation.animate,
          transition: { ...floatAnimation.transition, delay: 1 }
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-orange-300 rounded-full opacity-20"
        animate={{
          ...floatAnimation.animate,
          transition: { ...floatAnimation.transition, delay: 2 }
        }}
      />
      
      <Container>
        <div className="space-y-16">
          {/* Enhanced Header */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold"
            >
              <Star className="w-4 h-4" />
              Featured Projects
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-orange-600">
              Development Portfolio
            </h2>
            
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            />
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Showcasing full-stack development projects with leadership experience in project management and team coordination.
            </motion.p>
          </motion.div>

          {/* Unique Projects Layout - No Boxes */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-400 to-orange-200" />
            
            {/* Projects Timeline */}
            <div className="space-y-8 md:space-y-12">
              {projectsData.map((project, index) => {
                const ProjectIcon = getProjectIcon(project.title)
                const isLeft = index % 2 === 0
                
                return (
                  <motion.div
                    key={project.id}
                    className={`relative flex items-center ${
                      isLeft ? 'justify-start md:justify-end md:pr-8' : 'justify-start md:justify-start md:pl-8'
                    }`}
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Timeline Node */}
                    <motion.div 
                      className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"
                      whileHover={{ scale: 1.3 }}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        transition: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                      }}
                    />
                    
                    {/* Project Content - No Box */}
                    <div className={`w-full md:w-5/12 ${
                      isLeft ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <motion.div 
                        className="space-y-3 cursor-pointer group"
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Icon and Title */}
                        <div className={`flex items-center gap-3 ${
                          isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
                        }`}>
                          <motion.div 
                            className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20 + index * 5, repeat: Infinity, ease: "linear" }}
                          >
                            <ProjectIcon className="w-5 h-5 text-white" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <div className={`flex items-center gap-2 mt-1 ${
                              isLeft ? 'md:justify-end' : 'md:justify-start'
                            }`}>
                              <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                                {project.role}
                              </span>
                              {project.featured && (
                                <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full font-medium">
                                  Featured
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-base">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className={`flex flex-wrap gap-2 ${
                          isLeft ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-2 py-1 text-gray-700 text-xs font-medium border-b border-orange-400 hover:bg-orange-50 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className={`flex gap-2 pt-1 ${
                          isLeft ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          {project.links.map((link, linkIndex) => (
                            <motion.a
                              key={linkIndex}
                              href={link.url}
                              className="text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors flex items-center gap-1 border-b border-transparent hover:border-orange-300"
                              whileHover={{ x: 3 }}
                            >
                              {link.label}
                              <ExternalLink className="w-3 h-3" />
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            className="text-center pt-12"
          >
            {/* <motion.div 
              className="inline-flex flex-col items-center gap-6 p-8 bg-white rounded-3xl shadow-xl border border-gray-100"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            > */}
              {/* <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">Interested in My Work?</h3>
                <p className="text-gray-600">Let's discuss how I can contribute to your next project</p>
              </div>
               */}
              {/* <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button> */}
            {/* </motion.div> */}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
