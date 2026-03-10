import { Home, User, Briefcase, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function FloatingNav() {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">

      <div className="flex flex-col gap-6 p-4 rounded-2xl 
      bg-white/5 backdrop-blur-md border border-white/10">

        <Link to="/" className="hover:scale-110 transition">
          <Home className="text-gray-300 hover:text-white" size={22} />
        </Link>

        <Link to="/about" className="hover:scale-110 transition">
          <User className="text-gray-300 hover:text-white" size={22} />
        </Link>

        <Link to="/projects" className="hover:scale-110 transition">
          <Briefcase className="text-gray-300 hover:text-white" size={22} />
        </Link>

        <Link to="/contact" className="hover:scale-110 transition">
          <Mail className="text-gray-300 hover:text-white" size={22} />
        </Link>

      </div>

    </div>
  );
}