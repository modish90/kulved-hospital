import { TermsPage } from '../../views/GenericPages';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata(
  'Terms and Conditions | Kulved Hospital',
  'Terms and conditions for Kulved Hospital website use.',
  '/terms',
);

export default function Page() {
  return <TermsPage />;
}
