export interface ProductCategoryInterface {
    id?: string,
    category: string,
    customizationOptions: {
        customizationOptionId: string,
        options: string[]
    }[],
}