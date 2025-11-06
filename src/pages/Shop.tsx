import { motion } from 'framer-motion';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Dining Tables',
    'Dining Chairs',
    'Coffee Tables',
    'Wardrobes & Cupboards',
    'Bookcases & Storage',
    'Office Furniture',
    'Bedroom Furniture',
    'Lounge Chairs',
    'Accent Chairs',
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl heading-serif font-bold mb-4" style={{ color: '#2c1810' }}>
            Furniture Collection
          </h1>
          <p className="text-xl body-sans" style={{ color: '#6d4c28', opacity: 0.8 }}>
            Handcrafted pieces for your perfect space
          </p>
          <div className="divider-wood mt-6" />
        </motion.div>

        {/* Category Filter - Mobile Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 md:hidden"
        >
          <div
            className="rounded-2xl p-6 relative overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(139, 90, 43, 0.2)',
              boxShadow: '0 8px 32px rgba(44, 24, 16, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
            }}
          >
            {/* Glass shimmer effect */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                pointerEvents: 'none'
              }}
            />

            <label className="block body-sans font-bold mb-4 relative z-10" style={{ color: '#6d4c28', letterSpacing: '0.5px' }}>
              Filter by Category
            </label>
            <div className="relative z-10">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select w-full px-5 py-4 rounded-xl border-2 outline-none transition-all duration-300 body-sans font-semibold appearance-none cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderColor: 'rgba(139, 90, 43, 0.25)',
                  color: '#6d4c28',
                  boxShadow: '0 4px 16px rgba(44, 24, 16, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                  fontSize: '15px',
                  letterSpacing: '0.3px'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#8b5a2b';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 90, 43, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139, 90, 43, 0.25)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(44, 24, 16, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
                }}
              >
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    style={{
                      padding: '12px 16px',
                      backgroundColor: category === selectedCategory ? '#8b5a2b' : '#faf8f5',
                      color: category === selectedCategory ? 'white' : '#6d4c28',
                    }}
                  >
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={20}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform duration-300"
                style={{ color: '#6d4c28' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Category Filter - Desktop Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 hidden md:block"
        >
          <div className="glass rounded-3xl p-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg body-sans font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'glow-wood'
                      : 'glass'
                  }`}
                  style={selectedCategory === category
                    ? { background: 'linear-gradient(135deg, #8b5a2b, #a0714d)', color: 'white' }
                    : { color: '#6d4c28' }
                  }
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="body-sans mb-8 text-center"
          style={{ color: '#6d4c28', opacity: 0.7 }}
        >
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="glass-card max-w-md mx-auto">
              <p className="body-sans text-lg" style={{ color: '#6d4c28', opacity: 0.8 }}>
                No products found in this category.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory('All')}
                className="btn-primary mt-6"
              >
                View All Products
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
