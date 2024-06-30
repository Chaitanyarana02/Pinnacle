import { ProductCategoryInterface } from "../interfaces/ProductCategory.interface";

export const productCategoryMock: ProductCategoryInterface[] = [
  { id: "1", category: "Light", customizationOptions: [{customizationOptionId: '1', options: []},{customizationOptionId: '5', options: ['yellow', 'white']},{customizationOptionId: '3', options: []},{customizationOptionId: '4', options: ['<200', '>200']}] },
  { id: "2", category: "Socket", customizationOptions: [{customizationOptionId: '1', options: []}] },
  { id: "3", category: "Sensors", customizationOptions: [{customizationOptionId: '1', options: []}] },
  { id: "4", category: "Shades", customizationOptions: [{customizationOptionId: '1', options: []}] },
];
