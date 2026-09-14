import { Grid } from '@mui/material';
import { Section } from '../components/common/Section';
import { SpecialityCard } from '../components/specialities/SpecialityCard';
import { specialities } from '../data/specialities';

export function SpecialitiesPage() {
  return <Section title="Pediatric Specialities" subtitle="Each page is structured for verified hospital-approved clinical copy."><Grid container spacing={2.5}>{specialities.map((item) => <Grid item xs={12} sm={6} md={3} key={item.slug}><SpecialityCard speciality={item} /></Grid>)}</Grid></Section>;
}
