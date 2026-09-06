'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { LogoMark } from '@/components/layout/logo-mark';
import { profile } from '@/data/profile';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Selected Work' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  // Sub-pixel rounding (OS display scaling, mobile browser chrome resizing)
  // can keep the raw ratio just short of 1 at the true bottom, so the last
  // sliver of scroll is remapped up to a full 1 and clamped there.
  const progress = useTransform(scrollYProgress, [0, 0.98], [0, 1], {
    clamp: true,
  });
  const scaleX = useSpring(progress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/80 backdrop-blur">
      <motion.div
        style={{ scaleX }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent"
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-ink"
        >
          <LogoMark className="h-8 w-8 shrink-0" />
          <span>
            <span className="text-accent">~/</span>muhidhossain
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-ink-muted transition-colors hover:text-accent"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-surface transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={open ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full overflow-hidden border-t border-line bg-surface shadow-lg lg:hidden">
            <div className="flex flex-col gap-4 px-6 pb-6 pt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-ink-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-surface"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
