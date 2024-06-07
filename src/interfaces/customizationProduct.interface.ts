import { CustomizationProductTypeEnum } from "../enums/customizationProduct.enum";

export interface CustomizationProduct {
    id: string;
    optionName: string;
    customizationType: CustomizationProductTypeEnum;
}