import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { expertiseAreas } from '../data/content';
import { Search, ArrowRight } from 'lucide-react';

const categories = ['All', ...Array.from(new Set(expertiseAreas.map(e => e.category)))];

export default function Expertise() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = expertiseAreas.filter(area => {
    const matchesSearch = search === '' || 
      area.title.toLowerCase().includes(search.toLowerCase()) ||
      area.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || area.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Expertise — Brian Kibet | AI Evaluation Capabilities"
        description="Comprehensive overview of AI evaluation capabilities including RLHF, SFT, prompt evaluation, safety assessment, and quality assurance."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Expertise' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              My Expertise
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl font-light">
              A comprehensive overview of my capabilities across the AI evaluation and training pipeline. Each area is grounded in verified professional experience.
            </p>
          </header>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search expertise areas..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-500 focus:border-white/30 outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-white text-black'
                      : 'bg-neutral-950 text-neutral-400 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-neutral-500 mb-6">
            Showing {filtered.length} of {expertiseAreas.length} expertise areas
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {filtered.map(area => (
              <article
                key={area.id}
                className="p-6 bg-black hover:bg-neutral-950 transition-colors"
              >
                <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  {area.category}
                </span>
                <h2 className="text-xl font-medium text-white mt-2 mb-3 tracking-wide">
                  {area.title}
                </h2>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4 font-light">
                  {area.description}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-sm text-neutral-500 font-light">
                    <span className="font-medium text-white">Relevance: </span>
                    {area.relevance}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">No expertise areas match your search criteria.</p>
            </div>
          )}

          <section className="mt-16 text-center">
            <div className="border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need These Capabilities?
              </h2>
              <p className="text-neutral-400 mb-6 max-w-xl mx-auto font-light">
                If your team needs expertise in any of these areas, I'm available for remote engagements and contract opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
              >
                Discuss Your Needs <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
