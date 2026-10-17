import { villagePhotos } from "../../database/db";

const heroPhoto = villagePhotos[3]; // photo used as the full-screen background

// Small arrow icon used inside the button
function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Animations are defined here so everything stays in one file */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.15); }
        }
      `}</style>

      {/* ---------- HERO ---------- */}
      <section
        id="home"
        aria-labelledby="hero-title"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background photo with slow zoom */}
        <img
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          className="absolute inset-0 h-full w-full object-cover animate-[slowZoom_20s_ease-out_forwards]"
        />

        {/* Dark green shade so the text is easy to read */}
        <div className="absolute inset-0 bg-emerald-950/60" />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center gap-5 px-4 text-center text-amber-50">
          <p
            lang="hi"
            className="text-lg tracking-wide text-emerald-200 opacity-0 animate-[fadeUp_1s_ease-in_forwards]"
            style={{ animationDelay: "0.2s" }}
          >
            जोहार, आपका स्वागत है
          </p>

          <h1
            id="hero-title"
            className="flex flex-col items-center opacity-0 animate-[fadeUp_1s_ease-in_forwards]"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="text-6xl font-semibold tracking-[0.15em] md:text-9xl">MASPUR</span>
            <small lang="hi" className="mt-2 text-2xl text-emerald-200 md:text-4xl">
              मासपुर
            </small>
          </h1>

          <p
            className="max-w-md text-lg text-emerald-50/90 opacity-0 animate-[fadeUp_1s_ease-in_forwards]"
            style={{ animationDelay: "0.8s" }}
          >
            Farms, festivals and a community that shows up for each other.
          </p>
        </div>

        {/* Bottom strip with location */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-between px-6 py-4 text-xs uppercase tracking-widest text-emerald-100/80 md:px-10 md:text-sm">
          <span>Chhattisgarh, India</span>
        </div>
      </section>

      {/* ---------- GALLERY (all six photos) ---------- */}
      <section id="village" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-8 text-center text-3xl font-semibold text-emerald-800 md:text-4xl">
          Life in Maspur
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {villagePhotos.map((photo) => (
            <figure key={photo.src} className="group m-0 overflow-hidden rounded-xl shadow-md">
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
