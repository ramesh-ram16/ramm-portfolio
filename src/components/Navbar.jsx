import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white/5 backdrop-blur-md border-b border-white/10">
      <h1 className="text-xl font-bold tracking-wide">Ramesh Besta</h1>

      <div className="flex gap-8">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative text-white font-medium"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
