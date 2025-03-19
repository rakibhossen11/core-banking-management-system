import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to submit order data to the server
export const submitOrder = createAsyncThunk(
  "order/submitOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      console.log(orderData);
      const response = await axios.post("http://localhost:5000/orders", {
        orderData,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch orders
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (status, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/orders?status=${status || ''}`);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch orders
// export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (status) => {
//   const response = await axios.get(`/api/orders?status=${status || ''}`);
//   return response.data;
// });

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    selectedProducts: [], // To store selected products
    orders: [],
    selectedOrders: [],
    status: "idle",
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
      console.log(productId, quantity);
      const product = state.selectedProducts.find(
        (p) => p.productId === productId
      );
      if (product) {
        product.quantity = quantity; // Update the product quantity
      }
    },
    removeProductFromOrder: (state, action) => {
      const productId = action.payload;
      state.selectedProducts = state.selectedProducts.filter(
        (p) => p.productId !== productId
      );
    },
    clearOrder: (state) => {
      state.selectedProducts = [];
    },
    selectAllOrders: (state) => {
      if (state.selectedOrders.length === state.orders.length) {
        state.selectedOrders = [];
      } else {
        state.selectedOrders = state.orders.map((order) => order._id);
      }
    },
    toggleOrderSelection: (state, action) => {
      const orderId = action.payload;
      if (state.selectedOrders.includes(orderId)) {
        state.selectedOrders = state.selectedOrders.filter(
          (id) => id !== orderId
        );
      } else {
        state.selectedOrders.push(orderId);
      }
    },
    deleteSelectedOrders: (state) => {
      state.orders = state.orders.filter(
        (order) => !state.selectedOrders.includes(order.id)
      );
      state.selectedOrders = [];
    },
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const order = state.orders.find((order) => order._id === orderId);
      if (order) {
        order.status = status;
      }
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
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.orders = action.payload;
        // console.log(state.products);
      });
  },
});

export const {
  addToOrder,
  updateProductQuantity,
  removeProductFromOrder,
  clearOrder,
  selectAllOrders,
  toggleOrderSelection,
  deleteSelectedOrders,
  updateOrderStatus,
} = orderSlice.actions;
export default orderSlice.reducer;
