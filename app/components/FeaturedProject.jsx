'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from './Button'
import Tag from './Tag'

export default function FeaturedProject({ project }) {
  if (!project) {
    return null
  }

  const reveal = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  const codeLink = project.links.find((link) => link.type === 'github')?.url

  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white">
        <div className="relative aspect-[5/4]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
            priority={project.priority}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Tag>Featured case study</Tag>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              {project.category}
            </span>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-serif text-black">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              {project.description}
            </p>
          </div>
          <div className="grid gap-4 text-[13px] text-zinc-600">
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-zinc-400">Role</span>
              <p className="mt-2 text-black">{project.role}</p>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-zinc-400">Stack</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-zinc-400">Outcomes</span>
              <ul className="mt-2 space-y-2">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-black" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-4">
          {codeLink && (
            <Button href={codeLink} variant="primary">
              View code
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
