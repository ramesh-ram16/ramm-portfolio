import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white/5 backdrop-blur-md border-b border-white/10">
      <h1 className="text-xl font-bold tracking-wide">Ramesh Besta</h1>

      <div className="flex items-center gap-8 text-gray-300">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <Link to="/about" className="hover:text-white transition">About</Link>
        <Link to="/projects" className="hover:text-white transition">Projects</Link>
        <Link to="/contact" className="hover:text-white transition">Contact</Link>

        {/* Always visible */}
        <div className="flex gap-4 ml-6">
          <a
            href="https://github.com/ramesh-ram16"
            target="_blank"
            className="hover:text-white transition"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            className="hover:text-white transition"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}
