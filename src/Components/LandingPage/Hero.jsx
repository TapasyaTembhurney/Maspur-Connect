// const stats = [
//   { value: '2,400+', label: 'Villagers Connected' },
//   { value: '120', label: 'Active Volunteers' },
//   { value: '35', label: 'Ongoing Projects' },
//   { value: '18', label: 'Village Families Helped' },
// ];

const Hero = () => (
  <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-amber-700 overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
        alt="Mashpur village fields"
        className="w-full h-full object-cover opacity-30"
      />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold text-green-100 bg-white/15 backdrop-blur-sm rounded-full">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
          Welcome to Mashpur Gram Panchayat
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Empowering Our Village,{' '}
          <span className="text-amber-300">Together We Grow</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-green-50 max-w-2xl">
          Mashpur, a vibrant village in District Kanker, Chhattisgarh, is building a connected,
          self-reliant community. Join us in driving progress through technology, education, and
          collective action.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#what-we-do" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-green-800 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors shadow-lg">
            Explore Our Work
          </a>
          <button className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border-2 border-white/60 rounded-lg hover:bg-white/10 transition-colors">
            Watch Village Story
          </button>
        </div>
      </div>

      {/* Stats */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-amber-300">{s.value}</div>
            <div className="text-xs md:text-sm text-green-50 mt-1">{s.label}</div>
          </div>
        ))}
      </div> */}
    </div>
  </section>
);

export default Hero;
