import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { NAV_ITEMS } from '../../database/db';
import { Icon } from '../Icons/Icons';
import Logout from './Logout';

export default function Sidebar({ open, onClose }) {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation(); // current URL, used to highlight the active item

  function goTo(path) {
    navigate(path);
    onClose?.(); // close the sidebar on mobile
  }

  return (
    <>
      {/* Dark overlay on mobile when the sidebar is open */}
      {open && (
        <button
          aria-label="Close navigation"
          className="fixed inset-0 z-30 bg-[#052c22]/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-[320px] flex-col overflow-y-auto bg-[#08783d] text-white transition-transform duration-300 lg:w-[365px] lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Village name */}
        <div className="border-b border-white/15 px-7 py-6 lg:px-8 lg:py-7">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffba09] text-[#06342a] shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
              <Icon name="home" size={28} />
            </div>
            <div>
              <p className="text-[25px] font-black leading-none tracking-[-0.05em]">Maspur</p>
              <p className="mt-1 text-sm font-semibold text-emerald-100/80">
                District Kanker, Chhattisgarh
              </p>
            </div>
          </div>
        </div>

        {/* Menu items */}
        <nav className="flex-1 px-5 py-8">
          <p className="mb-5 px-3 text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-200/65">
            Panchayat menu
          </p>
          <div className="space-y-2">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.path;
              return (
                <button
                  key={item.id}
                  onClick={() => goTo(item.path)}
                  className={cn(
                    'group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-[17px] font-bold transition duration-200',
                    active
                      ? 'bg-[#ffba09] text-[#06342a] shadow-[0_8px_18px_rgba(0,0,0,0.12)]'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  )}
                >
                  <Icon
                    name={item.icon}
                    size={22}
                    className={cn(
                      'shrink-0',
                      active ? 'text-[#006e43]' : 'text-emerald-100/80 group-hover:text-white'
                    )}
                  />
                  <span className="flex-1">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Admin card + logout button */}
        <div className="border-t border-white/10 p-5 lg:p-6">
          <div className="flex items-center gap-3 rounded-xl bg-black/15 px-4 py-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#ffba09] text-sm font-black text-[#06342a]">
              DM
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-extrabold">Diya Markam</p>
              <p className="truncate text-xs font-semibold text-emerald-100/80">
                Sarpanch · Panchayat Admin
              </p>
            </div>
            <Icon name="shield" size={18} className="text-[#ffba09]" />
          </div>

          <button
            onClick={() => setShowLogout(true)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 px-4 py-3 text-[16px] font-bold text-white transition hover:bg-white/10"
          >
            <Icon name="logout" size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Logout popup */}
      <AnimatePresence>
        {showLogout && <Logout onStay={() => setShowLogout(false)} />}
      </AnimatePresence>
    </>
  );
}