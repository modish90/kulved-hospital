import type { Speciality } from '../types/content';

export const specialities: Speciality[] = [
  {
    slug: 'general-pediatrics',
    name: 'General Pediatrics',
    description: 'Everyday pediatric consultations and follow-up care for children.',
    longDescription:
      'A parent-friendly care pathway for common childhood symptoms, growth questions, preventive guidance and pediatric follow-ups. Scope and OPD timings should be confirmed by the hospital team.',
    iconName: 'child',
    verification: 'third-party',
  },
  {
    slug: 'newborn-care',
    name: 'Newborn Care',
    description: 'Clinical support for newborn assessment and early-life care.',
    longDescription:
      'Support for newborn feeding questions, jaundice concerns, early checkups and family guidance. Detailed neonatal facility levels must be confirmed by Kulved Hospital.',
    iconName: 'baby',
    verification: 'third-party',
  },
  {
    slug: 'pediatric-emergency',
    name: 'Pediatric Emergency',
    description: 'Urgent care pathway for children requiring prompt medical attention.',
    longDescription:
      'The website includes a dedicated emergency information route. Availability, triage process and emergency phone details should be verified by the hospital before publication.',
    iconName: 'emergency',
    verification: 'needs-confirmation',
  },
  {
    slug: 'vaccination-guidance',
    name: 'Vaccination Guidance',
    description: 'Immunisation counselling and vaccine schedule conversations.',
    longDescription:
      'A structured vaccine guidance section is ready for hospital-approved schedules, stock information and appointment instructions.',
    iconName: 'vaccine',
    verification: 'needs-confirmation',
  },
];
