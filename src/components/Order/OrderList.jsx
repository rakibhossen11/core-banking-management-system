import React, { useEffect } from "react";
import {
  deleteSelectedOrders,
  fetchOrders,
  selectAllOrders,
  toggleOrderSelection,
} from "../../redux/feature/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "flowbite-react";

const OrderList = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  const selectedOrders = useSelector((state) => state.orders.selectedOrders);
  console.log(selectedOrders);

  useEffect(() => {
    dispatch(fetchOrders());
    console.log(dispatch(fetchOrders()));
  }, [dispatch]);

  // Calculate the total amount of the selected products
  const totalAmount = orders.reduce(
    (total, product) => total + product.totalAmount,
    0
  );

  const handleSelectAll = (e) => {
    dispatch(selectAllOrders());
  };

  const handleSelectOrder = (orderId) => {
    dispatch(toggleOrderSelection(orderId));
  };

  const handleDeleteSelected = async () => {
    try {
      // Send a DELETE request to the backend
      const response = await fetch("http://localhost:5000/orders/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderIds: selectedOrders }),
      });

      if (response.ok) {
        // Update the Redux state if the backend deletion is successful
        dispatch(deleteSelectedOrders());
      } else {
        console.error("Failed to delete orders");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(totalAmount);

  return (
    <div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Order Id</Table.HeadCell>
            <Table.HeadCell>Bill</Table.HeadCell>
            {/* <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell> */}
          </Table.Head>
          <Table.Body className="divide-y">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedOrders.length === orders.length}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900">
                Select All
              </label>
            </div>
            {orders.map((p) => (
              <Table.Row
                key={p._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(p._id)}
                    onChange={() => handleSelectOrder(p._id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {p._id}
                </Table.Cell>
                <Table.Cell>{p.totalAmount}</Table.Cell>
                {/* <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell> */}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <p>Total Order: {totalAmount}</p>
        <button
          onClick={handleDeleteSelected}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete Selected
        </button>
      </div>
    </div>
  );
};

export default OrderList;
