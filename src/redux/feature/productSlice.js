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
      purchase_Price: 12,
      sellingPrice: 13,
      unitOfMeasure: "Pcs",
      salesCount: 13,
      stockIn: 12,
      stockOut: 4,
      remarks: "Hot",
      buyHistory: [], // Array to store buy history
      sellHistory: [], // Array to store sell history
    },
    { id: 102, name: "Bl-20" },
    { id: 103, name: "Gp-20" },
    { id: 104, name: "Gp-30" },
  ],
  prodctsHistory: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload.pid);
    },
  },
});
 
export const { addProduct } = productSlice.actions; //export action
export default productSlice.reducer; //export redcer
