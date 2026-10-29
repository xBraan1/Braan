import { Link, useParams } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { services } from '../data/content';
import { ArrowRight, CheckCircle, FileText, HelpCircle } from 'lucide-react';

function ServicesIndex() {
  return (
    <>
      <SEO
        title="Services — Brian Kibet | AI Evaluation Services"
        description="Professional AI evaluation services including LLM evaluation, RLHF preference ranking, SFT data creation, prompt evaluation, and quality assurance."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Professional Services
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl font-light">
              Comprehensive AI evaluation and training services grounded in verified professional experience. Each service addresses specific challenges in the AI development pipeline.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {services.map(service => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group p-6 bg-black hover:bg-neutral-950 transition-colors"
              >
                <h2 className="text-xl font-medium text-white mb-3 tracking-wide group-hover:text-neutral-300 transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4 font-light">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-white text-sm font-light tracking-wide">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <section className="mt-16 text-center">
            <div className="border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Discuss Your Project?
              </h2>
              <p className="text-neutral-400 mb-6 max-w-xl mx-auto font-light">
                Every project is unique. Let's discuss your specific requirements and how I can help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
              >
                Request a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/services" className="text-neutral-400 hover:text-white transition-colors">← Back to Services</Link>
        </div>
      </main>
    );
  }

  const faqs = [
    { q: `What does ${service.title} involve?`, a: service.shortDescription },
    { q: 'How do you ensure quality?', a: service.quality },
    { q: 'Can we discuss scope before committing?', a: 'Absolutely. I encourage initial discussions to understand your specific requirements, timeline, and quality expectations before any engagement begins.' },
  ];

  return (
    <>
      <SEO
        title={`${service.title} — Services | Brian Kibet`}
        description={service.shortDescription}
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: service.title }]} />

          <header className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              {service.shortDescription}
            </p>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
              The Problem This Addresses
            </h2>
            <p className="text-neutral-400 leading-relaxed font-light">{service.problem}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Methods & Workflows
            </h2>
            <ul className="space-y-3">
              {service.methods.map(method => (
                <li key={method} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-white mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-neutral-400 font-light">{method}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Expected Deliverables
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.deliverables.map(item => (
                <div key={item} className="flex items-start gap-3 p-3 bg-neutral-950 border border-white/5">
                  <FileText size={16} className="text-white mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-neutral-400 font-light">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <div className="p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-3 tracking-tight">
                Quality Considerations
              </h2>
              <p className="text-neutral-400 leading-relaxed font-light">{service.quality}</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-white/10">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-white">
                    {faq.q}
                    <HelpCircle size={18} className="text-neutral-500 group-open:rotate-45 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-neutral-400 text-sm leading-relaxed font-light">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="text-center py-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Discuss Scope <ArrowRight size={18} />
            </Link>
          </section>

          <section className="mt-12 pt-8 border-t border-white/5">
            <h3 className="text-lg font-medium text-white mb-4">Other Services</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.filter(s => s.slug !== slug).slice(0, 4).map(s => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="p-3 border border-white/5 hover:border-white/20 transition-colors"
                >
                  <span className="font-medium text-white text-sm">{s.title}</span>
                  <p className="text-xs text-neutral-500 mt-1 font-light">{s.shortDescription}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default function Services() {
  const { slug } = useParams();
  if (slug) return <ServiceDetail />;
  return <ServicesIndex />;
}
