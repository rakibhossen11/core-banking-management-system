import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/feature/productSlice";
import {
  addToOrder,
  removeProductFromOrder,
  submitOrder,
  updateProductQuantity,
} from "../../redux/feature/orderSlice";
import { List, Avatar, Button } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import Invoice from "../Invoice";

const Order = () => {
  const dispatch = useDispatch();
  const { products, loading, error, totalPrice } = useSelector(
    (state) => state.products
  );
  const { selectedProducts } = useSelector((state) => state.orders);
  // console.log(selectedProducts);
  const [count, setCount] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [tempCount, setTempCount] = useState(count);
  // console.log(count);

  // Calculate the total amount of the selected products
  const totalAmount = selectedProducts.reduce(
    (total, product) => total + product.sellprice * product.quantity,
    0
  );

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
    setTempCount(count); // Initialize tempCount with the current count
  };

  const handleChange = (e) => {
    setTempCount(Number(e.target.value)); // Update tempCount as the user types
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveCount();
    }
  };

  const handleBlur = () => {
    saveCount();
  };

  const saveCount = () => {
    if (!isNaN(tempCount) && tempCount >= 0) {
      setCount(tempCount); // Update the count with the new value
    }
    setIsEditing(false); // Exit edit mode
  };

  // const calculateTotal = () => {
  //   return item.reduce((total, item) => total + count * sellprice, 0);
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductSelect = (product) => {
    // console.log(product);
    dispatch(addToOrder(product));
  };

  // Handler to update the quantity of a product in the order
  const handleQuantityChange = (productId, quantity) => {
    dispatch(
      updateProductQuantity({ productId, quantity: parseInt(quantity) })
    );
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeProductFromOrder(productId));
  };

  const handleSubmitOrder = () => {
    // const date = moment().tz("Asia/Dhaka").format("YYYY-MM-DD"); //.format("YYYY-MM-DD HH:mm A"); with time
    const order = {
      // customerName,
      // customerAddress,
      // invoiceNumber,
      // date,
      products: selectedProducts.map((product) => ({
        id: product.productId,
        name: product.name,
        sellPrice: product.sellprice, // Assuming `price` is the sell price
        quantity: product.quantity,
      })),
      totalAmount,
      status: 'pending',
      // date: date, 
    };
    console.log(order);
    dispatch(submitOrder(order));
  };

  return (
    <div className="grid grid-cols-2">
      <div className="shadow-lg rounded-[6px] p-[16px]">
        <h1>All Products</h1>
        <List
          unstyled
          className="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
        >
          <h2>Selected Products</h2>
          <div>
            {selectedProducts.map((item, index) => (
              <div
                key={index}
                className="flex w-[337px] h-[50px] justify-between items-center bg-[#ffff rounded-lg"
              >
                <p className="font-popines text-[18px]">{item.name}</p>
                <p className="font-popines text-[14px]">{item.sellprice}</p>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      value={item.quantity}
                      className="w-[80px] h-[30px] text-[14px]"
                      onChange={(e) =>
                        handleQuantityChange(item.productId, e.target.value)
                      }
                      min="1"
                    />
                    {/* <div className="flex items-center justify-center space-x-4">
                    <FaMinus
                      onClick={decrement}
                      disabled={count === 0}
                      className={`${count === 0} w-[18] h-[18]`}
                    />
                    {isEditing ? (                                               
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                        onKeyDown={handleKeyDown}
                        onBlur={handleBlur}
                        autoFocus
                        className="w-20 text-2xl font-bold text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <span
                        onDoubleClick={handleDoubleClick}
                        className="text-[20px] font-popines cursor-pointer"
                      >
                        {count}
                      </span>
                    )}
                    <FaPlus onClick={increment} className="w-[18] h-[18]" />
                  </div> */}
                  </div>
                </div>
                <p className="font-popines text-[16px]">
                  {item.quantity * item.sellprice}
                </p>
                <button onClick={() => handleRemoveProduct(item.productId)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <h3>Total: ${totalAmount}</h3>
          <Button
            className="sticky bottom-0 left-0 w-full p-2"
            onClick={handleSubmitOrder}
          >
            Order Place
          </Button>
        </List>
      </div>
      {/*  */}
      <div className="shadow-lg rounded-[6px] p-[16px]">
        <h2>Products</h2>
        <List>
          {products.map((product) => (
            <List.Item key={product._id}>
              {product.name} - ${product.price}
              <Button onClick={() => handleProductSelect(product)}>
                Add to Cart
              </Button>
            </List.Item>
          ))}
        </List>
        <Invoice />
      </div>
    </div>
  );
};

export default Order;

const SelectedProductCard = ({ item }) => {
  const [count, setCount] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [tempCount, setTempCount] = useState(count);
  const { name, sellprice } = item;
  const { selectedProducts } = useSelector((state) => state.order);
  console.log(selectedProducts);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
    setTempCount(count); // Initialize tempCount with the current count
  };

  const handleChange = (e) => {
    setTempCount(Number(e.target.value)); // Update tempCount as the user types
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveCount();
    }
  };

  const handleBlur = () => {
    saveCount();
  };

  const saveCount = () => {
    if (!isNaN(tempCount) && tempCount >= 0) {
      setCount(tempCount); // Update the count with the new value
    }
    setIsEditing(false); // Exit edit mode
  };

  // const calculateTotal = () => {
  //   return item.reduce((total, item) => total + count * sellprice, 0);
  // };

  return (
    <div className="flex w-[337px] h-[50px] justify-between items-center bg-[#ffff rounded-lg">
      <p className="font-popines text-[18px]">{name}</p>
      <p className="font-popines text-[14px]">{sellprice}</p>
      <div className="">
        <div className="">
          <div className="flex items-center justify-center space-x-4">
            <FaMinus
              onClick={decrement}
              disabled={count === 0}
              className={`${count === 0} w-[18] h-[18]`}
            />
            {isEditing ? (
              <input
                type="number"
                value={tempCount}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                autoFocus
                className="w-20 text-2xl font-bold text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span
                onDoubleClick={handleDoubleClick}
                className="text-[20px] font-popines cursor-pointer"
              >
                {count}
              </span>
            )}
            <FaPlus onClick={increment} className="w-[18] h-[18]" />
          </div>
          {/* <div className="mt-4 text-center">
            <button
              onClick={reset}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Reset
            </button>
          </div> */}
        </div>
      </div>
      <p className="font-popines text-[16px]">{count * sellprice}</p>
      {/* <p className="font-popines text-[16px]">{calculateTotal()}</p> */}
    </div>
  );
};
