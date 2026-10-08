import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Search, 
  ChevronDown, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield, 
  MessageSquare, 
  BarChart3,
  ArrowRight,
  Star,
  Heart
} from 'lucide-react';
import { PROJECTS, CITIES } from '../data';

export default function LandingPage() {
  const navigate = useNavigate();
  const [budget, setBudget] = React.useState(150);
  const featuredProjects = PROJECTS.filter(p => p.city === "Bangalore");

  const formatBudget = (val: number) => {
    if (val >= 100) return `₹${(val / 100).toFixed(1)}Cr`;
    return `₹${val}L`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Buy with proof. <br />
              <span className="text-primary">Not promises.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 mb-10"
            >
              Real-time construction updates, verified builder profiles, and zero broker fees — all in one place.
            </motion.p>
          </div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-slate-100 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">City</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20">
                    {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Max Budget</label>
                  <span className="text-xs font-black text-primary bg-primary/5 px-2 py-0.5 rounded">{formatBudget(budget)}</span>
                </div>
                <div className="px-2 py-3">
                  <input 
                    type="range" 
                    min="20" 
                    max="500" 
                    step="5"
                    value={budget}
                    onChange={(e) => setBudget(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" 
                  />
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2">
                    <span>₹20L</span>
                    <span>₹5Cr</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">BHK Type</label>
                <div className="flex bg-slate-50 border border-slate-200 rounded-lg p-1">
                  {['1', '2', '3', '4'].map(bhk => (
                    <button key={bhk} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${bhk === '2' ? 'bg-white shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700'}`}>
                      {bhk}BHK
                    </button>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => navigate('/explore')}
                className="btn-primary h-[50px] flex items-center justify-center gap-2 text-lg"
              >
                <Search size={20} />
                Search Projects
              </button>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2 items-center justify-center">
              <span className="text-xs font-bold text-slate-400 uppercase mr-2">Quick Filters:</span>
              {["Ready to Move", "Under Construction", "RERA Verified", "High Rated Builders", "NRI Friendly"].map(filter => (
                <button key={filter} className="px-4 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-xs font-medium text-slate-600 transition-colors">
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right -z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/5 skew-x-12 transform origin-bottom-left -z-0"></div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Verified Projects", value: "1,240+", icon: CheckCircle },
              { label: "Trusted Builders", value: "380+", icon: Shield },
              { label: "On-Time Delivery", value: "92%", icon: Clock },
              { label: "Happy Buyers", value: "48,000+", icon: Users },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-white"
              >
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Trending in Bangalore</h2>
              <p className="text-slate-600">Handpicked projects with high reliability scores</p>
            </div>
            <button onClick={() => navigate('/explore')} className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowRight size={18} />
            </button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x">
            {featuredProjects.map((project) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -10 }}
                className="min-w-[320px] md:min-w-[380px] snap-start"
              >
                <div className="card h-full flex flex-col">
                  <div className="relative h-56 bg-slate-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8 text-center">
                      <span className="text-2xl font-bold text-primary/40 uppercase tracking-widest">{project.name}</span>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="badge-verified">
                        <CheckCircle size={12} /> RERA Verified
                      </span>
                    </div>
                    <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-colors">
                      <Heart size={18} />
                    </button>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-1 text-xs font-bold text-primary mb-1">
                          {project.builder.name} <CheckCircle size={10} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
                        <p className="text-sm text-slate-500">{project.locality}, {project.city}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{project.priceRange}</div>
                        <div className="text-xs text-slate-400 font-medium">{project.bhkTypes.join(', ')}</div>
                      </div>
                    </div>

                    <div className="space-y-4 mt-auto">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1.5">
                          <span className="text-slate-500 uppercase tracking-wider">Construction Progress</span>
                          <span className="text-primary">{project.completionPercentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${project.completionPercentage}%` }}
                            viewport={{ once: true }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-1">
                          <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} fill={i < Math.floor(project.builder.rating || 0) ? "currentColor" : "none"} />
                            ))}
                          </div>
                          <span className="text-xs font-bold text-slate-700">{project.builder.rating}</span>
                        </div>
                        <div className="text-xs font-medium text-slate-500">
                          Possession: <span className="text-slate-900 font-bold">{project.possessionDate}</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => navigate(`/project/${project.id}`)}
                        className="w-full btn-outline mt-2"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600">Four simple steps to buying your dream home with complete peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>
            
            {[
              { step: 1, title: "Search verified projects", desc: "Browse thousands of RERA-verified listings with real data.", icon: Search },
              { step: 2, title: "Track construction live", desc: "Get weekly photo and video updates directly from the site.", icon: BarChart3 },
              { step: 3, title: "Chat directly with builder", desc: "No brokers. No middlemen. Direct transparent communication.", icon: MessageSquare },
              { step: 4, title: "Book with confidence", desc: "Immutable chat logs and verified delivery history protect you.", icon: Shield },
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-24 h-24 bg-white border-4 border-bg-off rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group hover:border-primary transition-colors">
                  <item.icon className="text-primary group-hover:scale-110 transition-transform" size={32} />
                </div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Step {item.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Builder Transparency Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">We hold builders accountable, so you don't have to</h2>
              <p className="text-slate-400 text-lg mb-10">
                NestVerify isn't just a portal; it's a verification layer between you and the developer. We ensure every promise made is documented and every milestone is tracked.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Live Construction Feed", desc: "Weekly photo and video updates directly from the site verified by our field agents.", icon: BarChart3 },
                  { title: "Immutable Chat Logs", desc: "Every promise made is stored. Builders cannot deny commitments made during the sales process.", icon: MessageSquare },
                  { title: "Delivery History", desc: "See every project a builder has done and whether they delivered on time or with delays.", icon: Clock },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
                      <p className="text-slate-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Northbank Elysian</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Construction Update</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-primary">68% Complete</div>
                </div>
                
                <div className="aspect-video bg-slate-700 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-xs font-medium">Site Photo: Tower B, Floor 12</div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Foundation</span>
                    <span className="text-green-400 font-bold">Completed</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-700 rounded-full">
                    <div className="w-full h-full bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Structure</span>
                    <span className="text-green-400 font-bold">Completed</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-700 rounded-full">
                    <div className="w-full h-full bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Finishing</span>
                    <span className="text-primary font-bold">In Progress</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-700 rounded-full">
                    <div className="w-2/3 h-full bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
