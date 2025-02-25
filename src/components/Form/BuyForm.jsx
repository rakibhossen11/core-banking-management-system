import { Label, TextInput, Button } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";

const BuyForm = () => {
  const productDetail = useLoaderData();
  const dispatch = useDispatch();
  const [parseQuantity, setParseQuantity] = useState(1);
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

  const handleBuy = (e) => {
    e.preventDefault();
    console.log(uniqId, parseQuantity);
    const quantity = parseInt(parseQuantity);
    const buy = { uniqId, quantity };
    console.log(buy);
    // dispatch(buyProduct(buy));
    fetch("http://localhost:5000/products/buy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buy),
    });
  };

  return (
    <div>
      <form onSubmit={handleBuy} className="space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          You want to Buy Something
        </h3>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="" value="You Chosse" />
          </div>
          <TextInput
            id=""
            value={name}
            // onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="" value="You Choose" />
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
            <Label htmlFor="" value="Purchece Quantity" />
          </div>
          <TextInput
            id="quantity"
            type="number"
            value={parseQuantity}
            onChange={(event) => setParseQuantity(event.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <Button type="submit">Buy This Product</Button>
        </div>
      </form>
    </div>
  );
};

export default BuyForm;
