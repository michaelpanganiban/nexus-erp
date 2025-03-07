import { getCitiesByProvinceCodeService, getMunicipalitiesByProvinceCodeService, getProvincesByRegionCodeService, getRegionListService } from '@/store/actions/services/georgraphicServices';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BarangayInterface, CityInterface, GeographicsState, MunicipalityInterface, ProvinceInterface, RegionInterface } from '@/interfaces/geographics';
import { getBarangayByMunicipalityCodeAPI } from '@/store/actions/api/geographicsAPI';

//fetch region data
export const fetchRegions = createAsyncThunk(
    'geographics/region',
    (_, { rejectWithValue }) => {
      try {
        const regionData = getRegionListService();
        return regionData;
      } catch (error) {
        return rejectWithValue((error as Error).message || 'An unknown error occurred');
      }
    }
);

// fetch provinces by regionCode
export const fetchProvincesByRegionCode = createAsyncThunk(
    'geographics/provinces',
    (regionCode: string | null, { rejectWithValue }) => {
      try {
        const provincesData = getProvincesByRegionCodeService(regionCode);
        return provincesData;
      } catch (error) {
        return rejectWithValue((error as Error).message || 'An unknown error occurred');
      }
    }
);

// fetch cities by provinceCode
export const fetchCitiesByProvinceCode = createAsyncThunk(
  'geographics/cities',
  (provinceCode: string | null, { rejectWithValue }) => {
    try {
      const cityData = getCitiesByProvinceCodeService(provinceCode);
      return cityData;
    } catch (error) {
      return rejectWithValue((error as Error).message || 'An unknown error occurred');
    }
  }
);

// fetch municipalities by provinceCode
export const fetchMunicipalitiesByProvinceCode = createAsyncThunk(
  'geographics/municipalities',
  (provinceCode: string | null, { rejectWithValue }) => {
    try {
      const municipalityData = getMunicipalitiesByProvinceCodeService(provinceCode);
      return municipalityData;
    } catch (error) {
      return rejectWithValue((error as Error).message || 'An unknown error occurred');
    }
  }
);

// fetch barangays by municipality code
export const fetchBarangaysByMunicipalityCode = createAsyncThunk(
  'geographics/barangays',
  (municipalityCode: string | null, { rejectWithValue }) => {
    try {
      const barangayData = getBarangayByMunicipalityCodeAPI(municipalityCode);
      return barangayData;
    } catch (error) {
      return rejectWithValue((error as Error).message || 'An unknown error occurred');
    }
  }
);


const initialState: GeographicsState = {
    regions: null,
    provinces: null,
    cities: null,
    municipalities: null,
    barangays: null,
    loading: false,
    error: null,
};
export const geographicSlice = createSlice({
    name: 'geographics',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // regions
        builder
        .addCase(fetchRegions.pending, (state) => {
            state.loading = true;
            state.error = null; // Reset error when request starts
        })
        .addCase(fetchRegions.fulfilled, (state, action) => {
            state.loading = false;
            state.regions = action.payload as RegionInterface[] | null; // Store fetched data
        })
        .addCase(fetchRegions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string; // Store error message if failed
        });

        // provinces
        builder
        .addCase(fetchProvincesByRegionCode.pending, (state) => {
            state.loading = true;
            state.error = null; // Reset error when request starts
        })
        .addCase(fetchProvincesByRegionCode.fulfilled, (state, action) => {
            state.loading = false;
            state.provinces = action.payload as ProvinceInterface[] | null; // Store fetched data
        })
        .addCase(fetchProvincesByRegionCode.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string; // Store error message if failed
        });

        // cities
        builder
        .addCase(fetchCitiesByProvinceCode.pending, (state) => {
            state.loading = true;
            state.error = null; // Reset error when request starts
        })
        .addCase(fetchCitiesByProvinceCode.fulfilled, (state, action) => {
            state.loading = false;
            state.cities = action.payload as CityInterface[] | null; // Store fetched data
        })
        .addCase(fetchCitiesByProvinceCode.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string; // Store error message if failed
        });

        // municipalities
        builder
        .addCase(fetchMunicipalitiesByProvinceCode.pending, (state) => {
            state.loading = true;
            state.error = null; // Reset error when request starts
        })
        .addCase(fetchMunicipalitiesByProvinceCode.fulfilled, (state, action) => {
            state.loading = false;
            state.municipalities = action.payload as MunicipalityInterface[] | null; // Store fetched data
        })
        .addCase(fetchMunicipalitiesByProvinceCode.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string; // Store error message if failed
        });

        // barangays
        builder
        .addCase(fetchBarangaysByMunicipalityCode.pending, (state) => {
            state.loading = true;
            state.error = null; // Reset error when request starts
        })
        .addCase(fetchBarangaysByMunicipalityCode.fulfilled, (state, action) => {
            state.loading = false;
            state.barangays = action.payload as BarangayInterface[] | null; // Store fetched data
        })
        .addCase(fetchBarangaysByMunicipalityCode.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string; // Store error message if failed
        });
    },
});

export default geographicSlice.reducer;
