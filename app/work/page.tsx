import Work from '@/components/Work';

export const metadata = {
  title: 'Our Work - Jaff Studio',
  description: 'Explore our portfolio of award-winning projects and creative solutions.',
};

export default function WorkPage() {
  return (
    <main className="relative pt-24">
      {/* Header Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">
            Portfolio
          </p>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8">
            Our Creative <span className="text-gradient">Journey</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Explore our collection of award-winning projects that push the boundaries of design and technology.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <Work />

      {/* Case Studies Section */}
      <section className="section-padding bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Case <span className="text-gradient">Studies</span>
            </h2>
            <p className="text-xl text-gray-400">
              Deep dives into our most impactful projects
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: 'Global Brand Transformation',
                client: 'Fortune 500 Company',
                results: '+250% Brand Recognition, +180% Customer Engagement',
                tags: ['Branding', 'Strategy', 'Digital'],
              },
              {
                title: 'Interactive 3D Product Launch',
                client: 'Tech Startup',
                results: '5M+ Views, Featured in TechCrunch & Wired',
                tags: ['3D Design', 'Web Development', 'Animation'],
              },
            ].map((study, index) => (
              <div key={index} className="glass-effect p-10 hover-lift group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-gradient transition-all">
                      {study.title}
                    </h3>
                    <p className="text-gray-500">{study.client}</p>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300">
                    View Case Study →
                  </button>
                </div>
                <p className="text-xl text-gray-300 mb-6">{study.results}</p>
                <div className="flex flex-wrap gap-3">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 border border-gray-700 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Trusted By <span className="text-gradient">Leaders</span>
            </h2>
            <p className="text-xl text-gray-400">
              Working with innovative companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-video glass-effect flex items-center justify-center hover-lift cursor-hover"
              >
                <span className="text-6xl text-white/20 font-display font-bold">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Awards & <span className="text-gradient">Recognition</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { award: 'Best Digital Agency', year: '2024', org: 'Design Awards' },
              { award: 'Innovation in 3D', year: '2023', org: 'WebGL Awards' },
              { award: 'Top 10 Studios', year: '2023', org: 'Creative Review' },
            ].map((item, index) => (
              <div key={index} className="text-center p-8 glass-effect hover-lift">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-display font-bold mb-2">
                  {item.award}
                </h3>
                <p className="text-gray-400">{item.org}</p>
                <p className="text-sm text-gray-600 mt-2">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Start Your <span className="text-gradient">Project</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's create something extraordinary together
          </p>
          <a href="/contact">
            <button className="px-12 py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-200 transition-all duration-300 cursor-hover">
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
