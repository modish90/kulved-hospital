import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Button, Container, Divider, Grid, Link as MuiLink, Stack, Typography } from '@mui/material';
import { contactPoints, hospital, navItems } from '../../data/hospital';
import { specialities } from '../../data/specialities';
import { Logo } from '../common/Logo';

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#10201E', color: 'white', pt: 7, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ filter: 'brightness(0) invert(1)' }}>
              <Logo />
            </Box>
            <Typography sx={{ mt: 2, color: 'rgba(255,255,255,0.74)' }}>
              Pediatric care for families in Sehatpur and Faridabad. Final clinical claims,
              schedules and facility details should be approved by Kulved Hospital.
            </Typography>
            <Button
              href={hospital.instagramUrl}
              target="_blank"
              rel="noreferrer"
              startIcon={<InstagramIcon />}
              variant="outlined"
              color="inherit"
              sx={{ mt: 2 }}
            >
              Instagram
            </Button>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography fontWeight={800} mb={1.5}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {navItems.map((item) => (
                <MuiLink key={item.path} href={item.path} color="inherit" underline="hover">
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography fontWeight={800} mb={1.5}>
              Specialities
            </Typography>
            <Stack spacing={1}>
              {specialities.map((item) => (
                <MuiLink key={item.slug} href={`/specialities/${item.slug}`} color="inherit" underline="hover">
                  {item.name}
                </MuiLink>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography fontWeight={800} mb={1.5}>
              Contact
            </Typography>
            <Stack spacing={1.1}>
              {contactPoints.map((point) => (
                <Typography key={point.label} color="rgba(255,255,255,0.74)">
                  <strong>{point.label}:</strong> {point.value}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.16)' }} />
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1}>
          <Typography color="rgba(255,255,255,0.68)" fontSize={14}>
            Copyright {new Date().getFullYear()} Kulved Hospital. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <MuiLink href="/privacy" color="inherit">
              Privacy
            </MuiLink>
            <MuiLink href="/terms" color="inherit">
              Terms
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
