import { projectColorScheme, projectResidentType, projectScope, projectStatus, projectType } from "../enums/project.enum";

export interface ProjectBasicDetail {
    id?: number;
    name: string;
    address: string;
    projectType: projectType;
    projectResidentType: projectResidentType;
    projectScope: projectScope;
    projectColorScheme: projectColorScheme;
    projectStatus?: projectStatus;

}

export interface ProjectDetail extends ProjectBasicDetail {
    buildingAreas: Array<BuildingAreas>

}
export interface BuildingAreas { name: string, areas: ProjectAreas[], id?: number }

export interface ProjectAreas {
    id?: number;
    name: string;
    internalName?: string;
    description?: string;
    isSelected?: boolean;
    floors: ProjectAreaFloors[];
}

export interface ProjectAreaFloors {
    id?: number;
    name: string;
    isSelected?: boolean;
    floorRooms: ProjectFloorRooms[];
}
export interface ProjectFloorRooms {
    id?: number;
    name: string;
    functions: ProjectFloorFunction[];
    isSelected?: boolean;
}
export interface ProjectFloorFunction {
    name: string;
    count: number;
    id: number;
    systemDetails: ProjectAreaSystemDetails

}


// need to update this for last step
export interface ProjectAreaSystemDetails {
    [key: string]: string | boolean
}
export interface DefaultProduct {
    name: string;
    minPrice: number;
    maxPrice: number;
    id: number;
  }
export interface RoomFunctions {
    categoryName: string;
    products: Array<DefaultProduct>;
  }