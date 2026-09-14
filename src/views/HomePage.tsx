import InstagramIcon from '@mui/icons-material/Instagram';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { DoctorCard } from '../components/doctors/DoctorCard';
import { Section } from '../components/common/Section';
import { SpecialityCard } from '../components/specialities/SpecialityCard';
import { articles } from '../data/articles';
import { doctors } from '../data/doctors';
import { facilities } from '../data/facilities';
import { hospital, quickActions, sourceNotes } from '../data/hospital';
import { specialities } from '../data/specialities';

export function HomePage() {
  return (
    <main>
      <Box sx={{ bgcolor: '#EAF7F4', py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography color="primary" fontWeight={900} sx={{ mb: 1 }}>
                {hospital.descriptor}
              </Typography>
              <Typography variant="h1">Specialised care for your little ones.</Typography>
              <Typography sx={{ mt: 2, fontSize: '1.16rem', color: 'text.secondary' }}>
                A calm, parent-first pediatric hospital experience for families in Sehatpur and
                Faridabad, built around trust, clarity and timely care.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
                <Button href="/book-appointment" size="large" variant="contained">
                  Book an Appointment
                </Button>
                <Button href={`tel:${hospital.phone}`} size="large" variant="outlined" startIcon={<PhoneIcon />}>
                  Call Hospital
                </Button>
                <Button href={hospital.mapSearchUrl} size="large" startIcon={<MapIcon />}>
                  Directions
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1300&q=80"
                alt="Pediatric care team with a child"
                sx={{
                  width: '100%',
                  aspectRatio: '4 / 3',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: '0 24px 60px rgba(15, 118, 110, 0.18)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -3, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={2}>
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Grid item xs={6} md={3} key={action.label}>
                <Card>
                  <CardContent>
                    <Button fullWidth href={action.href} startIcon={<Icon />}>
                      {action.label}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Section
        eyebrow="Kulved Hospital"
        title="Pediatric care with warmth and clinical seriousness"
        subtitle="The content architecture is designed to reflect the hospital's Instagram-led pediatric personality while keeping unverified medical claims out of production copy."
      >
        <Grid container spacing={2}>
          {sourceNotes.map((note) => (
            <Grid item xs={12} md={4} key={note}>
              <Card><CardContent><Typography>{note}</Typography></CardContent></Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section title="Specialities" subtitle="Hospital-approved service descriptions can be updated from one data file." tinted>
        <Grid container spacing={2.5}>
          {specialities.map((item) => <Grid item xs={12} sm={6} md={3} key={item.slug}><SpecialityCard speciality={item} /></Grid>)}
        </Grid>
      </Section>

      <Section title="Doctors" subtitle="Doctor credentials and profiles are structured for approval and CMS migration.">
        <Grid container spacing={2.5}>{doctors.map((doctor) => <Grid item xs={12} md={6} key={doctor.slug}><DoctorCard doctor={doctor} /></Grid>)}</Grid>
      </Section>

      <Section title="Facilities and Services" tinted>
        <Grid container spacing={3}>
          {facilities.map((facility) => (
            <Grid item xs={12} md={4} key={facility.name}>
              <Card sx={{ height: '100%' }}>
                <Box component="img" src={facility.image} alt={facility.name} sx={{ width: '100%', aspectRatio: '16 / 10', objectFit: 'cover' }} />
                <CardContent>
                  <Typography variant="h4">{facility.name}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>{facility.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section title="Emergency and Critical Care" subtitle="For urgent symptoms, call the hospital or visit the nearest emergency facility. Availability and escalation details need official confirmation.">
        <Card><CardContent sx={{ p: 4 }}><Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={2}><Typography variant="h3">Need urgent pediatric help?</Typography><Button href={`tel:${hospital.phone}`} variant="contained" size="large">Call Now</Button></Stack></CardContent></Card>
      </Section>

      <Section title="Parent Resources" tinted>
        <Grid container spacing={2.5}>{articles.map((article) => <Grid item xs={12} md={6} key={article.slug}><Card><CardContent><Typography color="primary" fontWeight={800}>{article.category}</Typography><Typography variant="h4">{article.title}</Typography><Typography color="text.secondary">{article.summary}</Typography></CardContent></Card></Grid>)}</Grid>
      </Section>

      <Section title="Follow Kulved Hospital" subtitle="Use the official Instagram presence for hospital updates, awareness posts and approved photos.">
        <Button href={hospital.instagramUrl} target="_blank" rel="noreferrer" variant="outlined" startIcon={<InstagramIcon />}>Open Instagram</Button>
      </Section>

      <Section title="Visit Kulved Hospital" tinted>
        <Card><CardContent><Typography variant="h4">{hospital.address}</Typography><Typography color="text.secondary" sx={{ mt: 1 }}>{hospital.addressNote}</Typography><Button href={hospital.mapSearchUrl} sx={{ mt: 2 }} variant="contained">Get Directions</Button></CardContent></Card>
      </Section>
    </main>
  );
}
