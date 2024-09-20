import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import ThemeRegistry from '../theme/Themeregistry';
import React from 'react';
import ClientProvider from '@/components/ClientProvider';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ERP',
  description: 'The new ERP',
};

export default async function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ClientProvider>
        <ThemeRegistry>
          <body className={roboto.className}>{children}</body>
        </ThemeRegistry>
      </ClientProvider>
    </html>
  );
}
