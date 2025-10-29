import { Link } from 'react-router-dom';
import { Mountain } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">Kupanda</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">Home</Link>
            <Link to="/find-ride" className="text-gray-600 hover:text-green-600 transition-colors">Find a Ride</Link>
            <Link to="/offer-ride" className="text-gray-600 hover:text-green-600 transition-colors">Offer a Ride</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}