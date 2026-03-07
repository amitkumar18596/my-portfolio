"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment integration, and user accounts.",
    tech: ["Next.js", "Tailwind", "Prisma", "Stripe"],
    github: "#",
    live: "#",
    image: "bg-blue-500/10",
  },
  {
    title: "AI Image Generator",
    description: "Web application that uses AI models to generate unique images based on text prompts.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
    github: "#",
    live: "#",
    image: "bg-purple-500/10",
  },
  {
    title: "Task Management App",
    description: "A collaborative tool for teams to manage projects, track time, and assign tasks.",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
    image: "bg-green-500/10",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio template designed for developers to showcase their work.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
    image: "bg-orange-500/10",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            A selection of my recent work, showcasing range of skills from frontend design to backend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-colors"
            >
              <div className={`aspect-video w-full ${project.image} flex items-center justify-center p-12`}>
                <div className="text-primary opacity-20 group-hover:opacity-40 transition-opacity">
                  <ExternalLink size={100} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
