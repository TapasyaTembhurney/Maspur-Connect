import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CREDENTIALS_KEY = 'admin_credentials';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored = JSON.parse(localStorage.getItem(CREDENTIALS_KEY) || 'null');

    if (!stored) {
      setError('No account found. Please register first.');
      return;
    }

    if (stored.username === username.trim() && stored.password === password) {
      localStorage.setItem('admin_authenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Incorrect username or password.');
    }
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4 py-16">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md border border-gray-100 p-8">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto bg-gradient-to-br from-amber-500 to-green-700 rounded-xl flex items-center justify-center shadow-md mb-4">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900">Admin Login</h1>
          <p className="mt-1 text-sm text-gray-500">Enter your admin credentials to manage notices.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (error) setError('');
              }}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="e.g. mashpur_admin"
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError('');
              }}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600">
              {error}
              {error.includes('register') && (
                <>
                  {' '}
                  <Link to="/register" className="font-semibold text-green-700 hover:underline">
                    Register here
                  </Link>
                </>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2.5 text-sm font-semibold text-white bg-green-700 rounded-lg hover:bg-green-800 transition-colors shadow-sm"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="font-semibold text-green-700 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
