import { createAppSlice } from "../store.utils";
import { AdminService } from "../../services/admin.service";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductList } from "../../interfaces/ProductList.interface";

interface ProductListState {
    isLoading: boolean;
    productList: ProductList[];
}
const initialState: ProductListState = {
    isLoading: false,
    productList: [] as ProductList[]
};
const pendingStateHandling = {
    pending: (state: ProductListState) => {
        state.isLoading = true;
    },
    rejected: (state: ProductListState) => {
        state.isLoading = false;
    },
}
const productList = createAppSlice({
    name: 'productList',
    initialState,
    reducers: (create) => ({
        fetchProductList: create.asyncThunk(
            async () => {
                const response: AxiosResponse<ProductList[]> = await AdminService.getProducts();
                return response.data as ProductList[];
            },
            {
                ...pendingStateHandling,
                fulfilled: (state: ProductListState, action: PayloadAction<ProductList[]>) => {
                    state.isLoading = false;
                    state.productList = action.payload;
                },
            }
        ),
    
        deleteProduct: create.asyncThunk(
            async (id: string) => {
                await AdminService.deleteProduct(id);
                return id;
            },
            {
                ...pendingStateHandling,
                fulfilled: (state : ProductListState, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.productList = state.productList.filter(productList => productList.id !== action.payload);
                }
            }
        ),
        addProduct: create.asyncThunk(
            async (productList: ProductList) => {
                const response: AxiosResponse<{id: string}> = await AdminService.addProduct(productList);
                productList.id = response.data.id;
                return productList;
            },
            {
               ...pendingStateHandling,
                fulfilled: (state: ProductListState, action: PayloadAction<ProductList>) => {
                    state.isLoading = false;
                    state.productList = [...state.productList, action.payload];
                }
            }
        ),
        updateProduct: create.asyncThunk(
            async (productList: ProductList) => {
                await AdminService.updateProduct(productList);
                return productList;
            },
            {
               ...pendingStateHandling,
                fulfilled: (state: ProductListState, action: PayloadAction<ProductList>) => {
                    state.isLoading = false;
                    state.productList = state.productList.map(product => product.id === action.payload.id? action.payload : product);
                }
            }
        )
    })
})

export default productList.reducer;
export const { fetchProductList, addProduct, updateProduct, deleteProduct} = productList.actions;