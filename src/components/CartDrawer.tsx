import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, ClipboardCheck, ChefHat, Bike, Heart } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details' | 'success'>('cart');
  
  // Checkout Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('Gulberg');
  const [orderId, setOrderId] = useState('');
  
  // Active tracking state for success step
  const [trackingStep, setTrackingStep] = useState(0);

  // Subtotals
  const subtotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const deliveryCharges = subtotal > 0 ? 100 : 0;
  const governmentTax = subtotal > 0 ? Math.round(subtotal * 0.05) : 0; // 5% PST
  const total = subtotal + deliveryCharges + governmentTax;

  // Simulate active cooking tracker once order is placed
  useEffect(() => {
    if (checkoutStep !== 'success') return;
    
    setTrackingStep(0);
    const t1 = setTimeout(() => setTrackingStep(1), 5000); // Cooking
    const t2 = setTimeout(() => setTrackingStep(2), 12000); // Dispatched
    const t3 = setTimeout(() => setTrackingStep(3), 20000); // Delivered

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [checkoutStep]);

  const handlePlaceOrder = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) return;

    // Generate random 5-digit order ID
    const generatedId = `FB-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderId(generatedId);
    setCheckoutStep('success');
  };

  const handleResetCheckout = () => {
    onClearCart();
    setCheckoutStep('cart');
    setName('');
    setPhone('');
    setAddress('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
          />

          {/* Drawer Body Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-[#111111] border-l border-white/5 z-50 shadow-[-10px_0_40px_rgba(0,0,0,0.8)] flex flex-col justify-between"
          >
            {/* 1. CART VIEW */}
            {checkoutStep === 'cart' && (
              <>
                {/* Header */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <ShoppingBag className="w-5 h-5 text-[#FF2D20]" />
                    <h3 className="font-bebas text-2xl text-white tracking-wider">Your Fire Box</h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-full bg-[#1A1A1A] hover:bg-[#FF2D20]/20 text-white/50 hover:text-[#FF2D20] transition-all duration-300 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Items List */}
                <div className="flex-grow overflow-y-auto p-6 space-y-4">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center px-4">
                      <ShoppingBag className="w-16 h-16 text-white/10 mb-4 animate-bounce" />
                      <h4 className="font-bebas text-2xl text-white tracking-wider mb-1">Your box is empty!</h4>
                      <p className="font-inter text-xs text-[#F5F5F5]/40 max-w-xs mb-6">
                        Add some sizzling Double Smash Burgers or Fiery Loaded Fries from our menu to stoke your hunger.
                      </p>
                      <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-[#FF2D20] hover:bg-[#D61D12] text-white font-montserrat text-xs font-bold uppercase rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        Explore Menu
                      </button>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.menuItem.id}
                        className="flex items-center justify-between p-3 rounded-2xl bg-[#1A1A1A] border border-white/5"
                      >
                        {/* Food Thumb */}
                        <div className="flex items-center space-x-3 flex-grow min-w-0">
                          <img
                            src={item.menuItem.image}
                            alt={item.menuItem.name}
                            referrerPolicy="no-referrer"
                            className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <h4 className="font-montserrat font-bold text-xs text-white truncate leading-tight">
                              {item.menuItem.name}
                            </h4>
                            <span className="font-bebas text-sm text-[#FFB800] mt-0.5 block">
                              Rs. {item.menuItem.price}
                            </span>
                          </div>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center space-x-3 flex-shrink-0">
                          <div className="flex items-center space-x-1.5 bg-[#111111] p-1 rounded-full border border-white/10">
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity - 1)}
                              className="p-1 rounded-full bg-[#1A1A1A] hover:bg-[#FF2D20] text-white/60 hover:text-white transition-colors duration-200"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-xs font-bold text-white px-1.5 min-w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                              className="p-1 rounded-full bg-[#1A1A1A] hover:bg-[#FF2D20] text-white/60 hover:text-white transition-colors duration-200"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Delete */}
                          <button
                            onClick={() => onRemoveItem(item.menuItem.id)}
                            className="p-2 bg-red-950/20 border border-red-900/10 hover:bg-[#FF2D20] text-[#FF2D20] hover:text-white rounded-full transition-colors duration-200"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer totals */}
                {cart.length > 0 && (
                  <div className="p-6 bg-[#161616] border-t border-white/5 space-y-4">
                    <div className="space-y-2 text-xs font-inter text-[#F5F5F5]/60">
                      <div className="flex justify-between">
                        <span>Cart Subtotal</span>
                        <span className="text-white font-medium">Rs. {subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Government PST (5%)</span>
                        <span className="text-white font-medium">Rs. {governmentTax}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Charges</span>
                        <span className="text-[#00E676] font-medium">Rs. {deliveryCharges}</span>
                      </div>
                      <div className="flex justify-between border-t border-white/5 pt-3 text-sm">
                        <span className="font-montserrat font-bold text-white uppercase">Grand Total</span>
                        <span className="font-bebas text-2xl text-[#FFB800] tracking-wider font-extrabold">
                          Rs. {total}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setCheckoutStep('details')}
                      className="w-full py-4 bg-[#FF2D20] hover:bg-[#D61D12] text-white font-montserrat font-extrabold tracking-widest uppercase rounded-full shadow-[0_4px_15px_rgba(255,45,32,0.3)] hover:scale-102 transition-transform duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>PROCEED TO CHECKOUT</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}

            {/* 2. CHECKOUT DETAILS VIEW */}
            {checkoutStep === 'details' && (
              <>
                {/* Header */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <ClipboardCheck className="w-5 h-5 text-[#FFB800]" />
                    <h3 className="font-bebas text-2xl text-white tracking-wider">Delivery Details</h3>
                  </div>
                  <button
                    onClick={() => setCheckoutStep('cart')}
                    className="px-3 py-1 bg-[#1A1A1A] border border-white/10 hover:border-[#FF2D20]/40 text-white/60 hover:text-white rounded-full text-xs font-montserrat font-bold uppercase transition-colors"
                  >
                    Back
                  </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handlePlaceOrder} className="flex-grow overflow-y-auto p-6 space-y-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase font-extrabold tracking-wider text-white/50 font-montserrat">
                      Recipient Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Bilal"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#FF2D20] rounded-xl px-4 py-3 text-sm text-white outline-none font-inter transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase font-extrabold tracking-wider text-white/50 font-montserrat">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="^(\+92|0|92)[0-9]{10}$"
                      placeholder="e.g. 03001234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#FF2D20] rounded-xl px-4 py-3 text-sm text-white outline-none font-inter transition-colors"
                    />
                    <p className="text-[10px] text-white/30 font-inter">Format: 03XXXXXXXXX</p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase font-extrabold tracking-wider text-white/50 font-montserrat">
                      Delivery Area *
                    </label>
                    <select
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#FF2D20] rounded-xl px-4 py-3 text-sm text-white outline-none font-inter transition-colors cursor-pointer"
                    >
                      <option value="Gulberg">Gulberg I, II, III (Lahore)</option>
                      <option value="DHA">DHA Phases 1-6 (Lahore)</option>
                      <option value="Model Town">Model Town (Lahore)</option>
                      <option value="Johar Town">Johar Town (Lahore)</option>
                      <option value="Clifton">Clifton (Karachi)</option>
                      <option value="DHA Clifton">DHA Clifton (Karachi)</option>
                      <option value="F-7">F-7, F-8, G-9 (Islamabad)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase font-extrabold tracking-wider text-white/50 font-montserrat">
                      Detailed Home Address *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="e.g. House # 45-C, Street 12, Phase 5 DHA"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#FF2D20] rounded-xl px-4 py-3 text-sm text-white outline-none font-inter transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Cash on Delivery Notice */}
                  <div className="p-4 bg-[#FFB800]/10 border border-[#FFB800]/20 rounded-2xl flex items-start space-x-3">
                    <span className="text-xl">💵</span>
                    <div>
                      <h5 className="font-montserrat font-bold text-xs text-white uppercase tracking-wider">Cash on Delivery Only</h5>
                      <p className="font-inter text-[11px] text-[#F5F5F5]/60 mt-0.5 leading-relaxed">
                        To guarantee safe and quick physical transactions, we only accept Cash on Delivery (COD) at the moment. Please keep exact change ready.
                      </p>
                    </div>
                  </div>

                  {/* Proceed button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#FFB800] hover:bg-[#E0A200] text-black font-montserrat font-extrabold tracking-widest uppercase rounded-full shadow-[0_4px_15px_rgba(255,184,0,0.3)] hover:scale-102 transition-transform duration-300 flex items-center justify-center space-x-2 cursor-pointer mt-6"
                  >
                    <span>PLACE ORDER (Rs. {total})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}

            {/* 3. ORDER SUCCESS & TRACKER VIEW */}
            {checkoutStep === 'success' && (
              <div className="flex-grow flex flex-col justify-between overflow-y-auto">
                {/* Header */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <h3 className="font-bebas text-2xl text-[#00E676] tracking-wider">🔥 Order Placed!</h3>
                  <button
                    onClick={handleResetCheckout}
                    className="p-1.5 rounded-full bg-[#1A1A1A] hover:bg-white/10 text-white/50 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Receipt Details and Live Tracker */}
                <div className="p-6 space-y-8 flex-grow">
                  {/* Fire Animation */}
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="inline-flex p-4 rounded-full bg-[#FF2D20]/10 border border-[#FF2D20]/20 text-[#FF2D20] mb-3"
                    >
                      <ChefHat className="w-10 h-10 text-[#FF2D20] animate-pulse" />
                    </motion.div>
                    <h4 className="font-bebas text-3xl text-white tracking-wide">SMOKIN' IN PROGRESS</h4>
                    <p className="font-mono text-xs text-[#FFB800] uppercase mt-0.5 font-bold">Order ID: {orderId}</p>
                  </div>

                  {/* Live step tracker */}
                  <div className="space-y-6 relative before:absolute before:left-6.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-white/5">
                    
                    {/* Step 1 */}
                    <div className="flex items-center space-x-4 relative">
                      <div className={`w-13 h-13 rounded-full flex items-center justify-center border text-sm font-bold z-10 ${
                        trackingStep >= 0 
                          ? 'bg-[#FF2D20]/15 border-[#FF2D20] text-[#FF2D20] shadow-[0_0_15px_rgba(255,45,32,0.4)]' 
                          : 'bg-[#1A1A1A] border-white/10 text-white/30'
                      }`}>
                        📝
                      </div>
                      <div>
                        <h5 className={`font-montserrat font-extrabold text-xs uppercase tracking-wider ${trackingStep >= 0 ? 'text-white' : 'text-white/30'}`}>
                          Order Confirmed
                        </h5>
                        <p className="font-inter text-[11px] text-white/40">Our master chef received your order.</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center space-x-4 relative">
                      <div className={`w-13 h-13 rounded-full flex items-center justify-center border text-sm font-bold z-10 ${
                        trackingStep >= 1 
                          ? 'bg-[#FFB800]/15 border-[#FFB800] text-[#FFB800] shadow-[0_0_15px_rgba(255,184,0,0.4)]' 
                          : 'bg-[#1A1A1A] border-white/10 text-white/30'
                      }`}>
                        🔥
                      </div>
                      <div>
                        <h5 className={`font-montserrat font-extrabold text-xs uppercase tracking-wider ${trackingStep >= 1 ? 'text-white' : 'text-white/30'}`}>
                          Sizzling Grill Sensation
                        </h5>
                        <p className="font-inter text-[11px] text-white/40">Patty is double-smashed over charcoal flames.</p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-center space-x-4 relative">
                      <div className={`w-13 h-13 rounded-full flex items-center justify-center border text-sm font-bold z-10 ${
                        trackingStep >= 2 
                          ? 'bg-[#00E676]/15 border-[#00E676] text-[#00E676] shadow-[0_0_15px_rgba(0,230,118,0.4)]' 
                          : 'bg-[#1A1A1A] border-white/10 text-white/30'
                      }`}>
                        🚀
                      </div>
                      <div>
                        <h5 className={`font-montserrat font-extrabold text-xs uppercase tracking-wider ${trackingStep >= 2 ? 'text-white' : 'text-white/30'}`}>
                          Out for Fast Delivery
                        </h5>
                        <p className="font-inter text-[11px] text-white/40">Our rider is racing to DHA/Gulberg at warp speed.</p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-center space-x-4 relative">
                      <div className={`w-13 h-13 rounded-full flex items-center justify-center border text-sm font-bold z-10 ${
                        trackingStep >= 3 
                          ? 'bg-[#25D366]/20 border-[#25D366] text-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.4)]' 
                          : 'bg-[#1A1A1A] border-white/10 text-white/30'
                      }`}>
                        🍔
                      </div>
                      <div>
                        <h5 className={`font-montserrat font-extrabold text-xs uppercase tracking-wider ${trackingStep >= 3 ? 'text-[#25D366]' : 'text-white/30'}`}>
                          Delivered & Satisfied
                        </h5>
                        <p className="font-inter text-[11px] text-white/40">Enjoy your dangerously delicious bite!</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Back home action button */}
                <div className="p-6 bg-[#161616] border-t border-white/5 text-center space-y-4">
                  <p className="font-inter text-xs text-white/60">
                    Need support? WhatsApp us at <span className="text-[#25D366] font-semibold">+92 300 1234567</span> with ID <span className="font-mono text-white">{orderId}</span>.
                  </p>
                  <button
                    onClick={handleResetCheckout}
                    className="w-full py-4 bg-[#1A1A1A] hover:bg-white/5 text-white font-montserrat font-extrabold tracking-widest uppercase rounded-full border border-white/10 hover:border-[#FF2D20] transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <Heart className="w-4 h-4 text-[#FF2D20] fill-[#FF2D20]" />
                    <span>FINISH & RETURN HOME</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
