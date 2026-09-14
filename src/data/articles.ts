import type { Article } from '../types/content';

export const articleCategories = [
  'Newborn Care',
  'Vaccination',
  'Nutrition',
  'Common Childhood Illnesses',
  'Growth & Development',
  'Emergency Guidance',
];

export const articles: Article[] = [
  {
    slug: 'when-to-seek-urgent-pediatric-care',
    title: 'When Should Parents Seek Urgent Pediatric Care?',
    summary:
      'A practical guide to symptoms that should prompt parents to contact a pediatric doctor promptly.',
    category: 'Emergency Guidance',
    publishedAt: '2026-09-14',
    reviewer: 'Medical reviewer to be confirmed',
    readingTime: '4 min read',
    content: [
      'Parents should seek urgent medical advice when a child has breathing difficulty, persistent high fever, dehydration signs, seizures, severe drowsiness, repeated vomiting, serious injury or any symptom that feels rapidly worsening.',
      'This article is prepared as educational website content and must be clinically reviewed by Kulved Hospital before publication.',
    ],
  },
  {
    slug: 'newborn-first-week',
    title: 'Newborn Care in the First Week',
    summary:
      'Gentle reminders for feeding, temperature, sleep safety and follow-up conversations after birth.',
    category: 'Newborn Care',
    publishedAt: '2026-09-14',
    reviewer: 'Medical reviewer to be confirmed',
    readingTime: '3 min read',
    content: [
      'The first week is a time for careful observation, feeding support and timely medical follow-up. Parents should ask their pediatrician about jaundice, weight, feeding frequency and warning signs.',
      'Hospital-specific newborn guidance should be added after medical review.',
    ],
  },
];
