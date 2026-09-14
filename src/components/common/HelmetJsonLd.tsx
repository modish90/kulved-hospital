import { useEffect } from 'react';
import { jsonLd } from '../../utils/seo';

export function HelmetJsonLd({ data }: { data: object }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = jsonLd(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);
  return null;
}
