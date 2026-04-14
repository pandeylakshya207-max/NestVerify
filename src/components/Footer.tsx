import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <CheckCircle className="text-primary w-6 h-6" />
              <span className="text-2xl font-bold tracking-tight">NestVerify</span>
            </Link>
            <p className="text-sm leading-relaxed">
              The property accountability platform. We hold builders accountable through real-time tracking and verified data.
            </p>
            <div className="flex gap-4">
              <Facebook size={20} className="hover:text-primary cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-primary cursor-pointer transition-colors" />
              <Instagram size={20} className="hover:text-primary cursor-pointer transition-colors" />
              <Linkedin size={20} className="hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/explore" className="hover:text-white transition-colors">Explore Projects</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><Link to="/builder-landing" className="hover:text-white transition-colors">For Builders</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">RERA Info</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold mb-6">For Builders</h4>
            <p className="text-sm">Are you a developer? List your projects and build trust with buyers.</p>
            <Link to="/builder-landing" className="inline-block btn-accent w-full text-center">
              List Your Project
            </Link>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} />
              <span>support@nestverify.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 NestVerify. All rights reserved.</p>
          <p>Made with transparency for home buyers in India.</p>
        </div>
      </div>
    </footer>
  );
}
