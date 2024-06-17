import axios from "axios";
import UtilityService from "./utilit.service";
import { CustomizationProductTypeEnum } from "../enums/customizationProduct.enum";

export class AdminService {
    static getCustomizations() {
        return axios.get(`${UtilityService.getBaseUrl()}customization`);
    }
    static deleteCustomization(id: string) {
        return axios.delete(`${UtilityService.getBaseUrl()}customization/${id}`);
    }
    static addCustomization(optionName: string, customizationType: CustomizationProductTypeEnum) {
        return axios.post(`${UtilityService.getBaseUrl()}customization`, {optionName, customizationType});
    }
    static updateCustomization(id: string, optionName: string, customizationType: CustomizationProductTypeEnum) {
        return axios.put(`${UtilityService.getBaseUrl()}customization/${id}`, {optionName, customizationType});
    }

    static getUsersList() {
        return axios.get(`${UtilityService.getBaseUrl()}users`);
    }
    static sentPasswordEmail() {
        return axios.post(`${UtilityService.getBaseUrl()}generatePassword`);
    }
    static getCustomizationOptionsList(): {label:string , value: string }[] {
        return Object.values(CustomizationProductTypeEnum).map((value: string) => ({label: value , value: value}))
    }
}