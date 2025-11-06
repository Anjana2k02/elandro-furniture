import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Collections', path: '/collections' },
        { name: 'About Us', path: '/about' },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Shipping Info', path: '/shipping' },
        { name: 'Returns', path: '/returns' },
        { name: 'FAQ', path: '/faq' },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { name: 'Instagram', path: '#' },
        { name: 'Facebook', path: '#' },
        { name: 'Twitter', path: '#' },
        { name: 'Pinterest', path: '#' },
      ],
    },
  ];

  return (
    <footer className="mt-20" style={{
      background: 'linear-gradient(135deg, #2c1810 0%, #1a0f0a 100%)',
      borderTop: '1px solid rgba(139, 90, 43, 0.3)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-3xl heading-serif font-bold" style={{ color: '#f5f1ea' }}>
              ELANDRO
            </h3>
            <p className="text-sm body-sans" style={{ color: '#d4c4b0', lineHeight: '1.8' }}>
              Handcrafted furniture for discerning tastes. Quality pieces that stand the test of time.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
              className="space-y-4"
            >
              <h4 className="body-sans font-bold text-base" style={{ color: '#f5f1ea', letterSpacing: '0.5px' }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="body-sans text-sm transition-colors duration-300"
                      style={{ color: '#b8a896' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#f5f1ea'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#b8a896'}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-10"
          style={{ borderTop: '1px solid rgba(139, 90, 43, 0.3)' }}
        >
          <div className="max-w-md mx-auto text-center space-y-4">
            <h4 className="body-sans font-bold text-lg" style={{ color: '#f5f1ea' }}>
              Stay Connected
            </h4>
            <p className="body-sans text-sm" style={{ color: '#d4c4b0' }}>
              Subscribe for exclusive offers and new arrivals
            </p>
            <div className="flex gap-3 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-lg border-2 outline-none transition-all duration-300 body-sans"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(139, 90, 43, 0.3)',
                  color: '#f5f1ea'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#8b5a2b';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139, 90, 43, 0.3)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 text-center body-sans text-sm"
          style={{
            borderTop: '1px solid rgba(139, 90, 43, 0.3)',
            color: '#9a8775'
          }}
        >
          <p>&copy; {currentYear} Elandro Furniture. All rights reserved. Crafted with excellence.</p>
        </motion.div>
      </div>
    </footer>
  );
};
