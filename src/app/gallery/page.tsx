import { GalleryPage } from '../../views/GenericPages';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata(
  'Hospital Gallery | Kulved Hospital',
  'Approved hospital photos and Instagram-informed gallery for Kulved Hospital.',
  '/gallery',
);

export default function Page() {
  return <GalleryPage />;
}
