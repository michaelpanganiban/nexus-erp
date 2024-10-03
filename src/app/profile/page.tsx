'use client'

import { ProfileNavigation } from '@/components/profile/profile-navigation';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';

export default function Profile () {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <ProfileNavigation 
                        selectedIndex = {selectedIndex}
                        setSelectedIndex = {setSelectedIndex}
                    />
                </Grid>
                <Grid size={7}>
                </Grid>
            </Grid>
        </Box>
    );
}