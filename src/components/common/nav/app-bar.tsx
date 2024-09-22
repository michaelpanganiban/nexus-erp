'use client';

import React from 'react';
import { AppBar as MuiAppBar, IconButton, styled, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  onDrawerOpen: () => void;
}

const AppBarStyled = styled(MuiAppBar, {
  // Prevent `open` and `onDrawerOpen` from being passed down to the DOM element
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'onDrawerOpen',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBarComponent: React.FC<AppBarProps> = ({ open, onDrawerOpen }) => (
  <AppBarStyled position="fixed" open={open} onDrawerOpen={function (): void {
    throw new Error('Function not implemented.');
  } }>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onDrawerOpen} // Use onDrawerOpen directly here
        edge="start"
        sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Mini variant drawer
      </Typography>
    </Toolbar>
  </AppBarStyled>
);
