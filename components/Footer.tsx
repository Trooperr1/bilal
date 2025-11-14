'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Work', href: '/work' },
      { name: 'Contact', href: '/contact' },
    ],
    Services: [
      { name: 'Branding', href: '#' },
      { name: '3D Design', href: '#' },
      { name: 'Web Development', href: '#' },
      { name: 'Strategy', href: '#' },
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Newsletter', href: '#' },
      { name: 'Events', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="relative border-t border-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.h3
              className="text-3xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              JAFF STUDIO
            </motion.h3>
            <motion.p
              className="text-gray-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Creating extraordinary digital experiences that push the boundaries of design and technology.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {['IG', 'TW', 'LI', 'BE'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link href={link.href}>
                      <motion.div
                        className="text-gray-400 hover:text-white transition-colors cursor-hover inline-block"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="py-12 border-t border-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-display font-bold mb-2">
                Stay Updated
              </h4>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
            </div>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-gray-700 px-6 py-3 focus:border-white outline-none transition-colors cursor-hover"
                required
              />
              <motion.button
                type="submit"
                className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300 cursor-hover whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-gray-500">
            © {currentYear} Jaff Studio. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <motion.a
              href="#"
              className="hover:text-white transition-colors cursor-hover"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-white transition-colors cursor-hover"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-white transition-colors cursor-hover"
              whileHover={{ y: -2 }}
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>

    </footer>
  );
}
