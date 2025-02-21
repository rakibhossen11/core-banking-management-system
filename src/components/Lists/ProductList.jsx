import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  buyProduct,
  sellProduct,
} from "../../redux/feature/productSlice";
import { Link } from "react-router-dom";
import ModalPro from "../Modal/ModalPro";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import Product from "./Product";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  const handleShowDetails = (productId) => {
    // dispatch(fetchProductDetails(productId)); // Fetch product details
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleConfirm = (orderData) => {
    console.log("Order Confirmed:", orderData);
    alert(
      `✅ ${modalType === "buy" ? "Bought" : "Sold"} ${orderData.quantity} ${
        orderData.product
      }(s) for $${orderData.total}`
    );
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Stock Management</h1>
      <Link to={"/addProducts"}>
        <Button pill>New Product add</Button>
      </Link>
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
                "Action",
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
              <tr className="border hover:bg-gray-100">
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
                <td className="flex gap-2 mt-3">
                  <Link to={`/buy&sell/${product._id}`}>
                    <Button>Buy</Button>
                  </Link>
                  <Link to={`/product&Details/${product._id}`}>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                      see
                    </button>
                  </Link>
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
