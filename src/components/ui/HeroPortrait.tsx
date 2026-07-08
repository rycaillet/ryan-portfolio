import headshot from '../../assets/ryan-headshot.png'
import { motion } from 'framer-motion'

export function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Image */}
      <img
        src={headshot}
        alt="Ryan Caillet"
        className="relative h-80 w-80 rounded-full border-4 border-cyan-400/20 object-cover shadow-[0_0_60px_rgba(34,211,238,0.25)]"
      />

      {/* Status Badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-6 right-0 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur"
      >
        ● Available Dec 2026
      </motion.div>
    </motion.div>
  )
}