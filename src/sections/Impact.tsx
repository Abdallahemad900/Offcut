import React from 'react';
import { Leaf, Droplets, Wind, Heart, ShieldCheck, Users } from 'lucide-react';

const Impact = () => {
  const stats = [
    { label: 'Fabric Waste Saved', value: '4.2 Tons', icon: <Leaf className="w-6 h-6" /> },
    { label: 'Water Conserved', value: '1.5M Liters', icon: <Droplets className="w-6 h-6" /> },
    { label: 'Carbon Reduced', value: '12.8 Tons', icon: <Wind className="w-6 h-6" /> },
  ];

  const donations = [
    { 
      title: 'Protect the Earth', 
      desc: 'Support local reforestation and cleanup projects in Egypt.',
      icon: <ShieldCheck className="w-8 h-8 text-offcut-green" />
    },
    { 
      title: 'Empower Artisans', 
      desc: 'Provide advanced training and tools for Egyptian women workers.',
      icon: <Users className="w-8 h-8 text-offcut-earth" />
    }
  ];

  return (
    <section id="impact" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl mb-6">REAL IMPACT.</h2>
          <p className="text-offcut-earth max-w-2xl mx-auto text-lg">
            Sustainability isn't just a buzzword. We track every gram of waste saved 
            and every life touched by our production cycle.
          </p>
        </div>

        {/* Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-offcut-cream p-10 rounded-[3rem] border border-offcut-earth/5 hover:border-offcut-earth/20 transition-all text-center group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {stat.icon}
              </div>
              <div className="text-4xl font-black mb-2 font-outfit">{stat.value}</div>
              <div className="text-offcut-earth font-bold uppercase tracking-widest text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Donation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {donations.map((card, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-[4rem] p-12 bg-offcut-dark text-white">
              <div className="relative z-10">
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-3xl mb-4 uppercase tracking-tighter">{card.title}</h3>
                <p className="text-gray-400 mb-8 max-w-sm">{card.desc}</p>
                <button className="px-8 py-4 bg-offcut-earth rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-offcut-dark transition-all">
                  Support Her Journey
                </button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-offcut-earth/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
