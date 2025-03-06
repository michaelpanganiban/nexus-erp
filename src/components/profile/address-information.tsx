'use client'

import { fetchBarangaysByMunicipalityCode, fetchCitiesByProvinceCode, fetchMunicipalitiesByProvinceCode, fetchProvincesByRegionCode, fetchRegions } from '@/store/features/geographic/geographicSlice';
import { AppDispatch, RootState } from '@/store/store';
import { Save, Replay, Home } from '@mui/icons-material';
import { Alert, Autocomplete, Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NexusLoader } from '../common/nexusLoader';

export const AddressInformation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedCountry =  'Philippines';
  const { regions, provinces, cities, municipalities, barangays, loading, error } = useSelector((state: RootState) => state.geographics);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedMunicipality, setselectedMunicipality] = useState(null);
  const [selectedBarangay, setSelectedBarangay] = useState(null);
  const [zone, setZone] = useState<string | null>(null);
  const [houseNumber, setHouseNumber] = useState<string | null>(null);
  
  // handle region change
  const handleRegionChange = async (event: any, value: any) => {
    setSelectedRegion(value.code);
    await dispatch(fetchProvincesByRegionCode(value ? value.code : null));
  };

  // handle province change
  const handleProvinceChange = async (event: any, value: any) => {
    setSelectedProvince(value.code);
    await dispatch(fetchCitiesByProvinceCode(value.code));
    await dispatch(fetchMunicipalitiesByProvinceCode(value.code));
  }

  // handle city change
  const handleCityChange = async (event: any, value: any) => {
    setSelectedCity(value.code); 
  }

  // handle municipality change
  const handleMunicipalityChange = async (event: any, value: any) => {
    setselectedMunicipality(value.code);
    await dispatch(fetchBarangaysByMunicipalityCode(value.code));
  }

  // handle barangay change
  const handleBarangayChange = (event: any, value: any) => {
    setSelectedBarangay(value.code);
  }

  // render region list on page load
  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);


  return (
    <Paper elevation={6} sx={{ p: 2, width: '120%' }}>
        {error && <Alert severity="error">Unexpected error occured. Try reloading the page.</Alert> }
        { loading && <NexusLoader message='Loading, please wait...'/>}
        {
          !loading && 
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
                  <Home fontSize="large" color='primary' />
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
                      Address Information
                  </Typography>
              </Stack>
              <Stack margin={2}>
                <TextField
                    label="Country"
                    id="country"
                    size="small"
                    defaultValue={selectedCountry}
                    disabled
                    helperText="Please enter your country"
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
                <Autocomplete
                    id="region"
                    freeSolo
                    options={regions ?? []}
                    getOptionLabel={(option) => typeof option === 'object' ? option.name : option}
                    value={regions?.find(option => option.code === selectedRegion) || null}
                    onChange={handleRegionChange}
                    renderInput={(params) => <TextField {...params} label="Region" helperText="Please enter your region" />}
                    size='small'
                />
                <Autocomplete
                    id="province"
                    freeSolo
                    options={provinces ?? []}
                    getOptionLabel={(option) => option.name}
                    value={provinces?.find(option => option.code === selectedProvince) || null}
                    onChange={handleProvinceChange}
                    renderInput={(params) => <TextField {...params} label="Province" helperText="Please enter your province" />}
                    size='small'
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
              <Autocomplete
                    id="city"
                    freeSolo
                    options={cities ?? []}
                    getOptionLabel={(option) => option.name}
                    value={cities?.find(option => option.code === selectedCity) || null}
                    onChange={handleCityChange}
                    renderInput={(params) => <TextField {...params} label="City" helperText="Please enter your city" />}
                    size='small'
                />
                <Autocomplete
                    id="municipality"
                    freeSolo
                    options={municipalities ?? []}
                    getOptionLabel={(option) => option.name}
                    value={municipalities?.find(option => option.code === selectedMunicipality) || null}
                    onChange={handleMunicipalityChange}
                    renderInput={(params) => <TextField {...params} label="Municipality" helperText="Please enter your municipality" />}
                    size='small'
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
                <Autocomplete
                    id="barangay"
                    freeSolo
                    options={barangays ?? []}
                    getOptionLabel={(option) => option.name}
                    value={barangays?.find(option => option.code === selectedBarangay) || null}
                    onChange={handleBarangayChange}
                    renderInput={(params) => <TextField {...params} label="Barangay" helperText="Please enter your barangay" />}
                    size='small'
                />
                <TextField
                  label="Zone"
                  id="zone"
                  size="small"
                  onChange={(e) => setZone(e.target.value)}
                  helperText="Please enter your zone"
                />
                <TextField
                  label="House Number"
                  id="house-number"
                  size="small"
                  onChange={(e) => setHouseNumber(e.target.value)}
                  helperText="Please enter your house number"
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
        }
      </Paper>
  );
}