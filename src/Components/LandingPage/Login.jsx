import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../Routes/auth';

// Fixed admin credentials
const ADMIN_USERNAME = 'Tapasya';
const ADMIN_PASSWORD = 'maspur@123';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // stop page reload

    if (username.trim() === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      login();                                   // save "logged in" flag
      navigate('/dashboard', { replace: true }); // open the dashboard (sidebar page)
    } else {
      setError('Incorrect username or password.');
    }
  }

  return (
    <div className="flex min-h-screen">

      {/* Left panel: village branding (hidden on small screens) */}
      <div className="hidden w-1/2 flex-col justify-center bg-[#08783d] p-12 text-white lg:flex">
        <button onClick={() => navigate('/')} className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ffba09] text-3xl font-black text-[#06342a]">
          M
        </button>
        <h1 className="mt-6 text-4xl font-black">Maspur</h1>
        <p className="mt-1 text-lg font-semibold text-emerald-100/80">
          District Kanker, Chhattisgarh
        </p>
       
      </div>

      {/* Right panel: login form */}
      <div className="flex flex-1 items-center justify-center bg-slate-50 px-4 py-16">
        <div className="w-full max-w-sm rounded-2xl border border-slate-100 bg-white p-8 shadow-md">
          <h2 className="text-2xl font-extrabold text-slate-900">Admin Login</h2>
          <p className="mt-1 text-sm text-slate-500">
            Enter your admin credentials.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="username" className="mb-1 block text-sm font-medium text-slate-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError(''); }}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                placeholder="Enter username"
                autoFocus
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 pr-16 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-700"
                >
                  {/* {showPassword ? 'Hide' : 'Show'} */}
                </button>
              </div>
            </div>

            {/* Only appears when there is an error */}
            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-700 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-emerald-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;