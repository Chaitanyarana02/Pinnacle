import axios from "axios";
import UtilityService from "./utilit.service";
import { CustomizationProductTypeEnum } from "../enums/customizationProduct.enum";
import { ProductCategoryInterface } from "../interfaces/ProductCategory.interface";
import { ProductList } from "../interfaces/ProductList.interface";

export class AdminService {
    static getCustomizations() {
        return axios.get(`${UtilityService.getBaseUrl()}api/admin/customization-options`);
    }
    static deleteCustomization(id: string) {
        return axios.delete(`${UtilityService.getBaseUrl()}api/admin/customization-options/${id}`);
    }
    static addCustomization(optionName: string, customizationType: CustomizationProductTypeEnum) {
        return axios.post(`${UtilityService.getBaseUrl()}api/admin/customization-options`, {customizationOption:optionName, type:customizationType});
    }
    static updateCustomization(id: string, optionName: string, customizationType: CustomizationProductTypeEnum) {
        return axios.put(`${UtilityService.getBaseUrl()}api/admin/customization-options/${id}`, {customizationOption:optionName, type:customizationType});
    }

    static getProductCategories() {
        return axios.get(`${UtilityService.getBaseUrl()}productCategories`);
    }
    static deleteProductCategory(id: string) {
        return axios.delete(`${UtilityService.getBaseUrl()}productCategories/${id}`);
    }
    static addProductCategory(data: ProductCategoryInterface) {
        return axios.post(`${UtilityService.getBaseUrl()}productCategories`, data);
    }
    static updateProductCategories(data: ProductCategoryInterface) {
        return axios.put(`${UtilityService.getBaseUrl()}productCategories/${data.id}`, data);
    }

    static getProducts() {
        return axios.get(`${UtilityService.getBaseUrl()}products`);
    }
    static deleteProduct(id: string) {
        return axios.delete(`${UtilityService.getBaseUrl()}product/${id}`);
    }
    static addProduct(data: ProductList) {
        return axios.post(`${UtilityService.getBaseUrl()}product`, data);
    }
    static updateProduct(data: ProductList) {
        return axios.put(`${UtilityService.getBaseUrl()}product/${data.id}`, data);
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