import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 1000, // initial balance
    transactions: [], // transaction history 
}

const bankingSlice = createSlice({
    name: "banking",
    initialState,
    reducers: {
        deposit:(state,action) =>{
            state.balance += action.payload,
            state.transactions.push({
                id: Date.now(),
                type: "deposit",
                amount: action.payload,
                date: new Date().toLocaleString(),
            });
        },
        withdraw: (state,action) =>{
            if (action.payload > state.balance) {
                alert("Insufficient funds!");
                return;
            }
            state.balance -= action.payload;
            state.transactions.push({
                id: Date.now(),
                type: "withdraw",
                amount: action.payload,
                date: new Date().toLocaleString(),
            });
        },
    }
});

export const { deposit, withdraw } = bankingSlice.actions;
export default bankingSlice.reducer;