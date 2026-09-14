import { PrivacyPage } from '../../views/GenericPages';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata(
  'Privacy Policy | Kulved Hospital',
  'Privacy policy for Kulved Hospital website and appointment enquiries.',
  '/privacy',
);

export default function Page() {
  return <PrivacyPage />;
}
