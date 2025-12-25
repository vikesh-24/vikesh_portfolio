'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Smartphone, GitBranch, Palette, Settings, MessageCircle, Globe, Shield } from 'lucide-react'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Full Stack Web Development",
      icon: Code,
      skills: ["MERN Stack", "Next.js", "RESTful APIs", "Express.js", "Node.js", ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "C++", "JavaScript", "PHP", "C", "R", "Python"]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Kotlin", "Java", "React Native", "Android SDK", "Material Design"]
    },
    {
      title: "Back-End Development",
      icon: Settings,
      skills: ["Node.js", "Express.js", "PHP", "Spring Boot", "REST APIs", "GraphQL"]
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["MySQL", "SQL Server", "MongoDB", "PostgreSQL", "Redis", "Firebase"]
    },
    {
      title: "Version Control & Tools",
      icon: GitBranch,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Docker"]
    },
    {
      title: "Communication & Integration",
      icon: MessageCircle,
      skills: ["WhatsApp API", "Email Integration", "SMS APIs", "Real-time Chat"]
    },
    {
      title: "Cloud & Deployment",
      icon: Globe,
      skills: ["AWS", "Firebase", "Docker"]
    },
    {
      title: "Security & Authentication",
      icon: Shield,
      skills: ["JWT", "OAuth", "CORS"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical expertise spans across various domains of software development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <category.icon className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + skillIndex * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    <div className="w-16 h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${Math.random() * 40 + 60}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-700 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Additional <span className="gradient-text">Expertise</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Agile Methodologies",
                "Debugging & Testing",
                "Clean Code Practices",
                "Responsive Design",
                "API Integration",
                "Performance Optimization",
                "Cross-platform Development",
                "UI/UX Design Principles",
                "Database Design",
                "System Architecture",
                "Microservices",
                "CI/CD Pipelines",
                "RESTful API Design",
                "GraphQL",
                "WebSocket",
                "Real-time Applications"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Database Expertise Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          {/* <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center mb-4">
              <Database className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Database Expertise
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">PostgreSQL</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Advanced database design, optimization, and complex queries
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">MongoDB</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  NoSQL database design and aggregation pipelines
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">MySQL</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Relational database management and optimization
                </p>
              </div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
} 