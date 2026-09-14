import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileQuickBar } from '../home/MobileQuickBar';

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
      <MobileQuickBar />
    </Box>
  );
}
