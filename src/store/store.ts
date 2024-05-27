import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./feature/qr.api.slice";
import projectListReducer from './fearure/project-list.slice'
export const store = configureStore({
    reducer: {
        projectListState: projectListReducer,
        // [apiSlice.reducerPath]: apiSlice.reducer
    },
    // middleware: (getDefaultMiddleWare) => {
    //     return getDefaultMiddleWare().concat(apiSlice.middleware);
    // }
});
 
export type AppDispatch  = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>