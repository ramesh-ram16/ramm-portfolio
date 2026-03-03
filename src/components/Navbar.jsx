import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

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
            <Link key={link.name} to={link.path} className="relative px-4 py-2">

              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              <span className="relative z-10 text-white">
                {link.name}
              </span>

            </Link>
          );
        })}
      </div>
    </nav>
  );
}
