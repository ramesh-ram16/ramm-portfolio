import Hero from "./Hero";
import { Home as HomeIcon, User, Briefcase, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="fixed right-6 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 flex flex-col gap-6 text-gray-400 shadow-lg">
        <Link to="/" className="hover:text-white transition">
          <HomeIcon size={20} />
        </Link>
        <Link to="/about" className="hover:text-white transition">
          <User size={20} />
        </Link>
        <Link to="/projects" className="hover:text-white transition">
          <Briefcase size={20} />
        </Link>
        <Link to="/contact" className="hover:text-white transition">
          <Mail size={20} />
        </Link>
      </div>
    </>
  );
}
