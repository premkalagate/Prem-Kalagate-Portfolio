'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { triggerConfetti } from '../ui/Confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      triggerConfetti();
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(err?.message || 'Something went wrong. Please try again or email directly.');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm text-foreground/60 mt-1">
            Have a question, project idea, or want to work together? Leave a message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Direct Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-4 rounded-xl bg-card border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400" />
                <div>
                  <span className="text-[10px] uppercase text-foreground/50 block font-mono">
                    Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-medium text-foreground hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg hover:bg-white/[0.05] text-foreground/60 hover:text-foreground transition-colors"
                title="Copy Email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-card border border-white/[0.08] flex items-center gap-3">
              <Phone className="w-4 h-4 text-indigo-400" />
              <div>
                <span className="text-[10px] uppercase text-foreground/50 block font-mono">
                  Phone
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  {personalInfo.phone}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-white/[0.08] flex items-center gap-3">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <div>
                <span className="text-[10px] uppercase text-foreground/50 block font-mono">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-foreground/80">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-white/[0.08] text-base sm:text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-foreground/80">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-white/[0.08] text-base sm:text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-foreground/80">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-white/[0.08] text-base sm:text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Message sent successfully! I will get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-2.5 rounded-xl bg-foreground text-background font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
