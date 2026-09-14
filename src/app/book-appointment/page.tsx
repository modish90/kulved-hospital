import { AppointmentPage } from '../../views/GenericPages';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata(
  'Book Appointment | Kulved Hospital Faridabad',
  'Request a pediatric appointment at Kulved Hospital in Faridabad.',
  '/book-appointment',
);

export default function Page() {
  return <AppointmentPage />;
}
