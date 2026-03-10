export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      
      <div className="max-w-5xl">

        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight 
        bg-gradient-to-r from-purple-400 to-pink-500 
        bg-clip-text text-transparent">
          
          Frontend Developer
          
          <br />

          <span className="text-white text-4xl md:text-5xl font-semibold">
            Building modern web interfaces
          </span>

        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-xl">
          BTech student building modern web experiences with precision and clarity.
        </p>

        <button className="mt-8 px-6 py-3 rounded-lg 
        bg-gradient-to-r from-purple-500 to-pink-500 
        hover:scale-105 transition">
          View Projects
        </button>

      </div>

    </section>
  );
}