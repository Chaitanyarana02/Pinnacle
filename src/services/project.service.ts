import axios from "axios";
import UtilityService from "./utilit.service";

class ProjectService {
    
    static getProjectList() { // they can get userId from token
        return axios.get(`${UtilityService.getBaseUrl()}api/users/projects`)
    }
    static getProjectDetail(projectId: string) {
        return axios.get(`${UtilityService.getBaseUrl()}getProjectDetail/${projectId}`)
    }
    static getBuildingAreas() {
        return axios.get(`${UtilityService.getBaseUrl()}api/admin/building-area`)
    }
    static getAreaSpaces() { 
        return axios.get(`${UtilityService.getBaseUrl()}api/admin/area-space`)
    }
    static getFloors() {
        return axios.get(`${UtilityService.getBaseUrl()}api/admin/floor`)
    }
    static getFloorRooms() {
        return axios.get(`${UtilityService.getBaseUrl()}api/admin/room`)
    }
    static getProductsCategoryWise() {
        return axios.get(`${UtilityService.getBaseUrl()}api/users/category/products`)
    }
    static getProductsByCategoryOptions(ids: number[]) {
        return axios.get(`${UtilityService.getBaseUrl()}api/users/products/customization-options?productIds=${ids.join(',')}`)
    }
    static getAllProductCustomizationPrice() {
        return axios.get(`${UtilityService.getBaseUrl()}api/users/products/price`)
    }
} 
export default ProjectService;