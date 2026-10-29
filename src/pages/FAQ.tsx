import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { faqItems } from '../data/content';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';

const categories = ['All', ...Array.from(new Set(faqItems.map(f => f.category)))];

export default function FAQ() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filtered = faqItems.filter(item => {
    const matchesSearch = search === '' ||
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <SEO
        title="FAQ — Brian Kibet | Frequently Asked Questions"
        description="Common questions about AI evaluation services, RLHF work, engagement types, and collaboration."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              Answers to common questions about my evaluation work, services, and collaboration.
            </p>
          </header>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search questions..."
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
                  className={`px-3 py-2 text-sm font-medium transition-colors capitalize ${
                    activeCategory === cat
                      ? 'bg-white text-black'
                      : 'bg-neutral-950 text-neutral-400 border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {filtered.map(item => (
              <div
                key={item.id}
                className="border border-white/5 bg-neutral-950"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openItems.has(item.id)}
                >
                  <span className="font-medium text-white pr-4 tracking-wide">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-neutral-500 flex-shrink-0 transition-transform ${
                      openItems.has(item.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openItems.has(item.id) && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-neutral-400 leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">No questions match your search criteria.</p>
            </div>
          )}

          <section className="mt-16 text-center">
            <div className="border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Have a Different Question?
              </h2>
              <p className="text-neutral-400 mb-6 font-light">
                Feel free to reach out with any questions not covered here.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
