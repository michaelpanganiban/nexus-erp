
import { getBarangayByMunicipalityCodeAPI, getCitiesByProvinceCodeAPI, getMunicipalitiesByProvinceCodeAPI, getProvincesByRegionCodeAPI, getRegionListAPI } from '../api/geographicsAPI';
/**
 * get list of regions
 */
export const getRegionListService = async () => {
    const regions = await getRegionListAPI();
    return regions;   
}

/**
 * get list of provinces by region code
 * @param {string} - regionCode
 * @return {ArrayObject} - list of provinces within the region
 */

export const getProvincesByRegionCodeService = async (regionCode: string | null) => {
    const provinces = await getProvincesByRegionCodeAPI(regionCode);
    return provinces;
}

/**
 * get list of cities by province code
 * @param {string} - provinceCode
 * @return {ArrayObject} - list of cities within the province
 */

export const getCitiesByProvinceCodeService = async (provinceCode: string | null) => {
    const cities = await getCitiesByProvinceCodeAPI(provinceCode);
    return cities;
}

/**
 * get list of municipalities by province code
 * @param {string} - provinceCode
 * @return {ArrayObject} - list of municipalities within the province
 */

export const getMunicipalitiesByProvinceCodeService = async (provinceCode: string | null) => {
    const cities = await getMunicipalitiesByProvinceCodeAPI(provinceCode);
    return cities;
}

/**
 * get list of barangays by municipalityCode
 * @param {string} - municipalityCode
 * @return {ArrayObject} - list of barangay within the municipality
 */

export const getBarangayByMunicipalityCodeService = async (municipalityCode: string | null) => {
    const barangays = await getBarangayByMunicipalityCodeAPI(municipalityCode);
    return barangays;
}