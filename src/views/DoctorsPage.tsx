'use client';

import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { DoctorCard } from '../components/doctors/DoctorCard';
import { Section } from '../components/common/Section';
import { doctors } from '../data/doctors';

export function DoctorsPage() {
  const [speciality, setSpeciality] = useState('All');
  const options = ['All', ...Array.from(new Set(doctors.map((doctor) => doctor.speciality)))];
  const filtered = useMemo(() => speciality === 'All' ? doctors : doctors.filter((doctor) => doctor.speciality === speciality), [speciality]);
  return (
    <Section title="Doctors" subtitle="Filter by speciality and open detailed profiles. Credentials marked from public listings should be approved by the hospital.">
      <TextField select label="Filter by speciality" value={speciality} onChange={(event) => setSpeciality(event.target.value)} sx={{ mb: 3, minWidth: 260 }}>
        {options.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
      </TextField>
      {filtered.length ? <Grid container spacing={2.5}>{filtered.map((doctor) => <Grid item xs={12} md={6} key={doctor.slug}><DoctorCard doctor={doctor} /></Grid>)}</Grid> : <Box><Typography>No doctors match this filter.</Typography><Button onClick={() => setSpeciality('All')}>Clear filter</Button></Box>}
    </Section>
  );
}
