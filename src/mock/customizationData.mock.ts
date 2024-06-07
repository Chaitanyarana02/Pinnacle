import { CustomizationProductTypeEnum } from "../enums/customizationProduct.enum";
import { CustomizationProduct } from "../interfaces/customizationProduct.interface";

 const customizationData: CustomizationProduct[] = [
    {id:"1", optionName:"Watt" ,  customizationType: CustomizationProductTypeEnum.BOOLEAN},
    {id:"2", optionName:"Watt1" ,  customizationType: CustomizationProductTypeEnum.SIZE},
    {id:"3", optionName:"Watt2" ,  customizationType: CustomizationProductTypeEnum.STRING},
    {id:"4", optionName:"Watt3" ,  customizationType: CustomizationProductTypeEnum.RADIO},
];
export  default customizationData;
