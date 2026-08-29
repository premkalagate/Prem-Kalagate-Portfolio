'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
} from 'lucide-react';
import { projectsData } from '@/data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm text-foreground/60 mt-1">
            A selection of full-stack applications and web tools I've built.
          </p>
        </div>

        {/* Projects List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-2xl bg-card border border-white/[0.08] hover:border-white/[0.18] transition-all overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Preview */}
              <div className="relative w-full aspect-video overflow-hidden bg-black/40 border-b border-white/[0.06]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-heading font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono text-foreground/50">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-foreground/70 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06] text-xs font-medium">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                      >
                        <span>Visit Website</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-foreground flex items-center gap-1 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
