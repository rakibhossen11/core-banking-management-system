import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/feature/productSlice";
import { MdAnalytics } from "react-icons/md";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";

const Stocks = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  // console.log(products);

  // Calculate total purchase price
  const totalPurchasePrice = products.reduce((total, product) => {
    return total + (product.purchasePrice * product.stockQuantity || 0); // Ensure purchasePrice is a number
  }, 0);
  console.log(totalPurchasePrice);

  // Calculate total purchase price
  const totalSellPrice = products.reduce((total, product) => {
    return total + (product.sellprice * product.stockQuantity || 0); // Ensure purchasePrice is a number
  }, 0);
  console.log(totalSellPrice);

  useEffect(() => {
    dispatch(fetchProducts());
    // console.log(dispatch(fetchProducts()));
  }, [dispatch]);
  return (
    <div>
      <div className="flex gap-4 p-[20px]">
        <FeatureCard
          Icon={MdAnalytics}
          Text1={totalPurchasePrice}
          Text2={"Total Purchase"}
          Text3={"+8% from yesterday"}
        />
        <FeatureCard
          Icon={MdAnalytics}
          Text1={totalSellPrice}
          Text2={"Total Sell"}
          Text3={"+8% from yesterday"}
        />
        <FeatureCard
          Icon={MdAnalytics}
          Text1={totalSellPrice - totalPurchasePrice}
          Text2={"Estimated Reveneu"}
          Text3={"+8% from yesterday"}
        />
      </div>
      <Table>
        <Table.Head>
          {[
            "Product ID",
            "Product Name",
            // "Category",
            "Stock Quantity",
            "Unit of Measure",
            "Supplier",
            // "Purchase Price",
            // "Selling Price",
            // "Sales Count",
            // "Stock In",
            // "Stock Out",
            // "Remarks / Notes",
            "Action",
          ].map((header, index) => (
            <Table.HeadCell key={index}>{header}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product, index) => (
            <Table.Row key={index}>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.productId}
              </Table.Cell>
              <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>{product.stockQuantity}</Table.Cell>
              <Table.Cell>{product.unit}</Table.Cell>
              <Table.Cell>
                {product.stockQuantity * product.purchasePrice}
              </Table.Cell>
              <Table.Cell>
                {product.stockQuantity * product.sellprice}
              </Table.Cell>
              <Table.Cell>
                <Link to={`/product&Details/${product._id}`}>
                  <Button>see</Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Stocks;

const FeatureCard = ({ Icon, Text1, Text2, Text3 }) => {
  return (
    <div className="mt-[43px]">
      <div className="bg-[#FFE2E5] p-[20px] rounded-[16px]">
        <div className="bg-[#FA5A7D] rounded-full p-[8px] h-[32px] w-[32px] mb-[16px]">
          <Icon className="text-[#FFFFFF]" />
        </div>
        <p className="font-popines text-[24px]">{Text1}</p>
        <p className="font-popines text-[16px] text-[#425166]">{Text2}</p>
        <p className="font-popines text-[12px] text-[#4079ED]">{Text3}</p>
      </div>
    </div>
  );
};
