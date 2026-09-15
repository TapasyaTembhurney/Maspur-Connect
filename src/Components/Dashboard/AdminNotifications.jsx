import { useState, useEffect } from 'react';

// Same key the admin dashboard writes to, so anything the admin
// adds/edits/deletes shows up here automatically.
const NOTIFICATIONS_KEY = 'village_notifications';

// Small color badge per category, matching the admin dashboard's style.
const typeStyles = {
  alert: 'bg-red-50 text-red-600 border-red-200',
  event: 'bg-green-50 text-green-700 border-green-200',
  scheme: 'bg-amber-50 text-amber-700 border-amber-300',
  community: 'bg-sky-50 text-sky-700 border-sky-200',
};

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    // Newest published notices first (higher id = added more recently)
    const sorted = [...saved].sort((a, b) => b.id - a.id);
    setNotifications(sorted);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">Suchnaye</span>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Village Notifications</h1>
          <p className="mt-4 text-lg text-gray-600">
            Important announcements and updates from the Mashpur Gram Panchayat.
          </p>
        </div>

        {notifications.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center text-gray-500">
            No notifications have been posted yet.
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((note) => (
              <div key={note.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h3 className="text-lg font-bold text-gray-900">{note.title}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border whitespace-nowrap ${typeStyles[note.type] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                    {note.date} · {note.time}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{note.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Notifications;
