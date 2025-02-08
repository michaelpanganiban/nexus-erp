'use client';

import React, { useState } from 'react';
import { AppBar as MuiAppBar, IconButton, styled, Toolbar, Typography, Badge, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useSession, signOut } from 'next-auth/react';
import { primaryDark } from '@/theme/overrides';
import { AccountCircle, Mail, Notifications } from '@mui/icons-material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';

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

export const AppBarComponent: React.FC<AppBarProps> = ({ open, onDrawerOpen }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-search-account-menu';
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    signOut();
  }

  const handleRedirectToProfile = () => {
    router.push('/profile')
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem 
        onClick={handleRedirectToProfile}
        sx={{
          width: '7rem',
          alignItems: 'center',
          height: '3rem'
        }}
      >
        <AdminPanelSettingsIcon /> &nbsp;  Profile
      </MenuItem>
      <MenuItem 
        onClick={handleLogout}
        sx={{
          width: '7rem',
          alignItems: 'center',
          height: '3rem'
        }}
      >
          <ExitToAppIcon/> &nbsp; Logout
      </MenuItem>
    </Menu>
  );

  return (
    <AppBarStyled position="fixed" open={open} onDrawerOpen={function (): void {
      throw new Error('Function not implemented.');
    }} sx={{ backgroundColor: primaryDark }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerOpen}
          edge="start"
          sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Company Name
        </Typography>

        {/* Icons container */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleProfileMenuOpen}
            sx={{borderRadius: 0}}
          >
            <Typography 
              noWrap
              component="div"
              sx={{ marginX: 1}}
            >
              {session?.user?.name}
            </Typography>
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
      {renderMenu}
    </AppBarStyled>

  )
};
