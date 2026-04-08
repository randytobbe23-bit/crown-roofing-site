import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { LeadForm } from '@/components/lead-form';

export const metadata: Metadata = {
  title: 'Contact Us | Free Roof Inspection',
  description: `Contact Crown Roofing LLC for a free roof inspection in Brighton, Hamburg, Howell & Pinckney MI. Call (734) 561-4098 or fill out our form. We respond in under 5 minutes.`,
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-crown-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Contact <span className="text-crown-red">Crown Roofing</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Get your free roof inspection today. We respond to all inquiries in under 5 minutes during business hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Estimate</h2>
            <LeadForm source="contact-page" />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Call Us Now</h3>
              <a href={`tel:${SITE.phoneRaw}`} className="text-2xl font-bold text-crown-red hover:text-crown-red-dark transition-colors">
                {SITE.phone}
              </a>
              <p className="text-sm text-gray-600 mt-1">Mon-Sat 7:00 AM - 7:00 PM</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Email</h3>
              <a href={`mailto:${SITE.email}`} className="text-crown-red hover:text-crown-red-dark transition-colors">
                {SITE.email}
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Office</h3>
              <p className="text-gray-700">{SITE.address}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Service Areas</h3>
              <p className="text-gray-700">Brighton, Hamburg, Howell, Pinckney, and all of Livingston County, Michigan.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
