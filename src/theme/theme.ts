import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0F766E', light: '#5EEAD4', dark: '#115E59', contrastText: '#FFFFFF' },
    secondary: { main: '#2563EB', light: '#93C5FD', dark: '#1E40AF', contrastText: '#FFFFFF' },
    success: { main: '#15803D' },
    warning: { main: '#B45309' },
    error: { main: '#B91C1C' },
    info: { main: '#0369A1' },
    background: { default: '#F7FAF9', paper: '#FFFFFF' },
    text: { primary: '#10201E', secondary: '#526260' },
    divider: '#DDE7E4',
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontSize: 'clamp(2.25rem, 5vw, 4.75rem)', lineHeight: 1.05, fontWeight: 800 },
    h2: { fontSize: 'clamp(1.8rem, 3vw, 3rem)', lineHeight: 1.15, fontWeight: 760 },
    h3: { fontSize: 'clamp(1.35rem, 2vw, 2rem)', lineHeight: 1.2, fontWeight: 720 },
    h4: { fontSize: '1.35rem', lineHeight: 1.25, fontWeight: 700 },
    h5: { fontSize: '1.1rem', lineHeight: 1.35, fontWeight: 700 },
    button: { fontWeight: 700, textTransform: 'none' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { scrollBehavior: 'smooth' },
        'a:focus-visible, button:focus-visible, [tabindex]:focus-visible': {
          outline: '3px solid #F59E0B',
          outlineOffset: 3,
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*': { animationDuration: '0.001ms !important', transitionDuration: '0.001ms !important' },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 10, minHeight: 44 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: '1px solid #DDE7E4',
          boxShadow: '0 10px 30px rgba(15, 118, 110, 0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 8, fontWeight: 700 },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined' },
    },
  },
});
