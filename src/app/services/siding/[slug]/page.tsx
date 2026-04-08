import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, SIDING_SERVICES, CITIES } from '@/lib/constants';
import { LeadForm } from '@/components/lead-form';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SIDING_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SIDING_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Livingston County MI`,
    description: `${service.description} Serving Brighton, Hamburg, Howell & Pinckney MI. Free estimates. Call Crown Roofing at (734) 561-4098.`,
    alternates: { canonical: `${SITE.url}/services/siding/${slug}` },
  };
}

const CONTENT: Record<string, { intro: string; sections: { heading: string; text: string }[] }> = {
  'vinyl-siding': {
    intro: 'Vinyl siding remains America\'s most popular exterior cladding for good reason — it\'s affordable, virtually maintenance-free, and available in hundreds of colors and styles. Crown Roofing installs premium vinyl siding from top manufacturers for Livingston County homeowners who want maximum value and lasting curb appeal.',
    sections: [
      { heading: 'Why Choose Vinyl Siding?', text: 'Modern vinyl siding has come a long way from the thin, shiny panels of decades past. Today\'s premium vinyl features realistic wood grain textures, fade-resistant colors, and impact resistance that stands up to Michigan\'s hail, wind, and temperature extremes. It never needs painting, won\'t rot or attract termites, and cleans up with just a garden hose.' },
      { heading: 'Insulated Vinyl Siding', text: 'We offer insulated vinyl siding that includes a layer of expanded polystyrene (EPS) foam contoured to the back of each panel. This added insulation reduces thermal bridging through your wall studs, cuts energy costs, reduces outside noise, and makes your home more comfortable year-round. The foam backing also adds rigidity, reducing waviness and improving impact resistance.' },
      { heading: 'Color & Style Options', text: 'Choose from traditional lap siding, Dutch lap, board and batten, shake, and scallop profiles. Colors range from classic whites and creams to bold blues, greens, reds, and modern grays. We can mix profiles and colors to create a custom look unique to your home. All colors are warranted against significant fading.' },
      { heading: 'Installation & Warranty', text: 'Proper installation is critical for vinyl siding performance. Our installers follow manufacturer specifications precisely — including proper overlap, nail placement, and expansion gaps that allow the siding to move with temperature changes without buckling. Most vinyl siding installations come with a limited lifetime warranty from the manufacturer plus our craftsmanship guarantee.' },
    ],
  },
  'fiber-cement-siding': {
    intro: 'James Hardie fiber cement siding is the premium choice for Michigan homeowners who want the beauty of real wood with superior durability. Crown Roofing is an experienced fiber cement installer, delivering beautiful, long-lasting exteriors that withstand everything Michigan weather can throw at them.',
    sections: [
      { heading: 'What is Fiber Cement Siding?', text: 'Fiber cement is made from a mixture of cement, sand, and cellulose fibers pressed into planks, shingles, or panels. The result is an incredibly durable material that resists fire, rot, termites, and impact. James Hardie\'s HZ10 formulation is specifically engineered for Michigan\'s freeze-thaw climate zone, with moisture management technology that prevents cracking and delamination.' },
      { heading: 'James Hardie ColorPlus Technology', text: 'Hardie\'s ColorPlus factory-applied finish goes through a multi-coat baking process that produces a more consistent, durable color than any field-applied paint. ColorPlus finishes come with a 15-year limited warranty against peeling, cracking, and chipping — far exceeding what you\'d get from painted wood or vinyl. Over 30 curated colors are available.' },
      { heading: 'Styles Available', text: 'We install the full range of James Hardie products: HardiePlank lap siding for classic horizontal lines, HardieShingle for authentic cedar shake looks, HardiePanel for modern vertical board-and-batten, and HardieTrim for clean, rot-proof window and door trim. Mix and match to create architectural interest and a custom look.' },
      { heading: 'Investment & Value', text: 'Fiber cement siding costs more upfront than vinyl but delivers a higher return on investment. It consistently ranks at the top of Remodeling Magazine\'s Cost vs. Value report, recouping over 80% of its cost at resale. Combined with its 30 to 50 year lifespan and minimal maintenance needs, fiber cement is the smart long-term choice for Michigan homeowners who plan to stay in their homes.' },
    ],
  },
  'siding-repair': {
    intro: 'Storm damage, age, and everyday wear can leave your siding cracked, warped, or missing panels. Crown Roofing provides fast, reliable siding repair services throughout Livingston County — restoring your home\'s protection and appearance without the cost of a full replacement.',
    sections: [
      { heading: 'Common Siding Damage We Repair', text: 'We repair all types of siding damage including: cracked or broken panels from impacts, warped or buckled siding from improper installation or heat exposure, loose panels from wind damage, faded or discolored sections, water damage behind siding from failed caulking or flashing, woodpecker and pest damage, and storm damage from hail, wind, or falling branches.' },
      { heading: 'All Siding Types', text: 'Our repair team works with all siding materials — vinyl, fiber cement (James Hardie), engineered wood (LP SmartSide), aluminum, cedar, and composite. We stock common colors and profiles, and for discontinued products, we source the closest available match or recommend strategic partial replacement to maintain a uniform appearance.' },
      { heading: 'When to Repair vs. Replace', text: 'If damage is limited to a few panels or a small area, repair is the cost-effective choice. But if you\'re seeing widespread issues — fading across entire walls, multiple warped sections, moisture intrusion behind the siding, or your siding is 25+ years old — a full replacement may be more economical and will dramatically improve your home\'s value and appearance. We\'ll give you honest advice either way.' },
      { heading: 'Insurance Claim Assistance', text: 'Wind, hail, and storm damage to siding is typically covered by homeowner\'s insurance. Crown Roofing documents all damage thoroughly and works directly with your insurance company to ensure your claim is properly filed and fairly settled. We\'ve helped hundreds of Livingston County homeowners get their siding repairs covered.' },
    ],
  },
  'engineered-wood-siding': {
    intro: 'LP SmartSide engineered wood siding gives your home the authentic warmth and beauty of real wood with dramatically better performance. Crown Roofing installs LP SmartSide products for Livingston County homeowners who want a natural aesthetic without the maintenance headaches of traditional cedar.',
    sections: [
      { heading: 'What is Engineered Wood Siding?', text: 'LP SmartSide is made from treated wood strands bonded with advanced resins and coated with a proprietary SmartGuard finish. The result is a strong, stable panel that looks and feels like real wood but resists moisture, fungal decay, and termites. Unlike natural wood, engineered wood siding won\'t split, crack, or delaminate when properly installed and maintained.' },
      { heading: 'Performance in Michigan', text: 'Michigan\'s freeze-thaw cycles, heavy rain, snow, and humidity are brutal on traditional wood siding. LP SmartSide\'s engineered composition and protective treatments handle these conditions far better than cedar or pine. The SmartGuard process treats wood strands with zinc borate throughout the entire panel — not just the surface — providing protection against moisture and decay from the inside out.' },
      { heading: 'Styles & Finishing', text: 'LP SmartSide is available in lap siding, panel siding, shakes, and trim — giving you complete design flexibility. Panels come primed and ready for any exterior paint color you choose, or you can order factory-finished panels in select colors. The deep cedar grain texture is remarkably realistic, and because it\'s real wood, it takes paint beautifully with a natural, non-plastic appearance.' },
      { heading: 'Warranty & Longevity', text: 'LP SmartSide comes with an industry-leading 5/50 year limited warranty — 5 years on the factory-applied finish and 50 years on the substrate. That\'s among the strongest warranties in the siding industry. With proper painting every 10 to 15 years, LP SmartSide will protect and beautify your Michigan home for generations.' },
    ],
  },
};

export default async function SidingSubServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SIDING_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = CONTENT[slug];
  const otherSidingServices = SIDING_SERVICES.filter((s) => s.slug !== slug);

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
          <p className="text-crown-red font-semibold text-sm uppercase tracking-widest mb-4">Siding Services</p>
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
          <Link href="/services/siding" className="hover:text-crown-red">Siding</Link>{' / '}
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
                <LeadForm source={`siding-${slug}`} />
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Other Siding Services</h4>
                <ul className="space-y-2">
                  {otherSidingServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/siding/${s.slug}`} className="text-sm text-crown-red hover:text-crown-red-dark font-medium">
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
          <p className="text-gray-300 text-lg mb-8">Free estimates, expert installation, and quality guaranteed.</p>
          <a href={`tel:${SITE.phoneRaw}`} className="inline-block bg-crown-red hover:bg-crown-red-dark text-white px-8 py-4 rounded-lg font-bold transition-colors">
            Call Crown Roofing: {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
