import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact Us - Jaff Studio',
  description: 'Get in touch with us to discuss your next project.',
};

export default function ContactPage() {
  return (
    <main className="relative pt-24">
      {/* Header Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">
            Get in Touch
          </p>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8">
            Let's Create <span className="text-gradient">Together</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Have a project in mind? We'd love to hear about it. Let's discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Main Contact Form */}
      <Contact />

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope, but most projects take 6-12 weeks from kickoff to launch. We provide detailed timelines during the discovery phase.',
              },
              {
                question: 'What is your pricing structure?',
                answer: 'We offer custom pricing based on project requirements. After an initial consultation, we provide a detailed proposal with transparent pricing.',
              },
              {
                question: 'Do you work with startups?',
                answer: 'Absolutely! We love working with startups and have special packages designed for early-stage companies.',
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We work across various industries including tech, e-commerce, healthcare, finance, and entertainment. Our diverse experience allows us to adapt to any sector.',
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes, we offer maintenance packages and ongoing support to ensure your digital products continue to perform at their best.',
              },
            ].map((faq, index) => (
              <div key={index} className="glass-effect p-8 hover-lift">
                <h3 className="text-2xl font-display font-bold mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Our <span className="text-gradient">Offices</span>
            </h2>
            <p className="text-xl text-gray-400">
              Visit us at one of our locations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: 'New York',
                address: '123 Broadway, Suite 500',
                zip: 'New York, NY 10001',
                phone: '+1 (555) 123-4567',
              },
              {
                city: 'London',
                address: '456 Oxford Street',
                zip: 'London, W1D 1BS',
                phone: '+44 20 7123 4567',
              },
              {
                city: 'Tokyo',
                address: '789 Shibuya',
                zip: 'Tokyo 150-0002',
                phone: '+81 3-1234-5678',
              },
            ].map((office, index) => (
              <div key={index} className="glass-effect p-8 hover-lift">
                <h3 className="text-3xl font-display font-bold mb-6">
                  {office.city}
                </h3>
                <div className="space-y-3 text-gray-400">
                  <p>{office.address}</p>
                  <p>{office.zip}</p>
                  <p className="pt-4 border-t border-gray-800">
                    {office.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="section-padding bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Other Ways to <span className="text-gradient">Connect</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '📧', label: 'Email', value: 'hello@jaffstudio.com', link: 'mailto:hello@jaffstudio.com' },
              { icon: '📱', label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
              { icon: '💬', label: 'Live Chat', value: 'Start a conversation', link: '#' },
              { icon: '📅', label: 'Book a Call', value: 'Schedule meeting', link: '#' },
            ].map((option, index) => (
              <a key={index} href={option.link}>
                <div className="glass-effect p-8 hover-lift text-center group cursor-hover">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {option.icon}
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{option.label}</p>
                  <p className="font-medium">{option.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Ready to Get <span className="text-gradient">Started?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's turn your ideas into reality. Reach out and let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact">
              <button className="px-12 py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-200 transition-all duration-300 cursor-hover">
                Send a Message
              </button>
            </a>
            <a href="/services">
              <button className="px-12 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-hover">
                View Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
