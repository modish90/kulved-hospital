import type { SvgIconComponent } from '@mui/icons-material';

export type VerificationLevel = 'verified' | 'third-party' | 'needs-confirmation';

export interface NavItem {
  label: string;
  path: string;
}

export interface ContactPoint {
  label: string;
  value: string;
  href?: string;
  verification: VerificationLevel;
}

export interface Doctor {
  slug: string;
  name: string;
  designation: string;
  speciality: string;
  qualifications?: string;
  experience?: string;
  overview: string;
  areas: string[];
  languages?: string[];
  image: string;
  verification: VerificationLevel;
}

export interface Speciality {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  iconName: string;
  verification: VerificationLevel;
}

export interface Facility {
  name: string;
  description: string;
  image: string;
  verification: VerificationLevel;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  reviewer: string;
  readingTime: string;
  content: string[];
}

export interface QuickAction {
  label: string;
  href: string;
  icon: SvgIconComponent;
}
