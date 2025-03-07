import { PaletteOptions, TypeBackground, alpha } from '@mui/material';
import { error, primary, secondary, info, neutral, success, warning } from './colors';

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface PaletteOptions {
    border?: string
  }
}

export function createPalette (): PaletteOptions | undefined {
  return {
    mode: 'light',
    primary,
    secondary,
    success,
    info,
    error,
    warning,
    background: {
      default: '#ffffff',
      secondary: '#f6f9fc',
      paper: ''
    } as TypeBackground,
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38)
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    border: 'rgba(0, 0, 0, 0.23)'
  };
}
