import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Plus, Pencil, Trash2 } from "lucide-react";
import { SEED_NOTIFICATIONS, FILTERS } from "../../database/db";

const NOTICES_KEY = "gp_notices";

// Plain color classes for each notice type's badge — no icons, just color.
const TYPE_COLORS = {
  alert: "bg-red-100 text-red-700",
  event: "bg-blue-100 text-blue-700",
  scheme: "bg-amber-100 text-amber-700",
  community: "bg-emerald-100 text-emerald-700",
};

// Reads saved notices from localStorage. If nothing is saved yet,
// it saves the starter notices from db.js and returns those instead.
function loadNotices() {
  const saved = localStorage.getItem(NOTICES_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  localStorage.setItem(NOTICES_KEY, JSON.stringify(SEED_NOTIFICATIONS));
  return SEED_NOTIFICATIONS;
}

function saveNotices(notices) {
  localStorage.setItem(NOTICES_KEY, JSON.stringify(notices));
}

export default function AdminNotificationsPage() {
  // pushToast is optional — comes from the dashboard layout if it provides one.
  const outletContext = useOutletContext() || {};
  const pushToast = outletContext.pushToast || function () {};

  const [notices, setNotices] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);

  // Load notices once, when the page first opens.
  useEffect(() => {
    setNotices(loadNotices());
  }, []);

  // Only show notices that match the selected type AND the search box.
  const visibleNotices = notices.filter((notice) => {
    const matchesType = filterType === "all" || notice.type === filterType;
    const matchesSearch = notice.title.toLowerCase().includes(searchText.toLowerCase());
    return matchesType && matchesSearch;
  });

  function openAddForm() {
    setEditingNotice(null);
    setShowForm(true);
  }

  function openEditForm(notice) {
    setEditingNotice(notice);
    setShowForm(true);
  }

  function handleSaveNotice(formData) {
    let updatedNotices;

    if (editingNotice) {
      // Editing: replace the matching notice with the new data.
      updatedNotices = notices.map((n) =>
        n.id === editingNotice.id ? { ...n, ...formData } : n
      );
      pushToast("Notification updated");
    } else {
      // Adding: put a new notice at the top of the list.
      const newNotice = { id: Date.now().toString(), ...formData };
      updatedNotices = [newNotice, ...notices];
      pushToast("Notification published");
    }

    setNotices(updatedNotices);
    saveNotices(updatedNotices);
    setShowForm(false);
  }

  function handleDeleteNotice(id) {
    const confirmed = window.confirm("Delete this notification?");
    if (!confirmed) return;

    const updatedNotices = notices.filter((n) => n.id !== id);
    setNotices(updatedNotices);
    saveNotices(updatedNotices);
    pushToast("Notification deleted");
  }

  return (
    <div className="lg:ml-10 mt-7">
      {/* Page title + Add button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-emerald-950">Notifications</h2>
          <p className="text-sm text-slate-500">Add and manage notices for the village.</p>
        </div>
        <button
          onClick={openAddForm}
          className="flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          <Plus className="h-4 w-4" />
          Add Notification
        </button>
      </div>

      {/* Total count */}
      <div className="mt-5 flex w-fit items-center gap-3 rounded-lg border border-emerald-700 bg-white p-4">
        <Bell className="h-5 w-5 text-emerald-700" />
        <p className="text-sm font-semibold text-slate-700">
          Total Notices: <span className="font-bold">{notices.length}</span>
        </p>
      </div>

      {/* Type filters + search */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id)}
              className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
                filterType === f.id
                  ? "bg-emerald-700 text-white"
                  : "border border-slate-200 bg-white text-slate-600"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search notices..."
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm sm:w-56"
        />
      </div>

      {/* Notices list */}
      <div className="mt-5 space-y-3">
        {visibleNotices.length === 0 && (
          <p className="rounded-lg border border-dashed border-emerald-800 p-8 text-center text-sm text-slate-500">
            No notifications found.
          </p>
        )}

        {visibleNotices.map((notice) => (
          // A simple fade + slide-up animation each time this card appears.
          <motion.div
            key={notice.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-lg border border-slate-300 bg-white p-4"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span>{notice.date}</span>
              <span>{notice.time}</span>
              <span className={`rounded px-2 py-0.5 text-xs font-semibold ${TYPE_COLORS[notice.type]}`}>
                {notice.type}
              </span>
            </div>

            <h3 className="mt-1 font-bold text-slate-900">{notice.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{notice.desc}</p>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => openEditForm(notice)}
                className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </button>
              <button
                onClick={() => handleDeleteNotice(notice.id)}
                className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add/Edit form popup — AnimatePresence lets it fade out on close,
          instead of just disappearing instantly. */}
      <AnimatePresence>
        {showForm && (
          <NotificationForm
            existingNotice={editingNotice}
            onClose={() => setShowForm(false)}
            onSave={handleSaveNotice}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// A simple form for adding or editing one notice.
function NotificationForm({ existingNotice, onClose, onSave }) {
  const [type, setType] = useState(existingNotice?.type || "alert");
  const [title, setTitle] = useState(existingNotice?.title || "");
  const [desc, setDesc] = useState(existingNotice?.desc || "");
  const [date, setDate] = useState(existingNotice?.date || new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(existingNotice?.time || "09:00 AM");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !desc) return;
    onSave({ type, title, desc, date, time });
  }

  return (
    // Backdrop fades in/out.
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/40 p-4"
    >
      {/* Popup box fades and slides up slightly at the same time. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-md rounded-lg bg-white p-5"
      >
        <h3 className="text-lg font-bold text-emerald-950">
          {existingNotice ? "Edit Notification" : "Add Notification"}
        </h3>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          >
            <option value="alert">Alert</option>
            <option value="event">Event</option>
            <option value="scheme">Scheme</option>
            <option value="community">Community</option>
          </select>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />

          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
            rows={3}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Time"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white"
            >
              Save
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
