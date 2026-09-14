import { Button, Container, Typography } from '@mui/material';

export function NotFoundPage() {
  return (
    <Container component="main" maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h1">Page not found</Typography>
      <Typography color="text.secondary" sx={{ mt: 2 }}>
        The page may have moved, or the address may be incorrect.
      </Typography>
      <Button href="/" variant="contained" sx={{ mt: 3 }}>
        Return Home
      </Button>
    </Container>
  );
}
