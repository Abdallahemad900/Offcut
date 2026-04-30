import React, { useState } from 'react';
import { ShoppingBag, Heart, Filter, Star } from 'lucide-react';
import { useStore } from '../store/useStore';

const products = [
  {
    id: '1',
    name: 'Artisan Patchwork Bomber',
    price: 240,
    category: 'Women',
    image: '/images/patchwork-bomber-women.jpg',
    rating: 4.8,
    description: 'Upcycled from premium denim scraps by our master artisans in Cairo.'
  },
  {
    id: '2',
    name: 'Denim Totebag',
    price: 85,
    category: 'Accessories',
    image: '/images/denim-bag.jpg',
    rating: 4.9,
    description: 'Zero-waste design featuring geometric textile waste patterns.'
  },
  {
    id: '3',
    name: 'Recycled Denim Dress',
    price: 180,
    category: 'Women',
    image: '/images/denim-dress.jpg',
    rating: 4.7,
    description: 'Breathable recycled organic cotton with earth-tone dyes.'
  },
  {
    id: '4',
    name: 'Industrial Bomber Jacket',
    price: 120,
    category: 'Men',
    image: '/images/patchwork-bomber-men.jpg',
    rating: 4.5,
    description: 'Futuristic silhouette crafted from industrial textile leftovers.'
  }
];

const Store = () => {
  const [filter, setFilter] = useState('All');
  const { addToCart, toggleWishlist, wishlist } = useStore();

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section id="store" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">CONSCIOUS CURATION</h2>
            <p className="text-offcut-earth max-w-md">
              Every piece is a unique story of transformation. Ethical production, 
              zero waste, and timeless style.
            </p>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
            {['All', 'Women', 'Men', 'Accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest transition-all whitespace-nowrap ${
                  filter === cat 
                    ? 'bg-offcut-dark text-white' 
                    : 'bg-offcut-cream text-offcut-dark hover:bg-offcut-sand/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-offcut-cream mb-4 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white transition-colors"
                >
                  <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-offcut-dark'}`} />
                </button>
                <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button 
                    onClick={() => addToCart({ ...product, quantity: 1 })}
                    className="w-full py-3 bg-offcut-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-offcut-earth transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    ADD TO CART
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-sm text-offcut-earth">{product.category}</p>
                </div>
                <p className="font-outfit font-black text-lg">${product.price}</p>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <Star className="w-3 h-3 fill-offcut-sand text-offcut-sand" />
                <span className="text-xs font-bold text-offcut-earth">{product.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;
