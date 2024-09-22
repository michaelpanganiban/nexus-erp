import React from 'react';
import { DrawerProps as MuiDrawerProps } from '@mui/material';

export interface DrawerProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

// Define the custom props for DrawerComponent
export interface CustomDrawerProps extends MuiDrawerProps {
    open: boolean;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}