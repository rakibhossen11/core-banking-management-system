import React from 'react';
import { Modal, Label, TextInput, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Product = ({product}) => {
    return (
        <div>
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
                  {/* <button
                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                    onClick={() => openModal(product, "buy")}
                  >
                    Buy
                  </button> */}
                  <Button onClick={() => setOpenModal(true)}>Buy</Button>
                  <Link to={`/product&Details/${product._id}`}>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                      see
                    </button>
                  </Link>
                </td>
              </tr>
        </div>
    );
};

export default Product;