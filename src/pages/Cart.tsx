import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore();

  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card text-center py-20"
          >
            <ShoppingBag size={80} className="mx-auto mb-6" style={{ color: 'rgba(109, 76, 40, 0.3)' }} />
            <h2 className="text-3xl heading-serif font-bold mb-4" style={{ color: '#2c1810' }}>
              Your cart is empty
            </h2>
            <p className="body-sans mb-8" style={{ color: '#6d4c28', opacity: 0.7 }}>
              Start shopping to add items to your cart
            </p>
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Continue Shopping
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 body-sans mb-6 transition-colors"
            style={{ color: '#6d4c28', opacity: 0.8 }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
          >
            <ArrowLeft size={20} />
            <span>Continue Shopping</span>
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl sm:text-5xl heading-serif font-bold" style={{ color: '#2c1810' }}>
              Shopping Cart
            </h1>
            {items.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 transition-colors font-semibold body-sans"
              >
                Clear Cart
              </motion.button>
            )}
          </div>
          <div className="divider-wood mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  layout
                  className="glass-card"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-white/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="heading-serif text-xl font-bold mb-1" style={{ color: '#2c1810' }}>
                          {item.name}
                        </h3>
                        <p className="body-sans text-sm mb-2" style={{ color: '#8b5a2b' }}>
                          {item.category}
                        </p>
                        <p className="text-2xl font-black gradient-text">
                          ${item.price}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="glass w-10 h-10 rounded-full flex items-center justify-center transition-all"
                            style={{ color: '#6d4c28' }}
                          >
                            <Minus size={18} />
                          </motion.button>

                          <span className="body-sans font-bold text-lg w-12 text-center" style={{ color: '#2c1810' }}>
                            {item.quantity}
                          </span>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="glass w-10 h-10 rounded-full flex items-center justify-center transition-all"
                            style={{ color: '#6d4c28' }}
                          >
                            <Plus size={18} />
                          </motion.button>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={20} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card sticky top-32"
            >
              <h2 className="text-2xl heading-serif font-bold mb-6" style={{ color: '#2c1810' }}>
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between body-sans" style={{ color: '#6d4c28', opacity: 0.8 }}>
                  <span>Subtotal</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between body-sans" style={{ color: '#6d4c28', opacity: 0.8 }}>
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {totalPrice > 100 ? 'FREE' : '$9.99'}
                  </span>
                </div>
                <div className="flex justify-between body-sans" style={{ color: '#6d4c28', opacity: 0.8 }}>
                  <span>Tax (10%)</span>
                  <span className="font-semibold">
                    ${(totalPrice * 0.1).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="pt-4 mb-6" style={{ borderTop: '1px solid rgba(139, 90, 43, 0.3)' }}>
                <div className="flex justify-between text-xl font-bold heading-serif" style={{ color: '#2c1810' }}>
                  <span>Total</span>
                  <span className="gradient-text text-2xl">
                    $
                    {(
                      totalPrice +
                      (totalPrice > 100 ? 0 : 9.99) +
                      totalPrice * 0.1
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              {totalPrice > 100 && (
                <div className="glass px-4 py-3 rounded-2xl mb-6" style={{
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.3)'
                }}>
                  <p className="body-sans text-sm font-semibold text-center" style={{ color: '#16a34a' }}>
                    You're eligible for free shipping!
                  </p>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full glow-wood"
              >
                Proceed to Checkout
              </motion.button>

              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary w-full mt-4"
                >
                  Continue Shopping
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
