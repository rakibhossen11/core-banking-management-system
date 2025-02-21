import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { buyProduct } from "../../redux/feature/productSlice";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const ModalPro = () => {
  const productDetail = useLoaderData();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const {
    _id,
    unit,
    uniqId,
    supplier,
    sellprice,
    purchasePrice,
    name,
    category,
  } = productDetail;
  console.log(productDetail);

  const handleBuy = (e) => {
    e.preventDefault();
    console.log(uniqId,quantity);
    const buy = {uniqId,quantity};
    // dispatch(buyProduct(buy));
    fetch('http://localhost:5000/products/buy', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(buy),
      })
  };

  return (
    <form onSubmit={handleBuy} className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        You want to Buy Something
      </h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="You Choose" />
        </div>
        <TextInput
          id="email"
          placeholder="name@company.com"
          value={name}
          // onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="You Choose" />
        </div>
        <TextInput
          id="id"
          type="number"
          value={uniqId}
        //   onChange={(event) => setUniqId(event.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Purchece Quantity" />
        </div>
        <TextInput
          id="quantity"
          type="number"
          value={productDetail.quantity}
          onChange={(event) => setQuantity(event.target.value)}
          required
        />
      </div>
      <div className="w-full">
        <Button type="submit">Buy This Product</Button>
      </div>
    </form>
  );
};

export default ModalPro;
