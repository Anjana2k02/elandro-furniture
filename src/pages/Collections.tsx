import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Collections = () => {
  const collections = [
    {
      name: "Men's Wear",
      emoji: '👔',
      description: 'Sophisticated styles for the modern man',
      color: 'from-blue-500 to-cyan-500',
      items: 45,
    },
    {
      name: "Women's Wear",
      emoji: '👗',
      description: 'Elegant fashion for every occasion',
      color: 'from-pink-500 to-rose-500',
      items: 62,
    },
    {
      name: 'Kids Collection',
      emoji: '👶',
      description: 'Comfortable & playful designs',
      color: 'from-yellow-500 to-orange-500',
      items: 28,
    },
    {
      name: 'Accessories',
      emoji: '👜',
      description: 'Complete your look with style',
      color: 'from-purple-500 to-indigo-500',
      items: 34,
    },
    {
      name: 'Footwear',
      emoji: '👟',
      description: 'Step out in confidence',
      color: 'from-green-500 to-emerald-500',
      items: 41,
    },
    {
      name: 'Winter Collection',
      emoji: '🧥',
      description: 'Stay warm, look cool',
      color: 'from-slate-500 to-zinc-600',
      items: 37,
    },
    {
      name: 'Summer Collection',
      emoji: '☀️',
      description: 'Light & breezy styles',
      color: 'from-amber-400 to-yellow-400',
      items: 52,
    },
    {
      name: 'Formal Wear',
      emoji: '🎩',
      description: 'Professional & polished',
      color: 'from-gray-700 to-slate-800',
      items: 29,
    },
    {
      name: 'Casual Wear',
      emoji: '👕',
      description: 'Everyday comfort meets style',
      color: 'from-teal-500 to-cyan-500',
      items: 56,
    },
    {
      name: 'Sports Wear',
      emoji: '⚽',
      description: 'Performance meets fashion',
      color: 'from-red-500 to-pink-500',
      items: 38,
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
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Our Collections
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our curated collections designed for every style and occasion
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-6" />
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
                  className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-7xl mb-6"
                  >
                    {collection.emoji}
                  </motion.div>

                  <h3 className="text-white text-2xl font-bold mb-3">
                    {collection.name}
                  </h3>

                  <p className="text-white/70 mb-4">{collection.description}</p>

                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <span className="text-white/50 text-sm">
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
