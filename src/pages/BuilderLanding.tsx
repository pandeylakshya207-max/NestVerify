import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Shield, 
  Users, 
  BarChart3, 
  ArrowRight, 
  Building2, 
  Upload,
  MessageSquare,
  Video
} from 'lucide-react';

export default function BuilderLanding() {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="bg-primary p-1.5 rounded-lg">
                <CheckCircle className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">NestVerify</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate('/')} className="text-slate-600 hover:text-primary font-medium">For Buyers</button>
              <a href="#pricing" className="text-slate-600 hover:text-primary font-medium">Pricing</a>
              <button onClick={() => navigate('/builder-dashboard')} className="text-slate-600 hover:text-primary font-medium">Login</button>
              <button 
                onClick={() => scrollTo('registration')}
                className="btn-primary"
              >
                List Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-32 bg-bg-off overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
              >
                Reach serious buyers. <br />
                <span className="text-primary">Build real trust.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-600 mb-10 leading-relaxed"
              >
                NestVerify connects verified builders with 48,000+ active home buyers across India. No middlemen. No hidden commissions.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollTo('registration')}
                  className="btn-primary px-8 py-4 text-lg"
                >
                  List Your Project Free
                </button>
                <button 
                  onClick={() => scrollTo('how-it-works')}
                  className="btn-outline px-8 py-4 text-lg bg-white"
                >
                  See How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-4 shadow-2xl border border-slate-200 transform rotate-2">
                <div className="bg-slate-900 rounded-2xl p-6 h-[400px] flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-lg"></div>
                      <div className="w-24 h-2 bg-slate-700 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
                      <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="bg-slate-800 h-20 rounded-xl p-3 space-y-2">
                        <div className="w-full h-1.5 bg-slate-700 rounded"></div>
                        <div className="w-2/3 h-1.5 bg-slate-700 rounded"></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 bg-slate-800 rounded-xl p-4 flex flex-col gap-3">
                    <div className="w-full h-2 bg-slate-700 rounded"></div>
                    <div className="w-full h-2 bg-slate-700 rounded"></div>
                    <div className="w-3/4 h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-accent text-white p-4 rounded-2xl shadow-xl font-bold text-sm">
                4.8★ Builder Rating
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase mb-1">New Leads</div>
                <div className="text-2xl font-bold text-primary">+127</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted by 380+ builders across India</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            {["Prestige", "Brigade", "Godrej", "Shapoorji", "Puravankara"].map(name => (
              <span key={name} className="text-2xl font-black tracking-tighter">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How it works for builders</h2>
            <p className="text-slate-600">A simple 3-step process to get your projects in front of thousands of verified buyers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Register & Verify", desc: "Submit your RERA and company documents. Our team verifies your credentials within 24-48 hours.", icon: Shield },
              { step: "02", title: "List Your Projects", desc: "Upload project details, floor plans, and current construction status. No listing fees.", icon: Building2 },
              { step: "03", title: "Connect with Buyers", desc: "Receive direct inquiries and chat with verified buyers. Manage your leads through our advanced dashboard.", icon: Users },
            ].map((prop, i) => (
              <div key={i} className="text-center space-y-4 relative">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 relative">
                  <prop.icon size={32} />
                  <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                    {prop.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{prop.title}</h3>
                <p className="text-slate-600 leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-slate-600">Choose the plan that fits your development scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Starter", price: "₹2,999", features: ["1 active project listing", "Basic project page", "Up to 50 buyer leads/month", "Email support"] },
              { name: "Growth", price: "₹7,999", popular: true, features: ["3 active project listings", "Construction live dashboard", "Up to 200 buyer leads/month", "Chat with buyers", "Basic analytics"] },
              { name: "Pro", price: "₹19,999", features: ["10 active project listings", "Video call scheduling", "Drone footage upload", "Advanced analytics", "Featured placement"] },
              { name: "Enterprise", price: "Custom", features: ["Unlimited projects", "API access", "Custom integrations", "White-glove onboarding", "Dedicated manager"] },
            ].map((plan, i) => (
              <div key={i} className={`bg-white rounded-2xl border p-8 flex flex-col relative ${plan.popular ? 'border-primary shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'}`}>
                {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Most Popular</div>}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-slate-900">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-slate-400 text-sm font-medium">/mo</span>}
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
            <div className="bg-primary p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">Register as a Builder</h2>
              <p className="text-primary-foreground/70 text-sm">Join the most transparent real estate platform in India.</p>
            </div>
            <form className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Prestige Group" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Contact Person</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="work@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">RERA Registration ID</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="KA/REA/..." />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["RERA Certificate", "PAN Card", "GST Certificate"].map(doc => (
                  <div key={doc} className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center space-y-2 hover:border-primary transition-colors cursor-pointer group">
                    <Upload size={20} className="mx-auto text-slate-400 group-hover:text-primary" />
                    <div className="text-[10px] font-bold text-slate-500 uppercase">{doc}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  I agree to NestVerify's <span className="text-primary font-bold underline">Builder Code of Conduct</span> and understand that my account will be activated after document verification.
                </p>
              </div>

              <button 
                type="button"
                onClick={() => navigate('/builder-dashboard')}
                className="w-full btn-primary py-4 text-lg"
              >
                Submit for Verification
              </button>
              
              <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Our team will verify your documents within 1–2 business days
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
