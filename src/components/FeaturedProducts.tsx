import { motion, AnimatePresence } from 'motion/react';
import { FEATURED_PRODUCTS } from '../constants';
import { ArrowRight, Plus } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

export default function FeaturedProducts({ lang, onProductClick }: { lang: 'en' | 'ur', onProductClick: (p: Product) => void }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { addToCart } = useCart();
  const isUrdu = lang === 'ur';

  const categories = ['All', ...new Set(FEATURED_PRODUCTS.map(p => p.category))];

  const filteredProducts = activeCategory === 'All' 
    ? FEATURED_PRODUCTS 
    : FEATURED_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="collection-list" className="py-24 bg-brand-ink text-brand-paper overflow-hidden">
      <div className={`max-w-7xl mx-auto px-6 ${isUrdu ? 'rtl' : 'ltr'}`}>
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-5xl font-serif">
              {isUrdu ? 'دستخط شدہ مجموعہ' : 'Signature Selection'}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] uppercase tracking-widest px-4 py-2 border rounded-full transition-all ${
                    activeCategory === cat 
                      ? 'bg-brand-accent border-brand-accent text-white' 
                      : 'border-brand-paper/20 hover:border-brand-accent hover:text-brand-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-brand-accent transition-colors" id="view-all-products">
            {isUrdu ? 'تمام سیریز دیکھیں' : 'View All Series'} <ArrowRight size={16} />
          </button>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
                id={`product-${product.id}`}
                onClick={() => onProductClick(product)}
              >
                <div className="relative aspect-square overflow-hidden mb-6 bg-[#2a2a2a] rounded-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <button 
                    className="absolute bottom-4 right-4 bg-white text-brand-ink p-3 rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-accent hover:text-white shadow-xl z-20"
                    title="Add to cart"
                    id={`add-to-cart-${product.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-brand-paper/40 font-medium">{product.category}</span>
                  <h4 className="text-lg font-medium group-hover:text-brand-accent transition-colors">{product.name}</h4>
                  <p className="text-brand-accent font-light">AED {product.price.toLocaleString()}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
