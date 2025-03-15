import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to submit order data to the server
export const submitOrder = createAsyncThunk(
  "order/submitOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      console.log(orderData);
      const response = await axios.post(
        "http://localhost:5000/orders",
        orderData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    selectedProducts: [], // To store selected products
    total: 0,
    loading: false, // For async operation states
    error: null, // For error handling
    success: false, // To indicate successful submission
  },
  reducers: {
    // Reducer to add a product to the order
    addToOrder: (state, action) => {
      const product = action.payload;
      console.log(product);
      const existingProduct = state.selectedProducts.find(
        (p) => p.productId === product.productId
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.selectedProducts.push({ ...product, quantity: 1 });
        // console.log(state.selectedProducts.push({...product,quantity: 1}));
      }
    },
    updateProductQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      console.log(productId,quantity);
      const product = state.selectedProducts.find((p) => p.productId === productId);
      if (product) {
        product.quantity = quantity; // Update the product quantity
      }
    },
    removeProductFromOrder: (state, action) => {
      const productId = action.payload;
      state.selectedProducts = state.selectedProducts.filter((p) => p.productId !== productId);
    },
    clearOrder: (state) => {
      state.selectedProducts = [];
    },
  },
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
        state.selectedProducts = []; // Clear the order after successful submission
      })
      .addCase(submitOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addToOrder, updateProductQuantity, removeProductFromOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
