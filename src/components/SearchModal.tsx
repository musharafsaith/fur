import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ArrowRight } from 'lucide-react';
import { useState, useMemo } from 'react';
import { FEATURED_PRODUCTS } from '../constants';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProductClick: (product: Product) => void;
  lang: 'en' | 'ur';
}

export default function SearchModal({ isOpen, onClose, onProductClick, lang }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const isUrdu = lang === 'ur';

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return FEATURED_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-paper/95 backdrop-blur-xl z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className={`fixed inset-0 z-[110] flex flex-col p-6 md:p-24 ${isUrdu ? 'rtl' : 'ltr'}`}
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-3 hover:bg-brand-ink/5 rounded-full transition-colors"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <div className="max-w-4xl mx-auto w-full flex flex-col h-full">
              <div className="relative mb-12">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-ink/30" size={32} strokeWidth={1.5} />
                <input
                  autoFocus
                  type="text"
                  placeholder={isUrdu ? 'تلاش کریں...' : 'Search for products...'}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-brand-ink/10 py-6 pl-12 text-4xl md:text-6xl font-serif outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div className="flex-grow overflow-y-auto">
                {query.trim() === '' ? (
                  <div className="space-y-8">
                    <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/30">
                      {isUrdu ? 'تجویز کردہ' : 'Popular Searches'}
                    </h5>
                    <div className="flex flex-wrap gap-4 text-xl md:text-3xl font-serif">
                      {['Living Room', 'Velvet', 'Marble', 'Beds'].map((term) => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="hover:text-brand-accent transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : filteredProducts.length === 0 ? (
                  <p className="text-2xl text-brand-ink/30 font-serif">
                    {isUrdu ? 'کوئی نتیجہ نہیں ملا' : 'No results found for'} "{query}"
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {filteredProducts.map((product) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={product.id}
                        className="flex gap-6 group cursor-pointer"
                        onClick={() => {
                          onProductClick(product);
                          onClose();
                        }}
                      >
                        <div className="w-32 h-32 bg-brand-ink/5 rounded-2xl overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold mb-1">
                            {product.category}
                          </span>
                          <h4 className="text-2xl font-serif group-hover:text-brand-accent transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-sm text-brand-ink/40 mt-1">${product.price}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
