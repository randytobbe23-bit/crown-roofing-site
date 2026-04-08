import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, SERVICES, CITIES } from '@/lib/constants';
import { getCityServiceContent } from '@/lib/content';
import { LeadForm } from '@/components/lead-form';

type Props = { params: Promise<{ city: string; service: string }> };

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of CITIES) {
    for (const service of SERVICES) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (!city || !service) return {};

  const title = `${service.title} in ${city.name}, ${city.state} | Crown Roofing LLC`;
  const description = `Professional ${service.name.toLowerCase()} services in ${city.name}, ${city.state}. Free drone inspections, insurance claim help, and premium installations. Licensed & insured. Call Crown Roofing at (734) 561-4098.`;

  return {
    title,
    description,
    openGraph: { title, description },
    alternates: { canonical: `${SITE.url}/${citySlug}/${serviceSlug}` },
  };
}

export default async function CityServicePage({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (!city || !service) notFound();

  const content = getCityServiceContent(city, service);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'RoofingContractor',
      name: SITE.name,
      telephone: SITE.phoneRaw,
      url: SITE.url,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pinckney',
        addressRegion: 'MI',
        postalCode: '48169',
      },
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressRegion: city.state,
    },
    description: content.intro,
  };

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);
  const otherCities = CITIES.filter((c) => c.slug !== city.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-crown-dark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-crown-red font-semibold text-sm uppercase tracking-widest mb-4">
            {city.name}, {city.state} &mdash; {city.county}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            {service.title} in{' '}
            <span className="text-crown-red">{city.name}, {city.state}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">{content.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="bg-crown-red hover:bg-crown-red-dark text-white px-8 py-4 rounded-lg font-bold text-base text-center transition-colors"
            >
              Call: {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-base text-center transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-crown-red">Home</Link>
          {' / '}
          <Link href={`/areas/${city.slug}`} className="hover:text-crown-red">{city.name}</Link>
          {' / '}
          <span className="text-gray-900 font-medium">{service.title}</span>
        </div>
      </div>

      {/* Content + Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Professional {service.title} for {city.name} Homeowners
            </h2>
            {content.body.map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-5">{paragraph}</p>
            ))}

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Why {city.name} Homeowners Choose Crown Roofing
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                `Free drone roof inspections — no cost, no obligation for ${city.name} residents`,
                'Insurance claim experts who maximize your coverage',
                'Premium materials with manufacturer warranties up to 50 years',
                `Local team based in Pinckney — just minutes from ${city.name}`,
                'Sub-5-minute response time on all inquiries',
                'Transparent pricing with no hidden fees',
                `Serving all neighborhoods in ${city.name} and ${city.county}`,
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-crown-red font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Nearby Areas We Serve
            </h3>
            <p className="text-gray-700 mb-4">
              In addition to {city.name}, Crown Roofing provides {service.name.toLowerCase()} services
              to nearby communities including {city.nearby.join(', ')}, and all of {city.county}.
            </p>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Free {service.name} Estimate in {city.name}
                </h3>
                <LeadForm source={`${city.slug}-${service.slug}`} />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Other Services in {city.name}</h4>
                <ul className="space-y-2">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${city.slug}/${s.slug}`}
                        className="text-sm text-crown-red hover:text-crown-red-dark font-medium"
                      >
                        {s.title} in {city.name} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">{service.title} in Other Areas</h4>
                <ul className="space-y-2">
                  {otherCities.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/${c.slug}/${service.slug}`}
                        className="text-sm text-crown-red hover:text-crown-red-dark font-medium"
                      >
                        {service.title} in {c.name} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-crown-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready for {service.title} in {city.name}?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Schedule your free inspection today. We respond in under 5 minutes.
          </p>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-block bg-crown-red hover:bg-crown-red-dark text-white px-8 py-4 rounded-lg font-bold text-base transition-colors"
          >
            Call Crown Roofing: {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
