import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Crown Roofing LLC | Livingston County MI Roofing Company',
  description: `Learn about Crown Roofing LLC, Livingston County's trusted roofing company. Founded by ${SITE.owner}, we serve Brighton, Hamburg, Howell & Pinckney MI with quality roofing, gutters & siding.`,
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-crown-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            About <span className="text-crown-red">Crown Roofing LLC</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Livingston County&apos;s trusted roofing, gutter, and siding experts. Based in Pinckney, serving all of Southeast Michigan.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
          <p>
            Crown Roofing LLC was founded by {SITE.owner} with a simple mission: provide Livingston County
            homeowners with honest, high-quality roofing services at fair prices. Based in Pinckney, Michigan,
            we&apos;ve grown into a full-service exterior contractor serving Brighton, Hamburg, Howell, Pinckney,
            and surrounding communities.
          </p>

          {/* CEO Video */}
          <div className="my-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Hear From Our CEO</h3>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.youtube.com/embed/qSktZSiQ0RE"
                title="Crown Roofing CEO - Our Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              {SITE.owner}, Founder &amp; CEO of Crown Roofing LLC
            </p>
          </div>

          <p>
            We specialize in residential roofing, roof replacement, gutter installation, and siding — using
            premium materials from trusted manufacturers and backing every job with warranties you can count on.
            Our team uses cutting-edge drone technology for free roof inspections, giving homeowners a detailed
            view of their roof&apos;s condition without anyone needing to climb a ladder.
          </p>
          <p>
            What sets Crown Roofing apart is our commitment to the customer experience. We respond to inquiries
            in under 5 minutes, handle insurance claims from start to finish, and treat every home like it&apos;s our own.
            No high-pressure sales, no hidden fees — just quality work and honest communication.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-6">Licensed &amp; Insured</h2>
          <p>
            Crown Roofing LLC is fully licensed and insured in the state of Michigan. We carry comprehensive
            general liability insurance and workers&apos; compensation coverage, protecting both our team and
            your property on every job.
          </p>

          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-block bg-crown-red hover:bg-crown-red-dark text-white px-8 py-4 rounded-lg font-bold transition-colors"
            >
              Get Your Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
