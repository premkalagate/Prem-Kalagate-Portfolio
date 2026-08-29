'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Server,
  Terminal,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5 & CSS3',
      'Framer Motion',
    ],
  },
  {
    title: 'Mobile App Development',
    icon: Smartphone,
    skills: [
      'Flutter',
      'Dart',
      'Firebase',
      'Cross-Platform (iOS & Android)',
      'State Management',
    ],
  },
  {
    title: 'Backend & Database',
    icon: Server,
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
      'REST APIs',
      'Mongoose',
    ],
  },
  {
    title: 'Languages & Tools',
    icon: Terminal,
    skills: [
      'JavaScript',
      'TypeScript',
      'Dart',
      'Python',
      'C++',
      'Git & GitHub',
      'Postman',
      'Vercel',
      'Figma',
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-sm text-foreground/60 mt-1">
            Core technologies and tools I work with daily for web and mobile development.
          </p>
        </div>

        {/* Compact Categorized Tag Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-5 rounded-2xl bg-card border border-white/[0.08] hover:border-white/[0.15] transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded-lg bg-white/[0.05] text-indigo-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground font-heading">
                    {category.title}
                  </h3>
                </div>

                {/* Compact Tag Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] text-foreground/80 border border-white/[0.06] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
