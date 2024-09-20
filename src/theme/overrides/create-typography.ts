import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export function createTypography(): TypographyOptions {
  return {
    fontFamily: roboto.style.fontFamily,
    fontSize: 12,
  };
}
