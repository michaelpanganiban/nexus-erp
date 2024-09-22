'use client';

import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { AppBarComponent } from './app-bar';
import { DrawerComponent } from './drawer';
import { DrawerItems } from './drawer-items';
import { DrawerHeader } from './drawer-header';

interface NavDrawerProps {
  children: React.ReactNode;
}

export const NavDrawer: React.FC<NavDrawerProps> = ({ children }) => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarComponent open={open} onDrawerOpen={handleDrawerOpen} />
      <DrawerComponent open={open} onClose={handleDrawerClose}>
        <DrawerItems open={open} />
      </DrawerComponent>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
