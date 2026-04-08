import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, SERVICES, CITIES } from '@/lib/constants';
import { LeadForm } from '@/components/lead-form';

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);
  if (!city) return {};
  return {
    title: `Roofing, Gutters & Siding in ${city.name}, ${city.state}`,
    description: `Crown Roofing serves ${city.name}, ${city.state} with roofing, roof replacement, gutters, and siding. Free inspections. Licensed & insured. Call (734) 561-4098.`,
    alternates: { canonical: `${SITE.url}/areas/${citySlug}` },
  };
}

export default async function AreaPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);
  if (!city) notFound();

  return (
    <>
      <section className="bg-crown-dark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-crown-red font-semibold text-sm uppercase tracking-widest mb-4">{city.county}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Roofing, Gutters &amp; Siding in <span className="text-crown-red">{city.name}, {city.state}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">{city.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Services in {city.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${city.slug}/${s.slug}`}
                className="group border border-gray-200 rounded-xl p-6 hover:border-crown-red hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-crown-red transition-colors mb-2">
                  {s.title} in {city.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                <span className="inline-block mt-3 text-crown-red font-semibold text-sm">Learn More &rarr;</span>
              </Link>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get a Free Estimate in {city.name}</h3>
            <LeadForm source={`area-${city.slug}`} />
          </div>
        </div>
      </section>
    </>
  );
}
