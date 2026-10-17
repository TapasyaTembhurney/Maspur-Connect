import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const Logo = () => (
  <Link to="/" className="flex items-center gap-3">
    <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-green-700 rounded-xl flex items-center justify-center shadow-md shrink-0">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </div>
    <div className="leading-tight">
      <span className="block text-xl font-extrabold text-gray-900 tracking-tight">Maspur</span>
      <span className="block text-[11px] font-medium text-green-700 -mt-0.5">District Kanker, Chhattisgarh</span>
    </div>
  </Link> 
);

  const NotificationBell = () => (
    <Link to="/notifications" className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors inline-flex" aria-label="Notifications">
      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </Link>
  );

// Links that live on the landing page itself use a hash so they scroll to
// the right section; "Suchnaye" is a real route to the public notices page.
const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={cn(
      'sticky top-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 mr-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <NotificationBell />
            {/* <button className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-green-700 border-2 border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Ready to Volunteer
            </button> */}
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-semibold text-white bg-green-700 rounded-lg hover:bg-green-800 transition-colors shadow-sm"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
