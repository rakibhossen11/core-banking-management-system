import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const ProductUpdate = () => {
  const products = useLoaderData();
  // console.log(products);
  const { _id, unit, supplier, sellprice, purchasePrice, name, category } =
    products;
  // console.log(products);
  // Initialize form state with the product's current values
  const [updatedname, setUpdetedName] = useState("");
  const [updatedsupplier, setUpdetedSupplier] = useState("");
  const [updatedcategory, setUpdetedCategory] = useState("");
  // const [uniqId, setUpdetedUniqId] = useState("");
  const [updatedpurchasePrice, setUpdetedPurchasePrice] = useState("");
  const [updatedsellprice, setUpdetedSellPrice] = useState("");
  const [updatedstockQuantity, setUpdetedStockQuantity] = useState("");
  const [updatedunit, setUpdetedUnit] = useState("");

  // Update form state if the product changes

  // Handle form submission
  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(name,supplier,category,purchasePrice,sellprice,stockQuantity,unit);
    const newProduct = {
      name: updatedname || name,
      supplier: updatedsupplier || supplier,
      category: updatedcategory || category,
      purchasePrice:
        parseFloat(updatedpurchasePrice) || parseFloat(purchasePrice),
      sellprice: parseFloat(updatedsellprice) || parseFloat(sellprice),
      stockQuantity:
        parseFloat(updatedstockQuantity) || parseInt(stockQuantity),
      unit: updatedunit || unit,
    };
    console.log(newProduct);
    fetch(`http://localhost:5000/products/update/${products._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    // console.log(updateProduct({ id: uniqId, updata: newProduct }));
    // dispatch(updateProduct({ id: uniqId, updata: newProduct }));
  };

  return (
    <form onSubmit={handleUpdate} className="flex max-w-md flex-col gap-4">
      <h1>Update Your Product</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="" value="Product Name" />
        </div>
        <TextInput
          id=""
          type=""
          onChange={(e) => setUpdetedName(e.target.value)}
          placeholder={products.name}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="" value="Supplier Name" />
        </div>
        <TextInput
          id=""
          type=""
          onChange={(e) => setUpdetedSupplier(e.target.value)}
          placeholder={products.supplier}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="" value="Product Category" />
        </div>
        <TextInput
          id=""
          type=""
          onChange={(e) => setUpdetedCategory(e.target.value)}
          placeholder={products.category}
        />
      </div>
      {/* <div>
        <div className="mb-2 block">
          <Label htmlFor="" value="Product Id" />
        </div>
        <TextInput
          id=""
          type=""
          onChange={(e) => setuniqId(e.target.value)}
          placeholder={products.uniqId}
        />
      </div> */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="" value="Purchase Price" />
        </div>
        <TextInput
          id=""
          type=""
          onChange={(e) => setUpdetedPurchasePrice(e.target.value)}
          placeholder={products.purchasePrice}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="" value="Sell Price" />
        </div>
        <TextInput
          id=""
          type=""
          onChange={(e) => setUpdetedSellPrice(e.target.value)}
          placeholder={products.sellprice}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="" value="Stock Quantity" />
        </div>
        <TextInput
          id=""
          type=""
          onChange={(e) => setUpdetedStockQuantity(e.target.value)}
          placeholder={products.stockQuantity}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="" value="Unit" />
        </div>
        <TextInput
          id=""
          type=""
          onChange={(e) => setUpdetedUnit(e.target.value)}
          placeholder={products.unit}
        />
      </div>
      <Button type="submit">Update Product</Button>
    </form>
  );
};

export default ProductUpdate;
