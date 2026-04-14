import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  MapPin, 
  CheckCircle, 
  Star, 
  Calendar, 
  Maximize, 
  Shield, 
  MessageSquare, 
  Heart,
  Share2,
  ChevronRight,
  Clock,
  AlertTriangle,
  Camera,
  Play,
  Download,
  School,
  Hospital,
  Train,
  Briefcase,
  ShoppingBag
} from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('Overview');
  
  const project = PROJECTS.find(p => p.id === id) || PROJECTS[0];

  const tabs = ['Overview', 'Construction Live', 'Builder Profile', 'Reviews', 'Location', 'Q&A'];

  return (
    <div className="bg-bg-off min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
          <ChevronRight size={12} />
          <button onClick={() => navigate('/explore')} className="hover:text-primary">{project.city}</button>
          <ChevronRight size={12} />
          <span className="text-slate-900">{project.locality}</span>
          <ChevronRight size={12} />
          <span className="text-slate-900 font-bold">{project.name}</span>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 h-[400px] md:h-[500px]">
          <div className="lg:col-span-3 bg-slate-200 rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary/20 uppercase tracking-widest">Main Project View</span>
            </div>
            <div className="absolute bottom-6 left-6 flex gap-3">
              <button className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm hover:bg-white transition-colors">
                <Camera size={14} /> View All 24 Photos
              </button>
              <button className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm hover:bg-white transition-colors">
                <Play size={14} /> 3D Tour
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {['Drone View', 'Floor Plan', 'Site Photo', 'Amenities'].map((label, i) => (
              <div key={i} className="bg-slate-200 rounded-2xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary/20 uppercase tracking-widest">{label}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-3 left-3 bg-slate-900/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-wrap justify-between items-center gap-8">
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-3xl font-bold text-slate-900">{project.name}</h1>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.status === 'Ready to Move' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                {project.status}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><MapPin size={14} /> {project.locality}, {project.city}</span>
              <span className="flex items-center gap-1 text-primary font-bold"><CheckCircle size={14} /> RERA: {project.reraId}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Price Range</div>
              <div className="text-xl font-bold text-primary">{project.priceRange}</div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Area Range</div>
              <div className="text-xl font-bold text-slate-900">{project.areaRange}</div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Possession</div>
              <div className="text-xl font-bold text-slate-900">{project.possessionDate}</div>
            </div>
            <div className="flex items-center gap-3 border-l border-slate-100 pl-8">
              <div className="text-right">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Builder Rating</div>
                <div className="flex items-center gap-1 justify-end">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  <span className="text-lg font-bold text-slate-900">{project.builder.rating}</span>
                </div>
              </div>
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-primary font-bold">
                {project.builder.name[0]}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* Tabs Navigation */}
            <div className="flex border-b border-slate-200 mb-8 overflow-x-auto hide-scrollbar sticky top-16 bg-bg-off z-30 pt-4">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-all border-b-2 ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-12">
              {activeTab === 'Overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">About the Project</h3>
                    <p className="text-slate-600 leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-6">BHK Configurations</h3>
                    <div className="overflow-hidden rounded-xl border border-slate-200">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-bottom border-slate-200">
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Type</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Carpet Area</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Price Range</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Available</th>
                            <th className="px-6 py-4"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {project.configurations?.map((config, i) => (
                            <tr key={i} className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4 font-bold text-slate-900">{config.type}</td>
                              <td className="px-6 py-4 text-slate-600">{config.area}</td>
                              <td className="px-6 py-4 font-bold text-primary">{config.price}</td>
                              <td className="px-6 py-4 text-slate-600">{config.available} units</td>
                              <td className="px-6 py-4 text-right">
                                <button className="text-primary font-bold text-xs hover:underline">View Plan</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {project.amenities?.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            <CheckCircle size={20} />
                          </div>
                          <span className="text-sm font-medium text-slate-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Key Highlights</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {project.highlights?.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-primary font-bold">
                          <Shield size={18} />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === 'Construction Live' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                  {/* Completion Meter */}
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-12">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
                        <motion.circle 
                          cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" 
                          strokeDasharray={552.92}
                          initial={{ strokeDashoffset: 552.92 }}
                          animate={{ strokeDashoffset: 552.92 * (1 - project.completionPercentage / 100) }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="text-primary" 
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-black text-slate-900">{project.completionPercentage}%</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Complete</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-6">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Expected Possession</div>
                          <div className="text-xl font-bold text-slate-900">{project.possessionDate}</div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">At Current Pace</div>
                          <div className="text-xl font-bold text-slate-900">Feb 2026</div>
                        </div>
                      </div>
                      {project.delayWarning && (
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center gap-3 text-amber-800">
                          <AlertTriangle className="text-amber-500" />
                          <div className="text-sm font-bold">{project.delayWarning}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Construction Timeline */}
                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-8">Project Milestones</h3>
                    <div className="relative">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-0"></div>
                      <div className="flex justify-between relative z-10">
                        {project.timeline?.map((milestone, i) => (
                          <div key={i} className="flex flex-col items-center text-center max-w-[120px]">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 border-4 border-bg-off shadow-sm ${
                              milestone.status === 'Completed' ? 'bg-green-500 text-white' : 
                              milestone.status === 'In Progress' ? 'bg-amber-500 text-white animate-pulse-amber' : 
                              'bg-slate-200 text-slate-400'
                            }`}>
                              {milestone.status === 'Completed' ? <CheckCircle size={18} /> : 
                               milestone.status === 'In Progress' ? <Clock size={18} /> : 
                               <div className="w-2 h-2 bg-current rounded-full" />}
                            </div>
                            <div className="text-xs font-bold text-slate-900 mb-1">{milestone.stage}</div>
                            <div className="text-[10px] font-medium text-slate-500">{milestone.date}</div>
                            {milestone.status === 'Completed' && (
                              <div className="mt-2 text-[10px] font-bold text-green-600 uppercase">Verified</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Latest Updates Feed */}
                  <section>
                    <div className="flex justify-between items-end mb-8">
                      <h3 className="text-xl font-bold text-slate-900">Latest from the site</h3>
                      <button className="text-primary font-bold text-sm flex items-center gap-1">
                        View History <ChevronRight size={16} />
                      </button>
                    </div>
                    <div className="space-y-6">
                      {project.updates?.map((update) => (
                        <div key={update.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
                          <div className="md:w-64 h-40 bg-slate-100 rounded-xl overflow-hidden relative group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                              <Camera size={24} className="text-primary/20" />
                            </div>
                            <div className="absolute bottom-2 right-2 bg-slate-900/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-white">
                              +2 Photos
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{update.date}</div>
                                <h4 className="text-lg font-bold text-slate-900">{update.title}</h4>
                              </div>
                              <div className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase">
                                {update.completion}% Complete
                              </div>
                            </div>
                            <p className="text-sm text-slate-600 mb-4">{update.description}</p>
                            <div className="flex items-center gap-4">
                              {update.verified && (
                                <span className="badge-verified">
                                  <Shield size={12} /> Verified by NestVerify
                                </span>
                              )}
                              <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-1">
                                <Share2 size={14} /> Share
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-4 text-sm font-bold text-slate-500 hover:text-primary transition-colors border-2 border-dashed border-slate-200 rounded-2xl mt-8">
                      Load More Updates
                    </button>
                  </section>
                </motion.div>
              )}

              {activeTab === 'Builder Profile' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                      <div className="w-24 h-24 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl font-bold text-primary border border-slate-200">
                        {project.builder.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-slate-900">{project.builder.name}</h3>
                          <span className="badge-verified">
                            <Shield size={12} /> Verified Builder
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                          <span>Founded: <span className="text-slate-900 font-bold">{project.builder.founded}</span></span>
                          <span>HQ: <span className="text-slate-900 font-bold">{project.builder.hq}</span></span>
                          <span>Projects Delivered: <span className="text-slate-900 font-bold">{project.builder.delivered}+</span></span>
                        </div>
                      </div>
                      <button className="btn-primary flex items-center gap-2">
                        <MessageSquare size={18} /> Chat with Builder
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Reliability Score Breakdown</h4>
                        <div className="space-y-6">
                          {[
                            { label: "Overall Reliability", score: project.builder.reliability?.overall, max: 5 },
                            { label: "On-time Delivery", score: project.builder.reliability?.onTime, max: 100, unit: "%" },
                            { label: "Construction Quality", score: project.builder.reliability?.quality, max: 5 },
                            { label: "Buyer Communication", score: project.builder.reliability?.communication, max: 5 },
                            { label: "Post-handover Support", score: project.builder.reliability?.support, max: 5 },
                          ].map((item, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-sm font-bold mb-2">
                                <span className="text-slate-700">{item.label}</span>
                                <span className="text-primary">{item.score}{item.unit || ''}</span>
                              </div>
                              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: `${(item.score || 0) / item.max * 100}%` }}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Past Projects Performance</h4>
                        <div className="overflow-hidden rounded-xl border border-slate-100">
                          <table className="w-full text-left text-xs">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="px-4 py-3 font-bold text-slate-500 uppercase">Project</th>
                                <th className="px-4 py-3 font-bold text-slate-500 uppercase">City</th>
                                <th className="px-4 py-3 font-bold text-slate-500 uppercase">Delivery</th>
                                <th className="px-4 py-3 font-bold text-slate-500 uppercase">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                              {project.builder.pastProjects?.map((p, i) => (
                                <tr key={i}>
                                  <td className="px-4 py-3 font-bold text-slate-900">{p.name}</td>
                                  <td className="px-4 py-3 text-slate-500">{p.city}</td>
                                  <td className={`px-4 py-3 font-bold ${p.delivery === 'On Time' ? 'text-green-600' : 'text-amber-600'}`}>{p.delivery}</td>
                                  <td className="px-4 py-3"><span className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-bold text-slate-600 uppercase">{p.status}</span></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'Reviews' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="text-5xl font-black text-slate-900 mb-2">4.6</div>
                        <div className="flex justify-center text-amber-400 mb-2">
                          {[...Array(5)].map((_, i) => <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} />)}
                        </div>
                        <div className="text-sm font-medium text-slate-500 mb-8">Based on 147 reviews</div>
                        
                        <div className="space-y-3">
                          {[5, 4, 3, 2, 1].map(star => (
                            <div key={star} className="flex items-center gap-3">
                              <span className="text-xs font-bold text-slate-500 w-4">{star}★</span>
                              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-amber-400 rounded-full" style={{ width: `${star === 5 ? 70 : star === 4 ? 20 : 5}%` }}></div>
                              </div>
                              <span className="text-[10px] font-bold text-slate-400 w-8">{star === 5 ? 102 : star === 4 ? 32 : 5}</span>
                            </div>
                          ))}
                        </div>
                        
                        <button className="w-full btn-primary mt-8">Write a Review</button>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 space-y-8">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          {['All', 'Verified Buyers', 'With Photos'].map(f => (
                            <button key={f} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${f === 'All' ? 'bg-primary text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-primary'}`}>
                              {f}
                            </button>
                          ))}
                        </div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sort: Newest</div>
                      </div>
                      
                      {project.reviews?.map((review) => (
                        <div key={review.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
                                {review.user[0]}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-slate-900">{review.user}</span>
                                  {review.verified && <span className="badge-verified text-[8px]">Verified Buyer</span>}
                                </div>
                                <div className="text-[10px] text-slate-400 font-medium">{review.city} • {review.date}</div>
                              </div>
                            </div>
                            <div className="flex text-amber-400">
                              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />)}
                            </div>
                          </div>
                          <h5 className="font-bold text-slate-900 mb-2">{review.title}</h5>
                          <p className="text-sm text-slate-600 leading-relaxed mb-6">{review.body}</p>
                          <div className="flex items-center gap-4">
                            <button className="text-xs font-bold text-slate-400 hover:text-primary flex items-center gap-1 transition-colors">
                              Helpful ({review.helpful})
                            </button>
                            <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors">Report</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'Location' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                  <div className="bg-slate-200 h-[400px] rounded-2xl relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-primary animate-bounce">
                        <MapPin size={32} />
                      </div>
                      <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold text-slate-900">
                        {project.name}
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-6 flex gap-2">
                      <button className="bg-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg hover:bg-slate-50 transition-colors">Open in Maps</button>
                      <button className="bg-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg hover:bg-slate-50 transition-colors">Get Directions</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { title: "Schools", icon: School, items: project.location?.nearby.schools },
                      { title: "Hospitals", icon: Hospital, items: project.location?.nearby.hospitals },
                      { title: "Metro Stations", icon: Train, items: project.location?.nearby.metro },
                      { title: "IT Parks", icon: Briefcase, items: project.location?.nearby.itParks },
                      { title: "Malls & Shopping", icon: ShoppingBag, items: ["Phoenix Marketcity (4.5km)", "VR Bengaluru (4.2km)"] },
                    ].map((cat, i) => (
                      <div key={i} className="space-y-4">
                        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest">
                          <cat.icon size={18} className="text-primary" /> {cat.title}
                        </h4>
                        <ul className="space-y-3">
                          {cat.items?.map((item, j) => (
                            <li key={j} className="text-sm text-slate-600 flex justify-between items-center group">
                              <span>{item}</span>
                              <ChevronRight size={14} className="text-slate-300 group-hover:text-primary transition-colors" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'Q&A' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Have a question?</h3>
                    <div className="flex gap-4">
                      <input 
                        type="text" 
                        placeholder="Ask about construction, pricing, or amenities..." 
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <button className="btn-primary">Ask Question</button>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {[
                      { q: "What is the expected maintenance charge per sq ft?", a: "The estimated maintenance charge is ₹4.5 per sq ft, which includes security, landscaping, and clubhouse access.", user: "Amit K.", date: "3 days ago" },
                      { q: "Are there any 3BHK units available on higher floors?", a: "Yes, we have 4 units available on the 14th and 15th floors of Tower B. Would you like to schedule a site visit?", user: "Sneha R.", date: "1 week ago" },
                      { q: "Is the project approved by major banks for loans?", a: "Yes, the project is approved by SBI, HDFC, ICICI, and Axis Bank for home loans.", user: "Vikram S.", date: "2 weeks ago" },
                    ].map((qa, i) => (
                      <div key={i} className="space-y-4">
                        <div className="flex gap-4 items-start">
                          <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-400 text-xs">Q</div>
                          <div className="flex-1">
                            <div className="font-bold text-slate-900 mb-1">{qa.q}</div>
                            <div className="text-[10px] text-slate-400 font-medium">Asked by {qa.user} • {qa.date}</div>
                          </div>
                        </div>
                        <div className="flex gap-4 items-start pl-12">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center font-bold text-primary text-xs">A</div>
                          <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <div className="text-sm text-slate-700 mb-2">{qa.a}</div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Answered by Builder</span>
                              <CheckCircle size={10} className="text-primary" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Sidebar Actions */}
          <aside className="lg:w-96 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
                <div className="mb-8">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Starting from</div>
                  <div className="text-3xl font-black text-primary">₹78.5 L*</div>
                  <div className="text-[10px] text-slate-400 font-medium mt-1">*Excluding registration and taxes</div>
                </div>

                <div className="space-y-4">
                  <button className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg">
                    <MessageSquare size={20} /> Chat with Builder
                  </button>
                  <button className="w-full btn-outline py-4 flex items-center justify-center gap-2 text-lg">
                    <Calendar size={20} /> Schedule a Call
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Shield size={18} className="text-primary" />
                    <span>NestVerify Accountability Shield</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle size={18} className="text-primary" />
                    <span>Zero Brokerage Platform</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">Want a site visit?</h4>
                  <p className="text-slate-400 text-sm mb-6">Our experts can accompany you for a technical site audit.</p>
                  <button className="w-full btn-accent py-3 font-bold">Book Site Audit</button>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-2xl z-50 p-4 md:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-slate-900">{project.name}</div>
            <div className="text-xs text-primary font-bold">{project.priceRange}</div>
          </div>
          <div className="flex gap-2">
            <button className="p-3 bg-slate-100 rounded-xl text-slate-600"><Heart size={20} /></button>
            <button className="btn-primary px-6">Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
}
