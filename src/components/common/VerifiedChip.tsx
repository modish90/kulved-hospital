import { Chip } from '@mui/material';
import type { VerificationLevel } from '../../types/content';

export function VerifiedChip({ level }: { level: VerificationLevel }) {
  const label =
    level === 'verified'
      ? 'Verified'
      : level === 'third-party'
        ? 'Public listing'
        : 'Confirm before launch';
  const color = level === 'verified' ? 'success' : level === 'third-party' ? 'info' : 'warning';
  return <Chip size="small" color={color} variant="outlined" label={label} />;
}
