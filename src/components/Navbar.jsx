import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

function MagneticItem({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white/5 backdrop-blur-md border-b border-white/10">
      <h1 className="text-xl font-bold tracking-wide">Ramesh Besta</h1>

      <div className="relative flex gap-6">
        {links.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <MagneticItem key={link.name}>
              <Link to={link.path} className="relative px-4 py-2 overflow-hidden">

                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                <motion.div
                  className="absolute inset-0 rounded-lg bg-purple-500/0"
                  whileHover={{ backgroundColor: "rgba(168,85,247,0.15)" }}
                  transition={{ duration: 0.3 }}
                />

                <span className="relative z-10 text-white">
                  {link.name}
                </span>

              </Link>
            </MagneticItem>
          );
        })}
      </div>
    </nav>
  );
}
