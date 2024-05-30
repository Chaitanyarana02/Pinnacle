import { projectType, projectResidentType, projectScope, projectColorScheme, projectStatus } from "../enums/project.enum";
import { ProjectDetail } from "../interfaces/project.interface";

const projectDetailMockData: ProjectDetail = {
    name: 'project1',
    address: 'address1',
    projectType: projectType.residential,
    projectResidentType: projectResidentType.house,
    projectScope: projectScope.newBuild,
    projectColorScheme: projectColorScheme.white,
    projectStatus: projectStatus.pending,
    buildingAreas: {
        indoorArea: [],
        outDoorArea: [],
    }
};

export default projectDetailMockData;