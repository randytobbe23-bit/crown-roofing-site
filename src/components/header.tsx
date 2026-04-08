'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SITE, SERVICES, CITIES } from '@/lib/constants';

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-crown-dark text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="hidden sm:inline">Serving Brighton, Hamburg, Howell &amp; Pinckney MI</span>
          <div className="flex items-center gap-4 ml-auto">
            <a href={`tel:${SITE.phoneRaw}`} className="hover:text-crown-red transition-colors font-semibold">
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="bg-crown-red hover:bg-crown-red-dark px-3 py-1 rounded text-white font-semibold transition-colors"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-crown-dark rounded-lg p-1.5">
              <Image
                src="/logo.svg"
                alt="Crown Roofing LLC"
                width={40}
                height={46}
                className="h-9 w-auto"
                priority
              />
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-crown-dark">Crown</span>{' '}
              <span className="text-crown-red">Roofing</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-crown-red rounded-md hover:bg-gray-50 transition-colors">
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-crown-red rounded-md hover:bg-gray-50 transition-colors flex items-center gap-1">
                Services <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                {SERVICES.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-crown-red transition-colors first:rounded-t-lg last:rounded-b-lg">
                    {s.icon} {s.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Areas dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-crown-red rounded-md hover:bg-gray-50 transition-colors flex items-center gap-1">
                Service Areas <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                {CITIES.map((c) => (
                  <Link key={c.slug} href={`/areas/${c.slug}`} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-crown-red transition-colors first:rounded-t-lg last:rounded-b-lg">
                    {c.name}, {c.state}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-crown-red rounded-md hover:bg-gray-50 transition-colors">
              About
            </Link>
            <Link href="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-crown-red rounded-md hover:bg-gray-50 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-crown-red rounded-md hover:bg-gray-50 transition-colors">
              Contact
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="ml-2 bg-crown-red hover:bg-crown-red-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
            >
              Call Now: {SITE.phone}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-crown-red"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-crown-red rounded-md" onClick={() => setOpen(false)}>
                Home
              </Link>

              <button
                className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-crown-red rounded-md flex items-center justify-between"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <svg className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  {SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="block px-3 py-2 text-sm text-gray-600 hover:text-crown-red" onClick={() => setOpen(false)}>
                      {s.icon} {s.title}
                    </Link>
                  ))}
                </div>
              )}

              <button
                className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-crown-red rounded-md flex items-center justify-between"
                onClick={() => setAreasOpen(!areasOpen)}
              >
                Service Areas <svg className={`w-3 h-3 transition-transform ${areasOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {areasOpen && (
                <div className="pl-4 space-y-1">
                  {CITIES.map((c) => (
                    <Link key={c.slug} href={`/areas/${c.slug}`} className="block px-3 py-2 text-sm text-gray-600 hover:text-crown-red" onClick={() => setOpen(false)}>
                      {c.name}, {c.state}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/about" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-crown-red rounded-md" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-crown-red rounded-md" onClick={() => setOpen(false)}>
                Blog
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-crown-red rounded-md" onClick={() => setOpen(false)}>
                Contact
              </Link>

              <a
                href={`tel:${SITE.phoneRaw}`}
                className="block text-center bg-crown-red hover:bg-crown-red-dark text-white px-5 py-3 rounded-lg text-sm font-bold mt-3 transition-colors"
              >
                Call Now: {SITE.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
