import React, { useState } from "react";

const Modal = ({ isOpen, onClose, product, type, onConfirm }) => {
    if (!isOpen || !product) return null;

    const [quantity, setQuantity] = useState(1);
    const [details, setDetails] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (quantity <= 0) {
          alert("Quantity must be greater than zero.");
          return;
        }
    
        const orderData = {
          product: product.name,
          price: product.price,
          quantity: quantity,
          total: product.price * quantity,
          details: details,
        };
    
        onConfirm(orderData);
        onClose();
      };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {type === "buy" ? "Buy" : "Sell"} {product.name}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Quantity:</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Additional Details:</label>
            <textarea
              className="w-full p-2 border rounded-md"
              rows="3"
              placeholder="Enter any extra details..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 rounded-md ${
                type === "buy" ? "bg-green-500" : "bg-red-500"
              } text-white`}
            >
              Confirm {type}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
