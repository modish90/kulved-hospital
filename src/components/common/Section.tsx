import { Box, Container, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface SectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  tinted?: boolean;
}

export function Section({ eyebrow, title, subtitle, children, tinted = false }: SectionProps) {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 9 }, bgcolor: tinted ? '#EEF8F6' : 'transparent' }}>
      <Container maxWidth="lg">
        {(eyebrow || title || subtitle) && (
          <Box sx={{ maxWidth: 760, mb: 4 }}>
            {eyebrow && (
              <Typography color="primary" fontWeight={800} sx={{ mb: 1 }}>
                {eyebrow}
              </Typography>
            )}
            {title && (
              <Typography variant="h2" component="h2">
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography color="text.secondary" sx={{ mt: 1.5, fontSize: '1.05rem' }}>
                {subtitle}
              </Typography>
            )}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
}
