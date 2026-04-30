import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-none">
              THE STORY <br /><span className="text-offcut-earth italic">BEHIND</span> <br />THE CUT.
            </h2>
            <div className="space-y-6 text-lg text-offcut-dark/70 max-w-lg">
              <p>
                OFF CUT was born from a simple observation: the textile industry produces massive waste, yet it holds the potential for incredible beauty.
              </p>
              <p>
                Founded in Cairo, we bridge the gap between traditional craftsmanship and futuristic sustainability. We don't just recycle; we upcycle with purpose.
              </p>
              <p className="font-bold text-offcut-dark">
                Our mission is to prove that luxury can be ethical, and fashion can be a tool for women's empowerment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-[300px] bg-offcut-cream rounded-3xl overflow-hidden denim-texture opacity-30" />
              <div className="h-[200px] bg-offcut-earth rounded-3xl overflow-hidden flex items-center justify-center text-white p-8">
                <span className="text-2xl font-black italic tracking-widest">VISION 2030</span>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-[200px] bg-offcut-dark rounded-3xl overflow-hidden flex items-center justify-center text-white p-8">
                <span className="text-2xl font-black italic tracking-widest">ETHICAL FIRST</span>
              </div>
              <div className="h-[300px] bg-offcut-sand rounded-3xl overflow-hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
