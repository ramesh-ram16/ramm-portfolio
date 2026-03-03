export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-24">
      <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <p className="text-gray-300 leading-relaxed text-lg space-y-6">
        I’m a BTech student exploring the intersection of software development and cybersecurity. 
        I enjoy building practical applications using modern web technologies like React and Vite, 
        while also diving into system-level concepts such as malware analysis and security engineering.
      </p>

      <p className="text-gray-300 leading-relaxed text-lg mt-6">
        I’m still figuring out where I want to specialize, but I’m deeply enthusiastic about learning, 
        experimenting, and strengthening my technical foundations. My current focus is building 
        real-world projects that sharpen both my problem-solving skills and my understanding of 
        how systems work end-to-end.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-gray-400">
        <div>• React & Vite Development</div>
        <div>• UI Architecture</div>
        <div>• Malware Analysis</div>
        <div>• Security Engineering Basics</div>
      </div>
    </section>
  );
}
