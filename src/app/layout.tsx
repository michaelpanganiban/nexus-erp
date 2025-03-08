'use client'

import { Roboto } from 'next/font/google';
import ThemeRegistry from '../theme/Themeregistry';
import React from 'react';
import ClientProvider from '@/components/ClientProvider';
import SessionWrapper from '@/components/SessionWrapper';
import { SessionProvider } from 'next-auth/react';
import SessionWrapperComponent from '@/components/common/sessionWrapper';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <SessionProvider>
        <SessionWrapper>
          <ClientProvider>
            <ThemeRegistry>
              <body className={roboto.className}>
                <SessionWrapperComponent>
                  {children}
                </SessionWrapperComponent>
              </body>
            </ThemeRegistry>
          </ClientProvider>
        </SessionWrapper>
      </SessionProvider>
    </html>
  );
}


