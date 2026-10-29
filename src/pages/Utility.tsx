import { Link } from 'react-router-dom';
import { SEO } from '../components/Layout';
import { ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found | Brian Kibet" description="The page you're looking for doesn't exist." />
      <main className="pt-24 lg:pt-32 pb-16 min-h-[60vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-8xl font-bold text-white/10 mb-4">404</p>
          <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-neutral-400 mb-8 font-light">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
          >
            Return Home <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    </>
  );
}

export function ThankYou() {
  return (
    <>
      <SEO title="Thank You — Brian Kibet" description="Thank you for your message." />
      <main className="pt-24 lg:pt-32 pb-16 min-h-[60vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Thank You
          </h1>
          <p className="text-neutral-400 mb-8 font-light">
            Your message has been received. I'll get back to you as soon as possible.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
          >
            Return Home <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    </>
  );
}
