import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const navigate = useNavigate();
  

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Stock Management</h1>
      <p onClick={() => navigate("/addProduct")}>New Product add</p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              {[
                "Product ID",
                "Product Name",
                // "Category",
                "Stock Quantity",
                "Unit of Measure",
                "Supplier",
                "Purchase Price",
                "Selling Price",
                "Sales Count",
                "Stock In",
                "Stock Out",
                "Remarks / Notes",
                "Edit"
              ].map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border text-left font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border hover:bg-gray-100">
                <td className="px-4 py-2 border">{product.uniqId}</td>
                <td className="px-4 py-2 border">{product.name}</td>
                {/* <td className="px-4 py-2 border">{product.category}</td> */}
                <td className="px-4 py-2 border">{product.stockQuantity}</td>
                <td className="px-4 py-2 border">{product.unit}</td>
                <td className="px-4 py-2 border">{product.supplier}</td>
                <td className="px-4 py-2 border">${product.purchasePrice}</td>
                <td className="px-4 py-2 border">${product.sellprice}</td>
                <td className="px-4 py-2 border">{product.salesCount}</td>
                <td className="px-4 py-2 border">{product.stockIn}</td>
                <td className="px-4 py-2 border">{product.stockOut}</td>
                <td className="px-4 py-2 border">{product.remarks}</td>
                <td>
                    <div><p>Buy</p></div>
                    <div><p>Sell</p></div>
                    <Link to={`/product/${product.uniqId}`}><p>Update</p></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
