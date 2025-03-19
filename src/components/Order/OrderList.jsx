import React, { useEffect } from "react";
import {
  deleteSelectedOrders,
  fetchOrders,
  selectAllOrders,
  toggleOrderSelection,
  updateOrderStatus,
} from "../../redux/feature/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { Select, Table } from "flowbite-react";

const OrderList = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  const selectedOrders = useSelector((state) => state.orders.selectedOrders);
//   console.log(selectedOrders);

  useEffect(() => {
    dispatch(fetchOrders());
    // console.log(dispatch(fetchOrders())); 
  }, [dispatch]);

  // Calculate the total amount of the selected products
  const totalAmount = orders.reduce(
    (total, product) => total + product.totalAmount,
    0
  );

  const totals = orders.reduce(
    (acc, order) => {
      if (order.status === "pending") acc.pending++;
      if (order.status === "confirmed") acc.confirmed++;
      if (order.status === "cancelled") acc.cancelled++;
      return acc;
    },
    { pending: 0, confirmed: 0, cancelled: 0 }
  );

//   console.log("Totals:", totals);

  const totalsAmaount = orders.reduce(
    (acc, order) => {
      if (order.status === "pending") acc.pendingAmount += order.sellPrice;
      if (order.status === "confirmed") acc.confirmedAmount += order.sellPrice;
      if (order.status === "cancelled") acc.cancelledAmount += order.sellPrice;
      return acc;
    },
    { pendingAmount: 0, confirmedAmount: 0, cancelledAmount: 0 }
  );
  
//   console.log("Totals Amaount:", totalsAmaount);

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

  const handleStatusChange = async (orderId, status) => {
    try {
      const response = await fetch(
        "http://localhost:5000/orders/update-status",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderId, status }),
        }
      );

      if (response.ok) {
        dispatch(updateOrderStatus({ orderId, status }));
      } else {
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFilterChange = (status) => {
    // console.log(status);
    dispatch(fetchOrders(status));
  };

  //   console.log(totalAmount);

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="w-[150px]">
          <Select onChange={(e) => handleFilterChange(e.target.value)}>
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Canceled</option>
          </Select>
        </div>
        <div>
          <h2>Order Summary</h2>
          <p>Total Pending Orders: {totals.pending}</p>
          <p>Total Confirmed Orders: {totals.confirmed}</p>
          <p>Total Cancelled Orders: {totals.cancelled}</p>
        </div>
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
                <Table.Cell>
                  {p.status === "confirmed" || p.status === "cancelled" ? (
                    <span>{p.status}</span> // Display the status if it's "confirmed" or "cancelled"
                  ) : (
                    <Select
                      value={p.status}
                      onChange={(e) =>
                        handleStatusChange(p._id, e.target.value)
                      }
                      className="ml-2 px-2 py-1 border rounded w-[120px]"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirm</option>
                      <option value="cancelled">Cancel</option>
                    </Select>
                  )}
                </Table.Cell>
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
