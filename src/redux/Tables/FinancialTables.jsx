import React, { useState } from "react";

const FinancialTables = () => {
  // data wise stock
  const [records, setRecords] = useState([
    {
      date: "2025-02-08",
      productName: "Product A",
      stockIn: 50,
      stockOut: 20,
      totalStock: 30,
      purchase: 1000,
      sales: 1500,
    },
    {
      date: "2025-02-09",
      productName: "Product B",
      stockIn: 30,
      stockOut: 10,
      totalStock: 50,
      purchase: 600,
      sales: 900,
    },
  ]);

  // buy records
  const [buyrecords, setbuyRecords] = useState([
    {
      date: "2025-02-08",
      productName: "Product A",
      stockIn: 50,
      totalStock: 30,
      purchase: 1000,
    },
    {
      date: "2025-02-09",
      productName: "Product B",
      stockIn: 30,
      totalStock: 50,
      purchase: 600,
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: "P001",
      name: "Product A",
      category: "Electronics",
      stockQuantity: 50,
      supplier: "Supplier X",
      purchasePrice: 20,
      sellingPrice: 30,
      unit: "pcs",
      salesCount: 10,
      stockIn: 20,
      stockOut: 5,
      notes: "Fast selling item",
    },
    {
      id: "P002",
      name: "Product B",
      category: "Clothing",
      stockQuantity: 30,
      supplier: "Supplier Y",
      purchasePrice: 15,
      sellingPrice: 25,
      unit: "pcs",
      salesCount: 5,
      stockIn: 15,
      stockOut: 3,
      notes: "New arrival",
    },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Stock Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              {[
                "Product ID",
                "Product Name",
                "Category",
                "Stock Quantity",
                "Supplier",
                "Purchase Price",
                "Selling Price",
                "Unit of Measure",
                "Sales Count",
                "Stock In",
                "Stock Out",
                "Remarks / Notes",
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
                <td className="px-4 py-2 border">{product.id}</td>
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border">{product.category}</td>
                <td className="px-4 py-2 border">{product.stockQuantity}</td>
                <td className="px-4 py-2 border">{product.supplier}</td>
                <td className="px-4 py-2 border">${product.purchasePrice}</td>
                <td className="px-4 py-2 border">${product.sellingPrice}</td>
                <td className="px-4 py-2 border">{product.unit}</td>
                <td className="px-4 py-2 border">{product.salesCount}</td>
                <td className="px-4 py-2 border">{product.stockIn}</td>
                <td className="px-4 py-2 border">{product.stockOut}</td>
                <td className="px-4 py-2 border">{product.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-2xl font-bold mb-4">Stock & Sales Record</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              {[
                "Date",
                "Product Name",
                "Stock In",
                "Stock Out",
                "Total Stock",
                "Purchase Amount",
                "Sales Amount",
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
            {records.map((record, index) => (
              <tr key={index} className="border hover:bg-gray-100">
                <td className="px-4 py-2 border">{record.date}</td>
                <td className="px-4 py-2 border">{record.productName}</td>
                <td className="px-4 py-2 border">{record.stockIn}</td>
                <td className="px-4 py-2 border">{record.stockOut}</td>
                <td className="px-4 py-2 border">{record.totalStock}</td>
                <td className="px-4 py-2 border">${record.purchase}</td>
                <td className="px-4 py-2 border">${record.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-2xl font-bold mb-4">Stock & Purchase Record</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              {["Date", "Product Name", "Stock In", "Total Stock", "Purchase Amount"].map((header, index) => (
                <th key={index} className="px-4 py-2 border text-left font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {buyrecords.map((record, index) => (
              <tr key={index} className="border hover:bg-gray-100">
                <td className="px-4 py-2 border">{record.date}</td>
                <td className="px-4 py-2 border">{record.productName}</td>
                <td className="px-4 py-2 border">{record.stockIn}</td>
                <td className="px-4 py-2 border">{record.totalStock}</td>
                <td className="px-4 py-2 border">${record.purchase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialTables;
