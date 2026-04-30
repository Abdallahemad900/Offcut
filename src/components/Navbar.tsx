import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Menu, X, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, setIsCartOpen } = useStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Store', path: '/store' },
    { name: 'Studio', path: '/studio' },
    { name: 'Circle', path: '/circle' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Leaf className="text-offcut-primary w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-outfit font-black tracking-tighter text-offcut-dark">
            OFF <span className="text-offcut-primary">CUT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors hover:text-offcut-primary ${
                location.pathname === link.path ? 'text-offcut-primary border-b-2 border-offcut-primary pb-1' : 'text-offcut-dark'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer group">
            <Heart className="w-5 h-5 text-offcut-dark group-hover:text-offcut-primary transition-colors" />
          </div>
          <div 
            className="relative cursor-pointer group"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="w-5 h-5 text-offcut-dark group-hover:text-offcut-primary transition-colors" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-offcut-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </div>
          <button className="md:hidden text-offcut-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-offcut-primary/10 p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold uppercase tracking-widest text-offcut-dark hover:text-offcut-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
