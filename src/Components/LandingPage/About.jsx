import { aboutHighlights } from '../../database/db';

const About = () => (
  <section id="about" className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1974&auto=format&fit=crop" alt="Village life" className="rounded-2xl h-56 w-full object-cover shadow-md" />
            <img src="https://images.unsplash.com/photo-1592840496694-26a40cc1a146?q=80&w=1974&auto=format&fit=crop" alt="Farmers" className="rounded-2xl h-56 w-full object-cover shadow-md mt-8" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-amber-400 text-gray-900 rounded-2xl p-5 shadow-xl max-w-[200px]">
            <div className="text-3xl font-extrabold">Since</div>
            <div className="text-3xl font-extrabold">2012</div>
            <div className="text-sm font-medium mt-1">Serving Mashpur community</div>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">About Us</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">A glimpse into our village, Mashpur</h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            Nestled in the heart of District Kanker, Chhattisgarh, Mashpur is a close-knit village where tradition meets transformation.
            Our Gram Panchayat has been at the forefront of rural development, leveraging technology and collective effort to uplift every household.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            From digital literacy to sustainable agriculture, we believe progress happens when the community comes together. Every voice matters,
            every family counts, and every small step leads to a brighter future for Mashpur.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {aboutHighlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-5 h-5 bg-green-700 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
          <button className="mt-8 px-6 py-3 text-sm font-semibold text-white bg-green-700 rounded-lg hover:bg-green-800 transition-colors">
            Read Our Story
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default About;
