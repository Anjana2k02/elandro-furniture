import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCartStore, type Product } from '../../store/cartStore';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
  };

  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case 'New':
        return 'from-amber-600 to-amber-700';
      case 'Bestseller':
        return 'from-yellow-600 to-amber-600';
      case 'Sale':
        return 'from-emerald-600 to-green-700';
      case 'Premium':
        return 'from-amber-800 to-amber-900';
      default:
        return 'from-amber-700 to-amber-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="product-card group"
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden rounded-t-3xl bg-white/5">
        {product.badge && (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className={`absolute top-4 right-4 z-10 bg-gradient-to-r ${getBadgeColor(
              product.badge
            )} px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wide shadow-lg`}
          >
            {product.badge}
          </motion.div>
        )}

        {!imageLoaded && (
          <div className="absolute inset-0 shimmer bg-white/5" />
        )}

        <motion.img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <p className="body-sans text-sm font-semibold mb-1 uppercase tracking-wide" style={{ color: '#a0714d' }}>
            {product.category}
          </p>
          <h3 className="heading-serif font-bold mb-2 line-clamp-1" style={{ fontSize: '1.25rem', color: '#2c1810' }}>
            {product.name}
          </h3>
          <p className="body-sans text-sm line-clamp-2" style={{ color: '#6d4c28', opacity: 0.8 }}>
            {product.description}
          </p>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(139, 90, 43, 0.15)' }}>
          <div className="text-3xl font-black gradient-text">
            ${product.price.toLocaleString()}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="btn-glass flex items-center space-x-2 group/btn"
          >
            <ShoppingCart size={16} className="group-hover/btn:animate-bounce" />
            <span>Add to Cart</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
