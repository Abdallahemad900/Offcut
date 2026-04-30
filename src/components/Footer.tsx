import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, ArrowUpRight, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-offcut-dark text-white pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <Leaf className="text-offcut-earth w-8 h-8" />
              <span className="text-3xl font-black tracking-tighter">OFF <span className="text-offcut-earth">CUT</span></span>
            </div>
            <p className="text-gray-400 mb-8 max-w-xs leading-relaxed">
              Transforming the future of fashion through recycled materials and women's craftsmanship. 
              Based in Cairo, available globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-offcut-earth transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-offcut-earth transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-offcut-earth transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Collections</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-offcut-earth transition-colors flex items-center gap-2">Women <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-offcut-earth transition-colors flex items-center gap-2">Men <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-offcut-earth transition-colors flex items-center gap-2">Accessories <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-offcut-earth transition-colors flex items-center gap-2">Limited Scraps <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Philosophy</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-offcut-earth transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-offcut-earth transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-offcut-earth transition-colors">Artisan Impact</a></li>
              <li><a href="#" className="hover:text-offcut-earth transition-colors">Transparency</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Stay Updated</h4>
            <p className="text-gray-400 mb-6 text-sm">Join our conscious community for exclusive drops and impact reports.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm flex-1 focus:outline-none focus:border-offcut-earth"
              />
              <button className="px-6 py-3 bg-offcut-earth rounded-xl font-bold hover:bg-white hover:text-offcut-dark transition-all">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-bold tracking-[0.2em] uppercase">
          <div>© 2024 OFF CUT SUSTAINABLE FASHION. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
