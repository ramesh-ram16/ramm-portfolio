import { motion } from "framer-motion";

const particles = Array.from({ length: 12 });

export default function BackgroundParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-400/60 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

    </div>
  );
}