import { motion } from 'framer-motion';
import { ArrowRight, Armchair, Shield, Truck, Award, Leaf, Hammer, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';

export const Home = () => {
  const featuredProducts = products.slice(0, 6);

  const features = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'On all furniture orders',
    },
    {
      icon: Hammer,
      title: 'Handcrafted',
      description: 'Artisan quality pieces',
    },
    {
      icon: Leaf,
      title: 'Sustainable',
      description: 'Eco-friendly materials',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Built to last generations',
    },
  ];

  const collections = [
    { name: 'Living Room', icon: Armchair, color: 'from-amber-600 to-amber-700' },
    { name: 'Dining Room', icon: Crown, color: 'from-amber-700 to-amber-800' },
    { name: 'Bedroom', icon: Shield, color: 'from-amber-800 to-amber-900' },
    { name: 'Office', icon: Award, color: 'from-yellow-700 to-amber-700' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80)',
              filter: 'brightness(0.4)',
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-transparent" />

          {/* Animated Wood Grain Pattern */}
          <motion.div
            animate={{
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(139, 90, 43, 0.1) 0px, transparent 2px, transparent 4px, rgba(139, 90, 43, 0.1) 6px)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block glass-dark px-8 py-4 rounded-2xl mb-6"
              style={{
                border: '1px solid rgba(139, 90, 43, 0.3)',
                background: 'rgba(44, 24, 16, 0.4)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <span className="flex items-center space-x-2 body-sans font-semibold" style={{ color: '#d4c4b0' }}>
                <Leaf size={20} className="animate-pulse" style={{ color: '#a0714d' }} />
                <span>Handcrafted Excellence Since 1985</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl heading-serif font-bold leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
                style={{ color: '#f5f1ea' }}
              >
                Timeless Elegance
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block gradient-text mt-4 text-6xl sm:text-7xl lg:text-8xl"
              >
                ELANDRO
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block mt-4 text-3xl sm:text-4xl lg:text-5xl"
                style={{ color: '#d4c4b0' }}
              >
                Fine Furniture
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl max-w-3xl mx-auto body-sans font-light leading-relaxed"
              style={{ color: '#b8a896' }}
            >
              Where craftsmanship meets modern design. Discover furniture pieces that transform your space into a sanctuary of style and comfort.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            >
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center space-x-2 glow-wood text-lg px-10 py-4"
                >
                  <span>Explore Collection</span>
                  <ArrowRight size={22} />
                </motion.button>
              </Link>

              <Link to="/collections">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-10 py-4"
                  style={{ borderColor: '#a0714d', color: '#f5f1ea' }}
                >
                  View Collections
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-8 pt-12"
            >
              <div className="flex items-center space-x-2">
                <Award size={24} style={{ color: '#a0714d' }} />
                <span className="body-sans font-semibold" style={{ color: '#d4c4b0' }}>Award Winning Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf size={24} style={{ color: '#a0714d' }} />
                <span className="body-sans font-semibold" style={{ color: '#d4c4b0' }}>Sustainable Materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <Hammer size={24} style={{ color: '#a0714d' }} />
                <span className="body-sans font-semibold" style={{ color: '#d4c4b0' }}>Handcrafted Quality</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2" style={{ borderColor: 'rgba(160, 113, 77, 0.5)' }}>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#a0714d' }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl heading-serif font-bold mb-4" style={{ color: '#2c1810' }}>
              Featured Collection
            </h2>
            <p className="body-sans text-lg mb-6" style={{ color: '#6d4c28', opacity: 0.8 }}>
              Handpicked pieces that define exceptional craftsmanship
            </p>
            <div className="divider-wood" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glass text-lg"
              >
                View All Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl heading-serif font-bold mb-4" style={{ color: '#2c1810' }}>
              Shop by Room
            </h2>
            <p className="body-sans text-lg mb-6" style={{ color: '#6d4c28', opacity: 0.8 }}>
              Find the perfect pieces for every space in your home
            </p>
            <div className="divider-wood" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card text-center cursor-pointer group relative overflow-hidden"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className={`bg-gradient-to-r ${collection.color} w-20 h-20 rounded-2xl flex items-center justify-center glow-wood group-hover:scale-110 transition-transform duration-300`}>
                    <collection.icon size={36} className="text-white" />
                  </div>
                </div>
                {/* Title */}
                <h3 className="heading-serif text-2xl font-bold mb-3" style={{ color: '#2c1810' }}>
                  {collection.name}
                </h3>
                {/* Divider */}
                <div className={`w-16 h-1 bg-gradient-to-r ${collection.color} mx-auto rounded-full`} />
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl heading-serif font-bold mb-4" style={{ color: '#2c1810' }}>
              The Elandro Promise
            </h2>
            <p className="body-sans text-lg mb-6" style={{ color: '#6d4c28', opacity: 0.8 }}>
              Exceptional service and quality in every detail
            </p>
            <div className="divider-wood" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card text-center"
              >
                <div className="bg-gradient-to-r from-amber-700 to-amber-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-wood">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="heading-serif text-xl font-bold mb-2" style={{ color: '#2c1810' }}>
                  {feature.title}
                </h3>
                <p className="body-sans" style={{ color: '#6d4c28', opacity: 0.7 }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
