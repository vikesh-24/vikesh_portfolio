'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from './Button'

export default function ProjectCard({ project }) {
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
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.priority}
        />
      </div>
      <div className="flex h-full flex-col p-5">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-zinc-400">
          <span>{project.category}</span>
          {project.status && <span>{project.status.replace('-', ' ')}</span>}
        </div>
        <h3 className="mt-3 text-lg font-medium text-black">
          {project.title}
        </h3>
        <p className="mt-3 text-[13px] leading-relaxed text-zinc-600">
          {project.description}
        </p>
        <div className="mt-4 grid gap-4 text-[13px] text-zinc-600">
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400">Role</span>
            <p className="mt-2 text-black">{project.role}</p>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400">Stack</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-200 px-2.5 py-1 text-[11px] text-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400">Outcomes</span>
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
        <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 text-sm">
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
