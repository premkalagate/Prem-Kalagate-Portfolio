'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-14 sm:pt-36 sm:pb-20 overflow-hidden w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        {/* Main Hero Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4 sm:space-y-5 max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start w-full"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for freelance & full-time roles</span>
            </div>

            {/* Creative Freelance Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-foreground tracking-tight leading-[1.1]">
                <span>You Imagine.</span>{' '}
                <br className="hidden lg:block" />
                <span className="text-indigo-400">I Build.</span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-sm sm:text-base text-foreground/75 leading-relaxed max-w-lg">
              I build custom, high-performance web applications that elevate brands and drive growth. Harnessing Next.js, React, Node.js, and MongoDB, I engineer end-to-end web products with fast load times and seamless user experiences.
            </p>

            {/* Clean Minimalist Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10 pt-2 pb-1">
              <div className="flex flex-col items-center lg:items-start">
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight">
                  3<span className="text-indigo-400">+</span>
                </div>
                <div className="text-xs sm:text-sm text-foreground/60 font-medium mt-0.5">
                  Freelance Projects
                </div>
              </div>

              <div className="h-10 w-px bg-white/[0.12]" />

              <div className="flex flex-col items-center lg:items-start">
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight">
                  2<span className="text-indigo-400">+</span>
                </div>
                <div className="text-xs sm:text-sm text-foreground/60 font-medium mt-0.5">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Action Buttons: View Projects & Contact Me */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-card border border-white/[0.1] text-foreground font-semibold text-xs sm:text-sm hover:bg-white/[0.05] hover:border-indigo-500/40 hover:text-indigo-400 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-indigo-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center justify-center relative shrink-0 w-full lg:w-auto"
          >
            {/* Photo Container */}
            <div className="relative">
              {/* Ambient Glow */}
              <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none opacity-50" />

              <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/profile.png"
                  alt="Prem Kalagate"
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 230px, 300px"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Name & Title Below Photo */}
            <div className="text-center mt-3 sm:mt-4 space-y-0.5">
              <h2 className="text-lg sm:text-xl font-heading font-extrabold text-foreground tracking-tight">
                Prem Kalagate
              </h2>
              <p className="text-xs sm:text-sm font-medium text-indigo-400 font-mono">
                Full stack developer & Software engineer
              </p>
            </div>

            {/* Social Links Below Title */}
            <div className="flex items-center gap-3 text-xs text-foreground/60 pt-3">
              <a
                href="https://www.github.com/premkalagate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground flex items-center gap-1 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/premkalagate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground flex items-center gap-1 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href="https://www.x.com/premkalagate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground flex items-center gap-1 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>X (Twitter)</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
