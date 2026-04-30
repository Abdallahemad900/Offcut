import React from 'react';
import { Quote } from 'lucide-react';

const Empowerment = () => {
  return (
    <section id="empowerment" className="section-padding bg-offcut-cream/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=2070" 
              alt="Artisan at work"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-offcut-earth rounded-[3rem] -z-0 hidden md:block" />
          <div className="absolute -top-10 -left-10 w-48 h-48 border-4 border-offcut-dark rounded-[3rem] -z-0 hidden md:block" />
        </div>

        <div>
          <span className="text-offcut-earth font-black tracking-[0.4em] uppercase text-xs mb-6 block">Our Heartbeat</span>
          <h2 className="text-5xl md:text-7xl mb-8 leading-tight">EMPOWERING <br /><span className="text-offcut-earth italic">ARTISANS.</span></h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl relative">
              <Quote className="absolute top-4 right-4 text-offcut-earth/20 w-12 h-12" />
              <p className="text-xl text-offcut-dark font-medium leading-relaxed italic">
                "At OFF CUT, I found more than just a job. I found a space where my heritage in textile work is respected and transformed into something global."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-offcut-sand" />
                <div>
                  <h5 className="font-bold">Fatima Al-Sayed</h5>
                  <span className="text-xs text-offcut-earth uppercase tracking-widest font-bold">Master Artisan, Cairo</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-black mb-2">120+</h4>
                <p className="text-sm text-offcut-earth font-bold uppercase tracking-widest">Women Employed</p>
              </div>
              <div>
                <h4 className="text-4xl font-black mb-2">15</h4>
                <p className="text-sm text-offcut-earth font-bold uppercase tracking-widest">Local Workshops</p>
              </div>
            </div>

            <button className="px-10 py-5 bg-offcut-dark text-white rounded-full font-bold uppercase tracking-widest hover:bg-offcut-earth transition-all">
              Meet Our Artisans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empowerment;
