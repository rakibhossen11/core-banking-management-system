import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to add a customer
export const addCustomer = createAsyncThunk(
  "customers/addCustomer",
  async (customerData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/customers",
        customerData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch all customers
export const fetchCustomers = createAsyncThunk(
  "customers/fetchCustomers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/customers");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch a customer by ID
export const fetchCustomerById = createAsyncThunk(
  "customers/fetchCustomerById",
  async (customerId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/customers/${customerId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to update a customer
export const updateCustomer = createAsyncThunk(
  "customers/updateCustomer",
  async ({ customerId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/customers/${customerId}`,
        updatedData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to delete a customer
export const deleteCustomer = createAsyncThunk(
  "customers/deleteCustomer",
  async (customerId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/customers/${customerId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to search customers by name
export const searchCustomersByName = createAsyncThunk(
  "customers/searchCustomersByName",
  async (name, { rejectWithValue }) => {
    try {
      console.log(name);
      const response = await axios.get(`http://localhost:5000/customers/search/${name}`);
      // const response = await axios.get(
      //   `http://localhost:5000/customers/search?name=${name}`
      // );
      console.log(response.data)
      return response.data; // Return search results
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const customerSlice = createSlice({
  name: "customers",
  initialState: {
    loading: false,
    error: null,
    success: false,
    customers: [], // Store all customers
    customer: null, // Store a single customer (for get by ID)
    searchResults: [], // Store search results
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle addCustomer
      .addCase(addCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.customers.push(action.payload); // Add the new customer to the list
      })
      .addCase(addCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle fetchCustomers
      .addCase(fetchCustomers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload; // Store all customers
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle fetchCustomerById
      .addCase(fetchCustomerById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomerById.fulfilled, (state, action) => {
        state.loading = false;
        state.customer = action.payload; // Store the fetched customer
      })
      .addCase(fetchCustomerById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle updateCustomer
      .addCase(updateCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = state.customers.map((customer) =>
          customer._id === action.payload._id ? action.payload : customer
        ); // Update the customer in the list
      })
      .addCase(updateCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle deleteCustomer
      .addCase(deleteCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = state.customers.filter(
          (customer) => customer._id !== action.payload._id
        ); // Remove the deleted customer from the list
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle searchCustomersByName
      .addCase(searchCustomersByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchCustomersByName.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload; // Store search results
        // state.searchResults = action.payload; // Store search results
      })
      .addCase(searchCustomersByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default customerSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async thunk to add a customer
// export const addCustomer = createAsyncThunk(
//   "customers/addCustomer",
//   async (customerData, { rejectWithValue }) => {
//     try {
//       console.log(customerData);
//       const response = await axios.post(
//         "http://localhost:5000/customers",
//         customerData
//       );
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Async thunk to search customers by name
// export const searchCustomersByName = createAsyncThunk(
//   "customers/searchCustomersByName",
//   async (name, { rejectWithValue }) => {
//     try {
//       console.log(name);
//       const response = await axios.get(
//         `http://localhost:5000/customers/search?name=${name}`
//       );
//       // return response.data; // Return search results
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const customerSlice = createSlice({
//   name: "customers",
//   initialState: {
//     loading: false,
//     error: null,
//     success: false,
//     searchResults: [], // Add searchResults to the initial state
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Handle addCustomer
//       .addCase(addCustomer.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(addCustomer.fulfilled, (state) => {
//         state.loading = false;
//         state.success = true;
//       })
//       .addCase(addCustomer.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // Handle searchCustomersByName
//       .addCase(searchCustomersByName.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(searchCustomersByName.fulfilled, (state, action) => {
//         state.loading = false;
//         state.searchResults = action.payload; // Update searchResults with the fetched data
//       })
//       .addCase(searchCustomersByName.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default customerSlice.reducer;

// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import axios from 'axios';

// // // Async thunk to add a customer
// // export const addCustomer = createAsyncThunk(
// //   'customers/addCustomer',
// //   async (customerData, { rejectWithValue }) => {
// //     try {
// //       console.log(customerData);
// //       const response = await axios.post('http://localhost:5000/customers', customerData);
// //       console.log(response.data);
// //       return response.data;
// //     } catch (error) {
// //       return rejectWithValue(error.response.data);
// //     }
// //   }
// // );

// // // Search customers by name
// // export const searchCustomersByName = (name) => async (dispatch) => {
// //   try {
// //     const response = await axios.get(`/api/search?name=${name}`);
// //     dispatch({
// //       type: "SEARCH_CUSTOMERS_BY_NAME",
// //       payload: response.data, // Search results
// //     });
// //   } catch (error) {
// //     console.error("Error searching customers:", error);
// //   }
// // };

// // const customerSlice = createSlice({
// //   name: 'customers',
// //   initialState: {
// //     loading: false,
// //     error: null,
// //     success: false,
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(addCustomer.pending, (state) => {
// //         state.loading = true;
// //         state.error = null;
// //         state.success = false;
// //       })
// //       .addCase(addCustomer.fulfilled, (state) => {
// //         state.loading = false;
// //         state.success = true;
// //       })
// //       .addCase(addCustomer.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.payload;
// //       });
// //   },
// // });

// // export default customerSlice.reducer;
