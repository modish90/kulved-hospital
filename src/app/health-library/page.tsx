import { HealthLibraryPage } from '../../views/GenericPages';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata(
  'Health Library | Pediatric Parent Resources',
  'Parent-friendly pediatric health articles from Kulved Hospital, prepared for medical review.',
  '/health-library',
);

export default function Page() {
  return <HealthLibraryPage />;
}
