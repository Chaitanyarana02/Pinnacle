import axios from "axios";
import UtilityService from "./utilit.service";
import { BuildingAreas } from "../interfaces/project.interface";
import { projectType, projectResidentType, projectScope, projectColorScheme, ProjectStatus } from "../enums/project.enum";
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
        deliveryStatus: ProjectStatus;
        creationStepsCompleted: number;
        
      }) {
        return axios.post(`${UtilityService.getBaseUrl()}api/users/projects`, project)
    }

    
    static sanitizeData = (data: BuildingAreas[]): BuildingAreas[] => {
        return data
          .map(areaDetails => ({
            ...areaDetails,
            areas: areaDetails.areas
              .map(areaSpaceDetails => ({
                ...areaSpaceDetails,
                floors: areaSpaceDetails.floors
                  .map(floorDetails => ({
                    ...floorDetails,
                    floorRooms: floorDetails.floorRooms.filter(roomDetails => roomDetails.isSelected),
                  }))
                  .filter(floorDetails => floorDetails.isSelected && floorDetails.floorRooms.length > 0),
              }))
              .filter(areaSpaceDetails => areaSpaceDetails.isSelected && areaSpaceDetails.floors.length > 0),
          }))
          .filter(areaDetails => areaDetails.areas.length > 0);
      };
      
      static updateProject(
        id: number,
        project: {
          name: string;
          address: string;
          type: projectType;
          residenceType: projectResidentType;
          scope: projectScope;
          colourScheme: projectColorScheme;
          requirementsMeta: BuildingAreas[];
          deliveryStatus: ProjectStatus;
          creationStepsCompleted: number;
          deliveryAddress?: unknown;
        }
      ) {        
        const sanitizedRequirementsMeta = this.sanitizeData(project.requirementsMeta);
      
        return axios.patch(`${UtilityService.getBaseUrl()}api/users/projects/${id}`, {
          ...project,
          requirementsMeta: sanitizedRequirementsMeta,
        });
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
    static sendForgotPassWord(email: string) {
        const data = {
            email,
            otpFor: 'FORGOT PASSWORD'
        }
        return axios.post(`${UtilityService.getBaseUrl()}api/users/send-otp`, data)
    }
} 
export default ProjectService;