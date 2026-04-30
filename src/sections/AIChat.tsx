import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi there! I am your OFF CUT style assistant. How can I help you build your sustainable wardrobe today?' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages([...messages, userMsg]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let botResponse = "That sounds interesting! For that look, I'd recommend our upcycled denim pieces. They pair perfectly with earthy tones.";
      if (input.toLowerCase().includes('recommend')) {
        botResponse = "Based on your interest in sustainability, I recommend the Artisan Denim Jacket. It's made from 100% recycled scraps and supports our women artisans in Egypt.";
      } else if (input.toLowerCase().includes('size')) {
        botResponse = "Our pieces follow a relaxed, sustainable fit. You can find the detailed size guide on each product page!";
      }

      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl w-[350px] md:w-[400px] flex flex-col overflow-hidden border border-offcut-earth/10 animate-in slide-in-from-bottom-10">
          {/* Header */}
          <div className="bg-offcut-dark p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-offcut-earth rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Style AI</h4>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] text-gray-400">Online & Ready</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 flex flex-col gap-4 bg-offcut-cream/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-offcut-earth text-white rounded-tr-none' 
                    : 'bg-white text-offcut-dark rounded-tl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-offcut-earth/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for style tips..."
              className="flex-1 bg-offcut-cream/50 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-offcut-earth"
            />
            <button 
              onClick={handleSend}
              className="p-2 bg-offcut-dark text-white rounded-xl hover:bg-offcut-earth transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-offcut-dark text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform group relative"
        >
          <Sparkles className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-offcut-earth rounded-full border-2 border-white" />
        </button>
      )}
    </div>
  );
};

export default AIChat;
