export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-24 text-center">
      <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Get In Touch</h2>
      <p className="text-gray-300 leading-relaxed mb-10">
        I'm always open to exploring new opportunities and learning from the community.
      </p>

      <div className="mt-8 space-y-4 text-gray-300 text-lg">
        <a href="mailto:rameshrambesta@gmail.com" className="block hover:text-white transition">
          📧 rameshrambesta@gmail.com
        </a>
        <a href="https://linkedin.com/in/ramesh-besta-977948337" target="_blank" className="block hover:text-white transition">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/ramesh-ram16" target="_blank" className="block hover:text-white transition">
          💻 GitHub
        </a>
      </div>
    </section>
  );
}
