import type { MetadataRoute } from 'next';
import { SERVICES, CITIES, SITE } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];

  // Service pages
  for (const service of SERVICES) {
    pages.push({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // Area pages
  for (const city of CITIES) {
    pages.push({
      url: `${baseUrl}/areas/${city.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // City + Service combo pages (highest SEO value)
  for (const city of CITIES) {
    for (const service of SERVICES) {
      pages.push({
        url: `${baseUrl}/${city.slug}/${service.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    }
  }

  return pages;
}
