'use client';

import { ThemeOptions, createTheme } from '@mui/material';
import { createPalette } from './create-palette';
import { createComponents } from './create-components';
import { createTypography } from './create-typography';
import { TypeBackgroundOverrides } from '@/interfaces/theme';

const palette = createPalette();
const components = createComponents({ palette });
const typography = createTypography();

const themeOptions: ThemeOptions = {
  typography,
  palette,
  components,
};


export const theme = createTheme(themeOptions);
const themBackgroundOverride = theme.palette.background as TypeBackgroundOverrides;

//Palette
export const backgroundSecondary = themBackgroundOverride.secondary;
export const backgroundDefault = themBackgroundOverride.default;
export const paper = themBackgroundOverride.paper;
export const primaryMain = theme.palette.primary.main;
export const primaryLight = theme.palette.primary.light;
export const primaryDark = theme.palette.primary.dark;
export const primaryContrast = theme.palette.primary.contrastText;
export const secondaryMain = theme.palette.secondary.main;
export const secondaryLight = theme.palette.secondary.light;
export const secondaryDark = theme.palette.secondary.dark;
export const secondaryContrast = theme.palette.secondary.contrastText;
export const errorMain = theme.palette.error.main;
export const errorLight = theme.palette.error.light;
export const errorDark = theme.palette.error.dark;
export const errorContrast = theme.palette.error.contrastText;
export const warningMain = theme.palette.warning.main;
export const warningLight = theme.palette.warning.light;
export const warningDark = theme.palette.warning.dark;
export const warningContrast = theme.palette.warning.contrastText;
export const infoMain = theme.palette.info.main;
export const infoLight = theme.palette.info.light;
export const infoDark = theme.palette.info.dark;
export const infoContrast = theme.palette.info.contrastText;
export const successMain = theme.palette.success.main;
export const successLight = theme.palette.success.light;
export const successDark = theme.palette.success.dark;
export const successContrast = theme.palette.success.contrastText;
export const divider = theme.palette.divider;
export const commonBlack = theme.palette.common.black;
export const commonWhite = theme.palette.common.white;
export const grey = theme.palette.grey;