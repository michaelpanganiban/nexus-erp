'use client'

import { Save, Replay, AccountCircle } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Button, Divider, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';

export const GeneralProfile = () => (
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
                <AccountCircle fontSize="large" color='primary'/>
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
                    General Information
                </Typography>
            </Stack>
            <Stack margin={2}>
                <TextField
                    label="Employee ID"
                    id="employee-id"
                    defaultValue="EMP10325"
                    size="small"
                    required
                    helperText="Cannot be edited"
                    disabled />
                <TextField
                    label="Date Joined"
                    id="date-joined"
                    defaultValue="Jan 1, 2024"
                    size="small"
                    required
                    helperText="Cannot be edited"
                    disabled />
            </Stack>
            <Stack 
                spacing={2} 
                margin={2}
                sx={{
                    flexDirection: {
                        sm: 'column',
                        md: 'row'
                    }
                }}
            >
                <TextField
                    label="First Name"
                    id="first-name"
                    defaultValue="Small"
                    size="small"
                    required
                    helperText="Please enter your first name" />
                <TextField
                    label="Last Name"
                    id="last-name"
                    defaultValue="Small"
                    size="small"
                    required
                    helperText="Please enter your last name" />
            </Stack>
            <Stack 
                spacing={2} 
                margin={2}
                sx={{
                    flexDirection: {
                        sm: 'column',
                        md: 'row'
                    }
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Birthdate"
                        slotProps={{
                            textField: {
                                helperText: 'Please enter your birthdate',
                                size: 'small',
                            },
                        }} />
                </LocalizationProvider>
                <FormControl sx={{paddingLeft: '2%'}}>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel checked value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
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