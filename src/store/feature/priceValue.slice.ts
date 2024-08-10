import { createAppSlice } from "../store.utils";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: {value :number } = {
    value: 0
} 

const priceValueSlice = createAppSlice({
  name: "priceCategory",
  initialState,
  reducers: (create) => ({
    updatePriceValue: create.reducer<number>((state , action: PayloadAction<number>) => {
        state.value = action.payload
    })
  }),
});
export const { updatePriceValue } = priceValueSlice.actions;
export default priceValueSlice.reducer;
