'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Download, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

const socials = [
  { href: profile.links.github, label: 'GitHub', icon: Github },
  { href: profile.links.linkedin, label: 'LinkedIn', icon: Linkedin },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line bg-contour bg-[length:200px_200px] dark:bg-contour-dark"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-signal/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/80 to-surface" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-32 md:min-h-[85vh] md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-muted"
          >
            <MapPin className="h-3.5 w-3.5 text-accent" />
            23.8103&deg;N, 90.4125&deg;E &middot; {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-balance font-mono text-lg text-accent"
          >
            {profile.role}
            <span className="animate-blink">_</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-ink-muted md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href={profile.resumeUrl}
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-surface"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </motion.a>
            <div className="ml-2 flex items-center gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2, borderColor: 'rgb(var(--accent))' }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink-muted transition-colors hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="overflow-hidden rounded-lg border border-line bg-surface-raised/80 shadow-2xl shadow-accent/5 backdrop-blur"
          >
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
              <span className="ml-2 font-mono text-xs text-ink-muted">whoami.sh</span>
            </div>
            <div className="space-y-3 p-6 font-mono text-sm leading-relaxed">
              <p className="text-ink-muted">
                <span className="text-accent">$</span> whoami
              </p>
              <p className="text-ink">{profile.shortName}</p>
              <p className="mt-4 text-ink-muted">
                <span className="text-accent">$</span> cat role.txt
              </p>
              <p className="text-ink">{profile.role}</p>
              <p className="mt-4 text-ink-muted">
                <span className="text-accent">$</span> ls stack/
              </p>
              <p className="text-ink">React &middot; React Native &middot; Next.js &middot; Angular</p>
              <p className="mt-4 text-ink-muted">
                <span className="text-accent">$</span> <span className="animate-blink">_</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
