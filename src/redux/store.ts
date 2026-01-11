import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";



const store = configureStore({
    reducer: {
        // your reducers here
        [baseApi.reducerPath]: baseApi.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;