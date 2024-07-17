import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./feature/qr.api.slice";
import projectListReducer from './feature/project-list.slice'
import projectDetailReducer from './feature/project-detail.slice'
import projectStepReducer from './feature/project-step.slice';
import customizationReducer from './feature/customization-options.slice';
import userListReducer from './feature/users.slice'
import productCategoryReducer from './feature/project-category.slice'
import productListReducer from './feature/product-list.slice'
import defaultConfigSlice from './feature/default-config.slice'
export const store = configureStore({
    reducer: {
        projectListState: projectListReducer,
        projectDetailState: projectDetailReducer,
        projectStepState: projectStepReducer,
        customizationState: customizationReducer,
        userListState: userListReducer,
        productCategoryState: productCategoryReducer,
        productListState: productListReducer,
        defaultConfigState: defaultConfigSlice,
        // [apiSlice.reducerPath]: apiSlice.reducer
    },
    // middleware: (getDefaultMiddleWare) => {
    //     return getDefaultMiddleWare().concat(apiSlice.middleware);
    // }
});
 
export type AppDispatch  = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>