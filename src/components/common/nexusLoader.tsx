'use client'

import { NexusLoaderProps } from '@/interfaces/common'
import { CircularProgress, Stack, Typography } from '@mui/material'
import React from 'react'

export const NexusLoader: React.FC<NexusLoaderProps> = ({message}) =>{
    return (
        <Stack
            sx={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center', // Center horizontally
                height: '100%', // Make sure the Stack takes up full height of the Paper
            }}
        >
            <CircularProgress size="3rem" />
            <Typography variant="body1" sx={{ mt: 2 }}>
                {message}
            </Typography>
        </Stack>
    )
}