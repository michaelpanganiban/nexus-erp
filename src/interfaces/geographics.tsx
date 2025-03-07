
export interface RegionInterface {
  code: string,
  name: string,
  regionName: string,
  islandGroupCode: string
}

export interface ProvinceInterface {
  code: string,
  name: string,
  regionCode: string,
  islandGroupCode: string
}

export interface CityInterface {
  code: string,
  name: string,
  oldName: string,
  isCapital: boolean,
  districtCode: string,
  provinceCode: string,
  regionCode: string,
  islandGroupCode: string
}

export interface MunicipalityInterface {
  code: string,
  name: string,
  oldName: string,
  isCapital: boolean,
  districtCode: string,
  provinceCode: string,
  regionCode: string,
  islandGroupCode: string
}


export interface BarangayInterface {
  code: string,
  name: string,
  oldName: string,
  subMunicipalityCode: string,
  cityCode: string,
  municipalityCode: string,
  districtCode: string,
  provinceCode: string,
  regionCode: string,
  islandGroupCode: string
}
export interface GeographicsState {
    regions: RegionInterface[] | null;
    provinces: ProvinceInterface[] | null;
    cities: CityInterface[] | null;
    municipalities: MunicipalityInterface[] | null;
    barangays: BarangayInterface[] | null;
    loading: boolean;
    error: string | null;
}