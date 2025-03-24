import { configureStore } from "@reduxjs/toolkit";
import bankingReducer from "./feature/bankingSlice";
import stockReducer from "./feature/stockSlice";
import productReducer from "./feature/productSlice";
import expensesRedcer from './feature/expensesSlice';
import orderReducer from "./feature/orderSlice";
import customerReducer from "./feature/customerSlice";
// import transactionsSlice from "./feature/"

export const store = configureStore({
    reducer: {
        banking: bankingReducer,
        // transactions: transaction
        stock:  stockReducer,
        products: productReducer,
        expenses: expensesRedcer,
        orders: orderReducer,
        customers: customerReducer,
    }
});