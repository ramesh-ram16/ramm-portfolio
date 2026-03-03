import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="min-h-screen px-10 py-20 text-white">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto">
        <p className="text-orange-400 mb-2">My</p>
        <h1 className="text-5xl font-bold text-orange-400 mb-6">
          PROJECTS
        </h1>
        <p className="text-gray-300 max-w-xl mb-16">
          A curated selection of projects focused on cybersecurity,
          clean UI systems, and scalable architecture.
        </p>
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto space-y-10">

        {/* 🔥 Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold mb-3">
            Automated Malware Behavior Analysis & Detection Framework
          </h2>

          <p className="text-gray-400 mb-4">
            Behavior-based malware detection system using sandbox isolation
            and real-time monitoring to detect polymorphic and zero-day threats.
          </p>

          <div className="text-sm text-gray-400 mb-6">
            <strong>Tech Stack:</strong> Python · Sandbox VM · Process Monitoring ·
            Network Logging · React Dashboard
          </div>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Designed isolated sandbox for secure malware execution</li>
            <li>Implemented real-time monitoring of processes, registry & network activity</li>
            <li>Generated Indicators of Compromise (IOCs)</li>
            <li>Built behavior visualization dashboard</li>
            <li>Produced structured malware analysis reports</li>
          </ul>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/your-username/malware-analysis"
              target="_blank"
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm transition"
            >
              View Code
            </a>

            <a
              href="#"
              className="px-4 py-2 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white rounded-lg text-sm transition"
            >
              Live Demo
            </a>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold">Portfolio Builder</h3>
          <p className="text-gray-400 mt-2">
            Multi-page React portfolio with animations and routing using React Router and Framer Motion.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold">Modern Landing Page</h3>
          <p className="text-gray-400 mt-2">
            Clean UI built with React and Tailwind CSS focusing on performance and responsive design.
          </p>
        </div>

      </div>
    </section>
  );
}
