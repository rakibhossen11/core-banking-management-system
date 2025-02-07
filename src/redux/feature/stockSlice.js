import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stocks : [], // list of stock item
}

const stockSlice = createSlice({
    name : "stock",
    initialState,
    reducers : {
        addStock: (state, action) =>{
            state.stocks.push(action.payload);
        },
        // updateStock: (state, action) => {
        //     const {id,name,quantity,price} = action.payload;
        //     const stock = state.stocks.find((stock) => stock.id === id);
        //     if(stock){
        //         stock.name = name;
        //         stock.quantity = quantity;
        //         stock.price = price;
        //     }
        // }
    }
});

export const {addStock, updateStock} = stockSlice.actions;
export default stockSlice.reducer;