import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { specialities } from '../../../data/specialities';
import { SpecialityDetailPage } from '../../../views/SpecialityDetailPage';
import { pageMetadata } from '../../seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return specialities.map((speciality) => ({ slug: speciality.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const speciality = specialities.find((item) => item.slug === slug);

  if (!speciality) {
    return pageMetadata('Speciality | Kulved Hospital', 'Kulved Hospital speciality detail.', `/specialities/${slug}`);
  }

  return pageMetadata(`${speciality.name} | Kulved Hospital`, speciality.description, `/specialities/${speciality.slug}`);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const speciality = specialities.find((item) => item.slug === slug);

  if (!speciality) {
    notFound();
  }

  return <SpecialityDetailPage speciality={speciality} />;
}
