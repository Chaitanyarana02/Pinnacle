import { projectColorScheme, projectResidentType, projectScope, ProjectStatus, projectType } from "../enums/project.enum";
import { ProjectBasicDetail } from "../interfaces/project.interface";

const  projectListData: ProjectBasicDetail[] = [
    {
        name: 'project1',
        address: 'address1',
        projectType: projectType.residential,
        projectResidentType: projectResidentType.house,
        projectScope: projectScope.newBuild,
        projectColorScheme: projectColorScheme.white,
        projectStatus: ProjectStatus.pending,
    },
    {
        name: 'project1',
        address: 'address1',
        projectType: projectType.residential,
        projectResidentType: projectResidentType.house,
        projectScope: projectScope.newBuild,
        projectColorScheme: projectColorScheme.white,
        projectStatus: ProjectStatus.delivered,
    },
    {
        name: 'project1',
        address: 'address1',
        projectType: projectType.residential,
        projectResidentType: projectResidentType.house,
        projectScope: projectScope.newBuild,
        projectColorScheme: projectColorScheme.white,
        projectStatus: ProjectStatus.transition,
    },
    {
        name: 'project1',
        address: 'address1',
        projectType: projectType.residential,
        projectResidentType: projectResidentType.house,
        projectScope: projectScope.newBuild,
        projectColorScheme: projectColorScheme.white,
        projectStatus: ProjectStatus.transition,
    }

];
export default projectListData;