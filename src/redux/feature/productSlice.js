import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to add products
export const addProduct = createAsyncThunk(
  'product/addProduct',
  async(productData, {rejectWithValue}) => {
    try {
      const response = await axios.post('http://localhost:5000/products',productData);
      return response.data.product;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", 
  async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Async thunk to fetch product details by ID
// export const fetchProductDetails = createAsyncThunk(
//   'products/fetchProductDetails',
//   async (productId) => {
//     const response = await axios.get(`http://localhost:5000/products/${productId}`);
//     return response.data;
//   }
// );

// Async thunk to buy a product
export const buyProduct = createAsyncThunk(
  'products/buyProduct',
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/products/buy/', {
        productId,
        quantity,
      });
      console.log(response);
      return response.data.product;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to sell a product
export const sellProduct = createAsyncThunk(
  'product/sellProduct',
  async ({ productId, quantity, date }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/products/sell', {
        productId,
        quantity,
        date,
      });
      return response.data.product;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  products: [],
  status: 'idle',
  error: null,
  // prodctsHistory: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addProduct.fulfilled, (state,action) =>{
      state.products.push(action.payload);
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
    .addCase(buyProduct.fulfilled, (state, action) => {
      const updatedProduct = action.payload;
      console.log(updatedProduct);
      const index = state.products.findIndex((p) => p._id === updatedProduct._id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    })
    .addCase(sellProduct.fulfilled, (state, action) => {
      const updatedProduct = action.payload;
      const index = state.products.findIndex((p) => p._id === updatedProduct._id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    })
  }
});
 
// export const { addProduct, updateProduct, buyProduct,sellProduct } = productSlice.actions; //export action
export default productSlice.reducer; //export redcer


// reducer previous code here
// reducers: {
//   // reducer for add product
//   addProduct: (state, action) => {
//     console.log(action.payload);
//     state.products.push(action.payload);
//   },
//   // reducer for update product
//   updateProduct: (state,action) =>{
//     const { id, updateData } = action.payload; // id of the product to update and the new data
//     const productIndex = state.products.findIndex((product) => product.uniqId === id);
//     if(productIndex !== -1){
//       // update the product with the new data
//       state.products[productIndex] = {
//         ...state.products[productIndex], // Keep existing data
//         ...updateData, // Override with updated data
//       }
//     }
//   },
//   // reducer for buying product
//   buyProduct: (state, action) => {
//       const {uniqId,quantity,date} = action.payload;
//       const product = state.products.find((p) => p.pid === uniqId);
//       if(product){
//           // updata stock quantity and instock
//           product.stockQuantity += quantity;
//           product.stockIn += quantity;
//           // add entry to buy history
//           product.buyHistory.push({quantity,date,type: "Buy"});
//       }
//       console.log(buyHistory);
//   },
//   // redcer for selling product
//   sellProduct: (state,action) => {
//       const {uniqId,quantity,date} = action.payload;
//       const product = state.products.find((p) => p.pid === uniqId);
//       if(product){
//           // updata stock quantity and instock
//           product.stockQuantity += quantity;
//           product.stockIn -= quantity;
//           // add entry to buy history
//           product.buyHistory.push({quantity,date,type: "Sell"});
//       }
//   }
// },