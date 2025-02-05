import { configureStore } from "@reduxjs/toolkit";
import bankingReducer from "./feature/bankingSlice";

export const store = configureStore({
    reducer: {
        banking: bankingReducer,
    }
});