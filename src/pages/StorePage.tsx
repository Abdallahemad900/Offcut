import React, { useState } from 'react';
import Store from '../sections/Store';
import { Heart, ShieldCheck, Users, Leaf } from 'lucide-react';
import { useStore } from '../store/useStore';

const donationCards = [
  {
    id: 'd1',
    name: 'Nature Restoration Card',
    price: 25,
    category: 'Donation',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=2000',
    description: 'Plant 10 trees in the Egyptian delta to combat desertification.',
    icon: <Leaf className="w-8 h-8 text-offcut-primary" />
  },
  {
    id: 'd2',
    name: 'Artisan Support Card',
    price: 50,
    category: 'Donation',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000',
    description: 'Directly fund a training workshop for 5 new women artisans.',
    icon: <Users className="w-8 h-8 text-offcut-earth" />
  },
  {
    id: 'd3',
    name: 'Ocean Plastic Cleanup',
    price: 15,
    category: 'Donation',
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80&w=2000',
    description: 'Remove 5kg of plastic waste from the Red Sea coast.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />
  }
];

const StorePage = () => {
  const { addToCart } = useStore();

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-offcut-primary text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-4">CONSCIOUS STORE</h1>
        <p className="text-offcut-accent max-w-xl mx-auto uppercase tracking-widest font-bold">
          Fashion with a soul. Every purchase makes an impact.
        </p>
      </div>

      <Store />

      {/* Donation Cards Section */}
      <section className="py-20 bg-offcut-cream/30 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-offcut-dark mb-4">IMPACT CARDS</h2>
            <p className="text-offcut-secondary">Don't need a garment? Support our mission directly with a donation card.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationCards.map((card) => (
              <div key={card.id} className="bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full border border-offcut-primary/5">
                <div className="h-48 overflow-hidden relative">
                  <img src={card.image} alt={card.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-offcut-dark/20 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      {card.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{card.name}</h3>
                    <span className="font-black text-offcut-primary text-xl">${card.price}</span>
                  </div>
                  <p className="text-offcut-secondary text-sm mb-8 flex-1">{card.description}</p>
                  <button 
                    onClick={() => addToCart({ ...card, quantity: 1 })}
                    className="w-full py-4 bg-offcut-primary text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-offcut-dark transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorePage;
