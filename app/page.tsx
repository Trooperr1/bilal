import Hero from '@/components/Hero';
import ParallaxText from '@/components/ParallaxText';

export default function Home() {
  return (
    <main className="relative">
      <Hero />

      {/* Parallax Brand Section */}
      <section className="py-20 overflow-hidden">
        <ParallaxText baseVelocity={-1}>
          CREATIVE EXCELLENCE • INNOVATION • DESIGN •
        </ParallaxText>
      </section>

      {/* Featured Services Preview */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive creative solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Branding', icon: '✦', desc: 'Visual identity & brand strategy' },
              { title: '3D Design', icon: '◆', desc: 'Immersive 3D experiences' },
              { title: 'Web Dev', icon: '◉', desc: 'Modern web applications' },
              { title: 'Strategy', icon: '⬡', desc: 'Digital transformation' },
            ].map((service, index) => (
              <div
                key={service.title}
                className="glass-effect p-8 hover-lift cursor-hover group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Ready to Create Something <span className="text-gradient">Amazing?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's discuss your project and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact">
              <button className="px-12 py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-200 transition-all duration-300 cursor-hover">
                Start a Project
              </button>
            </a>
            <a href="/work">
              <button className="px-12 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-hover">
                View Our Work
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
