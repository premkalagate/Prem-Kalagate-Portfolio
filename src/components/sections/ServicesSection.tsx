'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CodeXml, Smartphone, Bot, Check } from 'lucide-react';
import { servicesData } from '@/data/portfolioData';

const icons: Record<string, React.ElementType> = {
  CodeXml,
  Smartphone,
  Bot,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
            Services
          </h2>
          <p className="text-sm text-foreground/60 mt-1">
            What I can help you build and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = icons[service.icon] || CodeXml;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-5 rounded-2xl bg-card border border-white/[0.08] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="p-2 w-fit rounded-xl bg-white/[0.05] text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-white/[0.06]">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-foreground/70">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{f}</span>
                    </div>
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
