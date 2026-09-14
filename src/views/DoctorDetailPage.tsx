import { Avatar, Box, Button, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { VerifiedChip } from '../components/common/VerifiedChip';
import type { Doctor } from '../types/content';

export function DoctorDetailPage({ doctor }: { doctor: Doctor }) {
  return (
    <Container component="main" maxWidth="lg" sx={{ py: 7 }}>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={4}><Avatar src={doctor.image} alt={doctor.name} sx={{ width: '100%', height: 'auto', aspectRatio: '1 / 1', borderRadius: 2 }} /></Grid>
        <Grid item xs={12} md={8}>
          <VerifiedChip level={doctor.verification} />
          <Typography variant="h1" sx={{ mt: 2 }}>{doctor.name}</Typography>
          <Typography variant="h4" color="primary" sx={{ mt: 1 }}>{doctor.designation}</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>{doctor.qualifications}</Typography>
          <Typography sx={{ mt: 2 }}>{doctor.overview}</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>{doctor.areas.map((area) => <Chip key={area} label={area} />)}</Stack>
          <Box sx={{ mt: 3 }}><Button href="/book-appointment" variant="contained">Book Appointment</Button></Box>
        </Grid>
      </Grid>
    </Container>
  );
}
