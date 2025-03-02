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
    <Table.Row>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {productId}
      </Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{stockQuantity}</Table.Cell>
      <Table.Cell>{unit}</Table.Cell>
      <Table.Cell>{supplier}</Table.Cell>
      <Table.Cell>
        <Link to={`/product&Details/${_id}`}>
          <Button>see</Button>
        </Link>
      </Table.Cell>
    </Table.Row>
  );
};

export default ProductList;
