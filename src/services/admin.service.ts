import axios from "axios";
import UtilityService from "./utilit.service";
import { CustomizationProductTypeEnum } from "../enums/customizationProduct.enum";

export class AdminService {
    static getCustomizations() {
        return axios.get(`${UtilityService.getBaseUrl()}customization`)
    }
    static deleteCustomization(id: string) {
        return axios.delete(`${UtilityService.getBaseUrl()}customization/${id}`)
    }
    static getCustomizationOptionsList(): {label:string , value: string }[] {
        return Object.values(CustomizationProductTypeEnum).map((value: string) => ({label: value , value: value}))
    }
}