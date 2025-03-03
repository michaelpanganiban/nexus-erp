import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import ThemeRegistry from '../theme/Themeregistry';
import React from 'react';
import ClientProvider from '@/components/ClientProvider';
import SessionWrapper from '@/components/SessionWrapper';
import {NavDrawer} from '@/components/common/nav/nav-drawer';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NexusModal } from '@/components/common/modal/page';
import { NexusDialog } from '@/components/common/modal/nexus-dialog';

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
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <SessionWrapper>
        <ClientProvider>
          <ThemeRegistry>
            <body className={roboto.className}>
            {
              session ? (
                <div>
                  <NavDrawer>{children}</NavDrawer>
                  <NexusModal />
                  <NexusDialog />
                </div>
              ) : (
                children
              )
            }
            </body>
          </ThemeRegistry>
        </ClientProvider>
      </SessionWrapper>
    </html>
  );
}


