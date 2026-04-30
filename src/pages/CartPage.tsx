import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CreditCard, ShieldCheck } from 'lucide-react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

const CartPage = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useStore();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-offcut-cream flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md"
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-offcut-primary/10">
            <ShoppingBag className="w-12 h-12 text-offcut-primary" />
          </div>
          <h1 className="text-3xl font-outfit font-black text-offcut-dark mb-4 tracking-tighter">YOUR BASKET IS EMPTY</h1>
          <p className="text-offcut-earth mb-8 leading-relaxed">
            It looks like you haven't added anything to your basket yet. 
            Discover our latest sustainable collections and start your journey.
          </p>
          <Link 
            to="/store" 
            className="inline-block px-10 py-4 bg-offcut-dark text-white rounded-full font-bold tracking-widest hover:bg-offcut-primary transition-all shadow-lg hover:shadow-offcut-primary/20"
          >
            START SHOPPING
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offcut-cream pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Cart Area */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-outfit font-black text-offcut-dark tracking-tighter">SHOPPING BASKET</h1>
                <p className="text-offcut-earth font-medium">{cart.length} unique items selected</p>
              </div>
              <button 
                onClick={clearCart}
                className="text-sm font-bold text-red-500 hover:underline"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-6">
              {cart.map((item) => (
                <motion.div 
                  layout
                  key={item.id}
                  className="bg-white rounded-3xl p-6 flex flex-col sm:flex-row gap-6 shadow-sm border border-offcut-sand/10 hover:shadow-md transition-shadow"
                >
                  <div className="w-full sm:w-40 h-48 sm:h-40 rounded-2xl overflow-hidden bg-offcut-cream flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-offcut-dark mb-1">{item.name}</h3>
                        <p className="text-sm text-offcut-earth">Sustainability Certified • Cairo, EG</p>
                      </div>
                      <p className="text-2xl font-outfit font-black text-offcut-dark">${item.price}</p>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <div className="flex items-center gap-6 bg-offcut-cream/50 p-2 rounded-2xl border border-offcut-sand/20">
                        <button 
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm hover:bg-offcut-primary hover:text-white transition-all"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-lg font-black w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => addToCart(item)}
                          className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm hover:bg-offcut-primary hover:text-white transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-2 text-offcut-earth hover:text-red-500 transition-colors font-bold text-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                        REMOVE
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/store" className="inline-flex items-center gap-2 mt-8 text-offcut-primary font-bold hover:gap-4 transition-all">
              <ArrowLeft className="w-4 h-4" />
              BACK TO COLLECTIONS
            </Link>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-offcut-dark text-white rounded-[2rem] p-8 sticky top-32 shadow-2xl shadow-offcut-dark/20">
              <h2 className="text-2xl font-outfit font-black mb-8 border-b border-white/10 pb-4">ORDER SUMMARY</h2>
              
              <div className="space-y-4 mb-8 text-white/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-bold">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sustainable Shipping</span>
                  <span className="text-white font-bold">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Estimate</span>
                  <span className="text-white font-bold">$0.00</span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-white/60">Total Amount</span>
                  <span className="text-4xl font-outfit font-black">${total}</span>
                </div>
              </div>

              <Link 
                to="/checkout"
                className="w-full py-5 bg-white text-offcut-dark rounded-2xl font-black text-center block hover:bg-offcut-primary hover:text-white transition-all shadow-xl mb-6 flex items-center justify-center gap-3"
              >
                <CreditCard className="w-5 h-5" />
                PROCEED TO CHECKOUT
              </Link>

              <div className="flex items-center justify-center gap-2 text-[10px] text-white/40 font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3 h-3" />
                SECURE END-TO-END CHECKOUT
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;
