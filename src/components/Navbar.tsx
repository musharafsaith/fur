import { motion } from 'motion/react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';

export default function Navbar({ onLangToggle, currentLang, onSearchOpen }: { onLangToggle: () => void, currentLang: 'en' | 'ur', onSearchOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-paper/80 backdrop-blur-md border-b border-brand-ink/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-medium">
            <a href="#collection" className="hover:text-brand-accent transition-colors">{currentLang === 'en' ? 'Collection' : 'کلیکشن'}</a>
            <a href="#about" className="hover:text-brand-accent transition-colors">{currentLang === 'en' ? 'Our Story' : 'ہمارا سفر'}</a>
            <a href="#contact" className="hover:text-brand-accent transition-colors">{currentLang === 'en' ? 'Contact' : 'رابطہ'}</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl font-serif tracking-tighter uppercase font-bold">
            Lumina
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={onLangToggle}
            className="text-[10px] font-bold tracking-widest hover:text-brand-accent transition-colors border border-brand-ink/10 px-2 py-1 rounded" 
            id="lang-toggle"
          >
            {currentLang === 'en' ? 'UR' : 'EN'}
          </button>
          <button 
            className="hover:text-brand-accent transition-colors" 
            id="search-btn"
            onClick={onSearchOpen}
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            className="hover:text-brand-accent transition-colors relative" 
            id="cart-btn"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <div className="hidden md:block">
            <button className="text-[11px] uppercase tracking-[0.1em] border border-brand-ink/20 px-4 py-2 hover:bg-brand-ink hover:text-brand-paper transition-all">
              Log In
            </button>
          </div>
        </div>
      </div>

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        lang={currentLang}
      />

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden bg-brand-paper border-b border-brand-ink/10 px-6 py-8 flex flex-col gap-6 ${currentLang === 'ur' ? 'rtl' : 'ltr'}`}
        >
          <a href="#collection" className="text-lg font-serif" onClick={() => setIsOpen(false)}>
            {currentLang === 'en' ? 'Collection' : 'کلیکشن'}
          </a>
          <a href="#about" className="text-lg font-serif" onClick={() => setIsOpen(false)}>
            {currentLang === 'en' ? 'Our Story' : 'ہمارا سفر'}
          </a>
          <a href="#contact" className="text-lg font-serif" onClick={() => setIsOpen(false)}>
            {currentLang === 'en' ? 'Contact' : 'رابطہ'}
          </a>
        </motion.div>
      )}
    </nav>
  );
}
