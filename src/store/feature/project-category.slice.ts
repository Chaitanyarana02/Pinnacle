import { createAppSlice } from "../store.utils";
import { AdminService } from "../../services/admin.service";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductCategoryInterface } from "../../interfaces/ProductCategory.interface";

interface ProjectCategoryState {
    isLoading: boolean;
    productCategoryList: ProductCategoryInterface[];
}
const initialState: ProjectCategoryState = {
    isLoading: false,
    productCategoryList: [] as ProductCategoryInterface[]
};
const pendingStateHandling = {
    pending: (state: ProjectCategoryState) => {
        state.isLoading = true;
    },
    rejected: (state: ProjectCategoryState) => {
        state.isLoading = false;
    },
}
const productCustomization = createAppSlice({
    name: 'productCategoryInterface',
    initialState,
    reducers: (create) => ({
        fetchProductCategoryList: create.asyncThunk(
            async () => {
                const response: AxiosResponse<ProductCategoryInterface[]> = await AdminService.getProductCategories();
                return response.data as ProductCategoryInterface[];
            },
            {
                ...pendingStateHandling,
                fulfilled: (state: ProjectCategoryState, action: PayloadAction<ProductCategoryInterface[]>) => {
                    state.isLoading = false;
                    state.productCategoryList = action.payload;
                },
            }
        ),
    
        deleteProductCategory: create.asyncThunk(
            async (id: string) => {
                await AdminService.deleteProductCategory(id);
                return id;
            },
            {
                ...pendingStateHandling,
                fulfilled: (state : ProjectCategoryState, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.productCategoryList = state.productCategoryList.filter(productCategory => productCategory.id !== action.payload);
                }
            }
        ),
        addProductCategory: create.asyncThunk(
            async (productCategory: ProductCategoryInterface) => {
                const response: AxiosResponse<{id: string}> = await AdminService.addProductCategory(productCategory);
                productCategory.id = response.data.id;
                return productCategory;
            },
            {
               ...pendingStateHandling,
                fulfilled: (state: ProjectCategoryState, action: PayloadAction<ProductCategoryInterface>) => {
                    state.isLoading = false;
                    state.productCategoryList = [...state.productCategoryList, action.payload];
                }
            }
        ),
        updateProductCategory: create.asyncThunk(
            async (productCategory: ProductCategoryInterface) => {
                await AdminService.updateProductCategories(productCategory);
                return productCategory;
            },
            {
               ...pendingStateHandling,
                fulfilled: (state: ProjectCategoryState, action: PayloadAction<ProductCategoryInterface>) => {
                    state.isLoading = false;
                    state.productCategoryList = state.productCategoryList.map(customization => customization.id === action.payload.id? action.payload : customization);
                }
            }
        )
    })
})

export default productCustomization.reducer;
export const { fetchProductCategoryList, deleteProductCategory, addProductCategory, updateProductCategory} = productCustomization.actions;