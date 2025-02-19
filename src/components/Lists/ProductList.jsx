import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { Button } from "flowbite-react";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalType, setModalType] = useState(null); // 'buy' or 'sell'
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product, type) => {
    setSelectedProduct(product);
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleConfirm = (orderData) => {
    console.log("Order Confirmed:", orderData);
    alert(
      `✅ ${modalType === "buy" ? "Bought" : "Sold"} ${orderData.quantity} ${orderData.product}(s) for $${orderData.total}`
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Stock Management</h1>
      <Link to={"/addProducts"}><Button pill>New Product add</Button></Link>
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
                "Edit",
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
                  <div>
                    <p>Buy</p>
                  </div>
                  <Link to={`/buy&sell/${product.uniqId}`}>
                    <p>Sell</p>
                  </Link>
                  {/* <Link to={`/product/${product.uniqId}`}><p>Update</p></Link> */}
                </td>
                <td className="flex gap-2 mt-3">
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                    onClick={() => openModal(product, "buy")}
                  >
                    Buy
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    onClick={() => openModal(product, "sell")}
                  >
                    Sell
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    onClick={() => openModal(product, "Delete")}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        type={modalType}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default ProductList;
