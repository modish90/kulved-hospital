import ChildCareIcon from '@mui/icons-material/ChildCare';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import EmergencyIcon from '@mui/icons-material/Emergency';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import type { Speciality } from '../../types/content';
import { VerifiedChip } from '../common/VerifiedChip';

const icons = {
  child: ChildCareIcon,
  baby: FavoriteIcon,
  emergency: EmergencyIcon,
  vaccine: VaccinesIcon,
};

export function SpecialityCard({ speciality }: { speciality: Speciality }) {
  const Icon = icons[speciality.iconName as keyof typeof icons] || ChildCareIcon;
  return (
    <Card sx={{ height: '100%', transition: 'transform .18s ease', '&:hover': { transform: 'translateY(-4px)' } }}>
      <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1}>
          <Icon color="primary" fontSize="large" />
          <VerifiedChip level={speciality.verification} />
        </Stack>
        <Typography variant="h4" sx={{ mt: 2 }}>
          {speciality.name}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1, flex: 1 }}>
          {speciality.description}
        </Typography>
        <Button href={`/specialities/${speciality.slug}`} sx={{ mt: 2, alignSelf: 'flex-start' }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
