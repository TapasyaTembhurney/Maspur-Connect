import { useState, useEffect } from 'react';

const STORAGE_KEY = 'village_notifications';

const formatDateTime = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    // Newest first
    const sorted = [...stored].sort(
      (a, b) => new Date(b.datetime) - new Date(a.datetime)
    );
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
              <div
                key={note.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h3 className="text-lg font-bold text-gray-900">{note.title}</h3>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full whitespace-nowrap">
                    {formatDateTime(note.datetime)}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{note.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Notifications;
