import { projectType, projectResidentType, projectScope, projectColorScheme, ProjectStatus } from "../enums/project.enum";
import { ProjectDetail } from "../interfaces/project.interface";

const projectDetailMockData: ProjectDetail = {
    name: 'project1',
    address: 'address1',
    projectType: projectType.residential,
    projectResidentType: projectResidentType.house,
    projectScope: projectScope.newBuild,
    projectColorScheme: projectColorScheme.white,
    projectStatus: ProjectStatus.pending,
    buildingAreas: []
};

export default projectDetailMockData;