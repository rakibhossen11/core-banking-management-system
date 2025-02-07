import { configureStore } from "@reduxjs/toolkit";
import bankingReducer from "./feature/bankingSlice";
import stockReducer from "./feature/stockSlice";

export const store = configureStore({
    reducer: {
        banking: bankingReducer,
        stock:  stockReducer,
    }
});