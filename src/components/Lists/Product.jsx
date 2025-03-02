import React, { useEffect } from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/feature/productSlice";
import { Button, Label, Select, Table } from "flowbite-react";
import { Link } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  // console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(dispatch(fetchProducts()));
  }, [dispatch]);

  return (
    <div className="p-4">
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
