import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Heart, 
  Bell, 
  MessageSquare, 
  Calendar, 
  User, 
  ChevronRight,
  Clock,
  CheckCircle,
  AlertTriangle,
  Search,
  Send
} from 'lucide-react';
import { PROJECTS, NOTIFICATIONS, CHATS } from '../data';

export default function BuyerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('Overview');
  const [selectedChat, setSelectedChat] = React.useState(CHATS[0]);

  const handleLogout = () => {
    // In a real app, clear session/token here
    navigate('/');
  };

  const sidebarItems = [
    { id: 'Overview', icon: LayoutDashboard },
    { id: 'Saved Projects', icon: Heart },
    { id: 'My Alerts', icon: Bell },
    { id: 'Active Chats', icon: MessageSquare },
    { id: 'Scheduled Calls', icon: Calendar },
    { id: 'Profile', icon: User },
  ];

  return (
    <div className="bg-bg-off min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col sticky top-16 h-[calc(100vh-64px)]">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">R</div>
            <div>
              <div className="text-sm font-bold text-slate-900">Rahul Sharma</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Premium Buyer</div>
            </div>
          </div>
          
          <nav className="space-y-1">
            {sidebarItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === item.id ? 'bg-primary/10 text-primary' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <item.icon size={18} />
                {item.id}
                {item.id === 'My Alerts' && <span className="ml-auto w-5 h-5 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">3</span>}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-slate-100">
          <button 
            onClick={handleLogout}
            className="w-full btn-outline py-2 text-xs hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">{activeTab}</h1>
          </header>

          {activeTab === 'Overview' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-2">Good morning, Rahul</h2>
                  <p className="text-primary-foreground/70">You have 3 new construction updates for your saved projects.</p>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Saved Projects", value: "4", icon: Heart, color: "text-red-500", bg: "bg-red-50" },
                  { label: "Active Chats", value: "2", icon: MessageSquare, color: "text-blue-500", bg: "bg-blue-50" },
                  { label: "New Alerts", value: "3", icon: Bell, color: "text-amber-500", bg: "bg-amber-50" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}>
                      <stat.icon size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h3>
                <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
                  {NOTIFICATIONS.map(notif => (
                    <div key={notif.id} className="p-4 flex items-start gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        notif.type === 'update' ? 'bg-green-50 text-green-600' : 
                        notif.type === 'price' ? 'bg-blue-50 text-blue-600' : 
                        'bg-amber-50 text-amber-600'
                      }`}>
                        {notif.type === 'update' ? <CheckCircle size={18} /> : 
                         notif.type === 'price' ? <Search size={18} /> : 
                         <AlertTriangle size={18} />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 font-medium">{notif.text}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{notif.date}</p>
                      </div>
                      <ChevronRight size={16} className="text-slate-300 mt-2" />
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'Saved Projects' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.slice(0, 4).map(project => (
                <div key={project.id} className="card group">
                  <div className="h-40 bg-slate-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary/30 uppercase tracking-widest">{project.name}</span>
                    </div>
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full text-red-500 shadow-sm">
                      <Heart size={16} fill="currentColor" />
                    </button>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-slate-900 mb-1">{project.name}</h4>
                    <p className="text-xs text-slate-500 mb-4">{project.locality}, {project.city}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-primary">{project.priceRange}</span>
                      <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'My Alerts' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              {NOTIFICATIONS.map(notif => (
                <div key={notif.id} className={`p-6 rounded-2xl border flex items-start gap-6 transition-all ${notif.read ? 'bg-white border-slate-200' : 'bg-primary/5 border-primary/20 shadow-sm'}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    notif.type === 'update' ? 'bg-green-100 text-green-600' : 
                    notif.type === 'price' ? 'bg-blue-100 text-blue-600' : 
                    'bg-amber-100 text-amber-600'
                  }`}>
                    {notif.type === 'update' ? <CheckCircle size={24} /> : 
                     notif.type === 'price' ? <Search size={24} /> : 
                     <AlertTriangle size={24} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-slate-900">{notif.type === 'update' ? 'Construction Update' : notif.type === 'price' ? 'Price Change' : 'Delay Alert'}</h4>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{notif.date}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{notif.text}</p>
                    <div className="flex gap-4">
                      <button className="text-xs font-bold text-primary hover:underline">View Details</button>
                      {!notif.read && <button className="text-xs font-bold text-slate-400 hover:text-slate-600 uppercase tracking-widest">Mark as Read</button>}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'Active Chats' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex h-[600px]">
              {/* Chat List */}
              <div className="w-80 border-r border-slate-100 flex flex-col">
                <div className="p-4 border-b border-slate-100">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="text" placeholder="Search chats..." className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-xs focus:outline-none" />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {CHATS.map(chat => (
                    <button 
                      key={chat.id}
                      onClick={() => setSelectedChat(chat)}
                      className={`w-full p-4 flex items-start gap-3 border-b border-slate-50 transition-colors ${selectedChat.id === chat.id ? 'bg-primary/5' : 'hover:bg-slate-50'}`}
                    >
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 flex-shrink-0">
                        {chat.buyer[0]}
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-slate-900 text-sm truncate">{chat.project}</span>
                          <span className="text-[10px] text-slate-400 whitespace-nowrap">{chat.time}</span>
                        </div>
                        <p className="text-xs text-slate-500 truncate">{chat.lastMessage}</p>
                      </div>
                      {chat.unread > 0 && <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Window */}
              <div className="flex-1 flex flex-col bg-slate-50/30">
                <div className="p-4 bg-white border-b border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xs">P</div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{selectedChat.project}</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Builder Representative</div>
                    </div>
                  </div>
                  <button className="btn-outline py-1.5 px-4 text-xs">Schedule Call</button>
                </div>

                <div className="p-4 bg-amber-50 border-b border-amber-100 text-[10px] font-bold text-amber-700 text-center uppercase tracking-widest">
                  This conversation is recorded for your protection
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {selectedChat.messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] p-4 rounded-2xl text-sm shadow-sm ${
                        msg.sender === 'buyer' ? 'bg-primary text-white rounded-tr-none' : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                      }`}>
                        {msg.text}
                        <div className={`text-[8px] mt-2 font-bold uppercase ${msg.sender === 'buyer' ? 'text-primary-foreground/50' : 'text-slate-400'}`}>
                          {msg.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-white border-t border-slate-100">
                  <div className="flex gap-3">
                    <input type="text" placeholder="Type a message..." className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none" />
                    <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary-dark transition-colors">
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Scheduled Calls' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              {[
                { project: "Prestige Elysian", builder: "Prestige Group", date: "Oct 24, 2024", time: "11:00 AM", status: "Confirmed" },
                { project: "Brigade Cornerstone", builder: "Brigade Group", date: "Oct 26, 2024", time: "03:30 PM", status: "Pending" },
              ].map((call, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-primary">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{call.project}</h4>
                      <p className="text-xs text-slate-500">with {call.builder}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-8">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{call.date}</div>
                      <div className="text-xs text-slate-500">{call.time}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${call.status === 'Confirmed' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}>
                      {call.status}
                    </span>
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'Profile' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">R</div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Rahul Sharma</h2>
                    <p className="text-sm text-slate-500">Member since Jan 2024</p>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <div className="text-sm font-medium text-slate-900">rahul.sharma@example.com</div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <div className="text-sm font-medium text-slate-900">+91 98765 43210</div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Location</label>
                    <div className="text-sm font-medium text-slate-900">Bangalore, India</div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Budget Range</label>
                    <div className="text-sm font-medium text-slate-900">₹80L - ₹1.5Cr</div>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-100">
                  <button className="btn-primary px-6 py-2 text-sm">Edit Profile</button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
