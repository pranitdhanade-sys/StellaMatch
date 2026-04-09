'use client';

import { motion } from 'framer-motion';
import { HeroCanvas } from '@/components/HeroCanvas';

export function HeroScene() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/20 p-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-stella-glow/30 via-transparent to-stella-neon/30" />
      <motion.div
        aria-hidden
        className="absolute right-8 top-8 h-20 w-20 rounded-full bg-stella-neon/30 blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <h1 className="text-4xl font-bold">StellaMatch</h1>
      <p className="mt-4 max-w-2xl text-white/85">
        Meet Nova Spark, an original robotic cat-like mentor guiding students through floating skill-orbs, glowing
        sword-tools, and real-time knowledge exchange quests.
      </p>
      <div className="mt-6">
        <HeroCanvas />
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {['Skill Orb', 'Sword Tool', 'Mentor Beacon', 'Floating Panels', 'Parallax Layer', 'Quest Match AI'].map((item) => (
          <motion.div key={item} whileHover={{ scale: 1.05 }} className="rounded-xl border border-white/20 bg-white/5 p-4">
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
