import Services from '@/components/Services';

export const metadata = {
  title: 'Services - Jaff Studio',
  description: 'Comprehensive creative services including branding, 3D design, web development, and digital strategy.',
};

export default function ServicesPage() {
  return (
    <main className="relative pt-24">
      {/* Header Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">
            Our Services
          </p>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8">
            We Turn <span className="text-gradient">Ideas</span> Into Reality
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            From concept to execution, we provide end-to-end creative solutions that elevate your brand and drive results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Services />

      {/* Process Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-400">
              A proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision and goals' },
              { step: '02', title: 'Strategy', desc: 'Crafting the perfect approach' },
              { step: '03', title: 'Design', desc: 'Bringing ideas to life' },
              { step: '04', title: 'Launch', desc: 'Delivering excellence' },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-8xl font-display font-bold text-white/10 mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>

                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Jaff Studio transformed our brand identity. Their creative approach and attention to detail exceeded all expectations.",
                author: "Sarah Johnson",
                role: "CEO, TechCorp"
              },
              {
                quote: "Working with Jaff Studio was a game-changer. They delivered a stunning website that perfectly captures our vision.",
                author: "Michael Chen",
                role: "Founder, StartupXYZ"
              },
            ].map((testimonial, index) => (
              <div key={index} className="glass-effect p-8 hover-lift">
                <div className="text-6xl text-white/20 mb-4">"</div>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-800 pt-6">
                  <p className="font-display font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Ready to elevate your brand? Get in touch and let's create something extraordinary.
          </p>
          <a href="/contact">
            <button className="px-12 py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-200 transition-all duration-300 cursor-hover">
              Start Your Project
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
