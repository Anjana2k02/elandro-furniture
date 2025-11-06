import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Armchair, Bed, Home, Briefcase, UtensilsCrossed, BookOpen, Lamp, Sofa, Shield } from 'lucide-react';

export const Collections = () => {
  const collections = [
    {
      name: 'Living Room',
      icon: Sofa,
      description: 'Comfortable seating and elegant centerpieces',
      color: 'from-amber-600 to-amber-700',
      items: 45,
    },
    {
      name: 'Dining Room',
      icon: UtensilsCrossed,
      description: 'Tables and chairs for memorable gatherings',
      color: 'from-amber-700 to-amber-800',
      items: 38,
    },
    {
      name: 'Bedroom',
      icon: Bed,
      description: 'Restful furniture for your personal sanctuary',
      color: 'from-amber-800 to-amber-900',
      items: 52,
    },
    {
      name: 'Office',
      icon: Briefcase,
      description: 'Professional desks and ergonomic seating',
      color: 'from-yellow-700 to-amber-700',
      items: 34,
    },
    {
      name: 'Storage & Cabinets',
      icon: Shield,
      description: 'Wardrobes, cupboards, and shelving solutions',
      color: 'from-amber-700 to-yellow-800',
      items: 41,
    },
    {
      name: 'Study & Library',
      icon: BookOpen,
      description: 'Bookcases and reading furniture',
      color: 'from-yellow-800 to-amber-800',
      items: 29,
    },
    {
      name: 'Accent Furniture',
      icon: Lamp,
      description: 'Side tables, consoles, and decorative pieces',
      color: 'from-amber-600 to-yellow-700',
      items: 37,
    },
    {
      name: 'Lounge Chairs',
      icon: Armchair,
      description: 'Luxury seating for relaxation',
      color: 'from-yellow-700 to-amber-600',
      items: 28,
    },
    {
      name: 'Outdoor',
      icon: Home,
      description: 'Weather-resistant patio and garden furniture',
      color: 'from-amber-700 to-amber-800',
      items: 25,
    },
  ];

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
            Furniture Collections
          </h1>
          <p className="text-xl body-sans max-w-2xl mx-auto" style={{ color: '#6d4c28', opacity: 0.8 }}>
            Discover handcrafted furniture pieces curated for every room in your home
          </p>
          <div className="divider-wood mt-6" />
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card group cursor-pointer overflow-hidden"
            >
              <div className="relative">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="mb-6 flex justify-center"
                  >
                    <div className={`bg-gradient-to-r ${collection.color} w-20 h-20 rounded-2xl flex items-center justify-center glow-wood`}>
                      <collection.icon size={36} className="text-white" />
                    </div>
                  </motion.div>

                  <h3 className="heading-serif text-2xl font-bold mb-3" style={{ color: '#2c1810' }}>
                    {collection.name}
                  </h3>

                  <p className="body-sans mb-4" style={{ color: '#6d4c28', opacity: 0.8 }}>
                    {collection.description}
                  </p>

                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <span className="body-sans text-sm" style={{ color: '#8b5a2b' }}>
                      {collection.items} items
                    </span>
                  </div>

                  <div
                    className={`w-24 h-1 bg-gradient-to-r ${collection.color} mx-auto rounded-full mb-4`}
                  />

                  <Link to="/shop">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-glass mt-4"
                    >
                      Explore Collection
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
