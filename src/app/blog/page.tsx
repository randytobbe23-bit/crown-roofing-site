import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Roofing Blog | Tips, Guides & News for Michigan Homeowners',
  description: 'Expert roofing tips, Michigan homeowner guides, insurance claim advice, and industry news from Crown Roofing LLC in Livingston County.',
  alternates: { canonical: `${SITE.url}/blog` },
};

const posts = [
  {
    slug: 'how-to-know-if-you-need-a-new-roof',
    title: 'How to Know If You Need a New Roof: 7 Warning Signs Michigan Homeowners Should Watch For',
    excerpt: 'Your roof protects everything you own. Learn the 7 key signs that indicate it\'s time for a roof replacement in Michigan, and what to do about it.',
    date: '2026-04-08',
    category: 'Roof Replacement',
  },
  {
    slug: 'michigan-roof-insurance-claims-guide',
    title: 'The Complete Guide to Roof Insurance Claims in Michigan (2026)',
    excerpt: 'Everything Michigan homeowners need to know about filing a roof insurance claim — from documenting damage to maximizing your payout.',
    date: '2026-04-06',
    category: 'Insurance',
  },
  {
    slug: 'best-roofing-materials-michigan-weather',
    title: 'Best Roofing Materials for Michigan Weather: A Homeowner\'s Guide',
    excerpt: 'Michigan\'s freeze-thaw cycles, heavy snow, and summer storms demand the right roofing materials. Here\'s what works best and why.',
    date: '2026-04-04',
    category: 'Education',
  },
  {
    slug: 'cost-of-roof-replacement-livingston-county',
    title: 'How Much Does a Roof Replacement Cost in Livingston County? (2026 Pricing Guide)',
    excerpt: 'Real pricing data for roof replacements in Brighton, Howell, Hamburg, and Pinckney MI. What factors affect cost and how to save.',
    date: '2026-04-02',
    category: 'Pricing',
  },
  {
    slug: 'gutter-maintenance-tips-fall',
    title: '5 Essential Gutter Maintenance Tips Before Michigan\'s Fall Season',
    excerpt: 'Protect your home from water damage this fall. Here are the gutter maintenance steps every Michigan homeowner should take before the leaves drop.',
    date: '2026-03-30',
    category: 'Gutters',
  },
  {
    slug: 'drone-roof-inspections-explained',
    title: 'Drone Roof Inspections: How They Work and Why They\'re Better',
    excerpt: 'Crown Roofing uses drone technology for free, non-invasive roof inspections. Here\'s how it works and what you\'ll get in your report.',
    date: '2026-03-28',
    category: 'Technology',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-crown-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Crown Roofing <span className="text-crown-red">Blog</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Expert roofing tips, Michigan homeowner guides, insurance claim advice, and industry news.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border border-gray-200 rounded-xl p-6 hover:border-crown-red hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-red-50 text-crown-red text-xs font-semibold px-2.5 py-1 rounded">{post.category}</span>
                  <time className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-crown-red transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-crown-red font-semibold text-sm hover:text-crown-red-dark">
                  Read More &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
