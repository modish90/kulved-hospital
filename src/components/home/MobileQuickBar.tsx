import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { quickActions } from '../../data/hospital';

export function MobileQuickBar() {
  return (
    <Paper
      elevation={8}
      sx={{
        display: { xs: 'block', md: 'none' },
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1200,
      }}
    >
      <BottomNavigation showLabels>
        {quickActions.slice(0, 3).map((action) => {
          const Icon = action.icon;
          return (
            <BottomNavigationAction
              key={action.label}
              label={action.label}
              icon={<Icon />}
              component="a"
              href={action.href}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
}
