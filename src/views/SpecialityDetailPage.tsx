import { Button, Card, CardContent, Container, Typography } from '@mui/material';
import { VerifiedChip } from '../components/common/VerifiedChip';
import type { Speciality } from '../types/content';

export function SpecialityDetailPage({ speciality }: { speciality: Speciality }) {
  return <Container component="main" maxWidth="md" sx={{ py: 7 }}><VerifiedChip level={speciality.verification} /><Typography variant="h1" sx={{ mt: 2 }}>{speciality.name}</Typography><Card sx={{ mt: 3 }}><CardContent sx={{ p: 4 }}><Typography sx={{ fontSize: '1.1rem' }}>{speciality.longDescription}</Typography><Button href="/book-appointment" variant="contained" sx={{ mt: 3 }}>Book Appointment</Button></CardContent></Card></Container>;
}
