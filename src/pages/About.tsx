import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Award } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '10K+', icon: Users },
    { label: 'Products', value: '500+', icon: Sparkles },
    { label: 'Years of Service', value: '5+', icon: Award },
    { label: 'Customer Satisfaction', value: '98%', icon: Heart },
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
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            About Devil Shop
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Your trusted fashion destination since 2019
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-6" />
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
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-purple">
                <stat.icon size={28} className="text-white" />
              </div>
              <div className="text-3xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
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
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              Devil Shop was founded in 2019 with a simple mission: to make premium
              fashion accessible to everyone. What started as a small boutique has
              grown into a thriving online destination for fashion enthusiasts
              worldwide.
            </p>
            <p>
              We believe that fashion is more than just clothing—it's a form of
              self-expression, a way to tell your story without saying a word. That's
              why we curate every piece in our collection with care, ensuring that
              each item meets our high standards of quality, style, and sustainability.
            </p>
            <p>
              Our team of fashion experts travels the globe to discover emerging
              designers and timeless classics, bringing you a diverse range of styles
              that cater to every taste and occasion. From casual everyday wear to
              elegant formal attire, we've got you covered.
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
          <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
                <Sparkles className="text-indigo-400" size={24} />
                <span>Quality First</span>
              </h3>
              <p className="text-white/70">
                We never compromise on quality. Every product is carefully selected
                and inspected to ensure it meets our rigorous standards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
                <Users className="text-purple-400" size={24} />
                <span>Customer Focus</span>
              </h3>
              <p className="text-white/70">
                Your satisfaction is our priority. We're committed to providing
                exceptional service and support at every step of your journey.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
                <Heart className="text-pink-400" size={24} />
                <span>Sustainability</span>
              </h3>
              <p className="text-white/70">
                We're dedicated to sustainable fashion practices, partnering with
                eco-conscious brands and minimizing our environmental impact.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
                <Award className="text-yellow-400" size={24} />
                <span>Innovation</span>
              </h3>
              <p className="text-white/70">
                We stay ahead of trends and continuously improve our platform to
                provide you with the best shopping experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
