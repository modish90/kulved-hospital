import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Avatar, Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import type { Doctor } from '../../types/content';
import { VerifiedChip } from '../common/VerifiedChip';

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Stack direction="row" spacing={2.2} alignItems="center">
          <Avatar src={doctor.image} alt={doctor.name} sx={{ width: 88, height: 88 }} />
          <Box>
            <Typography variant="h4">{doctor.name}</Typography>
            <Typography color="primary" fontWeight={800}>
              {doctor.designation}
            </Typography>
            <Typography color="text.secondary">{doctor.speciality}</Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }} flexWrap="wrap">
          <VerifiedChip level={doctor.verification} />
          {doctor.qualifications && <Typography fontWeight={700}>{doctor.qualifications}</Typography>}
        </Stack>
        <Typography color="text.secondary" sx={{ mt: 2 }}>
          {doctor.overview}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} sx={{ mt: 3 }}>
          <Button href="/book-appointment" variant="contained" startIcon={<EventAvailableIcon />}>
            Book Appointment
          </Button>
          <Button href={`/doctors/${doctor.slug}`} variant="outlined">
            View Profile
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
