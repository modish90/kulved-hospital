import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MapIcon from '@mui/icons-material/Map';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import type { ContactPoint, NavItem } from '../types/content';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kulvedhospital.com';

export const hospital = {
  name: 'Kulved Hospital',
  legalName: 'Shree Kulved Pediatric Superspeciality Hospital',
  descriptor: "Pediatric / Children's Super Speciality Hospital",
  locationShort: 'Sehatpur, Faridabad, Haryana',
  address:
    'Plot no. 56A, Shyam Colony, Part I, Sehatpur, Faridabad, Haryana 121013',
  addressNote: 'Address should be confirmed by hospital team before launch.',
  instagramUrl: 'https://www.instagram.com/kulved_hospital/',
  phone: '+918527402333',
  alternatePhone: '+918527494333',
  mapSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Kulved%20Hospital%20Sehatpur%20Faridabad',
  hours: 'Hours require official confirmation',
  brandSource:
    'Public Instagram reference requested by client plus public listings reviewed during build.',
};

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Specialities', path: '/specialities' },
  { label: 'Services', path: '/services' },
  { label: 'Health Library', path: '/health-library' },
  { label: 'Contact', path: '/contact' },
];

export const contactPoints: ContactPoint[] = [
  {
    label: 'Phone',
    value: hospital.phone,
    href: `tel:${hospital.phone}`,
    verification: 'third-party',
  },
  {
    label: 'Address',
    value: hospital.address,
    href: hospital.mapSearchUrl,
    verification: 'third-party',
  },
  {
    label: 'Email',
    value: 'To be confirmed by hospital team',
    verification: 'needs-confirmation',
  },
  {
    label: 'Opening hours',
    value: hospital.hours,
    verification: 'needs-confirmation',
  },
];

export const quickActions = [
  { label: 'Book', href: '/book-appointment', icon: EventAvailableIcon },
  { label: 'Call', href: `tel:${hospital.phone}`, icon: LocalPhoneIcon },
  { label: 'Directions', href: hospital.mapSearchUrl, icon: MapIcon },
  { label: 'Instagram', href: hospital.instagramUrl, icon: InstagramIcon },
];

export const sourceNotes = [
  'Official Instagram profile was the requested primary brand reference; runtime scraping is intentionally not used.',
  'Doctor and contact details are placed in structured data with verification flags so the hospital team can approve before launch.',
  'Third-party facility listings mention NICU, pediatric emergency, lab, pharmacy, X-ray, ventilator and CPAP availability; these are displayed as confirmation-needed where appropriate.',
];
