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