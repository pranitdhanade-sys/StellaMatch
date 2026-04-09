'use client';

import { motion } from 'framer-motion';

export function FloatingOrb() {
  return (
    <motion.div
      className="h-10 w-10 rounded-full bg-stella-neon/70 shadow-[0_0_30px_#5af3ff]"
      animate={{ y: [0, -14, 0], opacity: [0.8, 1, 0.8] }}
      transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
    />
  );
}
