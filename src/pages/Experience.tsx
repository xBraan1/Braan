import { Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { experience, education } from '../data/content';
import { ArrowRight, Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience — Brian Kibet | Professional History"
        description="Professional experience in AI training, LLM evaluation, and data management. 3+ years of remote AI evaluation work at Scale AI."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Experience' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Professional Experience
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              A record of professional roles, responsibilities, and contributions in AI evaluation and data management.
            </p>
          </header>

          <div className="space-y-12">
            {experience.map((exp) => (
              <article key={exp.id} className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={22} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-neutral-400">
                      <span className="font-medium text-white">{exp.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {exp.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-400 leading-relaxed mb-6 font-light">{exp.description}</p>

                <div className="bg-neutral-950 p-6 border border-white/5">
                  <h3 className="font-medium text-white mb-4 tracking-wide">
                    Key Responsibilities & Contributions
                  </h3>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-400 font-light">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
              Education
            </h2>
            <div className="bg-neutral-950 p-6 border border-white/5">
              <h3 className="text-xl font-medium text-white mb-2 tracking-wide">
                {education.degree}
              </h3>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.relevantCoursework.map(course => (
                    <span key={course} className="px-3 py-1.5 bg-white/5 border border-white/10 text-neutral-300 text-sm font-light">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <div className="border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Interested in My Experience?
              </h2>
              <p className="text-neutral-400 mb-6 font-light">
                Let's discuss how my background aligns with your team's needs.
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
