import { useState, useEffect } from 'react';
import { aboutData } from '../../database/db';

const About = () => {
  // Start with default data
  const [about, setAbout] = useState(aboutData);

  // When the page loads, check if admin has saved any changes in LocalStorage
  useEffect(() => {
    const savedData = localStorage.getItem('village_about_data');

    if (savedData) {
      setAbout(JSON.parse(savedData));
    }
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-100 ml-20">
              {/* <img
                src={about.image1}
                alt="Village life"
                className="rounded-2xl h-56 w-full object-cover shadow-md"
              /> */}
              <img
                src={about.image2}
                alt="Farmers"
                className="rounded-2xl h-56 w-full object-cover shadow-md mt-8"
              />
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              {about.badge}
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
              {about.heading}
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">{about.paragraph1}</p>
            <p className="mt-4 text-gray-600 leading-relaxed">{about.paragraph2}</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {about.highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-700 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;