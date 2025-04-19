import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/feature/productSlice";
import Input from "../ui/Input";
import { Button, Label, Select, TextInput } from "flowbite-react";
import Swal from "sweetalert2";

const ProductAdd = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [purchasePrice, setpurchasePrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState('');
  const [sellprice, setsellPrice] = useState("");
  const [unit, setUnit] = useState("");
  // const products = useSelector((state) => state.products);
  // console.log(products);

  const units = [
    { value: "PCS", label: "PCS" },
    { value: "KG", label: "KG" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(
    //   name,
    //   category,
    //   supplier,
    //   purchasePrice,
    //   sellprice,
    //   stockQuantity,
    //   unit
    // );
    if (
      !name ||
      !category ||
      !supplier ||
      !purchasePrice ||
      !sellprice ||
      !stockQuantity ||
      !unit
    ) {
      console.log(
        name,
        category,
        supplier,
        purchasePrice,
        sellprice,
        stockQuantity
      );
      alert("Please fill all fields!");
      return;
    }

    const products = {
      name: name,
      category: category,
      supplier: supplier,
      purchasePrice: parseFloat(purchasePrice),
      sellprice: parseFloat(sellprice),
      stockQuantity: parseInt(stockQuantity),
      unit: unit,
    };
    // console.log(products);
    // dispatch(addProduct(products));
    const result = await dispatch(addProduct(products));
    console.log(result);
    // if (result.payload && result.payload.acknowledged)
    if (result.payload || result.payload.acknowledged) {
      Swal.fire({
        title: "Success!",
        text: "Product added successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to add product.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    };
    setName('');
    setCategory('');
    setSupplier('');
    setpurchasePrice('');
    setsellPrice('');
    setStockQuantity('');
    setUnit('');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Buy Product</h2>

        {/* Products select name */}
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label value="Product Name" />
          </div>
          <TextInput
            name="Product Name"
            value={name}
            type=""
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
            required
          />
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label value="Supplier" />
          </div>
          <TextInput
            name="Supplier"
            value={supplier}
            type=""
            onChange={(e) => setSupplier(e.target.value)}
            placeholder="Supplier"
            required
          />
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label value="Stock" />
          </div>
          <TextInput
            name="Stock"
            value={stockQuantity}
            type=""
            onChange={(e) => setStockQuantity(e.target.value)}
            placeholder="Stock"
            required
          />
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label value="Purchase Price" />
          </div>
          <TextInput
            name="Purchase Price"
            value={purchasePrice}
            type="number"
            onChange={(e) => setpurchasePrice(e.target.value)}
            placeholder="Purchase Price"
            required
          />
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label value="Selling Price" />
          </div>
          <TextInput
            name="Selling Price"
            value={sellprice}
            type="number"
            onChange={(e) => setsellPrice(e.target.value)}
            placeholder="Purchase Price"
            required
          />
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label value="Set a Category" />
          </div>
          <TextInput
            name="Category"
            value={category}
            type=""
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Set a Category"
            required
          />
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="units" value="Select unit" />
          </div>
          <Select
            id="units"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            required
          >
            <option>Chosse a Unit</option>
            {units.map((unit) => (
              <option value={unit.value}>{unit.value}</option>
            ))}
          </Select>
        </div>

        <div className="max-w-md mt-2">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
