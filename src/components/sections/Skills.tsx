"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Figma,
  Smartphone,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="text-primary" size={24} />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Server className="text-primary" size={24} />,
    skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "Socket.io"],
  },
  {
    title: "Database",
    icon: <Database className="text-primary" size={24} />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Firebase"],
  },
  {
    title: "Other",
    icon: <Terminal className="text-primary" size={24} />,
    skills: ["Git", "Docker", "AWS", "Figma", "Unit Testing", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-800/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            A comprehensive list of technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium rounded-full text-slate-600 dark:text-slate-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
