import About from '@/components/About';

export const metadata = {
  title: 'About Us - Jaff Studio',
  description: 'Learn about our team, values, and commitment to design excellence.',
};

export default function AboutPage() {
  return (
    <main className="relative pt-24">
      {/* Header Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">
            About Us
          </p>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8">
            Where Creativity Meets <span className="text-gradient">Innovation</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We're a team of passionate designers, developers, and strategists dedicated to creating extraordinary digital experiences.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <About />

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Meet The <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-400">
              Talented individuals driving innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alex Rivera', role: 'Creative Director', specialty: 'Brand Strategy' },
              { name: 'Maya Chen', role: 'Lead Designer', specialty: '3D & Motion' },
              { name: 'Jordan Smith', role: 'Tech Lead', specialty: 'Web Development' },
              { name: 'Sarah Johnson', role: 'UX Director', specialty: 'User Experience' },
              { name: 'Marcus Lee', role: 'Strategy Lead', specialty: 'Digital Strategy' },
              { name: 'Emma Davis', role: 'Project Manager', specialty: 'Client Relations' },
            ].map((member, index) => (
              <div key={index} className="glass-effect p-8 hover-lift group cursor-hover">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 mb-6 flex items-center justify-center">
                  <span className="text-8xl text-white/10 group-hover:text-white/20 transition-colors">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-1">{member.role}</p>
                <p className="text-sm text-gray-600">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Our <span className="text-gradient">Culture</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Remote-First',
                desc: 'Work from anywhere in the world with flexible hours and unlimited PTO',
                icon: '🌍',
              },
              {
                title: 'Continuous Learning',
                desc: 'Annual learning budget and access to courses, conferences, and workshops',
                icon: '📚',
              },
              {
                title: 'Creative Freedom',
                desc: 'Experiment with new tools and technologies to push boundaries',
                icon: '🎨',
              },
              {
                title: 'Health & Wellness',
                desc: 'Comprehensive health coverage and wellness programs for all team members',
                icon: '💪',
              },
            ].map((item, index) => (
              <div key={index} className="glass-effect p-10 hover-lift">
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-3xl font-display font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="section-padding bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Join Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            We're always looking for talented individuals to join our creative family
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact">
              <button className="px-12 py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-200 transition-all duration-300 cursor-hover">
                View Open Positions
              </button>
            </a>
            <a href="/work">
              <button className="px-12 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-hover">
                See Our Work
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
