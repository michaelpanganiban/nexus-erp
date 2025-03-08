'use client'

import React from 'react';
import { useSession } from 'next-auth/react';
import { NexusLoader } from '@/components/common/nexusLoader';
import { NavDrawer } from '@/components/common/nav/nav-drawer';
import { NexusModal } from '@/components/common/modal/page';
import { NexusDialog } from '@/components/common/modal/nexusDialog';
import { Box } from '@mui/material';

const SessionWrapperComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Box sx={{ 
                mt: 10, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh' 
            }}>
                <NexusLoader message={'Please wait..'} />
            </Box>
  }

  return (
    <>
      {session ? (
        <div>
          <NavDrawer>{children}</NavDrawer>
          <NexusModal />
          <NexusDialog />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default SessionWrapperComponent;
