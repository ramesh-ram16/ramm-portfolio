import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white/5 backdrop-blur-md border-b border-white/10">
      <h1 className="text-xl font-bold tracking-wide">Ramesh Besta</h1>

      <div className="flex gap-6 items-center text-gray-300">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <Link to="/about" className="hover:text-white transition">About</Link>
        <Link to="/projects" className="hover:text-white transition">Projects</Link>
        <Link to="/contact" className="hover:text-white transition">Contact</Link>
      </div>
    </nav>
  );
}
