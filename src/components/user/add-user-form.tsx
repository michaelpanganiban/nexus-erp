'use client'

import { Autocomplete, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const AddUserForm = () => {

    //@TODO: change with actual data from database
    const roles = [
        {    
            'roldId': 1,
            'label': 'Admin'
        },
        {    
            'roldId': 2,
            'label': 'Staff'
        },
        {    
            'roldId': 3,
            'label': 'Cashier'
        },
    ]

    return (
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
            <Stack 
                sx={{
                    flexDirection: {
                        sm: 'column',
                        md: 'row'
                    }
                }}
            >
                <TextField
                    label="Date Joined"
                    id="date-joined"
                    defaultValue="Jan 1, 2024"
                    size="small"
                    required
                    helperText="Cannot be edited"
                    disabled />
                <Autocomplete
                    disablePortal
                    size='small'
                    options={roles}
                    renderInput={(params) => <TextField {...params} label="Position" helperText="Please select a role"/>}
                    
                />
                <Stack></Stack>
            </Stack>
            <Stack 
                margin={1}
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
                    defaultValue=""
                    size="small"
                    required
                    helperText="Please enter your first name" />
                <TextField
                    label="Last Name"
                    id="last-name"
                    defaultValue=""
                    size="small"
                    required
                    helperText="Please enter your last name" />
                <TextField
                    label="Middle Name"
                    id="middle-name"
                    defaultValue=""
                    size="small"
                    helperText="Please enter your middle name." />
            </Stack>
            <Stack 
                margin={1}
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
                                sx: {
                                    width: {
                                        xs: '100% !important',
                                        md: '28% !important',  
                                    }
                                },
                            },
                        }}
                    />
                </LocalizationProvider>
                <FormControl sx={{paddingLeft: '4%'}}>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </Stack>
        </Box>
    );
}