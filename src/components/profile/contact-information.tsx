'use client'

import { Save, Replay, ContactPhone } from '@mui/icons-material';
import { Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material';

export const ContactInformation = () => (
    <Paper elevation={6} sx={{ p: 2, width: '120%' }}>
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { 
                    m: 2, 
                    width: {
                        xs: '100%',
                        sm: '90%',
                        md: '45ch'
                    } 
                } 
            }}
            autoComplete="off"
        >
            <Stack spacing={1} direction='row' margin={2}>
                <ContactPhone fontSize="large" color='primary' />
                <Typography 
                    sx={{
                        color: 'secondary.main',
                        fontSize: {
                            xs: '.8rem',
                            sm: '1rem',
                            md: '1.5rem'
                        }
                    }}
                >
                    Contact Information
                </Typography>
            </Stack>
            <Stack 
                margin={2} 
                sx={{
                    flexDirection: {
                        sm: 'column',
                        md: 'row'
                    }
                }}
            >
                <TextField
                    label="Mobile Number"
                    id="mobile-number"
                    defaultValue="09171184121"
                    size="small"
                    required
                    helperText="Please enter your mobile number"
                />
                <TextField
                    label="Email Address"
                    id="email-address"
                    defaultValue="johnmichaelpanganiban@nexus.com"
                    size="small"
                    required
                    helperText="Please enter your email address"
                />
            </Stack>
            <Divider sx={{ mt: 2 }} />
            <Stack sx={{
                    display: 'flex',
                    justifyContent: 'flex-end', // Align button to the right
                    marginTop: '16px', // Same as the mt: 1
                }}
                spacing={2}
                direction='row'
            >
                <Button type='reset' variant="outlined" startIcon={<Replay />} color='secondary'>
                    Reset
                </Button>
                <Button variant="outlined" startIcon={<Save />}>
                    Save
                </Button>
            </Stack>
        </Box>
    </Paper>
)