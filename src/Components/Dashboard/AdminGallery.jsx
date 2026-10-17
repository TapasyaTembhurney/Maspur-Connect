// import { gallery } from "../../database/db";

// // Alternates row sizes 1, 2, 1, 2... e.g. [1 item], [2 items], [1 item], [2 items]...
// function buildRows(items) {
//   const rows = [];
//   for (let i = 0, row = 0; i < items.length; row++) {
//     const size = row % 2 === 0 ? 1 : 2;
//     rows.push(items.slice(i, i + size));
//     i += size;
//   }
//   return rows;
// }

// const HEIGHT = {
//   tall: "h-[280px] sm:h-[360px] lg:h-[420px]",
//   short: "h-[200px] sm:h-[260px] lg:h-[300px]",
// };

// function Tile({ item, tall }) {
//   return (
//     <figure className="gallery-tile group relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
//       <img
//         src={item.src}
//         alt={item.caption}
//         className={`w-full object-cover ${tall ? HEIGHT.tall : HEIGHT.short}`}
//       />
//       <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gp-deeper/85 via-gp-deeper/40 to-transparent px-4 pb-4 pt-10 text-white">
//         <p className="text-sm font-semibold sm:text-base">{item.caption}</p>
//         <p className="text-xs text-emerald-100/80">{item.hindi}</p>
//       </figcaption>
//     </figure>
//   );
// }

// export function GalleryPage() {
//   const rows = buildRows(gallery);

//   return (
//     <div className="fade-up p-9 lg:p-3 ml-30">
//       <p className="mb-5 text-sm text-emerald-800/70 ">
//         Life in Mashpur — fields, school, and the panchayat campus.
//       </p>

//       <div className="flex flex-col gap-10">
//         {rows.map((row, i) => (
//           <div key={i} className="flex gap-4">
//             {row.map((item) => (
//               <Tile key={item.caption} item={item} tall={row.length === 1} />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default GalleryPage;


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

function saveGallery(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
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

function Tile({ item, tall, onEdit, onDelete }) {
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

      <div className="absolute right-2 top-2 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          type="button"
          onClick={() => onEdit(item)}
          className="rounded-lg bg-white/90 px-2 py-1 text-xs font-semibold text-emerald-800 shadow hover:bg-white"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(item.id)}
          className="rounded-lg bg-white/90 px-2 py-1 text-xs font-semibold text-red-600 shadow hover:bg-white"
        >
          Delete
        </button>
      </div>
    </figure>
  );
}

const EMPTY_FORM = { src: "", caption: "", hindi: "" };

export function AdminGalleryPage() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    setItems(loadGallery());
  }, []);

  function resetForm() {
    setForm(EMPTY_FORM);
    setEditingId(null);
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.src || !form.caption) return;

    let updated;
    if (editingId) {
      updated = items.map((it) => (it.id === editingId ? { ...it, ...form } : it));
    } else {
      updated = [...items, { id: crypto.randomUUID(), ...form }];
    }

    saveGallery(updated);
    setItems(updated);
    resetForm();
  }

  function handleEdit(item) {
    setEditingId(item.id);
    setForm({ src: item.src, caption: item.caption, hindi: item.hindi ?? "" });
  }

  function handleDelete(id) {
    const updated = items.filter((it) => it.id !== id);
    saveGallery(updated);
    setItems(updated);
    if (editingId === id) resetForm();
  }

  const rows = buildRows(items);

  return (
    <div className="fade-up p-9 lg:p-3 ml-10">
      <p className="mb-5 text-sm text-emerald-800/70 text-center">
        Manage gallery images — changes appear on the public gallery instantly.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mb-8 grid gap-3 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm sm:grid-cols-3 ml-15"
      >
        <input
          name="src"
          value={form.src}
          onChange={handleChange}
          placeholder="Image URL"
          className="rounded-lg border border-emerald-200 px-3 py-2 text-sm"
          required
        />
        <input
          name="caption"
          value={form.caption}
          onChange={handleChange}
          placeholder="Caption (English)"
          className="rounded-lg border border-emerald-200 px-3 py-2 text-sm"
          required
        />
        <input
          name="hindi"
          value={form.hindi}
          onChange={handleChange}
          placeholder="Caption (Hindi)"
          className="rounded-lg border border-emerald-200 px-3 py-2 text-sm"
        />
        <div className="sm:col-span-3 flex gap-2">
          <button
            type="submit"
            className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            {editingId ? "Update Image" : "Add Image"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="flex flex-col gap-10 ml-16">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-4">
            {row.map((item) => (
              <Tile
                key={item.id ?? item.caption}
                item={item}
                tall={row.length === 1}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminGalleryPage;
