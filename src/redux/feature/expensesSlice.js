import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const featchExpenses = createAsyncThunk;

export const addExpenses = createAsyncThunk(
  "expenses/addExpenses",
  async (expense) => {
    console.log(expense);
    const response = await axios.post(
      "http://localhost:5000/expenses",
      expense
    );
    return response.data;
  }
);

export const featchExpenses = createAsyncThunk(
  "expenses/featchExpenses",
  async () => {
    const response = await axios.get("http://localhost:5000/expenses");
    console.log(response.data);
    return response.data;
  }
);



const expensesSlice = createSlice({
  name: "expenses",
  initialState: { expenses: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(featchExpenses.pending, (state) => {
        state.loading = true;
      })
      .addCase(featchExpenses.fulfilled, (state, action) => {
        console.log('Fetched data:', action.payload); // Check if data is coming
        state.loading = false;
        state.expenses = action.payload;
        console.log(state.expenses);
      })
      .addCase(featchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addExpenses.fulfilled, (state, action) => {
        state.expenses.push(action.payload);
      });
  },
});

export default expensesSlice.reducer;
