import { useState } from 'react';
import { SEO, Breadcrumbs } from '../components/Layout';
import { caseStudies } from '../data/content';
import { Search, Tag, AlertTriangle } from 'lucide-react';

const allTags = Array.from(new Set(caseStudies.flatMap(s => s.tags)));

export default function Work() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = caseStudies.filter(study => {
    const matchesSearch = search === '' ||
      study.title.toLowerCase().includes(search.toLowerCase()) ||
      study.context.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !activeTag || study.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <SEO
        title="Selected Work — Brian Kibet | AI Evaluation Case Studies"
        description="Illustrative case studies demonstrating AI evaluation methodology, approach, and quality standards."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Selected Work' }]} />

          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Selected Work
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl font-light">
              Illustrative case studies demonstrating evaluation methodology and approach. These exercises showcase how I structure evaluation work — they are not representations of confidential client projects.
            </p>
          </header>

          <div className="flex items-start gap-3 p-4 border border-amber-500/20 bg-amber-500/5 mb-8">
            <AlertTriangle size={20} className="text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-amber-300">Transparency Notice</p>
              <p className="text-sm text-amber-400/80 mt-1 font-light">
                These case studies are illustrative exercises designed to demonstrate methodology. They do not represent specific confidential client projects or proprietary datasets.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-500 focus:border-white/30 outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  !activeTag ? 'bg-white text-black' : 'bg-neutral-950 text-neutral-400 border border-white/10'
                }`}
              >
                All
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTag === tag ? 'bg-white text-black' : 'bg-neutral-950 text-neutral-400 border border-white/10'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {filtered.map(study => (
              <article key={study.id} id={study.id} className="bg-neutral-950 border border-white/5">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {study.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs font-light">
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                    <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-light">
                      Illustrative
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {study.title}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Context</h3>
                      <p className="text-neutral-400 leading-relaxed font-light">{study.context}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Problem / Objective</h3>
                      <p className="text-neutral-400 leading-relaxed font-light">{study.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Methodology</h3>
                      <p className="text-neutral-400 leading-relaxed font-light">{study.methodology}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Evaluation Criteria</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.criteria.map(c => (
                          <span key={c} className="px-2.5 py-1 bg-white/5 text-neutral-400 text-xs border border-white/5 font-light">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Quality Control</h3>
                      <p className="text-neutral-400 leading-relaxed font-light">{study.qualityControl}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Findings</h3>
                      <p className="text-neutral-400 leading-relaxed font-light">{study.findings}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Relevant Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.skills.map(s => (
                          <span key={s} className="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs font-light">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">No case studies match your current filters.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
