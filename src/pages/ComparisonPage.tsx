import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  X, 
  Star, 
  Shield, 
  MessageSquare, 
  ArrowLeft,
  AlertTriangle
} from 'lucide-react';
import { Project } from '../types';

export default function ComparisonPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const projects: Project[] = location.state?.projects || [];

  if (projects.length === 0) {
    return (
      <div className="min-h-screen bg-bg-off flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">No projects selected for comparison</h2>
        <button onClick={() => navigate('/explore')} className="btn-primary">Explore Projects</button>
      </div>
    );
  }

  const attributes = [
    { label: "Builder", key: "builder", render: (p: Project) => (
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-primary">{p.builder.name[0]}</div>
        <div className="text-xs font-bold text-slate-900">{p.builder.name}</div>
        <div className="flex items-center gap-1 text-[10px] font-bold text-amber-500">
          <Star size={10} fill="currentColor" /> {p.builder.rating}
        </div>
      </div>
    )},
    { label: "Price Range", key: "priceRange", render: (p: Project) => <span className="font-bold text-primary">{p.priceRange}</span> },
    { label: "BHK Options", key: "bhkTypes", render: (p: Project) => <span className="text-sm font-medium">{p.bhkTypes.join(', ')}</span> },
    { label: "Area Range", key: "areaRange", render: (p: Project) => <span className="text-sm">{p.areaRange}</span> },
    { label: "Possession Date", key: "possessionDate", render: (p: Project) => <span className="font-bold">{p.possessionDate}</span> },
    { label: "Completion %", key: "completionPercentage", render: (p: Project) => (
      <div className="w-full max-w-[120px] mx-auto">
        <div className="flex justify-between text-[10px] font-bold mb-1">
          <span>{p.completionPercentage}%</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: `${p.completionPercentage}%` }}></div>
        </div>
      </div>
    )},
    { label: "RERA Verified", key: "reraId", render: (p: Project) => (
      <div className="flex flex-col items-center gap-1">
        <CheckCircle size={16} className="text-green-500" />
        <span className="text-[10px] font-bold text-slate-400">{p.reraId}</span>
      </div>
    )},
    { label: "Delay History", key: "delayWarning", render: (p: Project) => (
      p.delayWarning ? (
        <div className="text-amber-600 flex items-center gap-1 justify-center text-[10px] font-bold">
          <AlertTriangle size={12} /> {p.delayWarning}
        </div>
      ) : (
        <div className="text-green-600 text-[10px] font-bold">No delays reported</div>
      )
    )},
    { label: "Location", key: "locality", render: (p: Project) => <span className="text-sm">{p.locality}, {p.city}</span> },
  ];

  return (
    <div className="bg-bg-off min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-12">
          <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-full border border-slate-200 text-slate-600 hover:text-primary transition-colors">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-3xl font-bold text-slate-900">Comparing {projects.length} Projects</h1>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="p-8 w-64 bg-slate-50 border-r border-slate-100"></th>
                  {projects.map(p => (
                    <th key={p.id} className="p-8 min-w-[280px] text-center relative group">
                      <div className="h-40 bg-slate-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                        <span className="text-lg font-bold text-primary/30 uppercase tracking-widest">{p.name}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{p.name}</h3>
                      <button className="absolute top-4 right-4 p-1.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                        <X size={16} />
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {attributes.map((attr, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 bg-slate-50 border-r border-slate-100 text-sm font-bold text-slate-500 uppercase tracking-wider">
                      {attr.label}
                    </td>
                    {projects.map(p => (
                      <td key={p.id} className="p-6 text-center">
                        {attr.render(p)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-6 bg-slate-50 border-r border-slate-100"></td>
                  {projects.map(p => (
                    <td key={p.id} className="p-8 text-center">
                      <button className="w-full btn-primary py-3 flex items-center justify-center gap-2">
                        <MessageSquare size={18} /> Chat with Builder
                      </button>
                      <button 
                        onClick={() => navigate(`/project/${p.id}`)}
                        className="w-full text-xs font-bold text-primary mt-4 hover:underline"
                      >
                        View Full Details
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
