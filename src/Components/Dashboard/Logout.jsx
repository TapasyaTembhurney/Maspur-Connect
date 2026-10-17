import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Routes/auth';

const EASE = [0.16, 1, 0.3, 1];

function Logout({ onStay }) {
  const navigate = useNavigate();

  function handleLogout() {
    logout();                          // remove the logged-in flag
    navigate('/', { replace: true });  // go to the landing page
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onStay}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 18 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
          <LogOut className="h-5 w-5" />
        </span>

        <h3 className="mt-4 text-lg font-extrabold text-slate-900">
          Logout of Panchayat Admin?
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
          You will return to the public Maspur village website.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onStay}
            className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50"
          >
            Stay
          </button>
          <button
            onClick={handleLogout}
            className="flex-1 rounded-lg bg-emerald-700 py-2.5 text-sm font-bold text-white shadow-md hover:bg-emerald-800"
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Logout;