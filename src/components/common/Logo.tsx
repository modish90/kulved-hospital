import { Avatar, Stack, Typography } from '@mui/material';

export function Logo() {
  return (
    <Stack direction="row" spacing={1.2} alignItems="center">
      <Avatar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', fontWeight: 900 }}>K</Avatar>
      <span>
        <Typography fontWeight={900} lineHeight={1}>
          Kulved Hospital
        </Typography>
        <Typography color="text.secondary" fontSize={12} lineHeight={1.25}>
          Children&apos;s Super Speciality
        </Typography>
      </span>
    </Stack>
  );
}
