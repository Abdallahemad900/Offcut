import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-6xl font-black text-offcut-dark mb-8">GET IN <br /><span className="text-offcut-primary italic">TOUCH.</span></h1>
            <p className="text-offcut-secondary text-lg mb-12 max-w-md">
              Have questions about our sustainability process or custom orders? 
              Our team is here to help you join the revolution.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-offcut-cream rounded-2xl flex items-center justify-center text-offcut-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-offcut-secondary">hello@offcut.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-offcut-cream rounded-2xl flex items-center justify-center text-offcut-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-offcut-secondary">+20 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-offcut-cream rounded-2xl flex items-center justify-center text-offcut-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Visit Studio</h4>
                  <p className="text-offcut-secondary">15 Artisan Way, Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-offcut-cream/50 p-10 rounded-[3rem] border border-offcut-primary/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-offcut-primary">Full Name</label>
                  <input type="text" className="bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-offcut-primary" placeholder="Jane Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-offcut-primary">Email Address</label>
                  <input type="email" className="bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-offcut-primary" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-offcut-primary">Subject</label>
                <select className="bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-offcut-primary">
                  <option>General Inquiry</option>
                  <option>Custom Order</option>
                  <option>Wholesale</option>
                  <option>Sustainability Partners</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-offcut-primary">Message</label>
                <textarea rows={5} className="bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-offcut-primary" placeholder="Tell us more..."></textarea>
              </div>
              <button className="w-full py-4 bg-offcut-primary text-white rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-offcut-dark transition-colors">
                <Send className="w-5 h-5" /> SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
