'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { personalInfo, educationList } from '@/data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* About Bio */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight mb-4">
            About Me
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-foreground/75 leading-relaxed">
            {personalInfo.aboutDetailed.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-heading font-bold text-foreground">
              Education
            </h3>
          </div>

          <div className="space-y-4">
            {educationList.map((edu, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground font-heading">
                    {edu.degree} — <span className="text-foreground/70 font-normal">{edu.institution}</span>
                  </h4>
                  {edu.description && (
                    <p className="text-xs text-foreground/60 mt-1">
                      {edu.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-indigo-400 shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
