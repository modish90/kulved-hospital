import { SpecialitiesPage } from '../../views/SpecialitiesPage';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata(
  'Pediatric Specialities | Kulved Hospital Faridabad',
  'Explore pediatric speciality pages for Kulved Hospital in Faridabad.',
  '/specialities',
);

export default function Page() {
  return <SpecialitiesPage />;
}
