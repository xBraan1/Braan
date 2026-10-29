import { SEO, Breadcrumbs } from '../components/Layout';

export function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy — Brian Kibet" description="Privacy policy for the xBraan1 portfolio website." />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Privacy Policy</h1>
          <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
            <p>This privacy policy describes how personal information is collected and used on this website.</p>
            <h2 className="text-xl font-medium text-white tracking-wide">Information Collection</h2>
            <p>This website collects minimal information. The contact form collects name, email, organization, and message content. No tracking cookies or analytics scripts are used without consent.</p>
            <h2 className="text-xl font-medium text-white tracking-wide">Data Usage</h2>
            <p>Information submitted through the contact form is used solely to respond to inquiries. No data is shared with third parties without explicit consent.</p>
            <h2 className="text-xl font-medium text-white tracking-wide">Data Retention</h2>
            <p>Contact form submissions are retained only as long as necessary to respond to and resolve the inquiry.</p>
            <h2 className="text-xl font-medium text-white tracking-wide">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by contacting through the contact form.</p>
            <h2 className="text-xl font-medium text-white tracking-wide">Contact</h2>
            <p>For privacy-related inquiries, please use the contact form on this website.</p>
            <p className="text-neutral-500 text-sm mt-8">Last updated: {new Date().getFullYear()}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export function Terms() {
  return (
    <>
      <SEO title="Terms of Service — Brian Kibet" description="Terms of service for the xBraan1 portfolio website." />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
          <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Terms of Service</h1>
          <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
            <p>By accessing this website, you agree to these terms of service.</p>
            <h2 className="text-xl font-medium text-white tracking-wide">Content</h2>
            <p>All content on this website is for informational purposes. Case studies marked as "illustrative" are exercises demonstrating methodology and do not represent confidential client work.</p>
            <h2 className="text-xl font-medium text-white tracking-wide">Professional Services</h2>
            <p>Descriptions of services represent capabilities and experience. Specific engagement terms, scope, and deliverables are agreed upon individually through direct communication.</p>
            <h2 className="text-xl font-medium text-white tracking-wide">Limitation of Liability</h2>
            <p>This website is provided as-is. Information is believed to be accurate but no warranty is made regarding completeness or suitability for any particular purpose.</p>
            <p className="text-neutral-500 text-sm mt-8">Last updated: {new Date().getFullYear()}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export function Cookies() {
  return (
    <>
      <SEO title="Cookie Policy — Brian Kibet" description="Cookie policy for the xBraan1 portfolio website." />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Cookie Policy' }]} />
          <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Cookie Policy</h1>
          <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
            <p>This website uses minimal cookies and local storage for functional purposes only.</p>
            <h2 className="text-xl font-medium text-white tracking-wide">Essential Storage</h2>
            <p>Local storage may be used to remember theme preferences. No third-party tracking cookies are used.</p>
            <h2 className="text-xl font-medium text-white tracking-wide">Your Choices</h2>
            <p>You can clear browser storage at any time through your browser settings. The website will function normally without stored preferences.</p>
            <p className="text-neutral-500 text-sm mt-8">Last updated: {new Date().getFullYear()}</p>
          </div>
        </div>
      </main>
    </>
  );
}
