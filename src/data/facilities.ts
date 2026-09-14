import type { Facility } from '../types/content';

export const facilities: Facility[] = [
  {
    name: 'Child-focused consultation rooms',
    description:
      'Calm consultation flow designed around children and parents. Room photos should be replaced with official hospital imagery.',
    image:
      'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1100&q=80',
    verification: 'third-party',
  },
  {
    name: 'Neonatal care support',
    description:
      'Public listings reference NICU-related care. Facility level, equipment and scope require hospital confirmation.',
    image:
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1100&q=80',
    verification: 'needs-confirmation',
  },
  {
    name: 'Diagnostics and pharmacy support',
    description:
      'Public listings mention lab, pharmacy and X-ray support. Operational hours should be verified before launch.',
    image:
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?auto=format&fit=crop&w=1100&q=80',
    verification: 'needs-confirmation',
  },
];
