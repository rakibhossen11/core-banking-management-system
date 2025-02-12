import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 101,
      uniqId: 101,
      name: "Gp-10",
      category: "Card",
      stockQuantity: 12,
      supplier: "Gp",
      purchasePrice: 12,
      sellprice: 13,
      unit: "Pcs",
      salesCount: 13,
      stockIn: 12,
      stockOut: 4,
      remarks: "Hot",
      buyHistory: [], // Array to store buy history
      sellHistory: [], // Array to store sell history
    },
    {
      id: 101,
      uniqId: 102,
      name: "abc",
      category: "Card",
      stockQuantity: 12,
      supplier: "Gp",
      purchasePrice: 12,
      sellprice: 13,
      unit: "Pcs",
      salesCount: 13,
      stockIn: 12,
      stockOut: 4,
      remarks: "Hot",
      buyHistory: [], // Array to store buy history
      sellHistory: [], // Array to store sell history
    },
    {
      id: 101,
      uniqId: 103,
      name: "abc",
      category: "Card",
      stockQuantity: 12,
      supplier: "Gp",
      purchasePrice: 12,
      sellprice: 13,
      unit: "Pcs",
      salesCount: 13,
      stockIn: 12,
      stockOut: 4,
      remarks: "Hot",
      buyHistory: [], // Array to store buy history
      sellHistory: [], // Array to store sell history
    },
    {
      id: 101,
      uniqId: 104,
      name: "abc",
      category: "Card",
      stockQuantity: 12,
      supplier: "Gp",
      purchasePrice: 12,
      sellprice: 13,
      unit: "Pcs",
      salesCount: 13,
      stockIn: 12,
      stockOut: 4,
      remarks: "Hot",
      buyHistory: [], // Array to store buy history
      sellHistory: [], // Array to store sell history
    },
    {
      id: 101,
      uniqId: 105,
      name: "abc",
      category: "Card",
      stockQuantity: 12,
      supplier: "Gp",
      purchasePrice: 12,
      sellprice: 13,
      unit: "Pcs",
      salesCount: 13,
      stockIn: 12,
      stockOut: 4,
      remarks: "Hot",
      buyHistory: [], // Array to store buy history
      sellHistory: [], // Array to store sell history
    },
    {
      id: 101,
      uniqId: 106,
      name: "abc",
      category: "Card",
      stockQuantity: 12,
      supplier: "Gp",
      purchasePrice: 12,
      sellprice: 13,
      unit: "Pcs",
      salesCount: 13,
      stockIn: 12,
      stockOut: 4,
      remarks: "Hot",
      buyHistory: [], // Array to store buy history
      sellHistory: [], // Array to store sell history
    },
  ],
//   prodctsHistory: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // reducer for add product
    addProduct: (state, action) => {
      console.log(action.payload);
      state.products.push(action.payload);
    },
    // reducer for update product
    updateProduct: (state,action) =>{
      const { id, updateData } = action.payload; // id of the product to update and the new data
      const productIndex = state.products.findIndex((product) => product.uniqId === id);
      if(productIndex !== -1){
        // update the product with the new data
        state.products[productIndex] = {
          ...state.products[productIndex], // Keep existing data
          ...updateData, // Override with updated data
        }
      }
    },
    // reducer for buying product
    buyProduct: (state, action) => {
        const {uniqId,quantity,date} = action.payload;
        const product = state.products.find((p) => p.pid === uniqId);
        if(product){
            // updata stock quantity and instock
            product.stockQuantity += quantity;
            product.stockIn += quantity;
            // add entry to buy history
            product.buyHistory.push({quantity,date,type: "Buy"});
        }
        console.log(buyHistory);
    },
    // redcer for selling product
    sellProduct: (state,action) => {
        const {uniqId,quantity,date} = action.payload;
        const product = state.products.find((p) => p.pid === uniqId);
        if(product){
            // updata stock quantity and instock
            product.stockQuantity += quantity;
            product.stockIn -= quantity;
            // add entry to buy history
            product.buyHistory.push({quantity,date,type: "Sell"});
        }
    }
  },
});
 
export const { addProduct, updateProduct, buyProduct,sellProduct } = productSlice.actions; //export action
export default productSlice.reducer; //export redcer
