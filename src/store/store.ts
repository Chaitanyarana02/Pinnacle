import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./feature/qr.api.slice";
import projectListReducer from './fearure/project-list.slice'
import projectDetailReducer from './fearure/project-detail.slice'
export const store = configureStore({
    reducer: {
        projectListState: projectListReducer,
        projectDetailState: projectDetailReducer
        // [apiSlice.reducerPath]: apiSlice.reducer
    },
    // middleware: (getDefaultMiddleWare) => {
    //     return getDefaultMiddleWare().concat(apiSlice.middleware);
    // }
});
 
export type AppDispatch  = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>