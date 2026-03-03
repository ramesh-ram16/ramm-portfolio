import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Home() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-white px-6">

      <motion.h1
        onMouseMove={handleMouseMove}
        style={{ rotateX, rotateY }}
        className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        Ramesh Besta
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-gray-400 text-lg"
      >
        Welcome to my profile
      </motion.p>

    </section>
  );
}
