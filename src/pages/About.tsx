import { motion } from 'framer-motion';
import { Heart, Users, Hammer, Award, Leaf, Trophy } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '25K+', icon: Users },
    { label: 'Handcrafted Pieces', value: '350+', icon: Hammer },
    { label: 'Years of Excellence', value: '40+', icon: Award },
    { label: 'Customer Satisfaction', value: '99%', icon: Heart },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl heading-serif font-bold mb-4" style={{ color: '#2c1810' }}>
            About Elandro
          </h1>
          <p className="text-xl body-sans max-w-2xl mx-auto" style={{ color: '#6d4c28', opacity: 0.8 }}>
            Crafting timeless furniture since 1985
          </p>
          <div className="divider-wood mt-6" />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card text-center"
            >
              <div className="bg-gradient-to-r from-amber-700 to-amber-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-wood">
                <stat.icon size={28} className="text-white" />
              </div>
              <div className="text-3xl heading-serif font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="body-sans text-sm" style={{ color: '#6d4c28', opacity: 0.7 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mb-12"
        >
          <h2 className="text-3xl heading-serif font-bold mb-6" style={{ color: '#2c1810' }}>Our Story</h2>
          <div className="space-y-4 body-sans leading-relaxed" style={{ color: '#6d4c28', opacity: 0.85 }}>
            <p>
              Elandro Furniture was founded in 1985 by master craftsman Eduardo Alonso,
              with a vision to create furniture that stands the test of time. What began
              as a small workshop in the heart of the furniture district has blossomed into
              a renowned destination for discerning homeowners and interior designers worldwide.
            </p>
            <p>
              We believe that furniture is more than mere function—it's the foundation of your
              home's character, the silent witness to life's precious moments, and an investment
              in quality that spans generations. Each piece we create or curate reflects our
              unwavering commitment to exceptional craftsmanship, sustainable materials, and
              timeless design principles.
            </p>
            <p>
              Our team of skilled artisans and designers work with the finest hardwoods, premium
              fabrics, and sustainable materials sourced from certified forests. Every joint is
              precision-crafted, every finish hand-applied, and every detail considered with care.
              From contemporary minimalism to classic elegance, we offer furniture that transforms
              houses into homes and spaces into sanctuaries.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card"
        >
          <h2 className="text-3xl heading-serif font-bold mb-6" style={{ color: '#2c1810' }}>Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl heading-serif font-bold mb-3 flex items-center space-x-2" style={{ color: '#2c1810' }}>
                <Hammer style={{ color: '#8b5a2b' }} size={24} />
                <span>Master Craftsmanship</span>
              </h3>
              <p className="body-sans" style={{ color: '#6d4c28', opacity: 0.8 }}>
                Every piece is handcrafted by skilled artisans using traditional techniques
                passed down through generations, ensuring unparalleled quality and attention to detail.
              </p>
            </div>
            <div>
              <h3 className="text-xl heading-serif font-bold mb-3 flex items-center space-x-2" style={{ color: '#2c1810' }}>
                <Users style={{ color: '#a0714d' }} size={24} />
                <span>Customer Dedication</span>
              </h3>
              <p className="body-sans" style={{ color: '#6d4c28', opacity: 0.8 }}>
                Your vision becomes our mission. From consultation to delivery and beyond,
                we provide white-glove service and lifetime support for all our furniture.
              </p>
            </div>
            <div>
              <h3 className="text-xl heading-serif font-bold mb-3 flex items-center space-x-2" style={{ color: '#2c1810' }}>
                <Leaf style={{ color: '#8b5a2b' }} size={24} />
                <span>Sustainability</span>
              </h3>
              <p className="body-sans" style={{ color: '#6d4c28', opacity: 0.8 }}>
                We source only from FSC-certified forests and use eco-friendly finishes.
                Our commitment to the environment ensures furniture that's beautiful inside and out.
              </p>
            </div>
            <div>
              <h3 className="text-xl heading-serif font-bold mb-3 flex items-center space-x-2" style={{ color: '#2c1810' }}>
                <Trophy style={{ color: '#a0714d' }} size={24} />
                <span>Timeless Design</span>
              </h3>
              <p className="body-sans" style={{ color: '#6d4c28', opacity: 0.8 }}>
                We create pieces that transcend trends, combining classic elegance with
                contemporary functionality to deliver furniture that remains relevant for decades.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
