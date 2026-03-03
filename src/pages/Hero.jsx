export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Gradient Blob */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-pink-600 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-32">

        {/* Left Content */}
        <div>
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Software Developer
            <br />
            Exploring Cybersecurity
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            BTech student building modern web experiences with precision and clarity.
          </p>

          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
            View Projects
          </button>
        </div>

        {/* Right Visual */}
        <div className="hidden md:flex justify-center">
          <div className="w-64 h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        </div>

      </div>
    </section>
  );
}