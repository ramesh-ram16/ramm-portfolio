export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-24">

      <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <p className="text-gray-300 leading-relaxed text-lg">
        Hi, I'm <strong>Ramesh</strong>, a frontend developer focused on building
        modern, fast, and visually engaging web experiences. I enjoy crafting
        responsive user interfaces that not only look great but also perform
        smoothly across devices.
      </p>

      <p className="text-gray-300 leading-relaxed text-lg mt-6">
        My main tools include <strong>HTML, CSS, JavaScript, React, and Vite</strong>.
        I love turning ideas into real digital products that help businesses
        build a strong online presence and connect with their users.
      </p>

      <p className="text-gray-300 leading-relaxed text-lg mt-6">
        Outside of coding, I explore new frontend technologies, experiment with
        creative UI designs, and continuously improve my development workflow.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-6 text-sm text-gray-400">
        <div>• React Development</div>
        <div>• Responsive UI Design</div>
        <div>• Modern CSS & Animations</div>
        <div>• Performance Optimization</div>
      </div>

    </section>
  );
}