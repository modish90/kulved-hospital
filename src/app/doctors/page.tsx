import { DoctorsPage } from '../../views/DoctorsPage';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata(
  'Doctors | Kulved Hospital Faridabad',
  'Meet the pediatric doctors associated with Kulved Hospital in Faridabad.',
  '/doctors',
);

export default function Page() {
  return <DoctorsPage />;
}
