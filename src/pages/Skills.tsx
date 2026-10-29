import { Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { skills } from '../data/content';
import { ArrowRight } from 'lucide-react';

export default function Skills() {
  return (
    <>
      <SEO
        title="Skills — Brian Kibet | Tools & Technical Skills"
        description="Technical skills, platforms, and tools used in AI evaluation and training work."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Skills' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Skills & Tools
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              Platforms, tools, and technical capabilities I use in my evaluation work.
            </p>
          </header>

          <div className="space-y-12">
            {Object.entries(skills).map(([category, items]) => (
              <section key={category}>
                <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                  {category}
                </h2>
                <div className="grid sm:grid-cols-2 gap-px bg-white/5">
                  {items.map(item => (
                    <div key={item.name} className="p-5 bg-black hover:bg-neutral-950 transition-colors">
                      <h3 className="font-medium text-white tracking-wide mb-2">{item.name}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed font-light">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16 text-center">
            <div className="border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need These Skills?
              </h2>
              <p className="text-neutral-400 mb-6 max-w-xl mx-auto font-light">
                Let's discuss how my technical capabilities can support your project.
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
