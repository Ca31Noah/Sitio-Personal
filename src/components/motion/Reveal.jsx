import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  once = true,
  amount = 0.2,
  as = 'div',
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

export function Stagger({ children, className = '', delay = 0, stagger = 0.08, once = true, amount = 0.15 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView={reduce ? 'show' : 'show'}
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', y = 20 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.25, ease: 'easeOut' } },
  whileTap: { scale: 0.985 },
};