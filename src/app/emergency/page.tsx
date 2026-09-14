import { EmergencyPage } from '../../views/GenericPages';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata(
  'Pediatric Emergency | Kulved Hospital Faridabad',
  'Emergency information and urgent care contact options for Kulved Hospital.',
  '/emergency',
);

export default function Page() {
  return <EmergencyPage />;
}
