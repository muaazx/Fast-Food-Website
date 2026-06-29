import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import SpecialOffers from './components/SpecialOffers';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Load cart from localStorage on component mount
  useEffect(() => {
    try {
<<<<<<< HEAD
      const savedCart = localStorage.getItem('pizzasaucy_cart');
=======
      const savedCart = localStorage.getItem('firebite_cart');
>>>>>>> 24093c234b0ead23639500865402ebf93071166d
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
    }
  }, []);

  // Save cart to localStorage when it changes
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    try {
<<<<<<< HEAD
      localStorage.setItem('pizzasaucy_cart', JSON.stringify(newCart));
=======
      localStorage.setItem('firebite_cart', JSON.stringify(newCart));
>>>>>>> 24093c234b0ead23639500865402ebf93071166d
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  };

  // Add Item
  const handleAddToCart = (menuItem: MenuItem) => {
    const existingIndex = cart.findIndex((item) => item.menuItem.id === menuItem.id);
    let newCart = [...cart];
    if (existingIndex > -1) {
      newCart[existingIndex].quantity += 1;
    } else {
      newCart.push({ menuItem, quantity: 1 });
    }
    saveCart(newCart);
    setIsCartOpen(true); // Automatically slide open cart to give instant feedback
  };

  // Update Quantity
  const handleUpdateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(id);
      return;
    }
    const newCart = cart.map((item) => 
      item.menuItem.id === id ? { ...item, quantity: qty } : item
    );
    saveCart(newCart);
  };

  // Remove Item
  const handleRemoveItem = (id: string) => {
    const newCart = cart.filter((item) => item.menuItem.id !== id);
    saveCart(newCart);
  };

  // Clear Cart
  const handleClearCart = () => {
    saveCart([]);
  };

  // Smooth Scroll Navigation
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 75; // Adjust for the sticky navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Scroll Spy to highlight active section in Navbar
  useEffect(() => {
    const sections = ['hero', 'menu', 'offers', 'about', 'gallery', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200; // Offset for spy detection
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] font-sans antialiased overflow-x-hidden selection:bg-[#FF2D20] selection:text-white">
      {/* Sticky Navbar */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* Menu Section */}
        <Menu onAddToCart={handleAddToCart} />

        {/* Special Offers Section */}
        <SpecialOffers onAddToCart={handleAddToCart} />

        {/* About Section */}
        <About />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Gallery Section */}
        <Gallery />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
