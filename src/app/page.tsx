import { HomePage } from '../views/HomePage';
import { pageMetadata } from './seo';

export const metadata = pageMetadata(
  'Kulved Hospital | Pediatric Hospital in Faridabad',
  "Kulved Hospital is a children's super speciality hospital in Sehatpur, Faridabad, offering parent-friendly pediatric care information and appointment booking.",
  '/',
);

export default function Page() {
  return <HomePage />;
}
