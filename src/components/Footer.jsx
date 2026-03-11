export default function Footer() {
  return (
    <footer className="mt-32 py-12 text-center border-t border-white/10 bg-[#0b061a] text-white">

      <h3 className="text-2xl font-semibold mb-3">
        Ramesh Besta
      </h3>

      <p className="text-white/70 mb-4">
        Frontend Developer building modern web experiences.
      </p>

      <div className="flex justify-center gap-6 mb-6">

        <a
          href="https://github.com/ramesh-ram16"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          LinkedIn
        </a>

        <a
          href="mailto:yourmail@gmail.com"
          className="text-blue-400 hover:text-blue-300"
        >
          Email
        </a>

      </div>

      <p className="text-sm text-white/50">
        © 2026 ramstack • Built with React & caffeine ☕
      </p>

    </footer>
  );
}