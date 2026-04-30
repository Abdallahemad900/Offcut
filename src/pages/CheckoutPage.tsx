import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Lock, Truck, CreditCard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const CheckoutPage = () => {
  const { cart, clearCart } = useStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isOrdered, setIsOrdered] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen bg-offcut-cream flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[3rem] shadow-2xl text-center max-w-lg"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-outfit font-black text-offcut-dark mb-4">ORDER CONFIRMED!</h1>
          <p className="text-offcut-earth mb-8">
            Thank you for choosing conscious fashion. Your order has been placed and our artisans are starting their magic. 
            Redirecting you home...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offcut-cream pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/cart" className="p-3 bg-white rounded-full hover:bg-offcut-primary hover:text-white transition-all shadow-sm">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-4xl font-outfit font-black text-offcut-dark tracking-tighter">CHECKOUT</h1>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-8">
            {/* Shipping Info */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-offcut-sand/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-offcut-cream rounded-xl flex items-center justify-center">
                  <Truck className="text-offcut-primary w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold">SHIPPING DETAILS</h2>
              </div>
              <form onSubmit={handlePlaceOrder} className="grid grid-cols-2 gap-4">
                <input className="col-span-1 p-4 bg-offcut-cream/30 rounded-xl outline-none focus:ring-2 ring-offcut-primary transition-all font-medium" placeholder="First Name" required />
                <input className="col-span-1 p-4 bg-offcut-cream/30 rounded-xl outline-none focus:ring-2 ring-offcut-primary transition-all font-medium" placeholder="Last Name" required />
                <input className="col-span-2 p-4 bg-offcut-cream/30 rounded-xl outline-none focus:ring-2 ring-offcut-primary transition-all font-medium" placeholder="Shipping Address" required />
                <input className="col-span-1 p-4 bg-offcut-cream/30 rounded-xl outline-none focus:ring-2 ring-offcut-primary transition-all font-medium" placeholder="City" required />
                <input className="col-span-1 p-4 bg-offcut-cream/30 rounded-xl outline-none focus:ring-2 ring-offcut-primary transition-all font-medium" placeholder="Postal Code" required />
                <input className="col-span-2 p-4 bg-offcut-cream/30 rounded-xl outline-none focus:ring-2 ring-offcut-primary transition-all font-medium" placeholder="Email Address" type="email" required />
              </form>
            </div>

            {/* Payment Info */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-offcut-sand/10 opacity-50 cursor-not-allowed">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-offcut-cream rounded-xl flex items-center justify-center">
                    <CreditCard className="text-offcut-primary w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">PAYMENT METHOD</h2>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-5 bg-offcut-sand/20 rounded"></div>
                  <div className="w-8 h-5 bg-offcut-sand/20 rounded"></div>
                </div>
              </div>
              <p className="text-xs text-offcut-earth font-bold uppercase tracking-widest">Select after shipping info</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-offcut-primary/5 sticky top-32">
              <h3 className="font-bold mb-6 text-offcut-earth uppercase tracking-widest text-sm">YOUR ORDER</h3>
              <div className="space-y-4 mb-8">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                      <span className="font-black text-offcut-primary">{item.quantity}x</span>
                      <span className="font-bold text-offcut-dark">{item.name}</span>
                    </div>
                    <span className="font-black">${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-offcut-sand/20 pt-6 space-y-4">
                <div className="flex justify-between font-black text-xl">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <button 
                  onClick={handlePlaceOrder}
                  className="w-full py-5 bg-offcut-dark text-white rounded-2xl font-black hover:bg-offcut-primary transition-all shadow-xl shadow-offcut-dark/20 flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
