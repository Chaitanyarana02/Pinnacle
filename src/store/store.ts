import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./feature/qr.api.slice";
import projectListReducer from './feature/project-list.slice'
import projectDetailReducer from './feature/project-detail.slice'
import projectStepReducer from './feature/project-step.slice';
import customizationReducer from './feature/customization-options.slice';
import userListReducer from './feature/users.slice'
export const store = configureStore({
    reducer: {
        projectListState: projectListReducer,
        projectDetailState: projectDetailReducer,
        projectStepState: projectStepReducer,
        customizationState: customizationReducer,
        userListState: userListReducer
        // [apiSlice.reducerPath]: apiSlice.reducer
    },
    // middleware: (getDefaultMiddleWare) => {
    //     return getDefaultMiddleWare().concat(apiSlice.middleware);
    // }
});
 
export type AppDispatch  = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>