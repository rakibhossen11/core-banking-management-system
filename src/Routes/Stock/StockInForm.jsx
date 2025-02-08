import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStock, updateStock } from "../../redux/feature/stockSlice";

const StockInForm = ({stockToUpdate}) => {
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState("");
    const [price,setPrice] =  useState("");

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(name,quantity,price);
        if(!name || !quantity || !price){
            alert("Please fill all fields!");
            return;
        }

        const stock = {
            name: name,
            quantity : parseInt(quantity),
            price : parseFloat(price)
        }
        console.log(stock)
        console.log(dispatch(addStock(stock)));

        // reset form
        // setName("");
        // setQuantity("");
        // setPrice("");
    }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">
        {stockToUpdate ? "Update Stock" : "Add Stock"}
      </h2>

      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter stock name"
        />
      </div>

      {/* Quantity Field */}
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-sm font-medium mb-2">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter quantity"
        />
      </div>

      {/* Quantity Field */}
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-sm font-medium mb-2">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter quantity"
        />
      </div>

      {/* Price Field */}
      <div className="mb-6">
        <label htmlFor="price" className="block text-sm font-medium mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter price"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
       Add Stock
      </button>
    </form>
  );
};

export default StockInForm;
