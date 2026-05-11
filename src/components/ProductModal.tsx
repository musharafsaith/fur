import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, ChevronRight, ChevronLeft } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ur';
}

export default function ProductModal({ product, isOpen, onClose, lang }: ProductModalProps) {
  const { addToCart } = useCart();
  const isUrdu = lang === 'ur';

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[80]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl max-h-[90vh] bg-brand-paper z-[90] shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row ${isUrdu ? 'rtl' : 'ltr'}`}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-brand-paper/80 backdrop-blur rounded-full hover:bg-white transition-colors z-[100]"
            >
              <X size={20} />
            </button>

            <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-brand-ink/5 relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
              <div className="flex-grow space-y-6">
                <div className="space-y-2">
                  <span className="text-brand-accent text-[11px] uppercase tracking-[0.2em] font-semibold">
                    {product.category}
                  </span>
                  <h2 className="text-4xl font-serif leading-tight">{product.name}</h2>
                  <p className="text-2xl font-light">${product.price}</p>
                </div>

                <div className="h-px bg-brand-ink/10" />

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest font-bold">
                    {isUrdu ? 'تفصیل' : 'Description'}
                  </h4>
                  <p className="text-brand-ink/60 leading-relaxed text-sm">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest font-bold">
                    {isUrdu ? 'خصوصیات' : 'Specifics'}
                  </h4>
                  <ul className="grid grid-cols-2 gap-4 text-[10px] uppercase tracking-wider text-brand-ink/40">
                    <li>Premium Materials</li>
                    <li>Global Shipping</li>
                    <li>5 Year Warranty</li>
                    <li>Handmade Finish</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-brand-ink/10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="flex-grow bg-brand-ink text-brand-paper py-4 px-8 uppercase text-xs tracking-widest font-bold hover:bg-brand-accent transition-all flex items-center justify-center gap-3"
                >
                  <ShoppingBag size={16} />
                  {isUrdu ? 'تھیلے میں شامل کریں' : 'Add to Shopping Bag'}
                </button>
                <button className="border border-brand-ink/20 py-4 px-8 uppercase text-xs tracking-widest font-bold hover:bg-brand-ink hover:text-brand-paper transition-all">
                  {isUrdu ? 'بعد میں دیکھیں' : 'Wishlist'}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
