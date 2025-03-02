import React from "react";
import { Table, Card, Dropdown } from "flowbite-react";
import { Link, resolvePath, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const productDetail = useLoaderData();
  const {
    _id,
    unit,
    uniqId,
    supplier,
    sellprice,
    purchasePrice,
    name,
    category,
    buyHistory,
    sellHistory,
  } = productDetail;
  console.log(productDetail);
  console.log(buyHistory);

  
  const handleDelete = (id) => {
    console.log(id);
    // alert function
    Swal.fire({
      title: `You Want Delete ${name} ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }) //after function to work and delete from database
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/products/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
        }
      });
  };

  return (
    <div>
      <Card className="max-w-sm">
        <div className="flex justify-end px-4 pt-4">
          {/* <Dropdown inline label="">
            <Dropdown.Item>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Edit
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Export Data
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Delete
              </a>
            </Dropdown.Item>
          </Dropdown> */}
        </div>
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {category}
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <Link
              href="#"
              to={`/product&update/${_id}`}
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Update
            </Link>
            <a
              href="#"
              onClick={() => handleDelete(_id)}
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Delete
            </a>
          </div>
        </div>
      </Card>

      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
              {[
                "Date",
                "Sell",
                "Buy",
                "Action",
                "Edit",
              ].map((header, index) => (
                <Table.HeadCell
                  key={index}
                >
                  {header}
                </Table.HeadCell>
              ))}
            </Table.Head>
          {buyHistory ? (
            <Table.Body className="divide-y">
              {buyHistory.map((buy, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {buy.date}
                  </Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>{buyHistory ? buy.quantity : 'NO BUY'}</Table.Cell>
                  <Table.Cell>{sellHistory ? sell.quantity : 'NO SELL'}</Table.Cell>
                  <Table.Cell>
                    <a
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          ) : (
            <p className="text-center mt-4]">NO BUT OR SELL</p>
          )}
        </Table>
      </div>
    </div>
  );
};

export default ProductDetails;
