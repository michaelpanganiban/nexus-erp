import { alpha } from '@mui/material/styles';

interface Colors {
  lightest?: string;
  light?: string;
  main: any;
  dark?: string;
  darkest?: string;
  contrastText?: string;
}

const withAlphas = (color: Colors) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  };
};

export const neutral = {
  50: '#F8F9FA',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D2D6DB',
  400: '#9DA4AE',
  500: '#6C737F',
  600: '#4D5761',
  700: '#2F3746',
  800: '#1C2536',
  900: '#111927',
};

export const primary = withAlphas({
  lightest: '#9294e2',
  light: '#7d80dc',
  main: '#5c60d3',
  dark: '#414496',
  darkest: '#333574',
  contrastText: '#FFFFFF',
});

export const secondary = withAlphas({
  lightest: '#e7e8e9',
  light: '#b5b8bc',
  main: '#414752',
  dark: '#2D3139',
  darkest: '#22252B',
  contrastText: '#FFFFFF',
});

export const success = withAlphas({
  lightest: '#E8F8E6',
  light: '#D1F1CC',
  main: '#1AB800',
  dark: '#106e00',
  darkest: '#052500',
  contrastText: '#FFFFFF',
});

export const info = withAlphas({
  lightest: '#D7E7FF',
  light: '#AFCFFF',
  main: '#3686FF',
  dark: '#004AB9',
  darkest: '#00317C',
  contrastText: '#FFFFFF',
});

export const warning = withAlphas({
  lightest: '#ffedeb',
  light: '#ffd7af',
  main: '#ff9a36',
  dark: '#b33524',
  darkest: '#6a1f15',
  contrastText: '#FFFFFF',
});

export const error = withAlphas({
  lightest: '#ffedeb',
  light: '#fec7bf',
  main: '#fc4a32',
  dark: '#b33524',
  darkest: '#6a1f15',
  contrastText: '#FFFFFF',
});
