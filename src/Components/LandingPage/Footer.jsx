import { Link } from 'react-router-dom';

const quickLinks = [
  // { label: 'What we do ?', href: '/what-we-do' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Suchnaye', href: '/notifications' },
];

const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-green-700 rounded-xl flex items-center justify-center shadow-md shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block text-xl font-extrabold text-white tracking-tight">Maspur</span>
              <span className="block text-[11px] font-medium text-green-400 -mt-0.5">District Kanker, Chhattisgarh</span>
            </div>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-gray-400">
            Maspur Gram Panchayat, District Kanker, Chhattisgarh — working towards a connected,
            educated, and self-reliant village community.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="hover:text-amber-400 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Maspur, Kanker, Chhattisgarh</li>
            <li>contact@maspur.in</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Maspur Gram Panchayat. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
