'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { socialLinks } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] text-xs text-foreground/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Prem Kalagate. Built with Next.js & Tailwind CSS.</p>

        <div className="flex items-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {s.name}
            </a>
          ))}
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
