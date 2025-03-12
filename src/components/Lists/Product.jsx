import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/feature/productSlice";
import { Button, Label, Select, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { MdAnalytics } from "react-icons/md";

const Product = () => {
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
    <div className="p-4">
      <div className="flex gap-4">
        <div className="mt-[43px]">
          <div className="bg-[#FFE2E5] p-[20px] rounded-[16px]">
            <div className="bg-[#FA5A7D] rounded-full p-[8px] h-[32px] w-[32px] mb-[16px]">
              <MdAnalytics className="text-[#FFFFFF]" />
            </div>
            <p className="font-popines text-[24px]">{totalPurchasePrice}</p>
            <p className="font-popines text-[16px] text-[#425166]">
              Total Purchase
            </p>
            <p className="font-popines text-[12px] text-[#4079ED]">
              +8% from yesterday
            </p>
          </div>
        </div>
        <div className="mt-[43px]">
          <div className="bg-[#FFE2E5] p-[20px] rounded-[16px]">
            <div className="bg-[#FA5A7D] rounded-full p-[8px] h-[32px] w-[32px] mb-[16px]">
              <MdAnalytics className="text-[#FFFFFF]" />
            </div>
            <p className="font-popines text-[24px]">{totalSellPrice}</p>
            <p className="font-popines text-[16px] text-[#425166]">
              Estimated Sales
            </p>
            <p className="font-popines text-[12px] text-[#4079ED]">
              +8% from yesterday
            </p>
          </div>
        </div>
        <div className="mt-[43px]">
          <div className="bg-[#FFE2E5] p-[20px] rounded-[16px]">
            <div className="bg-[#FA5A7D] rounded-full p-[8px] h-[32px] w-[32px] mb-[16px]">
              <MdAnalytics className="text-[#FFFFFF]" />
            </div>
            <p className="font-popines text-[24px]">{totalSellPrice - totalPurchasePrice}</p>
            <p className="font-popines text-[16px] text-[#425166]">
            Estimated Reveneu
            </p>
            <p className="font-popines text-[12px] text-[#4079ED]">
              +8% from yesterday
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between m-2 items-center">
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label value="Sort By" />
          </div>
          <Select id="countries" required>
            <option>Product Id</option>
            <option>Date</option>
            <option>Name</option>
            <option>Stock</option>
            <option>Price</option>
          </Select>
        </div>

        <div className="">
          <Link to={`/addProducts`}>
            <Button>New Product</Button>
          </Link>
        </div>
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
            <ProductList key={index} product={product}></ProductList>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Product;

// http://localhost:5000/products/by-date?date=2025-02-28 this url for search product by the date
