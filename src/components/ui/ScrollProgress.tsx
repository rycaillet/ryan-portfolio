import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-1 origin-left bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}