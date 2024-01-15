import { Box } from '@mui/joy';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export function DashboardLayout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <Header />
      <Sidebar />
      <Outlet />
    </Box>
  );
}
