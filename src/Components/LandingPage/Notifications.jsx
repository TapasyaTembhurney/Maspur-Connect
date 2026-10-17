import { useEffect, useState } from "react";
import { seedNotifications as seedNotices } from "../../database/db";

const STORAGE_KEY = "gp_notices";

function loadNotices() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore parse errors, fall through to seed
  }
  const seeded = seedNotices.map((n, idx) => ({ id: n.id ?? `seed-${idx}`, ...n }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
  return seeded;
}

export function NoticesPage() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    setNotices(loadNotices());
  }, []);

  const unreadCount = notices.filter((n) => n.unread).length;

  return (
    <div className="fade-up space-y-4 p-4 lg:p-8">
      <p className="text-sm text-emerald-800/70">
        Official suchnaye from Mashpur Gram Panchayat.
        {unreadCount > 0 && ` ${unreadCount} item${unreadCount > 1 ? "s" : ""} need your attention.`}
      </p>
      <ul className="space-y-3">
        {notices.map((n) => (
          <li
            key={n.id}
            className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${n.tagColor}`}>
                {n.tag}
              </span>
              {n.unread && (
                <span className="rounded-full bg-gp px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                  New
                </span>
              )}
              <span className="ml-auto text-xs text-emerald-800/55">{n.date}</span>
            </div>
            <h4 className="mt-2 text-base font-semibold text-emerald-950">{n.title}</h4>
            <p className="text-xs text-emerald-800/60">{n.hindi}</p>
            <p className="mt-2 text-sm leading-relaxed text-emerald-900/75">{n.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoticesPage;
