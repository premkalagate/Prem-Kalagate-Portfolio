'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  FolderGit2,
  Cpu,
  Layers,
  Send,
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Skills', href: '#skills', icon: Cpu },
  { name: 'Services', href: '#services', icon: Layers },
  { name: 'Contact', href: '#contact', icon: Send },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 flex justify-center pointer-events-none">
      <div className="pointer-events-auto px-3 max-w-full flex justify-center items-center">
        {/* Floating Navbar Pill: Icons only on mobile, text on laptops */}
        <nav className="flex items-center gap-1 sm:gap-1 p-1 sm:p-1.5 rounded-full bg-card/90 backdrop-blur-xl border border-white/[0.1] shadow-xl shadow-black/20">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            const Icon = link.icon;
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                title={link.name}
                aria-label={link.name}
                className={`relative px-3 py-2 sm:px-4 sm:py-1.5 rounded-full transition-all duration-200 flex items-center justify-center gap-1.5 ${
                  isActive
                    ? 'text-white'
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-indigo-500 rounded-full shadow-sm shadow-indigo-500/40"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Icon visible on mobile, icon + text or icon only based on breakpoint */}
                <Icon className="w-4 h-4 relative z-10 shrink-0 sm:hidden" />

                {/* Text visible on desktop/laptop */}
                <span className="relative z-10 text-xs font-mono font-medium hidden sm:inline">
                  {link.name}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
