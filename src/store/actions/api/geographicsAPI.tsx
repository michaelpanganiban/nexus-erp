import { GeographicAPI } from '@/enums/geographics';

/**
 * fetch regions from open source API
 * @return {object} - list of regions
 */
export const getRegionListAPI = async () => {
    const regionUrl = GeographicAPI.region;
    try {
        const regions = await fetch(regionUrl);
        const result = await regions.json();
        return result;
    } catch (error) {
        return error;
    }
}

/**
 * fetch provinces of selected region
 * @return {object} - list of provinces
 * @param {string} - regionCode
 */

export const getProvincesByRegionCodeAPI = async (regionCode: string | null) => {
    const provinceUrl = `${GeographicAPI.region}/${regionCode}/provinces/`;
    try {
        const provinces = await fetch(provinceUrl);
        return await provinces.json();
    } catch (error) {
        return error;
    }
}

/**
 * fetch cities of selected city
 * @return {object} - list of cities
 * @param {string} - provinceCode
 */

export const getCitiesByProvinceCodeAPI = async (provinceCode: string | null) => {
    const cityUrl = `${GeographicAPI.province}/${provinceCode}/cities/`;
    try {
        const cities = await fetch(cityUrl);
        return await cities.json();
    } catch (error) {
        return error;
    }
}

/**
 * fetch municipalities of selected province
 * @return {object} - list of municipalities 
 * @param {string} - provinceCode
 */

export const getMunicipalitiesByProvinceCodeAPI = async (provinceCode: string | null) => {
    const municipalityUrl = `${GeographicAPI.province}/${provinceCode}/municipalities/`;
    try {
        const municipalities = await fetch(municipalityUrl);
        return await municipalities.json();
    } catch (error) {
        return error;
    }
}

/**
 * fetch barangay of selected municipality
 * @return {object} - list of barangays 
 * @param {string} - municipalityCode
 */

export const getBarangayByMunicipalityCodeAPI = async (municipalityCode: string | null) => {
    const barangayUrl = `${GeographicAPI.municipality}/${municipalityCode}/barangays/`;
    try {
        const barangays = await fetch(barangayUrl);
        return await barangays.json();
    } catch (error) {
        return error;
    }
}