import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ cart, onOpenCart, onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Menu', id: 'menu' },
    { name: 'Offers', id: 'offers' },
    { name: 'About', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#111111]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center space-x-2 group cursor-pointer"
            id="nav-logo"
          >
            <div className="relative">
              <Flame className="w-8 h-8 text-[#FF2D20] fill-[#FF2D20] group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-0 left-0 w-full h-full bg-[#FFB800]/30 blur-md rounded-full -z-10 group-hover:bg-[#FF2D20]/40 transition-all duration-300"></div>
            </div>
            <span className="font-bebas text-3xl tracking-wide text-white group-hover:text-[#FFB800] transition-colors duration-300">
              FIRE<span className="text-[#FF2D20]">BITE</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-montserrat text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:text-[#FF2D20] cursor-pointer ${
                  activeSection === link.id ? 'text-[#FF2D20] scale-105' : 'text-[#F5F5F5]/80'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#1A1A1A] border border-white/10 hover:border-[#FF2D20] hover:text-[#FF2D20] transition-all duration-300 group cursor-pointer"
              id="cart-trigger"
              aria-label="Open Cart"
            >
              <ShoppingCart className="w-5 h-5 text-white group-hover:scale-105 transition-transform duration-300" />
              {totalCartItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-[#FF2D20] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center font-inter border-2 border-[#111111] shadow-[0_0_10px_rgba(255,45,32,0.5)]"
                >
                  {totalCartItems}
                </motion.span>
              )}
            </button>

            {/* Order Now Pill Button */}
            <button
              onClick={() => handleLinkClick('menu')}
              className="hidden md:block px-6 py-2.5 bg-[#FF2D20] hover:bg-[#D61D12] text-white font-montserrat text-sm font-bold tracking-wider uppercase rounded-full shadow-[0_4px_15px_rgba(255,45,32,0.3)] hover:shadow-[0_4px_25px_rgba(255,45,32,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
              id="nav-order-btn"
            >
              Order Now
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-[#1A1A1A] border border-white/10 hover:border-[#FF2D20] transition-all duration-300 cursor-pointer"
              id="mobile-nav-toggle"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#FF2D20]" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[76px] left-0 w-full bg-[#111111]/98 backdrop-blur-lg border-b border-white/10 z-40 md:hidden overflow-hidden shadow-2xl"
            id="mobile-menu"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left font-montserrat text-lg font-bold tracking-wider uppercase py-2 border-b border-white/5 transition-all duration-300 cursor-pointer ${
                    activeSection === link.id ? 'text-[#FF2D20]' : 'text-[#F5F5F5]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate('menu');
                }}
                className="w-full py-4 bg-[#FF2D20] text-white font-montserrat text-center font-bold tracking-wider uppercase rounded-full shadow-[0_4px_15px_rgba(255,45,32,0.3)] hover:scale-[1.02] transition-transform duration-300"
              >
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
