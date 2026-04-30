import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, addToCart, clearCart } = useStore();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b flex justify-between items-center bg-offcut-cream/30">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-offcut-primary" />
                <h2 className="text-xl font-outfit font-black tracking-tight">YOUR BASKET</h2>
                <span className="bg-offcut-primary text-white text-[10px] px-2 py-1 rounded-full font-bold">
                  {cart.length} ITEMS
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-offcut-sand/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-20 h-20 bg-offcut-cream rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-offcut-sand" />
                  </div>
                  <p className="text-offcut-earth font-medium">Your basket is currently empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-offcut-primary font-bold underline"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-offcut-cream flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <h3 className="font-bold text-offcut-dark leading-tight">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-offcut-earth hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-offcut-sand/30 rounded-lg">
                          <button
                            onClick={() => removeFromCart(item.id)} // This should be decreaseQuantity
                            className="p-1 hover:bg-offcut-cream transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="p-1 hover:bg-offcut-cream transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-outfit font-black text-lg">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-offcut-cream/20 border-t space-y-4">
                <div className="flex justify-between items-center text-offcut-earth font-medium">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between items-center text-offcut-dark font-black text-xl">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <button className="w-full py-4 bg-offcut-dark text-white rounded-xl font-bold tracking-widest hover:bg-offcut-earth transition-all shadow-lg hover:shadow-offcut-earth/20">
                  CHECKOUT NOW
                </button>
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-offcut-earth text-sm font-bold hover:text-offcut-dark transition-colors"
                >
                  CLEAR BASKET
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
