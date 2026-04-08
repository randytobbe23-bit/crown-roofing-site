import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, SERVICES, CITIES } from '@/lib/constants';
import { LeadForm } from '@/components/lead-form';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Livingston County MI`,
    description: `Professional ${service.name.toLowerCase()} in Brighton, Hamburg, Howell & Pinckney MI. Free inspections, insurance claim help, premium installations. Call Crown Roofing at (734) 561-4098.`,
    alternates: { canonical: `${SITE.url}/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-crown-dark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-crown-red font-semibold text-sm uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            {service.title} in <span className="text-crown-red">Livingston County, MI</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">{service.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{service.title} by City</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}/${service.slug}`}
                className="group border border-gray-200 rounded-xl p-6 hover:border-crown-red hover:shadow-lg transition-all text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-crown-red transition-colors mb-1">
                  {c.name}, {c.state}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{c.county}</p>
                <span className="text-crown-red font-semibold text-sm">{service.title} &rarr;</span>
              </Link>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get a Free {service.name} Estimate</h3>
            <LeadForm source={`service-${service.slug}`} />
          </div>
        </div>
      </section>
    </>
  );
}
