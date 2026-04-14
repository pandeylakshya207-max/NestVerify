/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ComparisonPage from './pages/ComparisonPage';
import BuyerDashboard from './pages/BuyerDashboard';
import BuilderLanding from './pages/BuilderLanding';
import BuilderDashboard from './pages/BuilderDashboard';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout wrapper to conditionally show/hide Navbar and Footer
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isDashboard = location.pathname.includes('dashboard');
  
  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<SearchPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/compare" element={<ComparisonPage />} />
          <Route path="/dashboard" element={<BuyerDashboard />} />
          <Route path="/builder-landing" element={<BuilderLanding />} />
          <Route path="/builder-dashboard" element={<BuilderDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
