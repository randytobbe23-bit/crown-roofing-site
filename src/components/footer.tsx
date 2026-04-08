import Link from 'next/link';
import { SITE, SERVICES, CITIES } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-crown-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="text-xl font-extrabold mb-4">
              <span className="text-white">Crown</span>{' '}
              <span className="text-crown-red">Roofing</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Livingston County&apos;s trusted roofing experts. Licensed, insured, and committed to
              protecting Michigan homes with quality craftsmanship.
            </p>
            <p className="text-sm">
              <a href={`tel:${SITE.phoneRaw}`} className="text-white hover:text-crown-red font-semibold transition-colors">
                {SITE.phone}
              </a>
            </p>
            <p className="text-sm mt-1">{SITE.address}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Free Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/areas/${c.slug}`} className="text-sm hover:text-white transition-colors">
                    {c.name}, {c.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas/brighton-mi" className="text-sm hover:text-white transition-colors">
                  Livingston County
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="text-sm hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-crown-red hover:bg-crown-red-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved. Licensed &amp; Insured.
          </p>
          <p className="text-xs">
            Serving Brighton, Hamburg, Howell &amp; Pinckney, Michigan
          </p>
        </div>
      </div>
    </footer>
  );
}
