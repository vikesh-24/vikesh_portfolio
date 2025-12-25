'use client'

import { motion } from 'framer-motion'
import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex flex-col items-start justify-between gap-4 py-10 text-sm text-zinc-500 md:flex-row md:items-center"
        >
          <p>© {year} Vikesh </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:vikeshramesh1@gmail.com"
              className="transition-colors hover:text-black"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/vikesh-ramesh-7bb901288/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Vikesh0702"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}
