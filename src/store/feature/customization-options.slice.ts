import { createAppSlice } from "../store.utils";
import { CustomizationProduct } from "../../interfaces/customizationProduct.interface"
import { AdminService } from "../../services/admin.service";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

interface CustomizationInitialState {
    isLoading: boolean;
    customizationList: CustomizationProduct[];
}
const initialState: CustomizationInitialState = {
    isLoading: false,
    customizationList: [] as CustomizationProduct[]
};
const pendingStateHandling = {
    pending: (state: CustomizationInitialState) => {
        state.isLoading = true;
    },
    rejected: (state: CustomizationInitialState) => {
        state.isLoading = false;
    },
}
const customizationSlice = createAppSlice({
    name: 'customizationProduct',
    initialState,
    reducers: (create) => ({
        fetchCustomizationList: create.asyncThunk(
            async () => {
                const response: AxiosResponse<CustomizationProduct[]> = await AdminService.getCustomizations();
                return response.data as CustomizationProduct[];
            },
            {
                ...pendingStateHandling,
                fulfilled: (state: CustomizationInitialState, action: PayloadAction<CustomizationProduct[]>) => {
                    state.isLoading = false;
                    state.customizationList = action.payload;
                },
            }
        ),
    })
})

export default customizationSlice.reducer;
export const { fetchCustomizationList } = customizationSlice.actions;