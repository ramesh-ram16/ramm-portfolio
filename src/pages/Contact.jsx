import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white px-6">

      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="text-gray-400 mb-10 text-center max-w-xl">
        Feel free to connect with me through any of the platforms below.
      </p>

      <div className="flex gap-8 text-orange-400">

        {/* GitHub */}
        <a
          href="https://github.com/ramesh-ram16"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Github size={32} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/YOUR-LINKEDIN"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Linkedin size={32} />
        </a>

        {/* Mail */}
        <a
          href="mailto:rameshrambesta@gmail.com"
          className="hover:scale-110 transition-transform"
        >
          <Mail size={32} />
        </a>

      </div>

    </section>
  );
}
