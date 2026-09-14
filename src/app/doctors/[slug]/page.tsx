import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { doctors } from '../../../data/doctors';
import { DoctorDetailPage } from '../../../views/DoctorDetailPage';
import { pageMetadata } from '../../seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) {
    return pageMetadata('Doctor | Kulved Hospital', 'Kulved Hospital doctor profile.', `/doctors/${slug}`);
  }

  return pageMetadata(`${doctor.name} | Kulved Hospital`, doctor.overview, `/doctors/${doctor.slug}`);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) {
    notFound();
  }

  return <DoctorDetailPage doctor={doctor} />;
}
