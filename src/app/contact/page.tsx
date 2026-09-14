import { ContactPage } from '../../views/GenericPages';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata(
  'Contact Kulved Hospital | Sehatpur Faridabad',
  'Contact Kulved Hospital in Sehatpur, Faridabad for pediatric appointments and directions.',
  '/contact',
);

export default function Page() {
  return <ContactPage />;
}
