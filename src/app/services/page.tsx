import { ServicesPage } from '../../views/GenericPages';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata(
  'Services and Facilities | Kulved Hospital',
  'View services and facilities prepared for Kulved Hospital with confirmation markers for launch readiness.',
  '/services',
);

export default function Page() {
  return <ServicesPage />;
}
