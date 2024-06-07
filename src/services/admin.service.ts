import axios from "axios";
import UtilityService from "./utilit.service";

export class AdminService {
    static getCustomizations() {
        return axios.get(`${UtilityService.getBaseUrl()}getCustomization`)
    }
}