import { Sheet } from '@mui/joy';
import { Outlet } from 'react-router-dom';

import { ThemeMode } from '@/components/ThemeMode';

export function DashboardLayout() {
  return (
    <Sheet variant="outlined">
      <ThemeMode />
      <Outlet />
    </Sheet>
  );
}
