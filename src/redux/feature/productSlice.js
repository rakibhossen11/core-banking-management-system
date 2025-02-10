import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 101,
      productId: 101,
      productName: "abc",
      category: "Card",
      stockQuantity: 12,
      supplier: "Gp",
      purchasePrice: 12,
      sellingPrice: 13,
      unitOfMeasure: "Pcs",
      salesCount: 13,
      stockIn: 12,
      stockOut: 4,
      remarks: "Hot",
      buyHistory: [], // Array to store buy history
      sellHistory: [], // Array to store sell history
    },
    {
      id: 101,
      productId: 101,
      productName: "abc",
      category: "Card",
      stockQuantity: 12,
      supplier: "Gp",
      purchasePrice: 12,
      sellingPrice: 13,
      unitOfMeasure: "Pcs",
      salesCount: 13,
      stockIn: 12,
      stockOut: 4,
      remarks: "Hot",
      buyHistory: [], // Array to store buy history
      sellHistory: [], // Array to store sell history
    },
    {
      id: 101,
      productId: 101,
      productName: "abc",
      category: "Card",
      stockQuantity: 12,
      supplier: "Gp",
      purchasePrice: 12,
      sellingPrice: 13,
      unitOfMeasure: "Pcs",
      salesCount: 13,
      stockIn: 12,
      stockOut: 4,
      remarks: "Hot",
      buyHistory: [], // Array to store buy history
      sellHistory: [], // Array to store sell history
    },
    {
      id: 101,
      productId: 101,
      productName: "abc",
      category: "Card",
      stockQuantity: 12,
      supplier: "Gp",
      purchasePrice: 12,
      sellingPrice: 13,
      unitOfMeasure: "Pcs",
      salesCount: 13,
      stockIn: 12,
      stockOut: 4,
      remarks: "Hot",
      buyHistory: [], // Array to store buy history
      sellHistory: [], // Array to store sell history
    },
    {
      id: 101,
      productId: 101,
      productName: "abc",
      category: "Card",
      stockQuantity: 12,
      supplier: "Gp",
      purchasePrice: 12,
      sellingPrice: 13,
      unitOfMeasure: "Pcs",
      salesCount: 13,
      stockIn: 12,
      stockOut: 4,
      remarks: "Hot",
      buyHistory: [], // Array to store buy history
      sellHistory: [], // Array to store sell history
    },
    {
      id: 101,
      productId: 101,
      productName: "abc",
      category: "Card",
      stockQuantity: 12,
      supplier: "Gp",
      purchasePrice: 12,
      sellingPrice: 13,
      unitOfMeasure: "Pcs",
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
    // reducer for buying product
    buyProduct: (state, action) => {
        const {productId,quantity,date} = action.payload;
        const product = state.products.find((p) => p.pid === productId);
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
        const {productId,quantity,date} = action.payload;
        const product = state.products.find((p) => p.pid === productId);
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
 
export const { addProduct,buyProduct,sellProduct } = productSlice.actions; //export action
export default productSlice.reducer; //export redcer
