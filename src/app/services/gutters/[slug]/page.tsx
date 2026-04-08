import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, GUTTER_SERVICES, CITIES } from '@/lib/constants';
import { LeadForm } from '@/components/lead-form';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return GUTTER_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = GUTTER_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Livingston County MI`,
    description: `${service.description} Serving Brighton, Hamburg, Howell & Pinckney MI. Free estimates. Call Crown Roofing at (734) 561-4098.`,
    alternates: { canonical: `${SITE.url}/services/gutters/${slug}` },
  };
}

const CONTENT: Record<string, { intro: string; sections: { heading: string; text: string }[] }> = {
  'seamless-gutter-installation': {
    intro: 'Crown Roofing installs custom seamless aluminum gutters for homes across Livingston County. Unlike sectional gutters with joints every 10 feet, our seamless gutters are formed on-site from continuous coils of aluminum — eliminating leak-prone seams and giving your home a clean, professional look.',
    sections: [
      { heading: 'Why Seamless Gutters?', text: 'Traditional sectional gutters have joints every 10 feet that are prone to leaking, sagging, and debris buildup. Seamless gutters eliminate these weak points entirely. Each gutter run is custom-fabricated on-site using our portable gutter machine, ensuring a perfect fit for your home\'s exact dimensions. The result is a stronger, more attractive, and longer-lasting gutter system.' },
      { heading: 'Materials & Colors', text: 'We use heavy-gauge .032 aluminum — thicker than the industry standard — for maximum durability against Michigan\'s ice, snow, and wind. Choose from over 20 colors to complement your home\'s exterior. Our color coatings are baked-on enamel that resists fading, chalking, and peeling for decades.' },
      { heading: 'Professional Installation', text: 'Our installation process includes precise measurement of every roofline, custom fabrication on-site, proper slope calculation for optimal drainage, heavy-duty hidden hangers spaced every 24 inches for superior support, and strategic downspout placement to direct water away from your foundation. Most installations are completed in a single day.' },
      { heading: 'Warranty & Pricing', text: 'Every seamless gutter installation includes our workmanship warranty plus the manufacturer\'s material warranty. We provide free, no-obligation estimates with transparent pricing — no hidden fees, no surprises. Financing options are available for Livingston County homeowners.' },
    ],
  },
  'gutter-guards': {
    intro: 'Tired of climbing ladders to clean your gutters every fall? Crown Roofing installs premium gutter guard systems that keep leaves, pine needles, and debris out while allowing water to flow freely. Protect your home and eliminate gutter maintenance for good.',
    sections: [
      { heading: 'How Gutter Guards Work', text: 'Our gutter guard systems use a micro-mesh design that allows rainwater to pass through while blocking leaves, twigs, pine needles, shingle granules, and other debris. The mesh is fine enough to stop even small seeds and pollen clusters, ensuring your gutters stay clean and flowing in all seasons.' },
      { heading: 'Benefits for Michigan Homes', text: 'Michigan\'s hardwood forests produce enormous amounts of leaves every fall, and pine trees shed needles year-round. Without gutter guards, this debris clogs your gutters, causing overflow that damages your fascia, siding, foundation, and landscaping. Gutter guards eliminate this problem and the dangerous ladder climbing that comes with manual cleaning.' },
      { heading: 'Ice Dam Prevention', text: 'Clogged gutters are a leading cause of ice dams in Michigan winters. When gutters can\'t drain properly, water backs up and freezes at the roofline, forcing water under your shingles and into your home. Gutter guards keep water flowing freely, significantly reducing ice dam risk.' },
      { heading: 'Installation Process', text: 'We install gutter guards on both new and existing gutter systems. The installation is non-invasive — no drilling into your roof or shingles. Guards are secured to the gutter lip and slide under the first row of shingles for a clean, invisible look from the ground. Most homes can be completed in 2 to 4 hours.' },
    ],
  },
  'gutter-repair': {
    intro: 'Leaking, sagging, or overflowing gutters can cause serious damage to your home\'s foundation, siding, and landscaping. Crown Roofing provides fast, affordable gutter repair services throughout Livingston County — from simple resealing to complete section replacement.',
    sections: [
      { heading: 'Common Gutter Problems We Fix', text: 'We repair all types of gutter issues including: leaking joints and seams, sagging or pulling away from the fascia, overflowing during rain, rust holes and corrosion, damaged or disconnected downspouts, improper slope causing standing water, and ice damage from Michigan winters. Our team diagnoses the root cause and fixes it right the first time.' },
      { heading: 'When to Repair vs. Replace', text: 'Minor issues like a leaking joint or a single sagging section are easy, affordable repairs. But if your gutters have widespread rust, multiple sagging sections, or are 20+ years old, a full replacement with new seamless gutters is often more cost-effective in the long run. We\'ll give you an honest assessment and let you decide.' },
      { heading: 'Emergency Gutter Service', text: 'A gutter that pulls away from your home during a storm can cause immediate water damage. Crown Roofing offers priority repair scheduling for emergency gutter situations. As a Pinckney-based company, we can have a team on-site quickly for urgent repairs anywhere in Livingston County.' },
      { heading: 'Free Gutter Inspection', text: 'Not sure what\'s wrong with your gutters? We provide free gutter inspections for all Livingston County homeowners. We\'ll check every run, joint, hanger, and downspout, then give you a clear report of what needs attention — and what doesn\'t. No pressure, no obligation.' },
    ],
  },
  'downspout-installation': {
    intro: 'Downspouts are the critical link between your gutters and the ground. Improperly sized, placed, or extended downspouts can direct thousands of gallons of water toward your foundation every year. Crown Roofing installs and extends downspout systems that protect your home from water damage.',
    sections: [
      { heading: 'Why Downspouts Matter', text: 'Your roof collects an enormous amount of rainwater — a 2,000 square foot roof can channel over 1,200 gallons during a single inch of rain. All that water has to go somewhere. Properly sized and positioned downspouts direct it safely away from your foundation, basement, and landscaping. Without them, you\'re at risk for foundation cracks, basement flooding, and soil erosion.' },
      { heading: 'Downspout Sizing & Placement', text: 'We calculate the optimal number, size, and placement of downspouts based on your roof area, pitch, and local rainfall data. Most homes need one downspout for every 20 to 30 linear feet of gutter. We use oversized 3x4 inch rectangular downspouts for maximum flow capacity — critical during Michigan\'s heavy thunderstorms.' },
      { heading: 'Extensions & Underground Drainage', text: 'Downspouts should discharge water at least 4 to 6 feet from your foundation. We offer above-ground extensions, splash blocks, and underground drain pipe installations that route water to your yard\'s natural drainage areas. Underground systems provide the cleanest look and most effective water management.' },
      { heading: 'Integration with Your Gutter System', text: 'Whether you\'re getting new gutters or upgrading an existing system, we ensure your downspouts are properly integrated. This includes sealed connections, proper elbows for clean routing around your home\'s architecture, and secure mounting brackets that withstand ice and wind loads.' },
    ],
  },
};

export default async function GutterSubServicePage({ params }: Props) {
  const { slug } = await params;
  const service = GUTTER_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = CONTENT[slug];
  const otherGutterServices = GUTTER_SERVICES.filter((s) => s.slug !== slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'RoofingContractor',
      name: SITE.name,
      telephone: SITE.phoneRaw,
      url: SITE.url,
    },
    areaServed: CITIES.map((c) => ({ '@type': 'City', name: c.name, addressRegion: c.state })),
    description: service.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-crown-dark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-crown-red font-semibold text-sm uppercase tracking-widest mb-4">Gutter Services</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            {service.title} in <span className="text-crown-red">Livingston County, MI</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">{service.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${SITE.phoneRaw}`} className="bg-crown-red hover:bg-crown-red-dark text-white px-8 py-4 rounded-lg font-bold text-center transition-colors">
              Call: {SITE.phone}
            </a>
            <Link href="/contact" className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-center transition-colors">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-crown-red">Home</Link>{' / '}
          <Link href="/services/gutters" className="hover:text-crown-red">Gutters</Link>{' / '}
          <span className="text-gray-900 font-medium">{service.name}</span>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">{content.intro}</p>
            {content.sections.map((s) => (
              <div key={s.heading} className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{s.heading}</h2>
                <p className="text-gray-700 leading-relaxed">{s.text}</p>
              </div>
            ))}

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">Areas We Serve</h3>
            <p className="text-gray-700 mb-4">
              Crown Roofing provides {service.name.toLowerCase()} services in {CITIES.map((c) => c.name).join(', ')}, and all of Livingston County, Michigan.
            </p>
          </div>

          <aside>
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Free {service.name} Estimate</h3>
                <LeadForm source={`gutters-${slug}`} />
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Other Gutter Services</h4>
                <ul className="space-y-2">
                  {otherGutterServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/gutters/${s.slug}`} className="text-sm text-crown-red hover:text-crown-red-dark font-medium">
                        {s.icon} {s.name} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-crown-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready for {service.name}?</h2>
          <p className="text-gray-300 text-lg mb-8">Free estimates, fast installation, and quality guaranteed.</p>
          <a href={`tel:${SITE.phoneRaw}`} className="inline-block bg-crown-red hover:bg-crown-red-dark text-white px-8 py-4 rounded-lg font-bold transition-colors">
            Call Crown Roofing: {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
