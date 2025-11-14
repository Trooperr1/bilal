'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'hello@jaffstudio.com',
      href: 'mailto:hello@jaffstudio.com',
    },
    {
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      label: 'Location',
      value: 'New York, NY',
      href: '#',
    },
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Behance', href: '#' },
    { name: 'Dribbble', href: '#' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-gray-400 uppercase tracking-widest text-sm mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Let's Create <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Get in touch and let's make something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <motion.label
                  className="block text-sm uppercase tracking-wider mb-3 text-gray-400"
                  animate={{ color: focusedField === 'name' ? '#FFFFFF' : '#A3A3A3' }}
                >
                  Your Name
                </motion.label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-gray-700 focus:border-white py-3 text-lg outline-none transition-colors cursor-hover"
                  required
                />
              </div>

              <div>
                <motion.label
                  className="block text-sm uppercase tracking-wider mb-3 text-gray-400"
                  animate={{ color: focusedField === 'email' ? '#FFFFFF' : '#A3A3A3' }}
                >
                  Email Address
                </motion.label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-gray-700 focus:border-white py-3 text-lg outline-none transition-colors cursor-hover"
                  required
                />
              </div>

              <div>
                <motion.label
                  className="block text-sm uppercase tracking-wider mb-3 text-gray-400"
                  animate={{ color: focusedField === 'message' ? '#FFFFFF' : '#A3A3A3' }}
                >
                  Your Message
                </motion.label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  className="w-full bg-transparent border-b-2 border-gray-700 focus:border-white py-3 text-lg outline-none transition-colors resize-none cursor-hover"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="px-12 py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-200 transition-all duration-300 cursor-hover w-full md:w-auto"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Details */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="block group cursor-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    {info.label}
                  </div>
                  <div className="text-2xl font-display font-medium group-hover:text-gray-400 transition-colors">
                    {info.value}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <motion.h3
                className="text-sm text-gray-500 uppercase tracking-wider mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Follow Us
              </motion.h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="px-6 py-2 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <motion.div
              className="glass-effect p-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-display font-bold mb-3">
                Ready to start your project?
              </h3>
              <p className="text-gray-400 mb-6">
                Let's discuss how we can bring your vision to life with cutting-edge design and technology.
              </p>
              <motion.button
                className="px-8 py-3 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
