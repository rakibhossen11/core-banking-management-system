import { Label, TextInput, Button, List, Avatar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { fetchProducts } from "../../redux/feature/productSlice";
import { addToOrder } from "../../redux/feature/orderSlice";
import Order from "../Order/Order";

const SellForm = () => {
  const productDetail = useLoaderData();
  const { products, loading, error } = useSelector((state) => state.products);
  console.log(products);
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

  useEffect(() => {
    dispatch(fetchProducts());
    // console.log(dispatch(fetchProducts()));
  }, [dispatch]);

  const handleAddToOrder = (product) => {
    console.log(product);
    console.log(addToOrder(product))
    dispatch(addToOrder(product));
  };

  const handleSell = (e) => {
    e.preventDefault();
    console.log(uniqId, parseQuantity);
    const quantity = parseInt(parseQuantity);
    const sell = { uniqId, quantity };
    console.log(sell);
    dispatch(buyProduct(buy));
    // fetch("http://localhost:5000/products/sell", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(sell),
    // });
  };

  return (
    <div className="">
      {/* <form onSubmit={handleSell} className="space-y-6">
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
          <Button color="failure" type="submit">
            Sell This Product
          </Button>
        </div>
      </form> */}
      <div>
        <Order />
      </div>
      <div>
        {/* {products.map((p) => (
          // <SellProductCard onClick={() => handleAddToOrder(p)} product={p} key={p._id} />
          <div>
            <p>{name}</p>
            <p>{sellprice}</p>
            <Button onClick={() => handleAddToOrder(p)}>Add</Button>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SellForm;

const SellProductCard = ({ product }) => {
  const { name, sellprice } = product;
  return (
    <div>
      <p>{name}</p>
      <p>{sellprice}</p>
      <Button>Add</Button>
    </div>
  );
};

// const OrderList = () => {
  
//   return (
//     <List
//       unstyled
//       className="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
//     >
//       <List.Item className="pb-3 sm:pb-4">
//         <div className="flex items-center space-x-4 rtl:space-x-reverse">
//           <Avatar
//             img="/images/people/profile-picture-1.jpg"
//             alt="Neil image"
//             rounded
//             size="sm"
//           />
//           <div className="min-w-0 flex-1">
//             <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
//               Neil Sims
//             </p>
//             <p className="truncate text-sm text-gray-500 dark:text-gray-400">
//               email@flowbite.com
//             </p>
//           </div>
//           <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
//             $320
//           </div>
//         </div>
//       </List.Item>
//     </List>
//   );
// };
