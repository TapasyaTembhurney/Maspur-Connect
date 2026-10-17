import { useEffect, useState } from "react";
import { gallery as seedGallery } from "../../database/db";

const STORAGE_KEY = "gp_gallery";

function loadGallery() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore parse errors, fall through to seed
  }
  const seeded = seedGallery.map((item, idx) => ({
    id: item.id ?? `seed-${idx}`,
    ...item,
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
  return seeded;
}

// Alternates row sizes 1, 2, 1, 2... e.g. [1 item], [2 items], [1 item], [2 items]...
function buildRows(items) {
  const rows = [];
  for (let i = 0, row = 0; i < items.length; row++) {
    const size = row % 2 === 0 ? 1 : 2;
    rows.push(items.slice(i, i + size));
    i += size;
  }
  return rows;
}

const HEIGHT = {
  tall: "h-[280px] sm:h-[360px] lg:h-[420px]",
  short: "h-[200px] sm:h-[260px] lg:h-[300px]",
};

function Tile({ item, tall }) {
  return (
    <figure className="gallery-tile group relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
      <img
        src={item.src}
        alt={item.caption}
        className={`w-full object-cover ${tall ? HEIGHT.tall : HEIGHT.short}`}
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gp-deeper/85 via-gp-deeper/40 to-transparent px-4 pb-4 pt-10 text-white">
        <p className="text-sm font-semibold sm:text-base">{item.caption}</p>
        <p className="text-xs text-emerald-100/80">{item.hindi}</p>
      </figcaption>
    </figure>
  );
}

export function GalleryPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(loadGallery());
  }, []);

  const rows = buildRows(items);

  return (
    <div className="fade-up p-10 lg:p-10 ">
      <p className="mb-5 text-sm text-emerald-800/70">
        Life in Mashpur — fields, school, and the panchayat campus.
      </p>

      <div className="flex flex-col gap-10">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-4">
            {row.map((item) => (
              <Tile key={item.id ?? item.caption} item={item} tall={row.length === 1} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
