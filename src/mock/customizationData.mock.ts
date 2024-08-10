import { CustomizationProductTypeEnum } from "../enums/customizationProduct.enum";
import { CustomizationProduct } from "../interfaces/customizationProduct.interface";

 const customizationData: CustomizationProduct[] = [
    {id:"1", optionName:"Dimmable" ,  customizationType: CustomizationProductTypeEnum.BOOLEAN},
    {id:"2", optionName:"SIze" ,  customizationType: CustomizationProductTypeEnum.SIZE},
    {id:"3", optionName:"No of Switch" ,  customizationType: CustomizationProductTypeEnum.STRING},
    {id:"4", optionName:"Watt" ,  customizationType: CustomizationProductTypeEnum.RADIO},
    {id:"5", optionName:"Color" ,  customizationType: CustomizationProductTypeEnum.RADIO},
];
export  default customizationData;