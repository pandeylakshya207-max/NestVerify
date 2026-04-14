import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Filter, 
  Grid, 
  List, 
  Search, 
  Star, 
  CheckCircle, 
  X, 
  ChevronDown,
  ArrowRight,
  Heart
} from 'lucide-react';
import { PROJECTS, CITIES } from '../data';
import { Project } from '../types';

export default function SearchPage() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [compareList, setCompareList] = React.useState<Project[]>([]);
  const [showFilters, setShowFilters] = React.useState(false);

  // Filter States
  const [selectedCities, setSelectedCities] = React.useState<string[]>(["Bangalore"]);
  const [budget, setBudget] = React.useState(150); // in Lakhs
  const [selectedBHK, setSelectedBHK] = React.useState<string[]>([]);
  const [possession, setPossession] = React.useState<string>('');
  const [reraOnly, setReraOnly] = React.useState(true);

  const toggleCity = (city: string) => {
    setSelectedCities(prev => 
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    );
  };

  const toggleBHK = (bhk: string) => {
    setSelectedBHK(prev => 
      prev.includes(bhk) ? prev.filter(b => b !== bhk) : [...prev, bhk]
    );
  };

  const formatBudget = (val: number) => {
    if (val >= 100) return `₹${(val / 100).toFixed(1)}Cr`;
    return `₹${val}L`;
  };

  const toggleCompare = (project: Project) => {
    if (compareList.find(p => p.id === project.id)) {
      setCompareList(compareList.filter(p => p.id !== project.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, project]);
    }
  };

  return (
    <div className="bg-bg-off min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <Filter size={18} /> Filters
                  </h3>
                  <button 
                    onClick={() => {
                      setSelectedCities([]);
                      setBudget(500);
                      setSelectedBHK([]);
                      setPossession('');
                      setReraOnly(false);
                    }}
                    className="text-xs font-bold text-primary uppercase hover:underline"
                  >
                    Reset
                  </button>
                </div>

                <div className="space-y-8">
                  {/* City */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">City</label>
                    <div className="space-y-2">
                      {CITIES.map(city => (
                        <label key={city} className="flex items-center gap-2 cursor-pointer group">
                          <input 
                            type="checkbox" 
                            className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" 
                            checked={selectedCities.includes(city)}
                            onChange={() => toggleCity(city)}
                          />
                          <span className={`text-sm transition-colors ${selectedCities.includes(city) ? 'text-slate-900 font-bold' : 'text-slate-600 group-hover:text-slate-900'}`}>{city}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Max Budget</label>
                      <div className="text-lg font-black text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
                        {formatBudget(budget)}
                      </div>
                    </div>
                    <div className="px-1 space-y-4">
                      <input 
                        type="range" 
                        min="20" 
                        max="500" 
                        step="5"
                        value={budget}
                        onChange={(e) => setBudget(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" 
                      />
                      <div className="flex justify-between text-[10px] font-bold text-slate-400">
                        <span className="flex flex-col items-start gap-1">
                          <span className="w-px h-2 bg-slate-200"></span>
                          ₹20L
                        </span>
                        <span className="flex flex-col items-center gap-1">
                          <span className="w-px h-2 bg-slate-200"></span>
                          ₹1Cr
                        </span>
                        <span className="flex flex-col items-center gap-1">
                          <span className="w-px h-2 bg-slate-200"></span>
                          ₹2.5Cr
                        </span>
                        <span className="flex flex-col items-end gap-1">
                          <span className="w-px h-2 bg-slate-200"></span>
                          ₹5Cr
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* BHK */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">BHK Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['1BHK', '2BHK', '3BHK', '4BHK+'].map(bhk => (
                        <button 
                          key={bhk} 
                          onClick={() => toggleBHK(bhk)}
                          className={`flex items-center justify-center gap-2 p-2 border rounded-lg transition-all text-xs font-bold ${selectedBHK.includes(bhk) ? 'bg-primary border-primary text-white shadow-md shadow-primary/20' : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-50'}`}
                        >
                          {bhk}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Possession */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Possession</label>
                    <div className="space-y-2">
                      {['Ready Now', '< 1 Year', '1–2 Years', '2+ Years'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="possession" 
                            className="w-4 h-4 border-slate-300 text-primary focus:ring-primary" 
                            checked={possession === opt}
                            onChange={() => setPossession(opt)}
                          />
                          <span className={`text-sm transition-colors ${possession === opt ? 'text-slate-900 font-bold' : 'text-slate-600 group-hover:text-slate-900'}`}>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* RERA Toggle */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-700 uppercase">RERA Verified Only</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={reraOnly}
                        onChange={() => setReraOnly(!reraOnly)}
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                <button className="w-full btn-primary py-3">Apply Filters</button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Quick Filters Bar */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-3 overflow-x-auto pb-2 hide-scrollbar">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Quick Filters:</span>
                {[
                  { label: 'Ready to Move', value: 'Ready Now', type: 'possession' },
                  { label: 'Under 1Cr', value: 100, type: 'budget' },
                  { label: '3 BHK Only', value: '3BHK', type: 'bhk' },
                  { label: 'New Launches', value: '2+ Years', type: 'possession' },
                  { label: 'Verified Only', value: true, type: 'rera' }
                ].map((qf, i) => {
                  const isActive = 
                    (qf.type === 'possession' && possession === qf.value) ||
                    (qf.type === 'budget' && budget <= (qf.value as number)) ||
                    (qf.type === 'bhk' && selectedBHK.includes(qf.value as string)) ||
                    (qf.type === 'rera' && reraOnly === qf.value);

                  return (
                    <button 
                      key={i}
                      onClick={() => {
                        if (qf.type === 'possession') setPossession(isActive ? '' : qf.value as string);
                        if (qf.type === 'budget') setBudget(isActive ? 500 : qf.value as number);
                        if (qf.type === 'bhk') toggleBHK(qf.value as string);
                        if (qf.type === 'rera') setReraOnly(!reraOnly);
                      }}
                      className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${isActive ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' : 'bg-white border-slate-200 text-slate-600 hover:border-primary'}`}
                    >
                      {qf.label}
                    </button>
                  );
                })}
              </div>

              {/* Active Filter Chips */}
              <div className="flex flex-wrap gap-2">
                {selectedCities.map(city => (
                  <button key={city} onClick={() => toggleCity(city)} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors">
                    City: {city} <X size={12} />
                  </button>
                ))}
                {selectedBHK.map(bhk => (
                  <button key={bhk} onClick={() => toggleBHK(bhk)} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors">
                    Type: {bhk} <X size={12} />
                  </button>
                ))}
                {possession && (
                  <button onClick={() => setPossession('')} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors">
                    Status: {possession} <X size={12} />
                  </button>
                )}
                {budget < 500 && (
                  <button onClick={() => setBudget(500)} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors">
                    Max: {formatBudget(budget)} <X size={12} />
                  </button>
                )}
              </div>
            </div>

            {/* Sort Bar */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-900">{PROJECTS.length} projects found</span>
                <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-slate-100 text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    <Grid size={18} />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-slate-100 text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-xs font-bold text-slate-400 uppercase whitespace-nowrap">Sort by:</span>
                <div className="relative flex-1 sm:flex-none">
                  <select className="w-full sm:w-48 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium appearance-none focus:outline-none">
                    <option>Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Completion %</option>
                    <option>Builder Rating</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>
              </div>
            </div>

            {/* Project Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-6'}>
              {PROJECTS.map((project) => (
                <motion.div 
                  layout
                  key={project.id}
                  className={viewMode === 'list' ? 'flex flex-col md:flex-row card' : 'card'}
                >
                  {/* Image Section */}
                  <div className={viewMode === 'list' ? 'md:w-72 h-48 md:h-auto bg-slate-200 relative' : 'h-48 bg-slate-200 relative'}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4 text-center">
                      <span className="text-lg font-bold text-primary/30 uppercase tracking-widest">{project.name}</span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="badge-verified bg-white/90 backdrop-blur-sm">
                        <CheckCircle size={10} /> RERA
                      </span>
                    </div>
                    <button className="absolute top-3 right-3 p-1.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-colors">
                      <Heart size={16} />
                    </button>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-primary mb-0.5 uppercase tracking-wider">
                          {project.builder.name} <CheckCircle size={8} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 leading-tight">{project.name}</h3>
                        <p className="text-xs text-slate-500">{project.locality}, {project.city}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-bold text-primary">{project.priceRange}</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{project.bhkTypes.join(', ')}</div>
                      </div>
                    </div>

                    <div className="space-y-4 mt-auto">
                      <div>
                        <div className="flex justify-between text-[10px] font-bold mb-1 uppercase tracking-wider">
                          <span className="text-slate-500">Progress</span>
                          <span className="text-primary">{project.completionPercentage}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${project.completionPercentage}%` }}></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                        <div className="flex items-center gap-1">
                          <Star size={12} className="text-amber-400 fill-amber-400" />
                          <span className="text-xs font-bold text-slate-700">{project.builder.rating}</span>
                        </div>
                        <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                          Possession: <span className="text-slate-900 font-bold">{project.possessionDate}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-2">
                        <button 
                          onClick={() => navigate(`/project/${project.id}`)}
                          className="flex-1 btn-primary py-2 text-xs"
                        >
                          View Project
                        </button>
                        <button 
                          onClick={() => toggleCompare(project)}
                          className={`px-3 py-2 rounded-lg border transition-all text-xs font-bold ${compareList.find(p => p.id === project.id) ? 'bg-primary border-primary text-white' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                        >
                          {compareList.find(p => p.id === project.id) ? 'Added' : 'Compare'}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Comparison Bar */}
      <AnimatePresence>
        {compareList.length > 0 && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-2xl z-40 p-4"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="hidden sm:block">
                  <h4 className="font-bold text-slate-900">Compare Projects</h4>
                  <p className="text-xs text-slate-500">{compareList.length} of 3 selected</p>
                </div>
                <div className="flex gap-3">
                  {compareList.map(p => (
                    <div key={p.id} className="relative group">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[8px] font-bold text-primary/40 text-center p-1 overflow-hidden">
                        {p.name}
                      </div>
                      <button 
                        onClick={() => toggleCompare(p)}
                        className="absolute -top-2 -right-2 bg-slate-900 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                  {compareList.length < 3 && (
                    <div className="w-12 h-12 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-300">
                      <Search size={16} />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setCompareList([])}
                  className="text-xs font-bold text-slate-400 hover:text-slate-600 uppercase"
                >
                  Clear All
                </button>
                <button 
                  disabled={compareList.length < 2}
                  onClick={() => navigate('/compare', { state: { projects: compareList } })}
                  className="btn-primary py-2 px-8 text-sm disabled:bg-slate-200 disabled:text-slate-400"
                >
                  Compare Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
