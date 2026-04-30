import React, { useState } from 'react';
import Community from '../sections/Community';
import { Bot, MessageSquare, Sparkles, Send, Users, Shield } from 'lucide-react';

const CirclePage = () => {
  const [activeTab, setActiveTab] = useState('community');
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Welcome to the Circle! How can I assist with your sustainable style journey today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', content: "That's a great choice! Our community loves pairing that with our green-certified accessories." }]);
    }, 1000);
  };

  return (
    <div className="pt-24 min-h-screen bg-offcut-cream">
      {/* Circle Header */}
      <div className="bg-white border-b border-offcut-primary/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h1 className="text-5xl font-black text-offcut-dark mb-2 tracking-tighter">OFF CUT <span className="text-offcut-primary italic">CIRCLE.</span></h1>
            <p className="text-offcut-secondary font-bold uppercase tracking-widest text-xs">Social Connectivity for Sustainability</p>
          </div>
          
          <div className="flex bg-offcut-cream p-2 rounded-2xl gap-2">
            <button 
              onClick={() => setActiveTab('community')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'community' ? 'bg-offcut-primary text-white shadow-lg' : 'hover:bg-white'
              }`}
            >
              <Users className="w-4 h-4" /> COMMUNITY
            </button>
            <button 
              onClick={() => setActiveTab('ai')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'ai' ? 'bg-offcut-primary text-white shadow-lg' : 'hover:bg-white'
              }`}
            >
              <Bot className="w-4 h-4" /> AI STYLIST
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'community' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <Community />
              </div>
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-offcut-primary text-white p-8 rounded-[2.5rem] shadow-xl">
                  <Shield className="w-10 h-10 mb-6" />
                  <h3 className="text-xl font-bold mb-4 uppercase">Trust & Safety</h3>
                  <p className="text-offcut-accent text-sm leading-relaxed">
                    Our community is built on respect and shared values. 
                    Be kind, share tips, and inspire others to recycle.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-offcut-primary/5">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-offcut-primary" /> TRENDING TOPICS
                  </h3>
                  <div className="space-y-4">
                    {['#RecycledDenim', '#ArtisanPower', '#ZeroWasteCairo', '#SustainableStyle'].map(tag => (
                      <div key={tag} className="flex justify-between items-center group cursor-pointer">
                        <span className="font-bold text-offcut-secondary group-hover:text-offcut-primary transition-colors">{tag}</span>
                        <span className="text-xs bg-offcut-cream px-3 py-1 rounded-full text-offcut-primary font-black">2.4k</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-offcut-primary/5 flex flex-col h-[700px] animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-offcut-dark p-8 text-white flex items-center gap-4">
              <div className="w-12 h-12 bg-offcut-primary rounded-full flex items-center justify-center">
                <Bot className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm">AI Stylist Pro</h4>
                <div className="flex items-center gap-2 text-[10px] text-offcut-accent font-black uppercase">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Ready to Inspire
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-offcut-cream/10">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] p-5 rounded-3xl text-sm font-medium ${
                    msg.role === 'user' 
                      ? 'bg-offcut-primary text-white rounded-tr-none shadow-lg' 
                      : 'bg-white text-offcut-dark rounded-tl-none border border-offcut-primary/5'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-white border-t border-offcut-primary/10 flex gap-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about recycling techniques, style tips, or sizing..."
                className="flex-1 bg-offcut-cream/50 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-offcut-primary"
              />
              <button 
                onClick={handleSend}
                className="w-14 h-14 bg-offcut-dark text-white rounded-2xl flex items-center justify-center hover:bg-offcut-primary transition-all shadow-lg"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CirclePage;
