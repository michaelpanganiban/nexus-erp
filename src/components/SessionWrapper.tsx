// src/components/SessionWrapper.tsx
'use client'; // This is a client component

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface SessionWrapperProps {
    children: ReactNode; // Explicitly define the type for children
  }

const SessionWrapper = ({ children }: SessionWrapperProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
