import axios from "axios";
import UtilityService from "./utilit.service";

class ProjectService {
    
    static getProjectList() { // they can get userId from token
        return axios.get(`${UtilityService.getBaseUrl()}getProjects`)
    }
    static getProjectDetail(projectId: string) {
        return axios.get(`${UtilityService.getBaseUrl()}getProjectDetail/${projectId}`)
    }
}
export default ProjectService;