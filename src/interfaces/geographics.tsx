export interface GeographicsState {
    regions: Array<Object> | null;
    provinces: Array<Object> | null;
    cities: Array<Object> | null;
    municipalities: Array<Object> | null;
    barangays: Array<Object> | null;
    loading: boolean;
    error: string | null;
  }