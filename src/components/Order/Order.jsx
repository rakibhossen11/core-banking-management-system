import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/feature/productSlice";
import { submitOrder } from "../../redux/feature/orderSlice";
import { List, Avatar, Button } from "flowbite-react";

const Order = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductSelect = (product) => {
    console.log(product);
    setSelectedProducts((prev) => [...prev, product]);
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, item) => total + item.sellprice, 0);
  };

  const handleSubmitOrder = () => {
    const order = {
      products: selectedProducts.map((item) => ({
        productId: item._id,
        quantity: 1, // Assuming quantity is 1 for simplicity
      })),
    };
    console.log(order.products);
    dispatch(submitOrder(order.products));
  };

  return (
    <div className="flex">
      <div className="shadow-lg rounded-[6px] p-[16px]">
        <h1>All Products</h1>
        <List
          unstyled
          className="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
        >
          <h2>Selected Products</h2>
        <ul>
          {selectedProducts.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <h3>Total: ${calculateTotal()}</h3>
        <Button className="bg-[#5d87ff] py-[7px] px-[16px] font-[14px]" onClick={handleSubmitOrder}>Submit Order</Button>
          <List.Item className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {/* <Avatar
                img="/images/people/profile-picture-1.jpg"
                alt="Neil image"
                rounded
                size="sm"
              /> */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  {products.name}
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  {products.productId}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                
              </div>
            </div>
          </List.Item>
        </List>
      </div>
      {/*  */}
      <h1>Product Sell Page</h1>
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
      </div>
    </div>
  );
};

export default Order;
