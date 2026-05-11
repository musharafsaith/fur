import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ur';
}

export default function CartModal({ isOpen, onClose, lang }: CartModalProps) {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  const isUrdu = lang === 'ur';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-paper z-[70] shadow-2xl flex flex-col ${isUrdu ? 'rtl' : 'ltr'}`}
          >
            <div className="p-6 border-b border-brand-ink/10 flex items-center justify-between">
              <h2 className="text-xl font-serif">
                {isUrdu ? 'آپ کا تھیلا' : 'Your Shopping Bag'} ({totalItems})
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-brand-ink/5 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-brand-ink/40">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="text-sm">
                    {isUrdu ? 'آپ کا تھیلا خالی ہے' : 'Your bag is empty'}
                  </p>
                  <button
                    onClick={onClose}
                    className="text-xs uppercase tracking-widest font-semibold text-brand-accent underline underline-offset-4"
                  >
                    {isUrdu ? 'خریداری جاری رکھیں' : 'Continue Shopping'}
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-24 bg-brand-ink/5 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow space-y-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-brand-ink/40 hover:text-brand-accent transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <p className="text-[10px] text-brand-ink/40 uppercase tracking-wider">
                        {item.category}
                      </p>
                      <div className="pt-2 flex justify-between items-center">
                        <div className="flex items-center border border-brand-ink/10 rounded overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-brand-ink/5 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-brand-ink/5 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="text-sm font-semibold">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-brand-ink/10 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-brand-ink/60">{isUrdu ? 'کل رقم' : 'Subtotal'}</span>
                  <span className="font-semibold text-lg">${totalPrice}</span>
                </div>
                <button className="w-full bg-brand-ink text-brand-paper py-4 uppercase text-xs tracking-widest font-semibold hover:bg-brand-accent transition-all">
                  {isUrdu ? 'چیک آؤٹ' : 'Proceed to Checkout'}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
