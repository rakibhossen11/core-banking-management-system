import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "flowbite-react";

const ProductList = ({ product }) => {
  const {
    _id,
    supplier,
    stockQuantity,
    sellprice,
    purchasePrice,
    productId,
    name,
    unit,
    createdAt,
    category,
  } = product;
  // console.log(product);

  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {productId}
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{stockQuantity}</Table.Cell>
        <Table.Cell>{unit}</Table.Cell>
        <Table.Cell>{stockQuantity * purchasePrice}</Table.Cell>
        <Table.Cell>{stockQuantity * sellprice}</Table.Cell>
        <Table.Cell>
          <Link to={`/sell/${_id}`}>
            <Button>sell</Button>
          </Link>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};

export default ProductList;
