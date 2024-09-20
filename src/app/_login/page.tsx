'use client'

import { backgroundDefault, backgroundSecondary, primaryContrast, primaryDark, errorDark } from '@/theme/overrides';
import { Box, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LoadingButton from '@mui/lab/LoadingButton';
import Image from 'next/image';
import logo from '@/assets/logo.webp';
import { LockOpen, Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { increment } from '@/store/features/user/userSlice';
import { redirect, useParams, useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

interface SnackbarState {
    open: boolean;
    vertical: 'top' | 'bottom';      // Restrict to the allowed values
    horizontal: 'left' | 'center' | 'right'; // Restrict to the allowed values
    message: string;
    transition: string;
    severity: string;
}

export const Login = () => {
    // if (Array.isArray(callbackUrl)) {
    //     // Join array elements to form a single string or just take the first one
    //     callbackUrl = callbackUrl.join('') || '/dashboard';
    // }
    // // useAppSelector allows you to get the available state in redux store
    // const count = useAppSelector((state) => state.user.value);

    // // useAppDispatch allows you to dispatch Redux actions to update the state.
    // const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [snackbarState, setSnackbarState] = useState<SnackbarState>({
        open: false,
        vertical: 'top',
        horizontal: 'right',
        message: '',
        transition: '',
        severity: ''
    });
    const {vertical, horizontal, open, message, severity} = snackbarState;
    const handleClick = async (e:any) => {
        e.preventDefault()
        setLoading(true);

        if (username.length === 0 || password.length === 0) {
            setSnackbarState({
                ...snackbarState,
                open: true,
                message: 'Username and Password are required.',
                severity: errorDark
            });
            setLoading(false);
            return;
        }
        const res = await signIn('credentials', {
                username,
                password,
            }
        );
        if (res?.error) {
            setSnackbarState({
                ...snackbarState,
                open: true,
                message: 'Invalid username or password',
                severity: errorDark
            });
            setLoading(false);
        }
    // dispatch(increment());
    }

    const handleCloseSnackbar = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
      ) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackbarState({
            ...snackbarState,
            open: false
        });
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Container disableGutters maxWidth={false}
        sx={{ padding: 0, margin: 0, width: '100vw', maxWidth: '100vw' }}>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                message={message}
                key={vertical + horizontal}
                TransitionComponent={Slide}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                sx={{
                    '& .MuiSnackbarContent-root': {
                      backgroundColor: severity, // Custom background color
                      color: 'white', // Custom text color
                    },
                }}
            />
            <Grid container columns={2} spacing={0} sx={{ height: '100vh', width: '100%'}}>
                <Grid
                    xs={2}
                    md={1}
                    item
                    sx={{
                        backgroundColor: backgroundSecondary,
                        margin: 0, paddingLeft: 0, height: '100%'
                    }}
                >
                    <Box
                        sx={{
                            textAlign: 'center',
                            marginTop: 25,
                        }}
                    >
                        <Typography
                            fontWeight='bold'
                            sx={{
                                color: primaryDark,
                                fontSize: {
                                    xs: '1rem',
                                    md: '2rem'
                                }
                            }}
                        >
                            COMPANY NAME
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            textAlign: 'center',
                            marginTop: 1,
                        }}
                    >
                        <Image 
                            src={logo} 
                            alt="Logo" 
                            style={{ 
                                width: '80%', 
                                height: 'auto' 
                            }} 
                        />
                    </Box>
                </Grid>
                <Grid 
                    xs={2}
                    md={1} 
                    item
                    sx={{
                        background: backgroundDefault,
                        height: '100%',
                    }}
                >
                    <Box
                        sx={{
                            marginTop: 25,
                            textAlign: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                                marginBottom: 5,
                            }}
                        >
                            <Typography
                                fontWeight='bold'
                                sx={{
                                    color: primaryDark,
                                    fontSize: {
                                        xs: '1rem',
                                        md: '2rem'
                                    }
                                }}
                            >
                                ERP Nexus
                            </Typography>
                        </Box>
                        <FormControl sx={{ 
                                m: 2, 
                                width: {
                                    xs: '40ch', 
                                    md: '50ch'
                                } 
                            }} 
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-Username" >Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-Username"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle Username visibility"
                                        edge="end"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormControl>
                        <FormControl sx={{ 
                                m: 2, 
                                width: {
                                    xs: '40ch', 
                                    md: '50ch'
                                } 
                            }} 
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-Username" >Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-Password"
                                type={showPassword ? 'text' : 'Password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle Password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <FormControl sx={{ 
                                m: 2, 
                                width: {
                                    xs: '40ch', 
                                    md: '50ch'
                                } 
                            }} 
                            variant="outlined"
                        >
                            <LoadingButton
                                size="large"
                                onClick={handleClick}
                                loading={loading}
                                loadingPosition="end"
                                endIcon={<LockOpen sx={{
                                    color: primaryContrast
                                }} />}
                                variant="contained"
                                sx={{
                                    color: primaryDark,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: primaryContrast
                                    }}
                                >
                                    Sign in
                                </Typography>
                            </LoadingButton>
                        </FormControl>
                        <FormControl sx={{ m: 2, width: '50ch' }} variant="outlined" >
                            <Link
                                href="#"
                                sx={{
                                    cursor: 'pointer'
                                }}
                            >Forgot Password?</Link>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}