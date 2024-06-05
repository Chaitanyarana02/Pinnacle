import { projectColorScheme, projectResidentType, projectScope, projectStatus, projectType } from "../enums/project.enum";

export interface ProjectBasicDetail {
    id?: string;
    name: string;
    address: string;
    projectType: projectType;
    projectResidentType: projectResidentType;
    projectScope: projectScope;
    projectColorScheme: projectColorScheme;
    projectStatus?: projectStatus;

}

export interface ProjectDetail extends ProjectBasicDetail {
    buildingAreas : {
        indoorArea: ProjectAreas[],
        outDoorArea: ProjectAreas[],
    }
}

export interface ProjectAreas {
    name: string;
    internalName: string;
    description: string;
    isSelected?: boolean;
    floors: ProjectAreaFloors[];
}

export interface ProjectAreaFloors {
    name: string;
    isSelected: boolean;
    floorRooms: ProjectFloorRooms[];
}
export interface ProjectFloorRooms {
    name: string;
    functions: ProjectFloorFunction[];
    isSelected: boolean;
    systemDetails: ProjectAreaSystemDetails
}
export interface ProjectFloorFunction {
    name: string;
    count: number;
    interName?: string;
}


// need to update this for last step
export interface ProjectAreaSystemDetails {
    light: {
        spotLight: unknown
    };
    sensors: {
        window: { wired: boolean; battery: boolean;}
    };
    blinds: unknown;
    controls: unknown;
}