import { CustomizationProductTypeEnum } from "../enums/customizationProduct.enum";
import { projectColorScheme, projectResidentType, projectScope, ProjectStatus, projectType } from "../enums/project.enum";
import { UndoRedoEventName } from "../enums/undoRedoEventName.enum";

export interface ProjectBasicDetail {
    id?: number;
    name: string;
    address: string;
    projectType: projectType;
    projectResidentType: projectResidentType;
    projectScope: projectScope;
    projectColorScheme: projectColorScheme;
    projectStatus?: ProjectStatus;
    deliveryAddress?: string;

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
    categoryType?: CustomizationProductTypeEnum;
    categoryId?: number;
    systemDetails: ProjectAreaSystemDetails

}
export interface UndoRedoStack {
    eventName: UndoRedoEventName,
    data: {
      roomId: number,
      functions: ProjectFloorFunction[]
    }[]
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
    categoryId?: number;
  }
export interface RoomFunctions {
    categoryName: string;
    products: Array<DefaultProduct>;
  }