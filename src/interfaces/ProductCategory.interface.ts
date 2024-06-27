export interface ProductCategoryInterface {
    id?: string,
    category: string,
    customizationOptions: Array<{
        customizationOptionId: string,
        options: Array<string>
    }>,
}