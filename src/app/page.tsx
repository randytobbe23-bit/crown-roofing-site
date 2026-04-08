import Link from 'next/link';
import { SITE, SERVICES, CITIES } from '@/lib/constants';
import { LeadForm } from '@/components/lead-form';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-crown-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-crown-dark via-crown-dark-alt to-crown-dark opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-crown-red font-semibold text-sm uppercase tracking-widest mb-4">
                Livingston County&apos;s #1 Roofing Company
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Expert Roofing in{' '}
                <span className="text-crown-red">Brighton, Howell, Hamburg &amp; Pinckney MI</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
                Free drone roof inspections. Insurance claim experts. Premium architectural shingles.
                Gutters, siding, and complete roof replacement — done right, guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="bg-crown-red hover:bg-crown-red-dark text-white px-8 py-4 rounded-lg font-bold text-base text-center transition-colors"
                >
                  Call Now: {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-base text-center transition-colors"
                >
                  Free Estimate
                </Link>
              </div>
              <div className="flex flex-wrap gap-8 mt-10">
                <div>
                  <div className="text-3xl font-extrabold text-crown-red">500+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Roofs Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-crown-red">&lt;5 min</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-crown-red">5-Star</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Google Rating</div>
                </div>
              </div>
            </div>

            {/* Lead form */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl text-gray-900">
              <h2 className="text-2xl font-bold mb-1">Get Your Free Roof Inspection</h2>
              <p className="text-sm text-gray-500 mb-6">No cost, no obligation. We respond in under 5 minutes.</p>
              <LeadForm source="homepage-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gray-50 border-y border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm text-gray-600 font-medium">
          <span>Licensed &amp; Insured</span>
          <span>Free Drone Inspections</span>
          <span>Insurance Claim Experts</span>
          <span>Financing Available</span>
          <span>Lifetime Warranty Options</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-crown-red font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Roofing, Gutters &amp; Siding Services in Livingston County
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From full roof replacements to gutter installation and siding, Crown Roofing delivers
              premium craftsmanship backed by warranties you can trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group border border-gray-200 rounded-xl p-6 hover:border-crown-red hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-crown-red transition-colors mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                <span className="inline-block mt-4 text-crown-red font-semibold text-sm">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CROWN */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-crown-red font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Why Michigan Homeowners Choose Crown Roofing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Free Drone Inspections',
                desc: 'We use drone technology to inspect your roof without ever stepping on it. You get detailed photos and a professional report — all at zero cost.',
              },
              {
                title: 'Insurance Claim Experts',
                desc: 'We handle the entire insurance claim process for you. From filing to approval, our team ensures you get the maximum coverage you\'re entitled to.',
              },
              {
                title: 'Premium Materials & Warranty',
                desc: 'We use only top-tier architectural shingles and materials. Every job comes with manufacturer warranties and our craftsmanship guarantee.',
              },
              {
                title: 'Sub-5-Minute Response',
                desc: 'When you reach out, we respond fast. Our AI-assisted team ensures no lead goes untouched and no homeowner waits for answers.',
              },
              {
                title: 'Local & Trusted',
                desc: 'Based in Pinckney and serving all of Livingston County. We\'re your neighbors, and we treat every roof like it\'s our own home.',
              },
              {
                title: 'Transparent Pricing',
                desc: 'No hidden fees, no pressure tactics. We give you an honest assessment and a fair price. If your roof doesn\'t need replacing, we\'ll tell you.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-crown-red font-semibold text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Serving Livingston County, Michigan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Crown Roofing proudly serves homeowners across Livingston County with professional
              roofing, gutter, and siding services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/areas/${c.slug}`}
                className="group border border-gray-200 rounded-xl p-6 hover:border-crown-red hover:shadow-lg transition-all text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-crown-red transition-colors mb-2">
                  {c.name}, {c.state}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{c.county}</p>
                <span className="text-crown-red font-semibold text-sm">
                  View Services &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-crown-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready for Your Free Roof Inspection?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Don&apos;t wait until a small problem becomes a costly repair. Schedule your free drone
            inspection today — no cost, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="bg-crown-red hover:bg-crown-red-dark text-white px-8 py-4 rounded-lg font-bold text-base transition-colors"
            >
              Call: {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-base transition-colors"
            >
              Request Online Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
