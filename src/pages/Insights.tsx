import { SEO, Breadcrumbs } from '../components/Layout';
import { insights } from '../data/content';
import { Clock, Tag } from 'lucide-react';

export default function Insights() {
  return (
    <>
      <SEO
        title="Insights — Brian Kibet | AI Evaluation Articles"
        description="Articles and insights on LLM evaluation, RLHF, hallucination detection, and AI quality assurance."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Insights' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Insights
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              Articles and reflections on AI evaluation methodology, quality standards, and industry practices.
            </p>
          </header>

          <div className="space-y-8">
            {insights.map(article => (
              <article key={article.id} className="bg-neutral-950 border border-white/5 p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="flex items-center gap-1 text-xs text-neutral-500 font-light">
                    <Clock size={12} /> {article.readTime}
                  </span>
                  <span className="text-xs text-neutral-600">·</span>
                  <span className="text-xs text-neutral-500 font-light">{article.date}</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {article.title}
                </h2>

                <p className="text-neutral-400 leading-relaxed mb-4 font-light">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {article.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-400 text-xs font-light">
                      <Tag size={10} /> {tag}
                    </span>
                  ))}
                </div>

                <div className="prose max-w-none text-neutral-400">
                  {article.content.split('\n\n').map((paragraph, i) => {
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={i} className="text-xl font-bold text-white mt-6 mb-3">{paragraph.replace('## ', '')}</h2>;
                    }
                    if (paragraph.startsWith('### ')) {
                      return <h3 key={i} className="text-lg font-medium text-white mt-4 mb-2">{paragraph.replace('### ', '')}</h3>;
                    }
                    if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').filter(l => l.startsWith('- '));
                      return (
                        <ul key={i} className="space-y-2 mb-4">
                          {items.map((item, j) => (
                            <li key={j} className="text-sm text-neutral-400 font-light leading-relaxed pl-4 border-l border-white/10">
                              {item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '$1')}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (paragraph.match(/^\d\. /)) {
                      const items = paragraph.split('\n').filter(l => l.match(/^\d\. /));
                      return (
                        <ol key={i} className="space-y-2 mb-4 list-decimal list-inside">
                          {items.map((item, j) => (
                            <li key={j} className="text-sm text-neutral-400 font-light leading-relaxed">
                              {item.replace(/^\d+\. /, '').replace(/\*\*(.*?)\*\*/g, '$1')}
                            </li>
                          ))}
                        </ol>
                      );
                    }
                    return <p key={i} className="text-sm text-neutral-400 leading-relaxed font-light mb-4">{paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}</p>;
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
