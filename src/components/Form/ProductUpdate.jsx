import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateProduct } from "../../redux/feature/productSlice";
import Input from "../ui/Input";
import InputSelect from "../ui/InputSelect";

const ProductUpdate = () => {
  const { uniqId } = useParams(); // Get the productId from the URL
  const dispatch = useDispatch(); // for product update redux
  console.log(uniqId);
  //   get product form the redux store
  const product = useSelector((state) =>
    state.product.products.find((p) => p.uniqId === parseInt(uniqId))
  );
  console.log(product);
  // Initialize form state with the product's current values
  const [name, setName] = useState("");
  //   const [uniqId, setuniqId] = useState("");
  const [category, setCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [purchasePrice, setpurchasePrice] = useState("");
  const [sellprice, setsellPrice] = useState("");
  const [unit, setUnit] = useState("");

  // Update form state if the product changes

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      uniqId: parseInt(uniqId),
      name: name,
      category: category,
      supplier: supplier,
      purchasePrice: parseFloat(purchasePrice),
      sellprice: parseFloat(sellprice),
      unit: parseInt(unit),
    };
    console.log(newProduct);
    console.log(updateProduct({ id: uniqId, updata: newProduct }));
    dispatch(updateProduct({ id: uniqId, updata: newProduct }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Update Product</h2>

      {/* Products select name */}
      <div className="mb-4">
        <Input
          label="Product Name"
          name="Product Name"
          value={name}
          type=""
          onChange={(e) => setName(e.target.value)}
          placeholder={product.name}
        />
        {/* <InputSelect
          label="Select a Product"
          id="product"
          options={products}
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
      </div>
      <Input
        label="Uniq Id"
        name="Uniq Id"
        value={uniqId}
        type="number"
        onChange={(e) => setName(e.target.value)}
        placeholder={uniqId}
      />
      <Input
        label="Supplier"
        name="Supplier"
        value={supplier}
        type=""
        onChange={(e) => setSupplier(e.target.value)}
        placeholder={product.supplier}
      />
      <Input
        label="Purchase Price"
        name="Purchase Price"
        value={purchasePrice}
        type="number"
        onChange={(e) => setpurchasePrice(e.target.value)}
        placeholder={product.purchasePrice}
      />
      <Input
        label="Selling Price"
        name="Selling Price"
        value={sellprice}
        type="number"
        onChange={(e) => setsellPrice(e.target.value)}
        placeholder={product.sellprice}
      />
      <Input
        label="Category"
        name="Category"
        value={category}
        type=""
        onChange={(e) => setCategory(e.target.value)}
        placeholder={product.category}
      />
      {/* <InputSelect
          label="Select a Unit"
          id="Unit"
        //   options={products}
        //   value={name}
        //   onChange={(e) => setUnit(e.target.value)}
        /> */}
      {/* <Input
        label="Unit"
        name="Unit"
        value={unit}
        type="number"
        onChange={(e) => setUnit(e.target.value)}
        placeholder="Unit"
      /> */}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        Update Product
      </button>
    </form>
  );
};

export default ProductUpdate;
