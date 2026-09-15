import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function LandingPg() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPg;
