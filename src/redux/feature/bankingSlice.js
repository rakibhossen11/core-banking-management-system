import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// async thunk for addTransaction
export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async ({ userId, type, amount }, { rejectWithValue }) => {
    console.log({ userId, type, amount });
    try {
      const response = await axios.get(
        "http://localhost:5000/users/transaction",
        { userId, type, amount }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  transactions: [],
};

const bankingSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTransaction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactions.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
      })
    //   .addCase(fetchTransactions.fulfilled, (state, action) => {
    //     state.transactions = action.payload;
    //   });
  },
});

export default bankingSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     balance: 1000, // initial balance
//     transactions: [], // transaction history
//     selectedTransaction: null, // Selected transaction details
// }

// const bankingSlice = createSlice({
//     name: "banking",
//     initialState,
//     reducers: {
//         deposit:(state,action) =>{
//             console.log("from slice state",state, "from slice action",action);
//             const newBalance = state.balance + action.payload;
//             state.balance = newBalance,
//             state.transactions.push({
//                 id: Date.now(),
//                 type: "deposit",
//                 amount: action.payload,
//                 detail: "abc",
//                 date: new Date().toLocaleString(),
//                 balanceAfterTransaction: newBalance, // Store balance after transaction
//             });
//         },
//         withdraw: (state,action) =>{
//             console.log(state,action);
//             if (action.payload > state.balance) {
//                 alert("Insufficient funds!");
//                 return;
//             }
//             const newBalance = state.balance - action.payload;
//             state.balance -= action.payload;
//             state.transactions.push({
//                 id: Date.now(),
//                 type: "withdraw",
//                 amount: action.payload,
//                 date: new Date().toLocaleString(),
//                 balanceAfterTransaction: newBalance, // Store balance after transaction
//             });
//         },
//         selectedTransaction: (state, action) => {
//             state.selectedTransaction = action.payload;
//         },
//         clearSelectedTransaction: (state) =>{
//             state.selectedTransaction = null;
//         }
//     }
// });

// export const { deposit, withdraw, selectedTransaction, clearSelectedTransaction } = bankingSlice.actions;
// export default bankingSlice.reducer;
