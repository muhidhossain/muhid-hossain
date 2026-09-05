'use client';

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

interface FadeInProps extends HTMLMotionProps<'div'> {
  delay?: number;
}

export function FadeIn({ delay = 0, children, transition, ...rest }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay, ...transition }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, ...rest }: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...rest }: HTMLMotionProps<'div'>) {
  return (
    <motion.div variants={fadeUp} {...rest}>
      {children}
    </motion.div>
  );
}

export function MotionLink({ children, ...rest }: HTMLMotionProps<'a'>) {
  return (
    <motion.a variants={fadeUp} {...rest}>
      {children}
    </motion.a>
  );
}
