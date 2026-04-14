import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Building2, 
  Plus, 
  Camera, 
  Users, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Star, 
  FileText, 
  Settings,
  LogOut,
  Search,
  Bell,
  TrendingUp,
  ArrowUpRight,
  ChevronRight,
  MoreVertical,
  Clock,
  CheckCircle,
  AlertTriangle,
  Shield,
  Video
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { PROJECTS, LEADS, ANALYTICS_DATA, CHATS } from '../data';

export default function BuilderDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = React.useState('Dashboard');
  const [selectedProject, setSelectedProject] = React.useState(PROJECTS[0]);

  const handleLogout = () => {
    // In a real app, clear session/token here
    navigate('/');
  };

  const navItems = [
    { id: 'Dashboard', icon: LayoutDashboard },
    { id: 'My Projects', icon: Building2 },
    { id: 'Add New Project', icon: Plus },
    { id: 'Construction Updates', icon: Camera },
    { id: 'Leads & Inquiries', icon: Users },
    { id: 'Chat', icon: MessageSquare, badge: 23 },
    { id: 'Scheduled Calls', icon: Calendar },
    { id: 'Analytics', icon: BarChart3 },
    { id: 'Reviews', icon: Star },
    { id: 'Documents', icon: FileText },
    { id: 'Settings', icon: Settings },
  ];

  const COLORS = ['#0F6E56', '#BA7517', '#1A2332', '#64748b'];

  return (
    <div className="bg-slate-50 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar text-white hidden lg:flex flex-col sticky top-0 h-screen z-50">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-10">
            <div className="bg-primary p-1.5 rounded-lg">
              <CheckCircle className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">NestVerify</span>
          </div>

          <div className="bg-white/5 rounded-xl p-4 mb-8 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold">P</div>
              <div>
                <div className="text-sm font-bold truncate">Prestige Group</div>
                <div className="text-[10px] text-primary font-bold uppercase tracking-widest flex items-center gap-1">
                  <Shield size={10} /> Pro Plan
                </div>
              </div>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeSection === item.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
              >
                <item.icon size={18} />
                {item.id}
                {item.badge && <span className="ml-auto bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 space-y-4">
          <button className="w-full bg-accent text-white py-3 rounded-xl font-bold text-xs shadow-lg shadow-accent/20 hover:bg-accent-light transition-all">
            Upgrade Plan
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-40">
          <h2 className="text-lg font-bold text-slate-900">{activeSection}</h2>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input type="text" placeholder="Search leads, projects..." className="bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-xs w-64 focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-bold text-slate-900">Vikram Singh</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Sales Director</div>
                </div>
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">VS</div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 overflow-y-auto">
          {activeSection === 'Dashboard' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              {/* Welcome Banner */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 mb-1">Good morning, Vikram.</h1>
                  <p className="text-slate-500 text-sm">Here's what's happening with your projects today.</p>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                    <AlertTriangle size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-800">1 project has no update in 14 days</div>
                    <button className="text-[10px] font-black text-amber-600 uppercase tracking-widest hover:underline">Update Now</button>
                  </div>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Total Projects", value: "4", sub: "Active", icon: Building2, color: "text-primary", bg: "bg-primary/10" },
                  { label: "Leads this month", value: "127", sub: "↑18% vs last month", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
                  { label: "Unread Messages", value: "23", sub: "5 urgent", icon: MessageSquare, color: "text-accent", bg: "bg-accent/10" },
                  { label: "Avg Builder Rating", value: "4.6/5", sub: "Based on 147 reviews", icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
                ].map((kpi, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 ${kpi.bg} ${kpi.color} rounded-xl flex items-center justify-center`}>
                        <kpi.icon size={24} />
                      </div>
                      <button className="text-slate-300 hover:text-slate-500"><MoreVertical size={16} /></button>
                    </div>
                    <div className="text-2xl font-black text-slate-900 mb-1">{kpi.value}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{kpi.label}</div>
                    <div className={`text-[10px] font-bold ${kpi.sub.includes('↑') ? 'text-green-500' : 'text-slate-400'}`}>{kpi.sub}</div>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-slate-900">Lead volume — last 6 months</h3>
                    <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-500">
                      <option>All Projects</option>
                    </select>
                  </div>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={ANALYTICS_DATA}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                        <Line type="monotone" dataKey="leads" stroke="#0F6E56" strokeWidth={4} dot={{ r: 6, fill: '#0F6E56', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-8">Leads by project</h3>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={PROJECTS.map(p => ({ name: p.name, value: Math.floor(Math.random() * 100) + 50 }))}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {PROJECTS.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-3 mt-4">
                    {PROJECTS.map((p, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }}></div>
                          <span className="text-slate-600 font-medium">{p.name}</span>
                        </div>
                        <span className="font-bold text-slate-900">24%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-slate-900">Projects Summary</h3>
                  <button className="text-primary font-bold text-xs hover:underline">View All Projects</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <th className="px-6 py-4">Project Name</th>
                        <th className="px-6 py-4">City</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Completion %</th>
                        <th className="px-6 py-4">Leads (30d)</th>
                        <th className="px-6 py-4">Last Update</th>
                        <th className="px-6 py-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PROJECTS.map((p, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="font-bold text-slate-900 text-sm">{p.name}</div>
                            <div className="text-[10px] text-slate-400 font-medium">{p.locality}</div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">{p.city}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                              p.status === 'Under Construction' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                            }`}>
                              {p.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden min-w-[60px]">
                                <div className="h-full bg-primary rounded-full" style={{ width: `${p.completionPercentage}%` }}></div>
                              </div>
                              <span className="text-xs font-bold text-slate-700">{p.completionPercentage}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-bold text-slate-900">{Math.floor(Math.random() * 50) + 20}</td>
                          <td className="px-6 py-4">
                            <div className={`text-xs font-medium ${i === 1 ? 'text-red-500 font-bold' : 'text-slate-500'}`}>
                              {i === 1 ? '14 days ago' : '3 days ago'}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button className="p-2 text-slate-400 hover:text-primary transition-colors"><ChevronRight size={18} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'My Projects' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-slate-900">My Projects (4)</h3>
                <button className="btn-primary flex items-center gap-2">
                  <Plus size={18} /> Add New Project
                </button>
              </div>

              <div className="space-y-6">
                {PROJECTS.map((p, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-64 h-48 md:h-auto bg-slate-100 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary/30 uppercase tracking-widest">{p.name}</span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase bg-white/90 backdrop-blur-sm ${
                          p.status === 'Under Construction' ? 'text-blue-600' : 'text-green-600'
                        }`}>
                          {p.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-6 flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-1">{p.name}</h4>
                          <p className="text-sm text-slate-500">{p.locality}, {p.city}</p>
                          <div className="mt-2 flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <span>RERA: {p.reraId}</span>
                            <span className="flex items-center gap-1 text-green-600"><CheckCircle size={10} /> Verified</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{p.priceRange}</div>
                          <div className="text-xs font-bold text-slate-400 uppercase">{p.bhkTypes.join(', ')}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Completion</div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-primary rounded-full" style={{ width: `${p.completionPercentage}%` }}></div>
                            </div>
                            <span className="text-xs font-bold text-slate-900">{p.completionPercentage}%</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Leads (30d)</div>
                          <div className="text-sm font-bold text-slate-900">127</div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Last Update</div>
                          <div className={`text-sm font-bold ${i === 1 ? 'text-red-500' : 'text-slate-900'}`}>
                            {i === 1 ? '14 days ago' : '3 days ago'}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Buyer Rating</div>
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-amber-400 fill-amber-400" />
                            <span className="text-sm font-bold text-slate-900">4.6</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto pt-6 border-t border-slate-100 flex flex-wrap gap-3">
                        <button className="btn-outline py-2 px-4 text-xs">View Live Page</button>
                        <button className="btn-outline py-2 px-4 text-xs">Edit Project</button>
                        <button className="btn-primary py-2 px-4 text-xs flex items-center gap-2">
                          <Camera size={14} /> Add Update
                        </button>
                        <button className="btn-outline py-2 px-4 text-xs ml-auto">View Leads</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'Leads & Inquiries' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: "Total Leads", value: "127", color: "text-slate-900" },
                  { label: "New", value: "23", color: "text-blue-600" },
                  { label: "Qualified", value: "18", color: "text-primary" },
                  { label: "Converted", value: "6", color: "text-green-600" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className={`text-2xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input type="text" placeholder="Search leads..." className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <button className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600"><Settings size={18} /></button>
                  </div>
                  <div className="flex gap-2">
                    {['All', 'New', 'Qualified', 'Converted'].map(f => (
                      <button key={f} className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all ${f === 'All' ? 'bg-primary text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <th className="px-6 py-4">Buyer Name</th>
                        <th className="px-6 py-4">Interested In</th>
                        <th className="px-6 py-4">Budget</th>
                        <th className="px-6 py-4">Timeline</th>
                        <th className="px-6 py-4">Source</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {LEADS.map((lead, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="font-bold text-slate-900 text-sm">{lead.name}</div>
                            <div className="text-[10px] text-slate-400 font-medium">{lead.city}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-xs font-bold text-slate-700">{lead.project}</div>
                            <div className="text-[10px] text-slate-400">{lead.bhk}</div>
                          </td>
                          <td className="px-6 py-4 text-xs font-medium text-slate-600">{lead.budget}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              lead.timeline === 'Immediate' ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-500'
                            }`}>
                              {lead.timeline}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase">
                              {lead.source === 'Chat' ? <MessageSquare size={10} /> : lead.source === 'Form' ? <FileText size={10} /> : <Video size={10} />}
                              {lead.source}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                              lead.status === 'New' ? 'bg-blue-50 text-blue-600' : 
                              lead.status === 'Qualified' ? 'bg-primary/10 text-primary' : 
                              lead.status === 'Converted' ? 'bg-green-50 text-green-600' : 
                              'bg-slate-50 text-slate-400'
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button className="p-2 text-slate-400 hover:text-primary transition-colors"><MessageSquare size={16} /></button>
                              <button className="p-2 text-slate-400 hover:text-primary transition-colors"><ChevronRight size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'Analytics' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-slate-900">Performance Analytics</h3>
                <div className="flex gap-2">
                  {['7 Days', '30 Days', '90 Days', 'Custom'].map(d => (
                    <button key={d} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${d === '30 Days' ? 'bg-primary text-white' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'}`}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { label: "Profile Views", value: "12.4K", change: "+12%" },
                  { label: "Project Views", value: "48.2K", change: "+18%" },
                  { label: "Total Inquiries", value: "1,240", change: "+5%" },
                  { label: "Inquiry Rate", value: "4.2%", change: "+0.8%" },
                  { label: "Avg Response", value: "2.3h", change: "-15%" },
                  { label: "Buyer Rating", value: "4.6", change: "+0.1" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{stat.label}</div>
                    <div className="text-xl font-black text-slate-900 mb-1">{stat.value}</div>
                    <div className={`text-[10px] font-bold ${stat.change.includes('+') ? 'text-green-500' : 'text-primary'}`}>{stat.change}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-8">Lead Trend Over Time</h4>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={ANALYTICS_DATA}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} />
                        <Tooltip />
                        <Line type="monotone" dataKey="leads" stroke="#0F6E56" strokeWidth={3} dot={{ r: 4, fill: '#0F6E56' }} />
                        <Line type="monotone" dataKey="views" stroke="#BA7517" strokeWidth={3} dot={{ r: 4, fill: '#BA7517' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-8">Lead Source Breakdown</h4>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Chat', value: 45 },
                            { name: 'Form', value: 30 },
                            { name: 'Video Call', value: 15 },
                            { name: 'Search', value: 10 },
                          ]}
                          innerRadius={80}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {COLORS.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Placeholder for unhandled sections */}
          {!['Dashboard', 'My Projects', 'Leads & Inquiries', 'Analytics'].includes(activeSection) && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="h-[60vh] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mb-6">
                <Settings size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{activeSection} is coming soon</h3>
              <p className="text-slate-500 max-w-sm">We're working hard to bring you the full {activeSection.toLowerCase()} experience. Stay tuned!</p>
              <button 
                onClick={() => setActiveSection('Dashboard')}
                className="mt-8 text-primary font-bold hover:underline"
              >
                Back to Dashboard
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
