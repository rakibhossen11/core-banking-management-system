import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to submit order data to the server
export const submitOrder = createAsyncThunk(
    'order/submitOrder',
    async (orderData, { rejectWithValue }) => {
      try {
        console.log(orderData);
        const response = await axios.post('http://localhost:5000/orders', orderData);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
);


// export const submitOrder = createAsyncThunk(
//     "orders/submitOrder",
//     async (order) => {
//     console.log(order);
//     const response = await axios.post("http://localhost:5000/products/orders",order);
//     console.log(response);
//     return response.data;
//     }
//   );

const orderSlice = createSlice({
    name: 'order',
    initialState: {
      loading: false,
      error: null,
      success: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(submitOrder.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.success = false;
        })
        .addCase(submitOrder.fulfilled, (state) => {
          state.loading = false;
          state.success = true;
        })
        .addCase(submitOrder.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default orderSlice.reducer;