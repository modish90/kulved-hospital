'use client';

import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { hospital, navItems } from '../../data/hospital';
import { Logo } from '../common/Logo';

export function Header() {
  const [open, setOpen] = useState(false);
  const compact = useMediaQuery('(max-width:900px)');
  const pathname = usePathname();
  const nav = (
    <Stack direction={compact ? 'column' : 'row'} spacing={compact ? 1 : 0.5}>
      {navItems.map((item) => (
        <Button
          key={item.path}
          href={item.path}
          onClick={() => setOpen(false)}
          sx={{
            color: 'text.primary',
            justifyContent: compact ? 'flex-start' : 'center',
            ...(pathname === item.path && {
              color: 'primary.main',
              bgcolor: 'rgba(15,118,110,0.08)',
            }),
          }}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );

  return (
    <>
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 0.8 }}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <Typography fontSize={13}>{hospital.locationShort}</Typography>
            <Button
              color="inherit"
              size="small"
              href={`tel:${hospital.phone}`}
              startIcon={<LocalPhoneIcon />}
            >
              Call {hospital.phone}
            </Button>
          </Stack>
        </Container>
      </Box>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{ borderBottom: '1px solid', borderColor: 'divider', backdropFilter: 'blur(12px)' }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 }, gap: 2 }}>
            <Box component="a" href="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
              <Logo />
            </Box>
            <Box sx={{ flex: 1 }} />
            {!compact && nav}
            {!compact && (
              <Button href="/book-appointment" variant="contained">
                Book Appointment
              </Button>
            )}
            {compact && (
              <IconButton aria-label="Open navigation" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 300, p: 3 }}>
          <Logo />
          <Box sx={{ mt: 3 }}>{nav}</Box>
          <Button
            fullWidth
            href="/book-appointment"
            onClick={() => setOpen(false)}
            variant="contained"
            sx={{ mt: 2 }}
          >
            Book Appointment
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
