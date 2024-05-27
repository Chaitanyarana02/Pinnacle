import { projectColorScheme, projectResidentType, projectScope, projectStatus, projectType } from "../enums/project.enum";
import { ProjectBasicDetail } from "../interfaces/project.interface";

const  projectListData: ProjectBasicDetail[] = [
    {
        name: 'project1',
        address: 'address1',
        projectType: projectType.residential,
        projectResidentType: projectResidentType.house,
        projectScope: projectScope.newBuild,
        projectColorScheme: projectColorScheme.white,
        projectStatus: projectStatus.pending,
    },
    {
        name: 'project1',
        address: 'address1',
        projectType: projectType.residential,
        projectResidentType: projectResidentType.house,
        projectScope: projectScope.newBuild,
        projectColorScheme: projectColorScheme.white,
        projectStatus: projectStatus.delivered,
    },
    {
        name: 'project1',
        address: 'address1',
        projectType: projectType.residential,
        projectResidentType: projectResidentType.house,
        projectScope: projectScope.newBuild,
        projectColorScheme: projectColorScheme.white,
        projectStatus: projectStatus.transition,
    },
    {
        name: 'project1',
        address: 'address1',
        projectType: projectType.residential,
        projectResidentType: projectResidentType.house,
        projectScope: projectScope.newBuild,
        projectColorScheme: projectColorScheme.white,
        projectStatus: projectStatus.transition,
    }

];
export default projectListData;