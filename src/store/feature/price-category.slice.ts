import { createAppSlice } from "../store.utils";
import { PriceCategoryEnum } from "../../enums/price-category.enum";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: {value :number } = {
    value: PriceCategoryEnum.BUDGET
} 

const priceCategorySlice = createAppSlice({
  name: "priceCategory",
  initialState,
  reducers: (create) => ({
    updatePrice: create.reducer<number>((state , action: PayloadAction<number>) => {
        state.value = action.payload
    })
  }),
});
export const { updatePrice } = priceCategorySlice.actions;
export default priceCategorySlice.reducer;
