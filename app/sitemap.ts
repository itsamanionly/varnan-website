import type { MetadataRoute } from 'next';
import { getAllCaseStudies } from '@/lib/mdxCaseStudies';
import { getAllBlogPosts } from '@/lib/mdxBlogs';
import { getAllTrendingToolPosts } from '@/lib/mdxHotTrends';

const BASE = 'https://varnan.tech';

export const revalidate = 3600; // Force periodic revalidation so it picks up new files

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [cases, blogs, hotTrends] = await Promise.all([getAllCaseStudies(), getAllBlogPosts(), getAllTrendingToolPosts()]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,                  lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/case-studies`,      lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/blog`,              lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/hot-trends`,    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/growth-strategies`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
  ];

  const caseStudyPages: MetadataRoute.Sitemap = cases.map((cs) => ({
    url: `${BASE}/case-studies/${cs.slug}`,
    lastModified: cs.date ? new Date(cs.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${BASE}/blog/${b.slug}`,
    lastModified: b.date ? new Date(b.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const hotTrendPages: MetadataRoute.Sitemap = hotTrends.map((t) => ({
    url: `${BASE}/hot-trends/${t.slug}`,
    lastModified: t.date ? new Date(t.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...caseStudyPages, ...blogPages, ...hotTrendPages];
}
