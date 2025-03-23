'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Drawer as MuiDrawer, IconButton, styled, useTheme, Theme, CSSObject, Typography, useMediaQuery } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DrawerHeader } from './drawer-header';
import { DrawerProps } from '@/interfaces/drawer';
import { primaryLight } from '@/theme/overrides';

// Define the drawer width
const drawerWidth = 240;

// Mixin for the opened state
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

// Mixin for the closed state
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// Styled Drawer component
const DrawerStyled = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);



// DrawerComponent with custom props
export const DrawerComponent: React.FC<DrawerProps> = ({ open, onClose, children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      if (isMobile && open) {
        onClose(); 
      }
      isInitialLoad.current = false; // Set it to false after initial load
    }
  }, [isMobile, open, onClose]);
  
  return (
    <DrawerStyled variant={open ? 'permanent' : 'temporary'} open={open}>
      <DrawerHeader>
        <Typography sx={{
          fontWeight: 'bold',
          color: primaryLight,
          textAlign: 'center',
          fontSize: '20px',
          flexGrow: 1,
        }}>
          ERP Nexus
        </Typography>
        <IconButton onClick={onClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      {children}
    </DrawerStyled>
  );
};
