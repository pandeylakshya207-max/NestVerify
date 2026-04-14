import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <CheckCircle className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">NestVerify</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/explore" className="text-slate-600 hover:text-primary font-medium transition-colors">Explore Projects</Link>
            <a href="#how-it-works" className="text-slate-600 hover:text-primary font-medium transition-colors">How It Works</a>
            <Link to="/builder-landing" className="text-slate-600 hover:text-primary font-medium transition-colors">For Builders</Link>
            <Link to="/dashboard" className="text-slate-600 hover:text-primary font-medium transition-colors">Login</Link>
            <button 
              onClick={() => navigate('/explore')}
              className="btn-primary"
            >
              Find Your Home
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4">
          <Link to="/explore" className="block text-slate-600 font-medium">Explore Projects</Link>
          <a href="#how-it-works" className="block text-slate-600 font-medium">How It Works</a>
          <Link to="/builder-landing" className="block text-slate-600 font-medium">For Builders</Link>
          <Link to="/dashboard" className="block text-slate-600 font-medium">Login</Link>
          <button 
            onClick={() => {
              navigate('/explore');
              setIsOpen(false);
            }}
            className="w-full btn-primary"
          >
            Find Your Home
          </button>
        </div>
      )}
    </nav>
  );
}
