'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, MessageCircle, Phone, MapPin, Send, Github, Globe } from 'lucide-react'
import Container from './Container'
import Section from './Section'

export default function Contact() {
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

  const contactItems = [
    {
      title: 'Email',
      // value: 'vikeshramesh1@gmail.com',
      href: 'mailto:vikeshramesh1@gmail.com',
      icon: Mail,
      color: 'from-orange-400 to-orange-600',
      description: 'Project inquiries',
      role: 'PM & Dev'
    },
    {
      title: 'LinkedIn',
      // value: 'linkedin.com/in/vikesh-ramesh',
      href: 'https://www.linkedin.com/in/vikesh-ramesh-7bb901288/',
      icon: Linkedin,
      color: 'from-orange-500 to-orange-600',
      description: 'Professional network',
      role: 'Connect'
    },
    {
      title: 'WhatsApp',
      // value: '+94 76 0896 144',
      href: 'https://wa.me/94760896144',
      icon: MessageCircle,
      color: 'from-orange-400 to-orange-600',
      description: 'Project discussions',
      role: 'Quick chat'
    },
    {
      title: 'Phone',
      // value: '+94 76 0896 144',
      href: 'tel:+94760896144',
      icon: Phone,
      color: 'from-orange-500 to-orange-600',
      description: 'Business calls',
      role: 'Direct line'
    },
    {
      title: 'GitHub',
      // value: 'github.com/vikesh-24',
      href: 'https://github.com/vikesh-24',
      icon: Github,
      color: 'from-orange-400 to-orange-600',
      description: 'Development portfolio',
      role: 'View code'
    }
  ]

  return (
    <Section id="contact" className="relative bg-white py-8 md:py-12">
      <Container>
        <div className="space-y-6 md:space-y-8">
          {/* Simple Header */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center space-y-2"
          >
            <h2 className="text-xl md:text-3xl font-bold text-gray-900">
              Project Manager & Developer
            </h2>
            <motion.div 
              className="w-8 h-1 bg-orange-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Leading technical projects while hands-on developing solutions. Let's discuss how my expertise can help your team succeed.
            </p>
          </motion.div>

          {/* Simple Contact Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-5xl mx-auto">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-3 text-center">
                      {/* Icon */}
                      <motion.div 
                        className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </motion.div>
                      
                      {/* Title */}
                      <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      
                      {/* Value */}
                      <p className="text-gray-600 font-medium text-xs mb-1">
                        {item.title === 'Email' ? (
                          <span className="text-orange-600">{item.value}</span>
                        ) : (
                          item.value
                        )}
                      </p>
                      
                      {/* Description */}
                      <p className="text-gray-500 text-xs hidden md:block">
                        {item.description}
                      </p>
                    </div>
                  </motion.a>
                </motion.div>
              )
            })}
          </div>

          {/* Simple CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center pt-2"
          >
            <motion.a
              href="mailto:vikeshramesh1@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Your Project
              <Send className="w-3 h-3" />
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
