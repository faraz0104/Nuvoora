'use client';

import { motion } from 'framer-motion';

const orbs = [
  { x: '8%',  y: '12%', size: 520, color: 'rgba(99,102,241,0.08)',  floatY: -50, floatX:  30, scale: 1.1, duration: 20, delay: 0 },
  { x: '75%', y: '6%',  size: 440, color: 'rgba(14,165,233,0.07)',  floatY:  40, floatX: -25, scale: 1.05, duration: 24, delay: -5 },
  { x: '90%', y: '55%', size: 380, color: 'rgba(236,72,153,0.06)',  floatY: -35, floatX: -20, scale: 1.08, duration: 28, delay: -10 },
  { x: '15%', y: '72%', size: 360, color: 'rgba(124,58,237,0.07)',  floatY:  45, floatX:  20, scale: 1.06, duration: 22, delay: -7 },
  { x: '50%', y: '90%', size: 400, color: 'rgba(45,212,191,0.05)',  floatY: -30, floatX:  15, scale: 1.07, duration: 26, delay: -14 },
  { x: '38%', y: '40%', size: 300, color: 'rgba(168,85,247,0.05)',  floatY:  25, floatX: -30, scale: 1.04, duration: 18, delay: -3 },
];

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            y: [0, orb.floatY, 0],
            x: [0, orb.floatX, 0],
            scale: [1, orb.scale, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
