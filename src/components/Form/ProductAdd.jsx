import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/feature/productSlice";
import Input from "../ui/Input";

const ProductAdd = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [uniqId, setuniqId] = useState("");
  const [category, setCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [purchasePrice, setpurchasePrice] = useState("");
  const [sellprice, setsellPrice] = useState("");
  // const [unit, setUnit] = useState("");
  const products = useSelector((state) => state.product.products);
  console.log(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      uniqId,
      name,
      category,
      supplier,
      purchasePrice,
      sellprice,
      unit
    );
    if (
      !uniqId ||
      !name ||
      !category ||
      !supplier ||
      !purchasePrice ||
      !sellprice 
    ) {
      console.log(
        uniqId,
        name,
        category,
        supplier,
        purchasePrice,
        sellprice,
      );
      alert("Please fill all fields!");
      return;
    }

    const products = {
      uniqId: parseInt(uniqId),
      name: name,
      category: category,
      supplier: supplier,
      purchasePrice: parseFloat(purchasePrice),
      sellprice: parseFloat(sellprice),
      unit: parseInt(unit),
    };
    console.log(products);
    dispatch(addProduct(products));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Buy Product</h2>

      {/* Products select name */}
      <div className="mb-4">
        <Input
          label="Product Name"
          name="Product Name"
          value={name}
          type=""
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
        />
      </div>
      <Input
        label="Uniq Id"
        name="Uniq Id"
        value={uniqId}
        type="number"
        onChange={(e) => setuniqId(e.target.value)}
        placeholder="Set a Uniq Id"
      />
      <Input
        label="Supplier"
        name="Supplier"
        value={supplier}
        type=""
        onChange={(e) => setSupplier(e.target.value)}
        placeholder="Supplier "
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
        label="Category"
        name="Category"
        value={category}
        type=""
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Set a Category"
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

export default ProductAdd;

// this is a program that I can store 

// fetch("http://localhost:5000/products", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(products),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Coffee added successfully",
    //         icon: "success",
    //         confirmButtonText: "Cool",
    //       });
    //     }
    //   }
    // );

    // reset form
    // setName("");
    // setQuantity("");
    // setPrice("");