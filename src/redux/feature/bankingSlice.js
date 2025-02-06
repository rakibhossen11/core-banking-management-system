import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 1000, // initial balance
    transactions: [], // transaction history
    selectedTransaction: null, // Selected transaction details 
}

const bankingSlice = createSlice({
    name: "banking",
    initialState,
    reducers: {
        deposit:(state,action) =>{
            console.log("from slice state",state, "from slice action",action);
            const newBalance = state.balance + action.payload;
            state.balance = newBalance,
            state.transactions.push({
                id: Date.now(),
                type: "deposit",
                amount: action.payload,
                detail: "abc",
                date: new Date().toLocaleString(),
                balanceAfterTransaction: newBalance, // Store balance after transaction
            });
        },
        withdraw: (state,action) =>{
            console.log(state,action);
            if (action.payload > state.balance) {
                alert("Insufficient funds!");
                return;
            }
            const newBalance = state.balance - action.payload;
            state.balance -= action.payload;
            state.transactions.push({
                id: Date.now(),
                type: "withdraw",
                amount: action.payload,
                date: new Date().toLocaleString(),
                balanceAfterTransaction: newBalance, // Store balance after transaction
            });
        },
        selectedTransaction: (state, action) => {
            state.selectedTransaction = action.payload;
        },
        clearSelectedTransaction: (state) =>{
            state.selectedTransaction = null;
        }
    }
});

export const { deposit, withdraw, selectedTransaction, clearSelectedTransaction } = bankingSlice.actions;
export default bankingSlice.reducer;