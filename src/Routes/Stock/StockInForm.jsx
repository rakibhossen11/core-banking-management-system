import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStock, updateStock } from "../../redux/feature/stockSlice";
import { addProduct } from "../../redux/feature/productSlice";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/lebal";
import products from "../../components/Products/product";
import InputSelect from "../../components/ui/InputSelect";

const StockInForm = ({ stockToUpdate }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [pid, setPid] = useState("");
  const [purchasePrice, setpurchasePrice] = useState("");
  const [sellprice, setsellPrice] = useState("");
  const [quantity, setQuantity] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,pid,purchasePrice,sellprice,quantity);
    if (!name || !pid || !purchasePrice ||!sellprice ||!quantity ) {
      alert("Please fill all fields!");
      return;
    }

    const products = {
      name: name,
      pid: parseInt(pid),
      purchasePrice: parseFloat(purchasePrice),
      sellprice: parseFloat(sellprice),
      quantity: parseFloat(quantity),
    };
    console.log(products);
    dispatch(addProduct(products));
    // console.log(dispatch(addStock(stock)));
    console.log(dispatch(addProduct(products)));

    // reset form
    // setName("");
    // setQuantity("");
    // setPrice("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">
        Buy Product
      </h2>
      <h1 className="text-2xl font-bold mb-6">form in under maintainance...</h1>

      {/* Products select name */}
      <div className="mb-4">
      <InputSelect
          label="Select a Product"
          id="product"
          options={products}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Input
        label="Product Id"
        name="Product Id"
        value={pid}
        type="number"
        onChange={(e) => setPid(e.target.value)}
        placeholder="Product Id"
      />
      <Input
        label="Purchase Price"
        name="Purchase Price"
        value={purchasePrice}
        type="number"
        onChange={(e) => setpurchasePrice(e.target.value)}
        placeholder="Purchase Price"
      />
      <Input
        label="Selling Price"
        name="Selling Price"
        value={sellprice}
        type="number"
        onChange={(e) => setsellPrice(e.target.value)}
        placeholder="Selling Price"
      />
      <Input
        label="Quantity"
        name="Quantity"
        value={quantity}
        type="number"
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
      />

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
