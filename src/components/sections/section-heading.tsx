'use client';

import { motion } from 'framer-motion';

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="section-heading mb-12"
    >
      <span className="text-ink-muted">{index}</span>
      <span>{title}</span>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left' }}
        className="h-px flex-1 bg-gradient-to-r from-accent/60 to-transparent"
      />
    </motion.div>
  );
}
