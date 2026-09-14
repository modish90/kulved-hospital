import { AboutPage } from '../../views/GenericPages';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata(
  'About Kulved Hospital | Pediatric Care in Faridabad',
  "Learn about Kulved Hospital, a pediatric children's super speciality hospital in Sehatpur, Faridabad.",
  '/about',
);

export default function Page() {
  return <AboutPage />;
}
