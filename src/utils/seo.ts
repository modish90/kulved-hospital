import { siteUrl } from '../data/hospital';

export interface SeoConfig {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function setSeo({ title, description, path = '/', image }: SeoConfig) {
  document.title = title;
  const canonical = `${siteUrl}${path}`;
  setMeta('description', description);
  setMeta('og:title', title, 'property');
  setMeta('og:description', description, 'property');
  setMeta('og:url', canonical, 'property');
  setMeta('og:type', 'website', 'property');
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  if (image) setMeta('og:image', image, 'property');
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = canonical;
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let meta = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, name);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

export function jsonLd(data: object) {
  return JSON.stringify(data);
}
