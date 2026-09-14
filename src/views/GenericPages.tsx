'use client';

import SearchIcon from '@mui/icons-material/Search';
import { Alert, Box, Button, Card, CardContent, Grid, InputAdornment, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { AppointmentForm } from '../components/appointment/AppointmentForm';
import { Section } from '../components/common/Section';
import { articleCategories, articles } from '../data/articles';
import { facilities } from '../data/facilities';
import { contactPoints, hospital } from '../data/hospital';

export function AboutPage() {
  return <Section title="About Kulved Hospital" subtitle="A pediatric hospital experience shaped for children and parents in Faridabad."><Grid container spacing={3}><Grid item xs={12} md={7}><Typography sx={{ fontSize: '1.1rem' }}>Kulved Hospital is presented as a children's super speciality hospital serving families around Sehatpur, Faridabad. The website tone is intentionally calm, warm and clinically responsible, with final mission, vision, leadership and history copy ready to be added after hospital approval.</Typography><Typography sx={{ mt: 2 }}>The care philosophy emphasizes parent-friendly communication, child comfort, clean facilities and timely escalation when children need urgent attention.</Typography></Grid><Grid item xs={12} md={5}><Card><CardContent><Typography variant="h4">Content Governance</Typography><Typography color="text.secondary" sx={{ mt: 1 }}>Awards, accreditations, bed counts, advanced facility levels and doctor experience are not stated unless confirmed by official hospital sources.</Typography></CardContent></Card></Grid></Grid></Section>;
}

export function ServicesPage() {
  return <Section title="Services and Facilities" subtitle="Facility content is designed for verified photos and hospital-approved operational details."><Grid container spacing={3}>{facilities.map((facility) => <Grid item xs={12} md={4} key={facility.name}><Card sx={{ height: '100%' }}><Box component="img" src={facility.image} alt={facility.name} sx={{ width: '100%', aspectRatio: '16 / 10', objectFit: 'cover' }} /><CardContent><Typography variant="h4">{facility.name}</Typography><Typography color="text.secondary" sx={{ mt: 1 }}>{facility.description}</Typography></CardContent></Card></Grid>)}</Grid></Section>;
}

export function EmergencyPage() {
  return <Section title="Emergency / Critical Care" subtitle="For life-threatening symptoms, seek immediate medical help. Hospital-specific emergency hours require confirmation."><Alert severity="warning" sx={{ mb: 3 }}>Emergency availability and critical care facility details must be confirmed by Kulved Hospital before launch.</Alert><Card><CardContent sx={{ p: 4 }}><Typography variant="h4">Call before arrival when possible</Typography><Typography color="text.secondary" sx={{ mt: 1 }}>Share the child's age, symptoms, current condition and estimated arrival time.</Typography><Button href={`tel:${hospital.phone}`} variant="contained" sx={{ mt: 3 }}>Call {hospital.phone}</Button></CardContent></Card></Section>;
}

export function GalleryPage() {
  return <Section title="Hospital Gallery" subtitle="Replace these neutral placeholders with approved hospital and Instagram assets before go-live."><Grid container spacing={2}>{facilities.map((facility) => <Grid item xs={12} sm={6} md={4} key={facility.name}><Box component="img" src={facility.image} alt={facility.name} sx={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 2 }} /></Grid>)}</Grid></Section>;
}

export function HealthLibraryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const filtered = useMemo(() => articles.filter((article) => (category === 'All' || article.category === category) && `${article.title} ${article.summary}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <Section title="Health Library" subtitle="Educational information only. Not a substitute for professional medical advice."><Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 3 }}><TextField label="Search articles" value={query} onChange={(e) => setQuery(e.target.value)} InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> }} /><TextField select label="Category" value={category} onChange={(e) => setCategory(e.target.value)} sx={{ minWidth: 240 }}><MenuItem value="All">All</MenuItem>{articleCategories.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}</TextField></Stack>{filtered.length ? <Grid container spacing={2.5}>{filtered.map((article) => <Grid item xs={12} md={6} key={article.slug}><Card><CardContent><Typography color="primary" fontWeight={800}>{article.category}</Typography><Typography variant="h4">{article.title}</Typography><Typography color="text.secondary" sx={{ mt: 1 }}>{article.summary}</Typography><Typography fontSize={14} sx={{ mt: 2 }}>{article.readingTime} - Reviewer: {article.reviewer}</Typography></CardContent></Card></Grid>)}</Grid> : <Alert severity="info">No articles match your search.</Alert>}</Section>;
}

export function ContactPage() {
  return <Section title="Contact Kulved Hospital" subtitle="Use verified contact channels and confirm operational details before launch."><Grid container spacing={3}><Grid item xs={12} md={5}><Stack spacing={2}>{contactPoints.map((point) => <Card key={point.label}><CardContent><Typography fontWeight={800}>{point.label}</Typography><Typography color="text.secondary">{point.value}</Typography>{point.href && <Button href={point.href} sx={{ mt: 1 }}>Open</Button>}</CardContent></Card>)}</Stack></Grid><Grid item xs={12} md={7}><Card><CardContent><Typography variant="h4">Send an enquiry</Typography><AppointmentForm /></CardContent></Card></Grid></Grid></Section>;
}

export function AppointmentPage() {
  return <Section title="Book Appointment" subtitle="Submit a request and the hospital team can connect this flow to a CRM, WhatsApp, email or Cloudflare Worker later."><Card><CardContent sx={{ p: { xs: 2, md: 4 } }}><AppointmentForm /></CardContent></Card></Section>;
}

export function PrivacyPage() {
  return <Section title="Privacy Policy"><Typography>Appointment forms collect only information needed to respond to an enquiry. Do not submit sensitive medical records through this website. Production integrations should use secure transport, access controls and data retention policies approved by the hospital.</Typography></Section>;
}

export function TermsPage() {
  return <Section title="Terms and Conditions"><Typography>This website provides general hospital information and educational health content. It does not replace direct consultation with a qualified medical professional. Emergency symptoms require immediate medical care.</Typography><Button href="/contact" sx={{ mt: 2 }}>Contact Hospital</Button></Section>;
}
