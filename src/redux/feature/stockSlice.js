import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stocks : [], // list of stock item
    stocksHistory : [], // stocks history
}

const stockSlice = createSlice({
    name : "stock",
    initialState,
    reducers : {
        addStock: (state, action) =>{
            console.log(action.payload.price);
            state.stocks.push({
                id : Date.now(),
                price : action.payload.price,
                quantity : action.payload.quantity,
                name : action.payload.name,
            });
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