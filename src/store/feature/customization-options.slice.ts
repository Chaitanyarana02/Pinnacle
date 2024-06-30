import { createAppSlice } from "../store.utils";
import { CustomizationProduct } from "../../interfaces/customizationProduct.interface";
import { AdminService } from "../../services/admin.service";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { CustomizationProductTypeEnum } from "../../enums/customizationProduct.enum";

interface CustomizationInitialState {
  isLoading: boolean;
  customizationList: CustomizationProduct[];
}
const initialState: CustomizationInitialState = {
  isLoading: false,
  customizationList: [] as CustomizationProduct[],
};
const pendingStateHandling = {
  pending: (state: CustomizationInitialState) => {
    state.isLoading = true;
  },
  rejected: (state: CustomizationInitialState) => {
    state.isLoading = false;
  },
};
const customizationSlice = createAppSlice({
  name: "customizationProduct",
  initialState,
  reducers: (create) => ({
    fetchCustomizationList: create.asyncThunk(
      async () => {
        const response: AxiosResponse<{
          data: {
            id: string;
            customizationOption: string;
            type: string;
          }[];
        }> = await AdminService.getCustomizations();
        console.log(response);

        const data: CustomizationProduct[] =
          response?.data?.data?.map((v) => ({
            id: v?.id,
            optionName: v?.customizationOption,
            customizationType: v?.type as CustomizationProductTypeEnum,
          })) || [];
        return data as CustomizationProduct[];
      },
      {
        ...pendingStateHandling,
        fulfilled: (
          state: CustomizationInitialState,
          action: PayloadAction<CustomizationProduct[]>
        ) => {
          state.isLoading = false;
          state.customizationList = action.payload;
        },
      }
    ),

    deleteCustomization: create.asyncThunk(
      async (id: string) => {
        await AdminService.deleteCustomization(id);
        return id;
      },
      {
        ...pendingStateHandling,
        fulfilled: (
          state: CustomizationInitialState,
          action: PayloadAction<string>
        ) => {
          state.isLoading = false;
          state.customizationList = state.customizationList.filter(
            (customization) => customization.id !== action.payload
          );
        },
      }
    ),
    addCustomization: create.asyncThunk(
      async (customization: CustomizationProduct) => {
        const response: AxiosResponse<{data:{ id: string }[]}> =
          await AdminService.addCustomization(
            customization.optionName,
            customization.customizationType
          );
          console.log(response);
          
        customization.id = response?.data?.data[0]?.id;
        return customization;
      },
      {
        ...pendingStateHandling,
        fulfilled: (
          state: CustomizationInitialState,
          action: PayloadAction<CustomizationProduct>
        ) => {
          state.isLoading = false;
          state.customizationList = [
            ...state.customizationList,
            action.payload,
          ];
        },
      }
    ),
    updateCustomization: create.asyncThunk(
      async (customization: CustomizationProduct) => {
        await AdminService.updateCustomization(
          customization.id,
          customization.optionName,
          customization.customizationType
        );
        return customization;
      },
      {
        ...pendingStateHandling,
        fulfilled: (
          state: CustomizationInitialState,
          action: PayloadAction<CustomizationProduct>
        ) => {
          state.isLoading = false;
          state.customizationList = state.customizationList.map(
            (customization) =>
              customization.id === action.payload.id
                ? action.payload
                : customization
          );
        },
      }
    ),
  }),
});

export default customizationSlice.reducer;
export const {
  fetchCustomizationList,
  deleteCustomization,
  addCustomization,
  updateCustomization,
} = customizationSlice.actions;
