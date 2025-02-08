import { LockReset, Replay, Save } from '@mui/icons-material';
import { Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material';

export const ChangePassword = () => {
    return (
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
                    <LockReset fontSize="large" color='primary'/>
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
                        Change Password
                    </Typography>
                </Stack>
                <Stack margin={2}>
                    <TextField
                        label="Password"
                        id="current-password"
                        size="small"
                        required
                        type="password"
                        helperText="Please enter your password"
                    />
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
                        label="New Password"
                        id="new-password"
                        size="small"
                        type="password"
                        required
                        helperText="Please enter your new password"
                    />
                    <TextField
                        label="Confirm Password"
                        id="confirm-password"
                        size="small"
                        type="password"
                        required
                        helperText="Please confirm your new passwaord"
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
    );
}