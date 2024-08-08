import axios from "axios";
import UtilityService from "./utilit.service";
import { BuildingAreas, ProjectDetail } from "../interfaces/project.interface";
import { projectType, projectResidentType, projectScope, projectColorScheme, projectStatus } from "../enums/project.enum";
import { UserSignUpData } from "../components/Login/signUp.component";
import { LoginData } from "../components/Login/loginComponent";

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
    static getAllProductCustomizationPrice(ids: number[]) {
        return axios.get(`${UtilityService.getBaseUrl()}api/users/products/price?ids=${ids.join(',')}`)
    }
    static deleteProject(id: number) {
        return axios.delete(`${UtilityService.getBaseUrl()}api/users/projects/${id}`)
    }
    static createProject(project: {
        name: string;
        address: string;
        type: projectType;
        residenceType: projectResidentType;
        scope: projectScope;
        colourScheme: projectColorScheme;
        requirementsMeta:  Array<BuildingAreas>;
        deliveryStatus: projectStatus;
        creationStepsCompleted: number;
        
      }) {
        return axios.post(`${UtilityService.getBaseUrl()}api/users/projects`, project)
    }
    static updateProject(id: number, project: {
        name: string;
        address: string;
        type: projectType;
        residenceType: projectResidentType;
        scope: projectScope;
        colourScheme: projectColorScheme;
        requirementsMeta:  Array<BuildingAreas>;
        deliveryStatus: projectStatus;
        creationStepsCompleted: number;
        
      }) {
        console.log('update');
        
        return axios.patch(`${UtilityService.getBaseUrl()}api/users/projects/${id}`, project)
    }
    static createUser(data: UserSignUpData) {
        return axios.post(`${UtilityService.getBaseUrl()}api/users/register`, data)
    }
    static loginUser(data: LoginData) {
        return axios.post(`${UtilityService.getBaseUrl()}api/users/login`, data)
    }
    static autoRecommendProduct() {
        return axios.get(`${UtilityService.getBaseUrl()}api/admin/room`)
    }
} 
export default ProjectService;