'use client'

import { AddressInformation } from '@/components/profile/address-information';
import { ChangePassword } from '@/components/profile/change-password';
import { ContactInformation } from '@/components/profile/contact-information';
import { GeneralProfile } from '@/components/profile/general-profile';
import { ProfileNavigation } from '@/components/profile/profile-navigation';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';

export default function Profile () {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
    const [component, setComponent] = useState<string>('general');

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <ProfileNavigation 
                        selectedIndex = {selectedIndex}
                        setSelectedIndex = {setSelectedIndex}
                        setComponent = {setComponent}
                    />
                </Grid>
                <Grid size={7}>
                    {component === 'general' ? <GeneralProfile /> : ''}
                    {component === 'contact-information' ? <ContactInformation /> : ''}
                    {component === 'address' ? <AddressInformation /> : ''}
                    {component === 'change-password' ? <ChangePassword /> : ''}
                </Grid>
            </Grid>
        </Box>
    );
}