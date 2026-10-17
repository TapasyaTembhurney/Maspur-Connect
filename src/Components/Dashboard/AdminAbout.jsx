import { useState, useEffect, useRef } from 'react';
import { aboutData } from '../../database/db';

const AdminAbout = () => {
  const [form, setForm] = useState(aboutData);
  const [newHighlight, setNewHighlight] = useState('');
  const [saved, setSaved] = useState(false);
  const isFirstLoad = useRef(true); // prevents saving on initial mount

  // Load saved data once, on mount
  useEffect(() => {
    const savedData = localStorage.getItem('village_about_data');
    if (savedData) {
      setForm(JSON.parse(savedData));
    }
  }, []);

  // Auto-save to LocalStorage whenever form changes (debounced)
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return; // skip saving right after initial load
    }

    const timer = setTimeout(() => {
      localStorage.setItem('village_about_data', JSON.stringify(form));
      setSaved(true);
      setTimeout(() => setSaved(false), 1000);
    }, 500); // waits 500ms after you stop typing before saving

    return () => clearTimeout(timer); // cancel previous timer if still typing
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleHighlightChange = (index, newText) => {
    const updated = [...form.highlights];
    updated[index] = newText;
    setForm({ ...form, highlights: updated });
  };

  const addHighlight = () => {
    if (newHighlight === '') return;
    setForm({ ...form, highlights: [...form.highlights, newHighlight] });
    setNewHighlight('');
  };

  const removeHighlight = (indexToRemove) => {
    setForm({
      ...form,
      highlights: form.highlights.filter((_, i) => i !== indexToRemove),
    });
  };

  const handleReset = () => {
    if (window.confirm('Reset About section to default content?')) {
      setForm(aboutData);
      localStorage.setItem('village_about_data', JSON.stringify(aboutData));
    }
  };


  return (
    <div className='w-full overflow-x-hidden'>
      {/* Everything below looks exactly like the real About section */}
      <section className="py-8 md:py-15 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left side: images + since badge */}
            <div className="relative">
              <div className="ml-20">
                <div className="mt-8">
                  <img
                    src={form.image2}
                    alt="Farmers"
                    className="rounded-2xl h-56 w-full object-cover shadow-md border-2 border-dashed border-gray-300 "
                  />
                </div>
              </div>
            </div>

            {/* Right side: text content */}
            <div>
              <input
                name="badge"
                value={form.badge}
                onChange={handleChange}
                className="text-sm font-semibold text-green-700 uppercase tracking-wide bg-transparent outline-none border-b border-dashed border-gray-300 w-full"
              />

              <textarea
                name="heading"
                value={form.heading}
                onChange={handleChange}
                rows={2}
                className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 bg-transparent outline-none border-b border-dashed border-gray-300 w-full resize-none overflow-y-hidden h-23"
              />

              <textarea
                name="paragraph1"
                value={form.paragraph1}
                onChange={handleChange}
                rows={3}
                className="mt-5 text-gray-600 leading-relaxed bg-transparent outline-none border-b border-dashed border-gray-300 w-full h-35 resize-none"
              />

              <textarea
                name="paragraph2"
                value={form.paragraph2}
                onChange={handleChange}
                rows={3}
                className="mt-4 text-gray-600 leading-relaxed bg-transparent outline-none border-b border-dashed border-gray-300 w-full h-30 resize-none"
              />

              {/* Highlights - editable inline, same grid as real page */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {form.highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-green-700 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <input
                      value={item}
                      onChange={(e) => handleHighlightChange(index, e.target.value)}
                      className="text-sm font-medium text-gray-800 bg-transparent outline-none border-b border-dashed border-gray-300 flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => removeHighlight(index)}
                      className="text-red-500 text-s hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>

              {/* Add new highlight */}
              <div className="mt-4 flex gap-2">
                <input
                  value={newHighlight}
                  onChange={(e) => setNewHighlight(e.target.value)}
                  placeholder="Add new highlight"
                  className="flex-1 text-sm border rounded-lg px-3 py-2"
                />
                <button
                  type="button"
                  onClick={addHighlight}
                  className="px-3 py-2 bg-green-700 text-white rounded-lg text-sm hover:bg-green-800"
                >
                  Add
                </button>
              </div>

              {/* Button text - editable */}
              {/* <input
                name="buttonText"
                value={form.buttonText}
                onChange={handleChange}
                className="mt-8 px-6 py-3 text-sm font-semibold text-white bg-green-700 rounded-lg outline-none w-fit"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminAbout;  