"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden aspect-square">
                {/* Placeholder image using a colored div since no real image is available yet */}
                <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400">
                  <span className="text-4xl font-bold">IMAGE</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a passionate Full Stack Developer with over 3 years of experience in building digital solutions. My journey started with a curiosity for how things work on the internet, which led me to dive deep into web technologies.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I specialize in React and Next.js, and I'm always eager to learn new tools and frameworks that help me deliver better experiences. I believe in writing clean, maintainable code and building products that make a real impact.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-2">3+ Years</h4>
                <p className="text-sm text-slate-500 dark:text-slate-500 uppercase tracking-wider">Experience</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">50+ Projects</h4>
                <p className="text-sm text-slate-500 dark:text-slate-500 uppercase tracking-wider">Completed</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">20+ Clients</h4>
                <p className="text-sm text-slate-500 dark:text-slate-500 uppercase tracking-wider">World Wide</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Ready to</h4>
                <p className="text-sm text-slate-500 dark:text-slate-500 uppercase tracking-wider">Work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
